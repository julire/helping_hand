import { StyledForm } from "ui";

export function Form() {
  return (
    <section>
      <h1>Create project</h1>
      <StyledForm>
        <label>
          <input type="text" />
        </label>
      </StyledForm>
    </section>
  );
}
