import React from 'react';
import { Container, Card } from 'react-bootstrap';
import { HighlightsChip } from '../../common/CommonControls';
import styled from 'styled-components';
import { FaChevronRight } from 'react-icons/fa';
import { setEmployerAsync } from './TimeLineSlice';
import { setPathAsync } from '../path/PathSlice';
import { useSelector, useDispatch } from 'react-redux'

const CardHeader = styled(Card.Header)`
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
    background: #b2eb81;
    font-size: xx-large;
    padding-left: 10px;
    color: #58636b;
`

export const TimeLineContent = (item) => {
    const dispatch = useDispatch();
    const calculatedMarginTop = item.moreMargin ? '30px' : '0';
    const calculatedMarginBottom = item.moreMargin ? '90px' : '10px';
    const calculatedMaxWidth = item.moreMargin ? '90%' : 'inherit';
    
    const onClickMore = (employerKey) => {
        dispatch(setEmployerAsync(employerKey));
        dispatch(setPathAsync({ path: `/timeline/${employerKey}` }));
    }

    return <Container style={{maxWidth: calculatedMaxWidth}}>
        <Card style={{ marginBottom: calculatedMarginBottom, marginTop: calculatedMarginTop, textAlign: 'left', borderRadius: '5px', border: 'none', background: `#b2eb812e` }}>
            <CardHeader as="h5" >{item.employer}</CardHeader>
            <Card.Body style={{ paddingTop: 0 }}>
                {item.titles && item.titles.map(title => <HighlightsChip label={title} />)}
                <HighlightsChip label={item.location} />
                <p>{item.highlights}</p>
                <Card.Text onClick={() => { onClickMore(item.employerKey); }} style={{ textAlign: 'right', paddingTop: 0, fontSize: 'x-large', cursor: 'pointer' }}>More<FaChevronRight size='13px' /></Card.Text>
            </Card.Body>
        </Card>
    </Container>
}