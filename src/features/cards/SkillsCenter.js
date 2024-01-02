import React from 'react';
import { Container, Card, Button, Col, Image, Row } from 'react-bootstrap';
import { Divider } from 'primereact/divider';
import { CardCol, CardParagraph, CardTopHeaderImage, ClickableLabelIcon, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText, } from '../../common/CommonControls';
import { useNavigate, } from 'react-router-dom'
import { getSkillChip, BeginnerChip, ProficientChip, RookieChip, UpcomingChip, IntermediateChip } from '../../common/SkillControls';
import { useDispatch } from 'react-redux';

export const SkillsCenter = React.memo(() => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const devPlatforms = ['agilepoint', 'sharepoint-online', 'salesforce'].map(item => getSkillChip(item, dispatch));
    
    // soon: 'typescript', 'rust', 'solidity'
    const programmingLanguages = ['csharp', 'javascript', 'html', 'css', 'motoko', 'json', 'xml', 'sql', 'python'].map(item => getSkillChip(item, dispatch));
    
    // soon: 'nextjs', 'redis'
    const devFrameworks = ['reactjs', 'redux', 'jquery', 'netcore', 'rest', 'wcf', 'rabbit-mq', 'azure-devops', 'git', 'iis', 'machine-learning', 'docker', 'azure', 'ms-bot-framework', 'google-firebase'].map(item => getSkillChip(item, dispatch));
    
    // soon: 'tailwind'
    const devToolkits = ['mass-transit', 'automapper', 'nlog', 'bootstrap', 'prime-react', 'styled-components', 'entity-core', 'design-patterns'].map(item => getSkillChip(item, dispatch));

    // soon: 'tailwind'
    const apiToolKits = ['agilepoint', 'docusign', 'calix', 'nisc-ivue', 'heat', 'hubspot', 'typeform', 'box', 'google-drive', 'one-drive'].map(item => getSkillChip(item, dispatch));

    return (
        <MainCard>
            <MainCardBody>
                <MainCardTitle >
                    <TitleText>&nbsp;Skills</TitleText>
                </MainCardTitle>
                <MainCardText>
                    <CardParagraph>My key skills, but not limited to.</CardParagraph>
                    <Row style={{ textAlign: 'right', paddingRight: '10px' }}>
                        <Col  style={{ padding: 0 }}><ProficientChip label='Proficient'/></Col>
                        <Col  sm='auto' style={{ padding: 0 }}><IntermediateChip label='Intermediate' /></Col>
                        <Col  sm='auto' style={{ padding: 0 }}><BeginnerChip label='Basic'  /></Col>
                        <Col  sm='auto' style={{ padding: 0 }}><RookieChip label='Elementary'  /></Col>
                    </Row>
                    <Divider align="left" >
                        <span className="p-tag">Development Platforms</span>
                    </Divider>
                    <Container fluid>{devPlatforms}</Container>
                    <Divider align="left">
                        <span className="p-tag">Programming Languages</span>
                    </Divider>
                    <Container fluid>{programmingLanguages}</Container>
                    <Divider align="left">
                        <span className="p-tag">Development Frameworks</span>
                    </Divider>
                    <Container fluid>{devFrameworks}</Container>
                    <Divider align="left">
                        <span className="p-tag">Development Toolkits</span>
                    </Divider>
                    <Container fluid style={{ paddingBottom: '25px' }}>{devToolkits}</Container>
                    <Divider align="left">
                        <span className="p-tag">Worked with APIs</span>
                    </Divider>
                    <Container fluid style={{ paddingBottom: '25px' }}>{apiToolKits}</Container>
                </MainCardText>
            </MainCardBody>
        </MainCard>
    );
});
