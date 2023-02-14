import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { useParams } from 'react-router-dom';
import { StyledButton } from 'ui';

export function Project(props) {
  const [project, setProject] = useState({
    projectName: '',
    description: '',
    imageUrl: '',
  });

  let { id } = useParams();
  useEffect(() => {
    getProject();
  }, []);

  const getProject = () => {
    ProjectDataService.get(id)
      .then((response) => {
        setProject(response.data.data[0]);
      })
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <StyledButton variant="IconButton">
        <span class="material-symbols-outlined">arrow_back</span>
      </StyledButton>
      <StyledButton variant="IconButton">
        <span class="material-symbols-outlined">delete</span>
      </StyledButton>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      ></ProjectContainer>
    </section>
  );
}
