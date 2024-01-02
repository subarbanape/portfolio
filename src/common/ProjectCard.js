import { Card, Col, Image } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';
import { FaChevronRight } from 'react-icons/fa'
import {  getSkillChip } from './SkillControls';
import { useSelector, useDispatch } from 'react-redux'
import { setPathAsync } from '../features/path/PathSlice';
import { Routes, Route, useNavigate } from 'react-router-dom'
import { setProjectAsync } from '../features/project/ProjectSlice';
import styled from 'styled-components';
import { ThemedHyperlink } from './CommonControls';

export const ProjectCard = React.memo(({ project }) => {
    const dispatch = useDispatch();
    const cardColors = ['#b2eb81'];    
    const techStackChips = project.techStack.map(item => getSkillChip(item, dispatch));
    const backgroundColor = cardColors[Math.floor(Math.random() * cardColors.length)];
    const descriptions = project.descriptions.map(item => {return <p>{item}</p>});

    const onClickMore = () => {
        dispatch(setProjectAsync(project)); 
        if(!project.spotLight) dispatch(setPathAsync({path: `/more-projects/${project.name}`}));
        else dispatch(setPathAsync({path: `/project/${project.name}`}));
    }

    const CardHeader = styled(Card.Header) `
        border-top-left-radius: 5px;
        border-top-right-radius: 5px;
        background: ${backgroundColor};
        font-size: xx-large;
        padding-left: 10px;
        color: #58636b;
    `

    return <Card style={{ margin: '7px', textAlign: 'left', borderRadius: '5px', border: 'none', background: `${backgroundColor}2e`,  }}>
        <CardHeader as="h5" >{project.display}</CardHeader>
        <Card.Body >
            {descriptions}
            {project.link && <ThemedHyperlink>{project.link}</ThemedHyperlink>}
            <br/>
            <br/>
            <Card.Text>{techStackChips}</Card.Text>
            {project.moreDetails && <Card.Text onClick={() => { onClickMore(); }} style={{ textAlign: 'right',paddingTop: 0, fontSize: 'x-large', cursor: 'pointer' }}>More<FaChevronRight size='13px'/></Card.Text>}
        </Card.Body>
    </Card>
});