import * as React from "react";
import "./App.css";
import { Button } from "ui";

function App() {
  return (
    <div className="container">
      <h1 className="title">
        Helping Hand
      </h1>
      <section className="card-list">
        <div class="card-list--card">
          <img src="" alt="" />
          <div class="card--info">
            <h2 className="card--title">Project 1 title</h2>
            <p className="card--description">
              This is a description of a project 1!
            </p>
          </div>
        </div>
        <div class="card-list--card">
          <img src="" alt="" />
          <div class="card--info">
            <h2 className="card--title">Project 2 title</h2>
            <p className="card--description">
              This is a description of a project 2!
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
