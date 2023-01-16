import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Project from './pages/Project';
import { Navbar } from './components/Navbar';
import { StyledContainer } from 'ui';
import { StyledH1 } from 'ui';
import { Form } from './pages/Form';
import Projects from './db.json';

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:5001/project`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status response is ${response.status}`
          );
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setError(null);
      })
      .catch((err) => {
        setError(err.message);
        setData(null);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <Router>
      <header>
        <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
      </header>
      <StyledContainer variant="MainContent">
        <Routes>
          <Route path="/" exact element={<Home projects={Projects} />} />
          <Route path="/add-project" element={<Form />} />
          <Route path="/project/:id" element={<Project />} />
        </Routes>
      </StyledContainer>
      <Navbar />
    </Router>
  );
}

export default App;
