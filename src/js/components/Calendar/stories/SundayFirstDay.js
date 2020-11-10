import React from 'react';

import { Box, Calendar, Viewport } from 'focus';
import { focus } from 'focus/themes';

// When the first day of the month is Sunday, and the request of firstDayOfWeek
// is Monday, we are verifing we are not missing a week, issue 3253.
export const SundayFirstDayCalendar = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Calendar firstDayOfWeek={1} date={new Date(2019, 8, 2).toISOString()} />
    </Box>
  </Viewport>
);

SundayFirstDayCalendar.story = {
  name: '1st on Sunday',
};
