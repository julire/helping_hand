import styled from 'styled-components';
import variant from '@styled-system/variant';

export const StyledButton = styled('button')(
  {
    padding: '10px 25px',
    borderRadius: '8px',
  },
  variant({
    variants: {
      IconButton: {
        padding: '0',
        width: '35px',
        height: '35px',
        borderRadius: '50%',
      },
    },
  })
);
