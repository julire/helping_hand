import { StyledForm, StyledInput, StyledLabel } from "ui";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export function Form() {
  const [titleValue, setTitleValue] = useState("");
  const [descriptionValue, setDescriptionValue] = useState("");
  const [imagePathValue, setImagePathValue] = useState("");

  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();

    fetch(
      "https://ng-course-recipe-book-a3fea-default-rtdb.europe-west1.firebasedatabase.app/helping-hand.json",
      {
        method: "POST",
        body: JSON.stringify({
          titleValue,
          descriptionValue,
          imagePathValue,
        }),
      }
    );

    console.log(titleValue, descriptionValue, imagePathValue);

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
