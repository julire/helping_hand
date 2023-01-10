import { StyledForm, StyledInput } from "ui";

export function Form() {
    return (
        <section>
            <h1>Project Title</h1>
            <StyledForm>
                <StyledLabel>
                    Project Title 
                </StyledLabel>

                <StyledLabel>
                    Description 
                </StyledLabel>

                <StyledLabel>
                    Image Url 
                </StyledLabel>

                <button type="submit">Submit</button>
            </StyledForm>
        </section>
    );
}