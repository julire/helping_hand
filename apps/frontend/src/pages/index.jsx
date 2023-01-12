import React from 'react';
import { Card } from '../components/Card';

export default function Home() {
  const projects = [
    {
      id: 1,
      projectImg:
        'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
      title: 'Project 1',
      description: 'This is the description of project 1',
    },
    {
      id: 2,
      projectImg:
        'https://www.greenpeace.org/static/planet4-eastasia-stateless/2016/06/57ad1ec0-gp02d1n_web_size_with_credit_line.jpg',
      title: 'Project 2',
      description: 'This is the description of project 2',
    },
  ];

  const listProjects = projects.map((project) => (
    <Card
      id={project.id}
      projectImg={project.projectImg}
      title={project.title}
      description={project.description}
    />
  ));
  return <section>{listProjects}</section>;
}
