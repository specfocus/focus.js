import React from 'react';

import { StyledIcon } from '../components/Icon/StyledIcon';

export const Bar = props => (
  <StyledIcon viewBox='0 0 24 24' a11yTitle='Bar' {...props}>
    <path fill='none' stroke='#000' strokeWidth='2' d='M7,5 L23,5 L23,23 L7,23 L7,5 Z M7,5 L23,5 L23,3 C23,1.8954305 22.1054862,1 21.0059397,1 L8.99406028,1 C7.8927712,1 7,1.88772964 7,3 L7,5 Z M1,8.0085302 C1,6.8992496 1.89826062,6 2.99791312,6 L7,6 L7,18 L2.99791312,18 C1.89449617,18 1,17.0980496 1,15.9914698 L1,8.0085302 Z M11,8 L11,18 M15,8 L15,18 M19,8 L19,18' />
  </StyledIcon>
);
