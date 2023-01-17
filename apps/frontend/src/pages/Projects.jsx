import React from 'react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';
import { StyledContainer, StyledH1, StyledH2 } from 'ui';

export default function Projects({ ...props }) {
  let projects = props.projects;
  return (
    <ul>
      {projects.map(({ id, imageUrl, projectName, description }) => (
        <li key={{ id }}>
          <Link to={id}>
            <Card
              id={id}
              imageUrl={imageUrl}
              projectName={projectName}
              description={description}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}
