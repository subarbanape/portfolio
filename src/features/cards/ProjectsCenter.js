import React, { useEffect, useState } from 'react';
import { Container, Card, Col, Image, Row } from 'react-bootstrap';
import { CardCol, CardParagraph, CardTopHeaderImage, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';
import { Masonry } from "masonic";
import { RootCard } from '../../common/RootCard';
import { ProjectsData } from '../../data/ProjectsData';
import { Button } from 'primereact/button';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate, } from 'react-router-dom'

export const ProjectsCenter = React.memo(() => {
    const navigate = useNavigate();
    const [items] = useState(() => Array.from({ length: 4 }, (_, i) => ({ id: i++ })));

    return (
        <MainCard >
            <MainCardBody>
                <MainCardTitle>
                    <TitleText>&nbsp;Projects</TitleText>
                </MainCardTitle>
                <MainCardText>
                    <CardParagraph style={{margin: '10px'}} >Some of the recent and key projects I delivered.</CardParagraph>
                    <Container fluid >
                        <Masonry
                            // Provides the data for our grid items
                            items={items}
                            // Sets the minimum column width to 172px
                            columnWidth={400}
                            // This is the grid item component
                            render={RootCard}
                            overscanBy={10}
                        />
                    </Container>
                    <div style={{ textAlign: 'right' }} >
                        <Button onClick={() => { navigate('/more-projects') }} label="           " icon={<label>Explore More Projects<FaChevronRight /></label>} style={{ background: '#b2eb81', borderColor: '#b2eb81', fontSize: '30px', color: '#58636b' }} severity="success" />
                    </div>
                </MainCardText>
            </MainCardBody>
        </MainCard>
    );
});
