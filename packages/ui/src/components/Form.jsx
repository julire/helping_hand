import { StyledButton, StyledForm, StyledInput, StyledLabel } from '../index';

export function Form() {
  return (
    <section>
      <h1>Project Title</h1>
      <StyledForm>
        <StyledLabel>
          Project Title
          <StyledInput type="text" />
        </StyledLabel>

        <StyledLabel>
          Description
          <StyledInput type="text" />
        </StyledLabel>

        <StyledLabel>
          Image Url
          <StyledInput type="text" />
        </StyledLabel>

        <StyledButton type="submit">Submit</StyledButton>
      </StyledForm>
    </section>
  );
}
