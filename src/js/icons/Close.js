import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Close = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Close' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M3,3 L21,21 M3,21 L21,3' />
  </StyledIcon>
);
