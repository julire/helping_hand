import styled from "styled-components";
import variant from "@styled-system/variant";

export const StyledButton = styled.button`
  padding: 10px 25px;
  border-radius: 15px;
  border: none;
  background-color: var(--colors-highlight);
  width: 50%;

  ${({ variant }) => 
    variant === "IconButton" &&
    css`
    padding: 0,
        width: 35px,
        height: 35px,
        border-radius: 50%,
        `}
`;
