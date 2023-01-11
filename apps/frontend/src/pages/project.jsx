import React from 'react';
import { ProjectHeader } from '../components/ProjectHeader';

export default function Project() {
  const project = {
    id: 1,
    projectImg:
      'https://www.doctorswithoutborders.org/sites/default/files/MSF163911%28High%29_0.jpg',
    title: 'Project 1',
    description: 'This is the description of project 1',
  };

  return (
    <section>
      <ProjectHeader
        projectImg={project.projectImg}
        title={project.title}
        description={project.description}
      />
    </section>
  );
}
