import React from 'react';

import { Box, Calendar, Viewport } from 'focus';

import { focus } from 'focus/themes';

export const Fill = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center">
        <Box height="large" width="large" border>
          <Calendar fill daysOfWeek />
        </Box>
      </Box>
    </Viewport>
  );
};
