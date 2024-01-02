import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { CardCol, CardParagraph, CardTopHeaderImage, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';
import { ProjectCard } from '../../common/ProjectCard';
import { ProjectsData } from '../../data/ProjectsData';

export const ProjectsSpotlight = React.memo(() => {
    return (
        <MainCard>
            <MainCardBody>
                <MainCardTitle>
                    <TitleText>&nbsp;Projects Spotlight</TitleText> 
                </MainCardTitle>
                <MainCardText>
                    <CardParagraph>Developed frontend for blockchain based decentralized storage app <a href=''>Moxy</a> using React JS on Internet Computer Blockchain. This was for a bounty competition hosted by Dfinity. A non-for-profit blockchain company. We secured second place.</CardParagraph>
                    <br />
                    <CardParagraph>Designed and developed "NFT Staking Platform" application for <a href=''>PXY Project</a> using React JS frontend, Motoko backend, powered by Internet Computer Blockchain. NFT holders get to earn rewards for staking their Pxy NFTs.</CardParagraph>
                    <br />
                    <CardParagraph>Designed and developed <a href=''>Employee Onboarding Application</a> using React JS for frontend portal, .Net Core for REST backend, powered by AgilePoint workflow and forms for rapid business process automation. Also, created an NLP based bot aggregating all the EOB data and training the bot with common questions.</CardParagraph>
                    <br />
                    <CardParagraph>Engineered and developed <a href=''>"DMCA (Digital Millenia Copyright Act) Evidence Engine"</a> to extract network and billing evidences of copyright violations of retail internet users and deliver the evidences to billing system for notifying the customers. We used <b>.Net Core, REST</b> with <b>Rabbit MQ</b> which enabled us to delivering events to respective consumers who are destinated to do their assigned responsibilities independently and deliver the results to corresponding systems. In this realm of microservice architecture, the system will be more maintainable and extendible.</CardParagraph>                
                    </MainCardText>
            </MainCardBody>
        </MainCard>
    );
});
