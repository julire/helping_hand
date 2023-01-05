import { StyledForm, StyledLabel } from "ui";

export function Form() {
  return (
    <section>
      <h1>Create project</h1>
      <StyledForm>
        <StyledLabel>
          Title
          <input type="text" />
        </StyledLabel>

        <StyledLabel>
          Description
          <input type="text" />
        </StyledLabel>

        <StyledLabel>
          Image URL
          <input type="url" />
        </StyledLabel>

        <button type="submit">Submit</button>
      </StyledForm>
    </section>
  );
}
