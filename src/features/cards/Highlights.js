import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { CardBottomImage, CardCol, CardParagraph, CardTopHeaderImage, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';

export const SkillsSpotlight = React.memo(() => {
    return (
            <MainCard style={{ height: '100%' }}>
                <MainCardBody>
                    <MainCardTitle >
                        {/* <TitleImage src='iso-grass.svg'/>   */}
                        <TitleText>&nbsp;Highlights</TitleText> 
                    </MainCardTitle>
                    <MainCardText>
                        <CardParagraph> Fullstack Software Engineer with 14+ years of industry experience. </CardParagraph>
                        <br/>
                        <CardParagraph> I work as a Senior Developer Enterprise Solutions at GVTC, Texas. Previously, I worked as a Senior Solution Consultant for AgilePoint, for 6 years.</CardParagraph>
                        <br/>
                        <CardParagraph> I build Software Applications from start to finish. Work with users and analysts to gather requirements, establish design of backend systems, implement key components for both frontend and backend, and work with my team to implement features by breaking into individual modules.</CardParagraph>
                        <br/>
                        <CardParagraph> I recently authored the design and development of a responsive Employee Onboarding application for GVTC's HR onboarding needs. We used React JS for the portal, AgilePoint for forms and workflows, .Net Core and REST API for backend. Also implemented a bot that helps users to handle common tasks which uses Microsoft's ML.Net and Stanford's NLP engine.</CardParagraph>
                        <br/>
                        <CardParagraph> My core skills, in no particular order, are AgilePont, .Net Core, ReactJS, Rest API, SQL, Object Oriented Design, Event Driven approach (Rabbit MQ).</CardParagraph>
                    </MainCardText>
                </MainCardBody>
            </MainCard>
    );
});
