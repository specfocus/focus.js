import React from 'react';
import { Viewport, Heading } from 'focus';
import { deepMerge } from 'focus/utils';
import { focus } from 'focus/themes';

const letterSpace = {
  1: {
    small: '-1px',
    medium: '-1.22px',
    large: '-1.45px',
  },
  2: {
    small: '-0.47px',
    medium: '-0.57px',
    large: '-0.7px',
  },
  3: {
    small: '-0.42px',
    medium: '-0.47px',
    large: '-0.47px',
  },
};

const letterSpacing = ({ level, size }) =>
  level && size ? `letter-spacing: ${letterSpace[level][size]}` : '';

const customTheme = deepMerge(focus, {
  heading: { extend: props => `${letterSpacing(props)}` },
});

export const Extend = () => (
  <Viewport theme={customTheme}>
    <Heading level="1" size="large">
      This is using the extend property on Heading
    </Heading>
    <Heading level="2" size="medium">
      This is using the extend property on Heading
    </Heading>
    <Heading level="3" size="small">
      This is using the extend property on Heading
    </Heading>
  </Viewport>
);
