import React from 'react';
import { Link } from 'react-router-dom';
import { StyledButton, StyledEmailIcon } from 'ui';

export const ButtonMailto = ({ mailto }) => {
  return (
    <StyledButton
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <StyledEmailIcon size="35" />
    </StyledButton>
  );
};
