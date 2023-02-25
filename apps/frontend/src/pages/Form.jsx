import { StyledForm, StyledInput, StyledLabel } from "ui";
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
        Project Title
        <StyledInput
          type="text"
          placeholder="Type the title of your project here"
          required
          value={project.projectName}
          onChange={(event) => {
            setProject({ ...project, projectName: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Description
        <StyledInput
          variant="projectDescription"
          type="text"
          placeholder="Type a description of your project here"
          required
          value={project.description}
          onChange={(event) => {
            setProject({ ...project, description: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Image Url
        <StyledInput
          type="text"
          value={project.imageUrl}
          onChange={(event) => {
            setProject({ ...project, imageUrl: event.target.value });
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Email Address
        <StyledInput
          type="email"
          placeholder="Example: mustermann@mustermann-gmbh.de"
          required
          value={project.contactEmail}
          onChange={(event) => {
            setProject({ ...project, contactEmail: event.target.value });
          }}
        />
      </StyledLabel>

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
