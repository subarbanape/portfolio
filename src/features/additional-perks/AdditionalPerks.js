import React, { useEffect, useState } from 'react';
import { HighlightsChip, MainCard, MainCardBody, MainCardText, MainCardTitle, TitleText } from '../../common/CommonControls';
import { Masonry } from "masonic";
import { Container, Card, Button, Col, Image, Row } from 'react-bootstrap';
import { IoMdRefresh } from "react-icons/io";

const ImageCard = React.memo(({ data: { id } }) => {
    const src = id === 3 || id === 4 ? `pxy/${id}.gif` : `pxy/${id}.png`;
    return <Card style={{backgroundColor: '#58636b', border: 'none', }}>
        <Card.Body style={{width: '200px', padding: '5px'}}>
            <Image style={{width: '100%'}} src={src}></Image>
        </Card.Body>
    </Card>
  });
  
const generateRandomArray = (min, max, length) => {
    const randomArray = Array.from({ length: length }, () => ({ id: Math.floor(Math.random() * (max - min + 1)) + min }));
    return randomArray;
}

export const AdditionalPerks = () => {
    const randomSample = generateRandomArray(1, 300, 10);
    const [items, setItems] = useState(randomSample);

    return (
        <MainCard style={{ height: '100%'}}>
            <MainCardBody>
                <MainCardTitle >
                    <TitleText>&nbsp;PixelArt Fun&nbsp;<IoMdRefresh size='20px' 
                        onClick={() => { setItems( generateRandomArray(1, 300, 10)) }}
                    /></TitleText>
                </MainCardTitle>
                <MainCardText>
                    <h2>Press 'Refresh' icon above to shuffle through some cute pixel art characters I did in the past with my Pixel Art skills and the NFT Art Generator app I built :-)</h2>
                    <Container fluid >
                        <Masonry
                            // Provides the data for our grid items
                            items={items}
                            // Sets the minimum column width to 172px
                            columnWidth={200}
                            // This is the grid item component
                            render={ImageCard}
                            columnGutter={8}
                            overscanBy={10}
                        />
                    </Container>
                </MainCardText>
            </MainCardBody>
        </MainCard>
    );
}
