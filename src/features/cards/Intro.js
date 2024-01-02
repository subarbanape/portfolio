import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col, Image, Row } from 'react-bootstrap';
import { CardBottomImage, CardCol, MainCard, MainCardBody, MainCardText, MainCardTitle } from '../../common/CommonControls';
import { BiLogoGmail } from 'react-icons/bi';

export const Intro = React.memo(() => {
    return (
        <MainCard style={{ height: '100%' }}>
            <MainCardBody>
                <Row style={{ paddingTop: '10px' }}>
                    <Col >
                        <Image style={{ width: '230px', paddingLeft: '10px', paddingRight: '10px' }} src='vin.png'></Image>
                    </Col>
                </Row>
                <Row style={{ paddingTop: '10px' }}>
                    <Col style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <MainCardText >
                            <p>
                                Hello! I am a passionate Software Engineer doing my part to make Earth a better place. As Technology is evolving, we are breaking barriers everytime.
                                <br />
                                With my love for Technology, I build products that will make positive impact on people lives and environment.
                            </p>
                            <p style={{margin: 0}}><a href="mailto:dvinun@gmail.com" style={{color: 'white', fontWeight: 'normal'}}><Image src='mailbox.svg'/>&nbsp;dvinun@gmail.com</a></p>
                        </MainCardText>
                    </Col>
                </Row>
                {/* <Row><Col><Image style={{ width: '60px', padding: '5px', paddingBottom: '10px' }} src='mailbox.svg'></Image><a href="mailto:realfarmdevs@gmail.com">   realfarmdevs@gmail.com</a></Col></Row> */}
            </MainCardBody>
        </MainCard>
    );
});
