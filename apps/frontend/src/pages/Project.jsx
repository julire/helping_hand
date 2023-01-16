import React from 'react';
import { StyledContainer, ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

import { ProjectContainer } from '../components/ProjectContainer';
import { useParams } from 'react-router-dom';

export default function Project(props) {
  let { id } = useParams();

  console.log(props);
  return (
    <section>
      <ProjectContainer
        id={props.id}
        projectImg={props.imageUrl}
        title={props.projectName}
        description={props.description}
      />
    </section>
  );
}
