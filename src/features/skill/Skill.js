import React, { useEffect, useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Container, Card, Button, Col } from 'react-bootstrap';
import { CardParagraph, CardTopHeaderImage, MainCard, MainCardBody, MainCardText, MainCardTitle, PageContainer, TitleImage, TitleText } from '../../common/CommonControls';
import { Galleria } from 'primereact/galleria';
import { Image } from 'primereact/image';
import { useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { setParentPathAsync, setPathAsync } from '../path/PathSlice';
import { capitalizeFirstLetter } from '../../common/Utils';

export const Skill = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { path, source } = useSelector((state) => state.pathSlice || {})
    const pathArray = path && path.split('/');
    pathArray && pathArray.shift();
    
    const items = pathArray.map(item => ({ label: capitalizeFirstLetter(item) }));
    const homeTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => {
                dispatch(setParentPathAsync());
                if (source != 'default') navigate(-1);
                else navigate('/home');
            }}>
                {item.label}
            </a>
        );
    };

    const home = { label: 'Home', url: '', template: homeTemplate }
    const { skillname } = useParams();

    return (
        <Container fluid style={{ padding: '5px' }}>
            <BreadCrumb model={items} home={home} style={{ background: '#b2eb81' }}/>
            <MainCard style={{ marginTop: '10px' }}>
                <MainCardBody>
                    {skillname === 'agilepoint' && <AgilePointSkill />}
                </MainCardBody>
            </MainCard>
        </Container>
    )
}

const itemTemplate = (item) => {
    return <img src={item.itemImageSrc} alt={item.alt} style={{ width: '100%', display: 'block' }} />;
}

const thumbnailTemplate = (item) => {
    return <img src={item.thumbnailImageSrc} alt={item.alt} style={{ display: 'block', width: '200px' }} />;
}

const responsiveOptions = [
    {
        breakpoint: '991px',
        numVisible: 4
    },
    {
        breakpoint: '767px',
        numVisible: 3
    },
    {
        breakpoint: '575px',
        numVisible: 1
    }
];

const caption = (item) => {
    return (
        <React.Fragment>
            <div className="text-xl font-bold text-center">{item.alt}</div>
        </React.Fragment>
    );
}

const AgilePointSkill = () => {
    return (
        <div>
            <MainCardText style={{ textAlign: 'left' }}>
                <p>Advanced skills on AgilePoint enables me to design and deliver efficient business process by following best practices for BPM development.</p>
                <p>My hands-on experience:</p>
                <p><b>Process Design:</b> Support out-of-the-box shapes. Also extend by adding Web Service/REST shape to integrate with other systems.</p>
                <p><b>Forms Design:</b> Support all complex controls such as subforms, lookups with SQL, REST etc. Extend/Customize forms by using eForm Helper Javascript methods offered by AgilePoint. Stylize UI with CSS.</p>
                <p><b>Page Builder:</b> Build your app specific page with AgilePoint's interactive low-code/no-code page builder framework. The page builder lets integrate different AgilePoint components and helps to standup a quick html page around your workflow.</p>
                <p><b>Custom Portal Development:</b> Develop custom web-app around the process and forms to offer personalized feel and user-experience.</p>
                <p><b>Integrate With External Systems:</b> Bring together other systems by conveniently building Web/REST services, SQL to reference/update data from/into your other software/data platforms.</p>
                <p><b>Web Hooks:</b> Make use of AgilePoint's webhooks to extract your workflow data for reporting and data-analytics needs.</p>
                <p><b>Connectors:</b> Similar to Webhooks, AgilePoint offers connector type extension framework to subscribe to workflow events and perform business logic under the hood.</p>
            </MainCardText>
        </div>
    );
}