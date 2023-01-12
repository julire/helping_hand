import React from 'react';
import { Card } from '../components/Card';
import { Link } from 'react-router-dom';

export default function Home({ ...props }) {
  let projects = props.projects;
  console.log({ projects });
  const listProjects = projects.map((project) => (
    <li key={project.id}>
      <Link to={`/project/${project.id}`}>
        <Card
          id={project.id}
          projectImg={project.projectImg}
          title={project.title}
          description={project.description}
        />
      </Link>
    </li>
  ));
  return <section>{listProjects}</section>;
}
