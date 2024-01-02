import React from 'react';
import { HighlightsChip, MainCard, MainCardBody, MainCardTitle, TitleText } from '../../common/CommonControls';

export const Strengths = () => {
    const interests = [
        'Consistent',
        'Hard-Working',
        'Empathetic',
        'Strong Software Architecture Design',
        'Team Spirit',
        'Passionate',
        'Artistic',
        'Minimalistic, Simple & Effective Approach',
        'Build Sustainable Software Applications',
        'Work With Team To Promote Ideas Generation, Brainstorm Ideas, Take New Initiatives',
        'Good Listener',
        "Collaborate On Top Of Others' Ideas & Work Together",
        'Good Verbal & Written Communication Skills',
        'Mentor Juniors & Share Knowledge',
    ];

    return (
        <MainCard style={{ height: '100%' }}>
            <MainCardBody>
                <MainCardTitle >
                    <TitleText>&nbsp;Strengths</TitleText>
                </MainCardTitle>
                <p>{interests.map(item => { return <HighlightsChip label={item}></HighlightsChip> })}</p>
            </MainCardBody>
        </MainCard>
    );
}
