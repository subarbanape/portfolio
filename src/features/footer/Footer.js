import { useSelector, useDispatch } from 'react-redux';
import { Container, Button, Row, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const HeaderContainer = styled(Container)`
    background: #4b545a;
    z-index: 10;
`

export const Footer = () => {
    return (
        <HeaderContainer fluid>
            <Row className='g-0' >
                <h1>dvinun@gmail.com</h1>
            </Row>
        </HeaderContainer>
    );
}