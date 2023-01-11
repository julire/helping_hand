import styled from 'styled-components';
import variant from '@styled-system/variant';

export const StyledH1 = styled('h1')(
  {
    fontSize: '50px',
  },
  variant({
    variants: {
      AppTitle: {
        fontSize: '65px',
      },
    },
  })
);
