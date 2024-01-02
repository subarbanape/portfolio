import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';
import React  from 'react';
import { Chip } from 'primereact/chip';
import {PiCertificateFill, PiCursorClickFill} from 'react-icons/pi'
import { setPathAsync } from '../features/path/PathSlice';

export const ProficientChip = styled(Chip)`
    background-color: var(--color-green) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const IntermediateChip = styled(Chip)`
    background-color: var(--color-avocado) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const BeginnerChip = styled(Chip)`
    background-color: var(--color-light-red) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const UpcomingChip = styled(Chip)`
    background-color: var(--color-light-grey) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const RookieChip = styled(Chip)`
    background-color: var(--color-pale-red) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const TechStackChip = styled(Chip)`
    margin: 3px;
    border-radius: 3px;
    font-size: 28px;
`

export const ClickableLabelIcon = ({label, isCertified}) => {
    return <Row style={{marginTop: '4px', marginBottom: '4px'}}>
        <Col xs='auto' style={{paddingRight: '5px'}}>{<PiCursorClickFill size='18'/>}</Col>
        <Col xs='auto' style={{paddingLeft: 0}}>{label} {isCertified && <PiCertificateFill size='20'/>}</Col>
    </Row>;
}

export const getSkillChip = (skill, dispatch) => 
{
    switch(skill.toLowerCase()) {
        case 'agilepoint' : return <ProficientChip icon={<label style={{marginTop: '4px', marginBottom: '4px', display: 'flex'}}><ClickableLabelIcon/> AgilePoint BPM</label>} onClick={() => {dispatch(setPathAsync({path: '/skill/agilepoint'}))}}/>;
        case 'sharepoint-online' : return <IntermediateChip label="SharePoint Online" />;
        case 'salesforce' : return <BeginnerChip tooltip='Salesforce Admin Certified' icon={<label style={{marginTop: '8px', marginBottom: '8px'}}>Salesforce Admin  <PiCertificateFill size='20' /></label>}/>
        case 'csharp' : return <ProficientChip label="C-Sharp (C#)" />
        case 'javascript' : return <ProficientChip label="Javascript" />
        case 'html' : return <ProficientChip label="HTML" />
        case 'css' : return <ProficientChip label="CSS" />
        case 'motoko' : return <ProficientChip label="Motoko (Blockchain Programming)" />
        case 'sql' : return <IntermediateChip label="SQL" />
        case 'python' : return <BeginnerChip label="Python" />
        case 'reactjs' : return <ProficientChip label="React JS" />
        case 'redux' : return <ProficientChip label="Redux Tool Kit" />
        case 'netcore' : return <ProficientChip label=".Net Core" />
        case 'rest' : return <ProficientChip label="REST API" />
        case 'rabbit-mq' : return <ProficientChip label="Rabbit MQ" />
        case 'azure-devops' : return <ProficientChip label="Azure Devops" />
        case 'azure-bot-framework' : return <RookieChip label="Azure Bot Framework" />
        case 'azure' : return  <RookieChip label="Microsoft Azure" />
        case 'docker' : return <BeginnerChip label="Docker" />
        case 'microsoft-azure' : return <RookieChip label="Microsoft Azure" />
        case 'mass-transit' : return <ProficientChip label="Mass Transit" />
        case 'nlog' : return <ProficientChip label="NLog" />
        case 'bootstrap' : return <ProficientChip label="Bootstrap (UI Kit)" />
        case 'prime-react' : return <ProficientChip label="Prime React (UI Kit)" />
        case 'styled-components' : return <ProficientChip label="Styled Components (UI Kit)" />
        case 'entity-core' : return <ProficientChip label=".Net Entity Core" />
        case 'aspdotnet' : return <ProficientChip label="ASP.Net" />
        case 'telerik' : return <ProficientChip label="Telerik AJAX UI Kit" />
        case 'windows-auth' : return <ProficientChip label="Windows Authentication" />
        case 'microstrategy' : return <ProficientChip label="Microstrategy Integration API" />
        case 'docusign' : return <ProficientChip label="DocuSign Integration API" />
        case 'wcf' : return <ProficientChip label="WCF Service" />
        case 'heat' : return <ProficientChip label="Ivanti HEAT Ticket Management API" />
        case 'calix' : return <ProficientChip label="Calix Cloud API" />
        case 'ivue' : return <ProficientChip label="NISC IVue API" />
        case 'aspose' : return <IntermediateChip label="Aspose File Transform Library" />
        case 'vc-plusplus' : return <ProficientChip label="Visual C++" />
        case 'c-plusplus' : return <ProficientChip label="C++" />
        case 'win-form' : return <ProficientChip label="Winforms" />
        case 'color-algorithms' : return <ProficientChip label="Color Algorithms" />
        case 'tailwind' : return <UpcomingChip label="Tailwind CSS" />
        case 'rust' : return <UpcomingChip label="Rust" />
        case 'redis' : return <UpcomingChip label="Redis" />
        case 'nextjs' : return <UpcomingChip label="Next JS" />
        case 'typescript' : return <UpcomingChip label="Typescript" />
        case 'solidity' : return <UpcomingChip label="Solidity" />
        case 'nlp' : return <IntermediateChip label="NLP" />
        case 'hubspot' : return <IntermediateChip label="Hubspot API" />
        case 'machine-learning' : return <IntermediateChip label="Machine Learning (ML.Net)" />
        case 'typeform' : return <IntermediateChip label="Typeform Integration API" />
        case 'git' : return <ProficientChip label="Git" />
        case 'jquery' : return <ProficientChip label="JQuery" />
        case 'iis' : return <ProficientChip label="IIS Hosting" />
        case 'automapper' : return <ProficientChip label="Auto-Mapper" />
        case 'json' : return <ProficientChip label="JSON" />
        case 'xml' : return <ProficientChip label="XML" />
        case 'ms-bot-framework' : return <RookieChip label="Microsoft Bot Framework" />
        case 'box' : return <IntermediateChip label="Box API" />
        case 'google-drive' : return <IntermediateChip label="Google Drive API" />
        case 'one-drive' : return <IntermediateChip label="One Drive API" />
        case 'google-firebase' : return <RookieChip label="Google Firebase" />
        case 'design-patterns' : return <ProficientChip label="Design Patterns" />
        default: return null;
    }
}