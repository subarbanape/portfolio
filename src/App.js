import './App.css';
import React, { useEffect, useState } from 'react';
import { DefaultTheme } from './themes/DefaultTheme';
import { ThemeProvider } from 'styled-components';
import { Header } from './features/header/Header';
import './bootstrap.min.css';
import { GlobalStyles } from './globals/Globals';
import { Container, Card, Button, Row, Col } from 'react-bootstrap';
import { Intro } from './features/cards/Intro';
import { SkillsSpotlight } from './features/cards/Highlights';
import { ProjectsSpotlight } from './features/cards/ProjectsSpotlight';
import { CardCol, PageContainer } from './common/CommonControls';
import { SkillsCenter } from './features/cards/SkillsCenter';
import "primereact/resources/primereact.min.css";
import './themes/PrimeReactTheme.css';
import './themes/PrimeReactOverrides.css';
import { Home } from './features/home/Home';
import { Routes, Route, useNavigate, Navigate, } from 'react-router-dom'
import { Skill } from './features/skill/Skill';
import { Project } from './features/project/Project';
import { getPathFromUrl } from './common/Utils';
import { useSelector, useDispatch } from 'react-redux'
import { MoreProjects } from './features/cards/MoreProjects';
import { setPathAsync } from './features/path/PathSlice';
import { getProjectByName } from './data/ProjectsData';
import { setProjectAsync } from './features/project/ProjectSlice';
import { ExperienceAtEmployer } from './features/timeline/ExperienceAtEmployer';

export const App = React.memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { path, doNavigate } = useSelector((state) => state.pathSlice || {})

  useEffect(() => {
    path && doNavigate && navigate(path);
  }, [path, doNavigate]);

  useEffect(() => {
    const browserPath = getPathFromUrl();

    if (browserPath === null) {
      dispatch(setPathAsync({ path: 'home' }));
      return;
    }

    var topic = getPathFromUrl(0);
    var project = null;
    switch (topic) {
      case 'project':
        {
          const projectName = getPathFromUrl(1);
          project = getProjectByName(projectName);
        }
        break;
      case 'skill':
        {
          const projectName = getPathFromUrl(1);
          project = getProjectByName(projectName);
        }
        break;
    }

    if (project) {
      dispatch(setProjectAsync(project));
      dispatch(setPathAsync({ path: browserPath, source: 'default' }));
    }
    else {
      dispatch(setPathAsync({ path: 'home', source: 'default' }));
    }
  }, []);

  return (
    <div className="App">
      <ThemeProvider theme={DefaultTheme}>
        <GlobalStyles />
        <Header></Header>
        <div style={{paddingTop: '80px'}}></div>
        <PageContainer fluid >
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='skill/:skillname' element={<Skill />} />
            <Route path='project/:projectname' element={<Project />} />
            <Route path='more-projects/:projectname' element={<Project />} />
            <Route path='timeline/:employer' element={<ExperienceAtEmployer />} />
            <Route path='more-projects' element={<MoreProjects/>} />
            <Route path='project' element={<Home />} />
            <Route path='*' element={<Navigate to='/' replace />} />
          </Routes>
          <div style={{ paddingBottom: '50px' }}></div>
        </PageContainer>
      </ThemeProvider>
    </div>
  );
});
