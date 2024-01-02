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
import { TimeLineContent } from './TimeLineContent';

export const TimeLine = () => {
    const [items] = useState(() => Array.from(ExperienceData, ([name, value]) => ({ employerKey: name, ...value, moreMargin: true })));

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

