import { StyledForm, StyledInput, StyledLabel } from "ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function Form() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imagePathValue, setImagePathValue] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

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
          value={titleValue}
          onChange={(event) => {
            setTitleValue(event.target.value);
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
          value={descriptionValue}
          onChange={(event) => {
            setDescriptionValue(event.target.value);
          }}
        />
      </StyledLabel>

      <StyledLabel>
        Image Url
        <StyledInput
          type="text"
          value={imagePathValue}
          onChange={(event) => {
            setImagePathValue(event.target.value);
          }}
        />
      </StyledLabel>

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
