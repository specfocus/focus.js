import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Tooltip = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Tooltip' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M16.5,18 L12,22.5 L7.5,18 L1,18 L1,1 L23,1 L23,18 L16.5,18 Z M6,10 L7,10 L7,9 L6,9 L6,10 Z M11.5,10 L12.5,10 L12.5,9 L11.5,9 L11.5,10 Z M17,10 L18,10 L18,9 L17,9 L17,10 Z' />
  </StyledIcon>
);
