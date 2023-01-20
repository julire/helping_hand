import * as React from 'react';
import { GlobalStyle, StyledContainer, StyledH1 } from 'ui';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import { Navbar } from './components/Navbar';
import { Form } from './pages/Form';

function App() {
  return (
    <Router>
      <GlobalStyle />
      <StyledContainer>
        <header>
          <StyledH1 variant="AppTitle">Helping Hand</StyledH1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-project" element={<Form />} />
        </Routes>
        <Navbar />
      </StyledContainer>
    </Router>
  );
}

export default App;
