import React from 'react';

import { Box, Viewport, Clock } from 'focus';
import { focus } from 'focus/themes';

export const Analog = () => (
  <Viewport theme={focus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="analog" />
    </Box>
  </Viewport>
);

Analog.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
