import React from 'react';

import { Box, Calendar, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const Range = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Calendar dates={[['2020-04-03', '2020-04-08']]} range />
    </Box>
  </Viewport>
);
