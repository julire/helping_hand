import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { Link, useParams } from 'react-router-dom';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from 'ui';
import { Form } from './Form';
import axios from 'axios';

export function Project(props) {
  const [updateState, setUpdateState] = useState(-1);

  const [project, setProject] = useState({
    projectName: '',
    description: '',
    imageUrl: '',
  });
  const [tempProject, setTempProject] = useState();
  const [changed, setChanged] = useState(false);

  let { id } = useParams();

  useEffect(() => {
    getProject();
  }, []);

  const getProject = () => {
    ProjectDataService.get(id)
      .then((response) => {
        setProject(response.data.data[0]);
        setTempProject(response.data.data[0]);
      })
      .catch((e) => console.log(e));
  };

  function handleEdit(id) {
    setUpdateState(id);
  }

  function updateProject(e) {
    e.preventDefault();
    console.log(tempProject);
    ProjectDataService.updateProject(id, tempProject)
      .then((response) => {
        setProject(response.data.data[0]);
        setChanged(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  const EditForm = () => {
    return (
      <StyledForm onSubmit={updateProject}>
        <StyledLabel>
          Project Title
          <StyledInput
            type="text"
            value={tempProject.projectName}
            onChange={(e) => {
              setChanged(true);
              setTempProject({ ...tempProject, projectName: e.target.value });
            }}
          />
        </StyledLabel>

        <StyledLabel>
          Description
          <StyledInput
            type="text"
            value={tempProject.description}
            onChange={(e) => {
              setChanged(true);
              setTempProject({ ...tempProject, description: e.target.value });
            }}
          />
        </StyledLabel>

        <StyledLabel>
          Image Url
          <StyledInput
            type="text"
            value={tempProject.imageUrl}
            onChange={(e) => {
              setChanged(true);
              setTempProject({ ...tempProject, imageUrl: e.target.value });
            }}
          />
        </StyledLabel>

        <button type="submit">Submit</button>
      </StyledForm>
    );
  };

  return (
    <section>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      />
      <StyledButton onClick={() => handleEdit(id)}>Edit</StyledButton>
      {updateState === id ? <EditForm /> : null}
    </section>
  );
}
