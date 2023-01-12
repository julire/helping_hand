import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Project from './pages/Project';
import { Navbar } from './components/Navbar';
import { StyledContainer } from 'ui';
import { StyledH1 } from 'ui';
import { Form } from './pages/Form';

function App() {
  const projects = [
    {
      id: 1,
      projectImg:
        'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
      title: 'Project 1',
      description: 'This is the description of project 1',
    },
    {
      id: 2,
      projectImg:
        'https://www.greenpeace.org/static/planet4-eastasia-stateless/2016/06/57ad1ec0-gp02d1n_web_size_with_credit_line.jpg',
      title: 'Project 2',
      description: 'This is the description of project 2',
    },
  ];

  return (
    <Router>
      <StyledContainer>
        <header>
          <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
        </header>
        <StyledContainer variant="MainContent">
          <Routes>
            <Route path="/" exact element={<Home projects={projects} />} />
            <Route path="/add-project" element={<Form />} />
            <Route path="/project/:id" element={<Project />} />
          </Routes>
        </StyledContainer>
        <Navbar />
      </StyledContainer>
    </Router>
  );
}

export default App;
