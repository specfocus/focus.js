import React from 'react';

import { Box, Viewport, Clock } from 'focus';
import { focus } from 'focus/themes';

export const Digital = () => (
  <Viewport theme={focus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" />
    </Box>
  </Viewport>
);

Digital.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
