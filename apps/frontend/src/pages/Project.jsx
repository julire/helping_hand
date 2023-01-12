import React from 'react';
import { StyledContainer, ProjectHeader, ProjectImg, ProjectTitle } from 'ui';

import { ProjectContainer } from '../components/ProjectContainer';
import { useParams } from 'react-router-dom';

export default function Project(props) {
  let { id } = useParams();
  console.log({ id }, props);
  return (
    <section>
      {/* <ProjectContainer
        id={id}
        // projectImg={projectImg}
        // title={title}
        // description={description}
      /> */}
      <StyledContainer variant="ProjectContainer">
        <ProjectHeader>
          <ProjectImg src={props.projectImg} alt="" />
          <ProjectTitle>{props.title}</ProjectTitle>
        </ProjectHeader>
        <StyledContainer variant="CardBody">
          <p className="project--description">{props.description}</p>
        </StyledContainer>
      </StyledContainer>
    </section>
  );
}
