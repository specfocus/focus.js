import React from 'react';
import { Viewport, Heading } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

const customlevel = deepMerge(focus, {
  heading: {
    level: {
      5: {
        small: {
          size: '12px',
          height: '16px',
        },
        medium: {
          size: '14px',
          height: '18px',
        },
        large: {
          size: '16px',
          height: '20px',
        },
      },
    },
    extend: props => `color: ${props.theme.global.colors.brand}`,
  },
});
export const Custom = () => (
  <Viewport theme={customlevel}>
    <Heading level={5} size="small">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="medium">
      Heading level 5 small
    </Heading>
    <Heading level={5} size="large">
      Heading level 5 small
    </Heading>
  </Viewport>
);
