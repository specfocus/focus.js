import React from 'react';

import { StyledIcon } from '../StyledIcon';

export const Layer = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Layer' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M1,1 L17,1 L17,17 L1,17 L1,1 Z M20,7 L23,7 L23,23 L7,23 L7,20 L7,20' />
  </StyledIcon>
);
