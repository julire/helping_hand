import { StyledButton, StyledForm, StyledInput, StyledLabel } from "ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ProjectDataService from "../services/projects";

export function Form() {
  const [project, setProject] = useState({
    projectName: "",
    description: "",
    imageUrl: "",
    contactEmail: "",
  });

  const [changed, setChanged] = useState(false);
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    ProjectDataService.createProject(project)
      .then((response) => {
        setProject(response.data[0]);
        setChanged(false);
      })
      .catch((event) => {
        console.log(event);
      });

    console.log(project);
    navigate("/");
  }

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        
        <StyledInput
          type="text"
          placeholder="Project Title"
          required
          value={project.projectName}
          onChange={(event) => {
            setProject({ ...project, projectName: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        
        <StyledInput
          variant="projectDescription"
          type="text"
          placeholder="Description"
          required
          value={project.description}
          onChange={(event) => {
            setProject({ ...project, description: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        
        <StyledInput
          type="text"
          placeholder="Image Url"
          value={project.imageUrl}
          onChange={(event) => {
            setProject({ ...project, imageUrl: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        
        <StyledInput
          type="email"
          placeholder="Email Address"
          required
          value={project.contactEmail}
          onChange={(event) => {
            setProject({ ...project, contactEmail: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledButton type="submit">Submit</StyledButton>
    </StyledForm>
  );
}
