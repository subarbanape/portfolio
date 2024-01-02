import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { CardBottomImage, CardCol, CardParagraph, CardTopHeaderImage, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleImage, TitleText } from '../../common/CommonControls';
import { ProjectsData } from '../../data/ProjectsData';
import { Masonry } from "masonic";
import { RootCard } from '../../common/RootCard';
import { BreadCrumb } from 'primereact/breadcrumb';
import { useNavigate, useParams } from 'react-router-dom'

export const MoreProjects = React.memo(() => {
    const navigate = useNavigate();
    const [items] = useState(() => Array.from({ length: ProjectsData.size - 4 }, (_, i) => ({ id: i + 4 })));
    const homeTemplate = (item, options) => {
        return (
            <a className={options.className} onClick={() => { navigate('/home') }}>
                {item.label}
            </a>
        );
    };

    const home = { label: 'Home', url: '', template: homeTemplate }

    return (
        <Container fluid style={{ padding: '5px' }}>
            <BreadCrumb model={[{ label: 'More Projects' }]} home={home} />
            <MainCard style={{ marginTop: '10px' }}>
                <MainCardBody>
                    <MainCardText>
                        <Container fluid style={{ padding: '5px' }}>
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
                    </MainCardText>
                </MainCardBody>
            </MainCard>
        </Container>
    );
});
