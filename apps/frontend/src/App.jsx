import * as React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages';
import Project from './pages/project';
import { Navbar } from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container">
        <header>
          <h1 className="title">Helping Hand</h1>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="project" element={<Project />} />
        </Routes>
        <Navbar />
      </div>
    </Router>
  );
}

export default App;
