import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { redirect, useNavigate, useParams } from 'react-router-dom';
import { StyledButton } from 'ui';

export function Project(props) {
  const navigate = useNavigate();

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

  const deleteProject = (id) => {
    ProjectDataService.delete(id)
      .then((response) => {
        console.log(response);
        navigate('/');
      })
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <StyledButton onClick={() => deleteProject(id)} variant="IconButton">
        <span className="material-symbols-outlined">delete</span>
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
