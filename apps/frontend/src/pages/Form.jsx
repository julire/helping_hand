import { StyledForm, StyledInput, StyledLabel } from 'ui';

export function Form() {
  return (
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

      <button type="submit">Submit</button>
    </StyledForm>
  );
}
