import React from 'react';
import { HighlightsChip, MainCard, MainCardBody, MainCardTitle, TitleText } from '../../common/CommonControls';

export const Interests = () => {
    const interests = [
        'Blockchain Enthusiast',
        'Build Trustless Distributed Apps',
        'Pixelart Admirer & Hobby Artist',
        'Retro Art & Retro Futurism',
        'RPG Game & Wannabe Game Developer',
        'Wannabe Kuksa Wood Crafter',
        'Waiting For UFO Encounter :-)',
        'Software Design Using OOP',
    ];

    return (
        <MainCard style={{ height: '100%' }}>
            <MainCardBody>
                <MainCardTitle >
                    <TitleText>&nbsp;Interests</TitleText>
                </MainCardTitle>
                <p>{interests.map(item => { return <HighlightsChip label={item}></HighlightsChip> })}</p>
            </MainCardBody>
        </MainCard>
    );
}
