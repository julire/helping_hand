import * as React from 'react';
import './App.css';
import { Button } from 'ui';
import { StyledCard } from './pages/Card';

function App() {
  return (
    <div className="container">
      <header>
        <h1 className="title">Helping Hand</h1>
      </header>
      <section className="card-list">
        <StyledCard />
      </section>
    </div>
  );
}

export default App;
