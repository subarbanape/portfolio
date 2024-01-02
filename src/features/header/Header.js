import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { BiLogoGmail, BiLogoMediumSquare, BiLogoLinkedinSquare, BiSolidFilePdf } from 'react-icons/bi'

const TaglineCol = styled(Col)`
    text-align: right;
    font-size: x-large;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100px;
    padding-right: 5px;
`

const HeaderContainer = styled(Container)`
    background: #4b545a;
    padding: 0;
    margin: 0;
    z-index: 10;
    position: fixed;
`

export const Header = () => {
    return (
        <HeaderContainer fluid>
            <Row className='g-0' >
                <Col xs='auto' style={{ textAlign: 'left' }}><Image style={{ width: '180px', padding: '10px' }} src='/portfolio/name.svg'></Image></Col>
                <TaglineCol >
                    <a href="mailto:dvinun@gmail.com" style={{color: 'white'}}><BiLogoGmail /></a>&nbsp;
                    <a href="https://medium.com/@dvinun" style={{color: 'white'}}><BiLogoMediumSquare /></a>&nbsp;
                    <a href="https://linkedin.com/in/dvinun"  style={{color: 'white'}}><BiLogoLinkedinSquare /></a>&nbsp;
                    <a href="https://medium.com/@dvinun"  style={{color: 'white'}}><BiSolidFilePdf /></a>&nbsp;
                </TaglineCol>
            </Row>
        </HeaderContainer>
    );
}