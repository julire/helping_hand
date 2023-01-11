import styled from 'styled-components';
import variant from '@styled-system/variant';

export const StyledContainer = styled('div')(
  {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1rem',
  },
  variant({
    variants: {
      CardContainer: {
        overflow: 'hidden',
        padding: '0 0 32px',
        margin: '48px auto 0',
        width: '300px',
        boxShadow:
          '0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08)',
        borderRadius: '5px',
      },
      NavContainer: {
        display: 'block',
        width: '100%',
        fontSize: '18px',
        backgroundColor: '#e5e5e5',
        padding: '10px',
        margin: '10px',
        borderRadius: '5px',
      },
    },
  })
);
