import styled from 'styled-components';
import variant from '@styled-system/variant';
import { Email, Home, Add } from '@styled-icons/material';

export const StyledEmailIcon = styled(Email)(
  {
    color: '#E38933',
  },
  variant({
    variants: {},
  })
);

export const StyledHomeIcon = styled(Home)({
  color: '#E38933',
});

export const StyledAddIcon = styled(Add)({
  color: '#E38933',
});
