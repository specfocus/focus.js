import React from 'react';

import { Viewport, Box, List } from 'focus';
import { focus, ThemeType } from 'focus/themes';
import { deepMerge } from 'focus/utils';

export const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const theme: ThemeType = deepMerge(focus, {
  list: {
    item: {
      pad: { horizontal: 'large', vertical: 'xsmall' },
      background: ['white', 'light-2'],
      border: true,
    },
  },
});

export const Themed = () => (
  <Viewport theme={theme}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Viewport>
);
