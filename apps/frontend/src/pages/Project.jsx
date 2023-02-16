import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { useParams } from 'react-router-dom';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from 'ui';
import { EditForm } from './EditForm';

export function Project() {
  const [updateState, setUpdateState] = useState(-1);

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
      .catch((event) => console.log(event));
  };

  function handleEditClick(id) {
    setUpdateState(id);
  }

  return (
    <section>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      />
      <StyledButton onClick={() => handleEditClick(id)}>Edit</StyledButton>
      {updateState === id ? (
        <>
          <EditForm updateState={updateState} project={project} />
          <StyledButton onClick={() => handleEditClick(-1)}>
            Cancel
          </StyledButton>
        </>
      ) : null}
    </section>
  );
}
