import styled from 'styled-components';
import variant from '@styled-system/variant';

export const StyledButton = styled('button')(
  {
    padding: '10px 25px',
    borderRadius: '8px',
  },
  variant({
    variants: {
      BackButton: {
        padding: '0',
        width: '30px',
        height: '30px',
        borderRadius: '50%',
      },
    },
  })
);
