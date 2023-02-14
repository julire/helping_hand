import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { StyledContainer, StyledH1, theme, Navbar } from 'ui';
import './App.css';
import Home from './pages';
import { CreateProject } from './pages/CreateProject';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <header>
            <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
          </header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/add-project" element={<CreateProject />} />
          </Routes>
          <Navbar />
        </StyledContainer>
      </ThemeProvider>
    </Router>
  );
}

export default App;
