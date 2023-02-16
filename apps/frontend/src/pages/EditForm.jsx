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

  function updateProject(e) {
    e.preventDefault();
    ProjectDataService.updateProject(id, tempProject)
      .then((response) => {
        console.log(response.data);
        setProject(response.data[0]);
        setChanged(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }

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
