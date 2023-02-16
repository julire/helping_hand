import React, { useState, useEffect } from 'react';
import ProjectDataService from '../services/projects';

import { ProjectContainer } from '../components/ProjectContainer';
import { useNavigate, useParams } from 'react-router-dom';
import { StyledButton, StyledForm, StyledInput, StyledLabel } from 'ui';
import { EditForm } from './EditForm';

export function Project(props) {
  const navigate = useNavigate();

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
      .catch((event) => console.log(event));
  };

  function handleEditClick(id) {
    setUpdateState(id);
  }

  // function updateProject(event) {
  //   event.preventDefault();
  //   ProjectDataService.updateProject(id, tempProject)
  //     .then((response) => {
  //       setProject(response.data.data[0]);
  //       setChanged(false);
  //     })
  //     .catch((event) => {
  //       console.log(event);
  //     });
  //   setUpdateState(-1);
  // }

  // const EditForm = () => {
  //   return (
  //     <StyledForm onSubmit={updateProject}>
  //       <StyledLabel>
  //         Project Title
  //         <StyledInput
  //           type="text"
  //           value={tempProject.projectName}
  //           onChange={(event) => {
  //             setChanged(true);
  //             setTempProject({
  //               ...tempProject,
  //               projectName: event.target.value,
  //             });
  //           }}
  //         />
  //       </StyledLabel>

  //       <StyledLabel>
  //         Description
  //         <StyledInput
  //           type="text"
  //           value={tempProject.description}
  //           onChange={(event) => {
  //             setChanged(true);
  //             setTempProject({
  //               ...tempProject,
  //               description: event.target.value,
  //             });
  //           }}
  //         />
  //       </StyledLabel>

  //       <StyledLabel>
  //         Image Url
  //         <StyledInput
  //           type="text"
  //           value={tempProject.imageUrl}
  //           onChange={(event) => {
  //             setChanged(true);
  //             setTempProject({ ...tempProject, imageUrl: event.target.value });
  //           }}
  //         />
  //       </StyledLabel>

  //       <button type="submit">Submit</button>
  //     </StyledForm>
  //   );
  // };

  return (
    <section>
      <ProjectContainer
        id={project.id}
        projectImg={project.imageUrl}
        title={project.projectName}
        description={project.description}
      />
      <StyledButton onClick={() => handleEditClick(id)}>Edit</StyledButton>
      {updateState === id ? <EditForm project={project} /> : null}
    </section>
  );
}
