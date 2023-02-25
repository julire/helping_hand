import styled from "styled-components";
import variant from "@styled-system/variant";

export const StyledInput = styled("input")(
  {
    width: "100%",
    border: "none",
    borderRadius: "15px",
    padding: "10px",
    backgroundColor: "var(--colors-background)",
  },

  variant({
    variants: {
      projectDescription: {
        height: "10rem",
      },
    },
  })

  // &::focus {
  //     border: 2px solid red;

  // }
);
