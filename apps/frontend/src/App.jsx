import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Project, Projects } from './pages/';
import { Navbar } from './components/';
import { StyledContainer, StyledH1 } from 'ui';
import { Form } from './pages/Form';

function App() {
  return (
    <Router>
      <header>
        <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
      </header>
      <StyledContainer variant="MainContent">
        <Routes>
          <Route path="/" exact element={<Projects />} />
          <Route path="/add-project" element={<Form />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </StyledContainer>
      <Navbar />
    </Router>
  );
}

export default App;
