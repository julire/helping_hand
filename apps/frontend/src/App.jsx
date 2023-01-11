import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import { Navbar } from './components/Navbar';
import { StyledContainer } from 'ui';

function App() {
  return (
    <Router>
      <StyledContainer>
        <header>
          <h1 className="title">Helping Hand</h1>
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
