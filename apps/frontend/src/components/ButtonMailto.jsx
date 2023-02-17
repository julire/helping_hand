import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton } from 'ui';

export const ButtonMailto = ({ mailto, label }) => {
  return (
    <StyledButton variant="MailtoButton">
      <Link
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        {label}
      </Link>
    </StyledButton>
  );
};
