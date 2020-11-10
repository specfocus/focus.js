import React from 'react';

import { Viewport, Box, List } from 'focus';
import { focus } from 'focus/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

export const Basic = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <List data={locations} />
    </Box>
  </Viewport>
);
