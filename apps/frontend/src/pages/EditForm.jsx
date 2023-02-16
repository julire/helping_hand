import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledForm, StyledInput, StyledLabel } from 'ui';
import ProjectDataService from '../services/projects';

export const EditForm = (props) => {
  const [tempProject, setTempProject] = useState({
    projectName: props.project.projectName,
    description: props.project.description,
    imageUrl: props.project.imageUrl,
  });
  const [project, setProject] = useState();
  const [changed, setChanged] = useState(false);

  let { id } = useParams();

  function updateProject(event) {
    event.preventDefault();
    ProjectDataService.updateProject(id, tempProject)
      .then((response) => {
        console.log(response.data);
        setProject(response.data[0]);
        setChanged(false);
      })
      .catch((event) => {
        console.log(event);
      });
  }

  return (
    <StyledForm onSubmit={updateProject}>
      <StyledLabel>
        Project Title
        <StyledInput
          type="text"
          value={tempProject.projectName}
          onChange={(event) => {
            setChanged(true);
            setTempProject({ ...tempProject, projectName: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Description
        <StyledInput
          type="text"
          value={tempProject.description}
          onChange={(event) => {
            setChanged(true);
            setTempProject({ ...tempProject, description: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Image Url
        <StyledInput
          type="text"
          value={tempProject.imageUrl}
          onChange={(event) => {
            setChanged(true);
            setTempProject({ ...tempProject, imageUrl: event.target.value });
          }}
        />
      </StyledLabel>

      <button type="submit">Submit</button>
    </StyledForm>
  );
};
