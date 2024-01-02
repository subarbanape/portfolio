import React, { useEffect, useState } from 'react';
import { Container, Card, Button, Col, Image } from 'react-bootstrap';
import { CardBottomImage, CardCol, MainCard, MainCardBody, MainCardText, MainCardTitle } from './CommonControls';
import { Intro } from '../features/cards/Intro';
import { SkillsSpotlight } from '../features/cards/Highlights';
import { ProjectsSpotlight } from '../features/cards/ProjectsSpotlight';
import { ProjectsData } from '../data/ProjectsData';
import { ProjectCard } from './ProjectCard';

export const RootCard = React.memo(({ data: { id } }) => {
    const item = ProjectsData.get(id);
    return <ProjectCard project={item}/>
});
