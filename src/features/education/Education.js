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
import styled from 'styled-components';

const TextParagraph = styled.span`
    font-size: xx-large;
    line-height: normal;
    width: 100%;
`

export const Education = () => {

    return (
        <MainCard style={{ height: '100%' }}>
            <MainCardBody>
                <MainCardTitle >
                    <TitleText>&nbsp;Education & Credentials</TitleText>
                </MainCardTitle>
                <TextParagraph >
                    Bachelors in Computer Science, 2008, <br/> Sri Revanasiddeshwara Institute Of Technology, VTU university - Bangalore
                </TextParagraph>
                <br/>
                <br/>
                <TextParagraph>
                    Salesforce.com Certified Administrator
                </TextParagraph>
                <br/>
                <br/>
            </MainCardBody>
        </MainCard>
    );
}
