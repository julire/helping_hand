import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { ButtonMailto } from '../components/ButtonMailto';

export function Project(props) {
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
      .catch((e) => console.log(e));
  };

  return (
    <section>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      />
      <ButtonMailto mailto={`mailto:${project.contactEmail}`} />
    </section>
  );
}
