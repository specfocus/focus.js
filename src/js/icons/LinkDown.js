import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const LinkDown = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='LinkDown' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M12,2 L12,22 M3,11 L12,2 L21,11' transform='matrix(1 0 0 -1 0 24)' />
  </StyledIcon>
);
