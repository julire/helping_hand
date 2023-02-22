import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import ProjectDataService from '../services/projects';

export function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    retrieveProjects();
  }, []);

  const retrieveProjects = () => {
    ProjectDataService.getAll()
      .then((response) => {
        setProjects(response.data.data);
      })
      .catch((e) => console.log(e));
  };
  return (
    <ul>
      {projects.map((project) => (
        <li key={project._id}>
          <Card
            id={project._id}
            imageUrl={project.imageUrl}
            projectName={project.projectName}
            description={project.description.substring(0, 250)}
          />
        </li>
      ))}
    </ul>
  );
}
