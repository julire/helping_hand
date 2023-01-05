import { StyledForm } from "ui";

export function Form() {
  return (
    <section>
      <h1>Create project</h1>
      <StyledForm>
        <label>
          Title
          <input type="text" />
        </label>

        <label>
          Description
          <input type="text" />
        </label>

        <label>
          Image URL
          <input type="url" />
        </label>

        <button type="submit">Submit</button>
      </StyledForm>
    </section>
  );
}
