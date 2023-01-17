import React, { useState, useEffect } from 'react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import ProjectDataService from '../services/projects';

import { StyledContainer, StyledH1, StyledH2 } from 'ui';

export default function Projects() {
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
            description={project.description}
          />
        </li>
      ))}
    </ul>
  );
}
