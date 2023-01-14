import React from 'react';
import { StyledContainer, ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

import { ProjectContainer } from '../components/ProjectContainer';
import { useParams } from 'react-router-dom';
import Projects from '../db.json';

export default function Project(props) {
  let { id } = useParams();

  console.log(props);
  return (
    <section>
      <ProjectContainer
        id={props.id}
        projectImg={props.projectImg}
        title={props.title}
        description={props.description}
      />
    </section>
  );
}
