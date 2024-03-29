import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Intro } from '../cards/Intro';
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
import { TimeLineOrdinary } from '../timeline/TimeLineOrdinary';

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
            <Row className="g-0 d-none d-md-block">
                <CardCol><TimeLine></TimeLine></CardCol>
            </Row>
            <Row className="g-0 d-sm-block d-md-none">
                <CardCol><TimeLineOrdinary></TimeLineOrdinary></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol sm='6'><Education></Education></CardCol>
                <CardCol sm='6'><Strengths></Strengths></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol sm='6'><GitHubLinks></GitHubLinks></CardCol>
                <CardCol sm='6'><Interests></Interests></CardCol>
            </Row>
            <Row className="g-0" >
                <CardCol><AdditionalPerks></AdditionalPerks></CardCol>
            </Row>
        </div>
    );
}
