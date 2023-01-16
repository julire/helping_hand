import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Project from './pages/Project';
import Projects from './pages/Projects';
import { Navbar } from './components/Navbar';
import { StyledContainer } from 'ui';
import { StyledH1 } from 'ui';
import { Form } from './pages/Form';
import ProjectsData from './db.json';
import axios from 'axios';

function App() {
  const [data, setData] = useState(ProjectsData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(`http://localhost:5001/projects`);
        setData(response.data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <Router>
      <header>
        <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
      </header>
      <StyledContainer variant="MainContent">
        <Routes>
          <Route path="/" exact element={<Projects projects={data} />} />
          <Route path="/add-project" element={<Form />} />
          <Route path="/projects/:id" element={<Project />} />
        </Routes>
      </StyledContainer>
      <Navbar />
    </Router>
  );
}

export default App;
