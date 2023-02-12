import styled from "styled-components";
import variant from '@styled-system/variant';


export const StyledInput = styled('input')(
    {
        borderRadius: '5px',
        padding: '10px',
    },

    variant({
        variants: {
            projectDescription: {
                height: '10rem',
            }
        }
    })
    

    // &::focus {
    //     border: 2px solid red;
    
    // }
);
