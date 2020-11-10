import React from 'react';

import { Box, Viewport, Clock } from 'focus';
import { focus } from 'focus/themes';

export const Countdown = () => (
  <Viewport theme={focus}>
    <Box align="center" justify="start" pad="large">
      <Clock type="digital" time="PT0H0M20S" run="backward" />
    </Box>
  </Viewport>
);

Countdown.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
