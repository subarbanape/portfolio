import React, { useEffect, useState } from 'react';
import { MainCard, MainCardBody, MainCardText, MainCardTitle, TitleText } from '../../common/CommonControls';
import { ExperienceData } from '../../data/ExperienceData';
import { TimeLineContent } from './TimeLineContent';

export const TimeLineOrdinary = () => {
    const [items] = useState(() => Array.from(ExperienceData, ([name, value]) => ({ employerKey: name, ...value })));

    return (
        <MainCard >
            <MainCardBody>
                <MainCardTitle>
                    <TitleText>&nbsp;Timeline</TitleText>
                </MainCardTitle>
                <MainCardText >
                    <div>{items.map(item => { return <div><p>{item.date}</p><TimeLineContent {...item}></TimeLineContent></div> })}</div>
                </MainCardText>
            </MainCardBody>
        </MainCard>
    )
}
