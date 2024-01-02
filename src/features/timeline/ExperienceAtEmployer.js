import React, { useEffect, useState } from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';
import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { CardTopHeaderImage, HighlightsChip, MainCard, MainCardBody, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { setParentPathAsync, setPathAsync } from '../path/PathSlice';
import { getBreadCrumbDisplayName } from '../../common/Utils';
import styled from 'styled-components';
import { ExperienceData } from '../../data/ExperienceData';
import { IoIosArrowDropright } from "react-icons/io";

export const ExperienceAtEmployer = (item) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { path, source } = useSelector((state) => state.pathSlice || {})
    const { employerKey } = useSelector((state) => state.timeLineSlice || {})
    const employer = ExperienceData.get(employerKey);

    const timelineTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => {
                dispatch(setParentPathAsync());
                if (source != 'default') navigate(-1);
                else navigate('/home');
            }}>
                {getBreadCrumbDisplayName(item.label)}
            </a>
        );
    };

    let items = [{ label: 'timeline', url: '', template: timelineTemplate }];
    items = [...items, { label: ((employer && employer.employer) || 'na') }]

    const homeTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => { dispatch(setPathAsync({ path: '/home' })); }}>
                {item.label}
            </a>
        );
    };

    const home = { label: 'Home', url: '', template: homeTemplate }
    const details = employer && employer.details;
    const projects = employer && employer.projects;

    return (
        <Container fluid style={{ padding: '5px' }}>
            <BreadCrumb model={items} home={home} style={{ background: '#b2eb81' }} />
            <MainCard style={{ marginTop: '10px' }}>
                <MainCardBody>
                    {getDisplayCard(details, projects)}
                </MainCardBody>
            </MainCard>
        </Container>
    )
}

const TextParagraph = styled.span`
    font-size: xx-large;
    margin: 0;
    padding: 0;
    line-height: normal;
`

const getDisplayCard = (details, projects) => {
    if (details) {
        return (<Container fluid style={{ textAlign: 'left' }}>
            {projects && (<><h1>
                <u>Projects</u>
            </h1>
                <p>{projects.map(item => { return <HighlightsChip label={item}></HighlightsChip> })}</p></>)
            }
            <h1>
                <u>Job Roles & Responsibilities</u>
            </h1>
            {details.map(item => { return <p><IoIosArrowDropright size='1.5rem' style={{ marginTop: '-5px', padding: 0 }} />&nbsp;&nbsp;<TextParagraph>{item}</TextParagraph></p> })}
        </Container>
        );
    }
    else return <h1>Coming Soon</h1>
}