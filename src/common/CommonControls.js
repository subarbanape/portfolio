import styled from 'styled-components';
import { Card, Col, Container, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { Chip } from 'primereact/chip';

export const PageContainer = styled(Container)`
    padding: 3px;
`

export const MainCard = styled(Card)`
    background: inherit;
    border-radius: 2px;
    border: 2px solid white;
`

export const MainCardText = styled(Card.Text)`
    padding: 10px;
    padding-top: 0;
    font-size: xx-large;
    line-height: 25px;
`

export const MainCardTitle = styled(Card.Text)`
    font-size: xx-large;
    padding-top: 0;
    padding-bottom: 5px;
    text-transform: uppercase;
    text-align: left;
    background: white;
`

export const TitleImage = styled(Image)`
    width: 41px;
    z-index: 3;
    position: relative;
`

export const TitleText = styled.span`
    font-family: ${props => props.theme.fontFamilyHeader};
    z-index: 3;
    position: relative;
    color:  ${props => props.theme.inverseFontColor};
`

export const MainCardBody = styled(Card.Body)`
    padding: 0px;
    z-index: 2;
`

export const CardCol = styled(Col)`
    padding: 6px;
`

export const CardParagraph = styled.p`
    margin: 0;
`
export const CardBottomImage = React.memo(({ img }) => {
    return <div style={{ textAlign: 'right', minHeight: '10px' }}>
        <Image style={{ width: '6%', position: 'absolute', right: '10px', bottom: '10px', opacity: '0.5' }} src={img}></Image>
    </div>
});

export const CardTopHeaderImage = React.memo(({ img }) => {
    return <div style={{ textAlign: 'right', zIndex: 0, }}>
        <Image style={{ width: '90px', borderRadius: '5px', position: 'absolute', left: 0, top: 0, zIndex: 0  }} src={img}></Image>
    </div>
});

export const HighlightsChip = styled(Chip)`
    background-color: var(--color-green) !important;
    margin: 4px;
    border-radius: 3px;
    cursor: pointer;
    font-size: 28px;
`

export const ThemedHyperlink = styled.a`
    color: white;
    font-weight: normal;
    text-decoration-line: underline;
    font-size: xx-large;
    margin: 0;
    padding: 0;
    line-height: normal;
`