import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
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
          <Route exact path="/" exact element={<Home />} />
        </Routes>
        <Navbar />
      </StyledContainer>
    </Router>
  );
}

export default App;
