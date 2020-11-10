import React from 'react';

import { Viewport, Paragraph } from 'focus';
import { deepMerge } from 'focus/utils';
import { focus } from 'focus/themes';

const customTheme = deepMerge(grommet, {
  paragraph: {
    font: {
      family: 'Comic Sans MS',
    },
  },
});

export const Themed = () => (
  <Viewport theme={customTheme}>
    <Paragraph>
      The font family for this paragraph is being defined by a custom theme.
    </Paragraph>
  </Viewport>
);

// disabling chromatic because snapshot doesn't capture font
Themed.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
