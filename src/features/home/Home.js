import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Intro } from '../cards/Intro';
import { ProjectsSpotlight } from '../cards/ProjectsSpotlight';
import { SkillsSpotlight } from '../cards/Highlights';
import { SkillsCenter } from '../cards/SkillsCenter';
import { ProjectsCenter } from '../cards/ProjectsCenter';
import { CardCol } from '../../common/CommonControls';
import { TimeLine } from '../timeline/TimeLine';
import { Education } from '../education/Education';
import { Strengths } from '../strengths/Strengths';
import { Interests } from '../interests/Interests';
import { AdditionalPerks } from '../additional-perks/AdditionalPerks';
import { GitHubLinks } from '../github-links/GitHubLinks';

export const Home = () => {

    return (
        <div >
            <Row className="g-0">
                <CardCol lg='3' md='4'><Intro></Intro></CardCol>
                <CardCol ><SkillsSpotlight></SkillsSpotlight></CardCol>
            </Row>
            <Row className="g-0">
                <CardCol><SkillsCenter></SkillsCenter></CardCol>
            </Row>
            <Row className="g-0">
                <CardCol><ProjectsCenter></ProjectsCenter></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol><TimeLine></TimeLine></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol><Education></Education></CardCol>
                <CardCol><Strengths></Strengths></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol><GitHubLinks></GitHubLinks></CardCol>
                <CardCol><Interests></Interests></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol><AdditionalPerks></AdditionalPerks></CardCol>
            </Row>
        </div>
    );
}
