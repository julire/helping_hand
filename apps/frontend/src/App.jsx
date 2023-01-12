import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Project from './pages/project';
import { Navbar } from './components/Navbar';
import { StyledContainer } from 'ui';
import { StyledH1 } from 'ui';
import { Form } from './pages/Form';

function App() {
  return (
    <Router>
      <StyledContainer>
        <header>
          <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<Form />} />
          <Route path="project" element={<Project />} />
        </Routes>
        <Navbar />
      </StyledContainer>
    </Router>
  );
}

export default App;
