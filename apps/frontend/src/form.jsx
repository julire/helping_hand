import { StyledForm, StyledInput, StyledLabel } from "ui";
import { StyledLabel } from "../../../packages/ui/src/StyledLabel";

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

                <button type="submit">Submit</button>
            </StyledForm>
        </section>
    );
}