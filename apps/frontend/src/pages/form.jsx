import { StyledForm, StyledInput, StyledLabel } from "ui";

export function Form() {
  return (
    <section>
      <h1>Create project</h1>
      <StyledForm>
        <StyledLabel>
          Title
          <StyledInput type="text" />
        </StyledLabel>

        <StyledLabel>
          Description
          <StyledInput type="text" />
        </StyledLabel>

        <StyledLabel>
          Image URL
          <StyledInput type="url" />
        </StyledLabel>

        <button type="submit">Submit</button>
      </StyledForm>
    </section>
  );
}
