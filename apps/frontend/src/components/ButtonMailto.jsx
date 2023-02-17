import React from 'react';
import { Link } from 'react-router-dom';
import { StyledEmailIcon } from 'ui';
import { Email } from '@styled-icons/material';

export const ButtonMailto = ({ mailto }) => {
  return (
    <Link
      to="#"
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      <StyledEmailIcon size="75" />
    </Link>
  );
};
