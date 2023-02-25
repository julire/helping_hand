import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { EditForm } from './EditForm';

import { ButtonMailto } from '../components/ButtonMailto';
import {
  MainNav,
  NavLi,
  StyledBackIcon,
  StyledButton,
  StyledContainer,
  StyledDeleteIcon,
  StyledHomeIcon,
} from 'ui';

export function Project() {
  const navigate = useNavigate();

  const [updateState, setUpdateState] = useState(-1);

  const [project, setProject] = useState({
    projectName: '',
    description: '',
    imageUrl: '',
    contactEmail: '',
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
  const goBack = () => {
    navigate(-1);
  };

  const deleteProject = (id) => {
    ProjectDataService.delete(id)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      <StyledContainer variant="FlexWrapper">
        <StyledButton onClick={goBack} variant="IconButton">
          <StyledBackIcon size="30" />
        </StyledButton>
        <StyledButton onClick={() => deleteProject(id)} variant="IconButton">
          <StyledDeleteIcon size="25" />
        </StyledButton>
      </StyledContainer>

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
    </>
  );
}
