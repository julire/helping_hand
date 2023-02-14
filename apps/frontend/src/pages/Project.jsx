import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { Link, useParams } from 'react-router-dom';
import { StyledButton } from 'ui';
import { Form } from './Form';

export function Project(props) {
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
      .catch((e) => console.log(e));
  };

  function handleEdit(id) {
    setUpdateState(id);
    console.log(props);
  }

  return (
    <section>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      />
      <StyledButton onClick={() => handleEdit(id)}>Edit</StyledButton>
      {updateState === id ? <Form /> : ''}
    </section>
  );
}
