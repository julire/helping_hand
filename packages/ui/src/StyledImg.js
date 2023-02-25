import styled from 'styled-components';
import variant from '@styled-system/variant';

export const StyledImg = styled('img')(
  { width: '100%' },
  variant({
    variants: {
      CardImage: {},
    },
  })
);
