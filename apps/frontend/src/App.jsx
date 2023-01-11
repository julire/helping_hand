import * as React from "react";
import "./App.css";
import { Card } from "./pages/Card";
import { Form } from ".pages/Form";

function App() {
  const projects = [
    {
      projectImg:
        "https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg",
      title: "Project 1",
      description: "This is the description of project 1",
    },
    {
      projectImg:
        "https://www.greenpeace.org/static/planet4-eastasia-stateless/2016/06/57ad1ec0-gp02d1n_web_size_with_credit_line.jpg",
      title: "Project 2",
      description: "This is the description of project 2",
    },
  ];

  return (
    <div className="container">
      <header>
        <h1 className="title">Helping Hand</h1>
      </header>
      <section className="card-list">
        <ul>
          {projects.map((project) => {
            return (
              <Card
                projectImg={project.projectImg}
                title={project.title}
                description={project.description}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
}

export default App;
