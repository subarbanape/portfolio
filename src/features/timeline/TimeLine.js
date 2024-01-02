import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col } from 'react-bootstrap';
import { Timeline } from 'primereact/timeline';
import { CardCol, CardParagraph, CardTopHeaderImage, HighlightsChip, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';
import styled from 'styled-components';
import { Chip } from 'primereact/chip';
import { FaChevronRight } from 'react-icons/fa';
import { setEmployerAsync } from './TimeLineSlice';
import { ExperienceData } from '../../data/ExperienceData';
import { useSelector, useDispatch } from 'react-redux'
import { setPathAsync } from '../path/PathSlice';

export const TimeLine = () => {
    const [items] = useState(() => Array.from(ExperienceData, ([name, value]) => ({ employerKey: name, ...value })));

    return (
        <MainCard >
            <MainCardBody>
                <MainCardTitle>
                    <TitleText>&nbsp;Timeline</TitleText>
                </MainCardTitle>
                <MainCardText >
                    <Timeline value={items} opposite={(item) => item.date} content={TimeLineContent} />
                </MainCardText>
            </MainCardBody>
        </MainCard>
    )
}

const CardHeader = styled(Card.Header)`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #b2eb81;
    font-size: xx-large;
    padding-left: 10px;
    color: #58636b;
`

const TimeLineContent = (item) => {
    const dispatch = useDispatch();

    const onClickMore = (employerKey) => {
        dispatch(setEmployerAsync(employerKey));
        dispatch(setPathAsync({ path: `/timeline/${employerKey}` }));
    }

    return <Container >
        <Card style={{ marginBottom: '90px', marginTop: '30px', textAlign: 'left', borderRadius: '5px', border: 'none', background: `#b2eb812e` }}>
            <CardHeader as="h5" >{item.employer}</CardHeader>
            <Card.Body style={{ paddingTop: 0 }}>
                {item.titles.map(title => <HighlightsChip label={title} />)}
                <HighlightsChip label={item.location} />
                <p>{item.highlights}</p>
                <Card.Text onClick={() => { onClickMore(item.employerKey); }} style={{ textAlign: 'right', paddingTop: 0, fontSize: 'x-large', cursor: 'pointer' }}>More<FaChevronRight size='13px' /></Card.Text>
            </Card.Body>
        </Card>
    </Container>
}