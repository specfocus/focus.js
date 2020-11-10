import React from 'react';

import { Calendar, Box, Text, Viewport } from 'focus';
import { Plan } from 'grommet-icons';
import { ThemeType } from 'focus/themes';

// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = {
  global: {
    font: {
      family: `-apple-system,
       BlinkMacSystemFont,
       "Segoe UI"`,
    },
  },
  calendar: {
    day: {
      extend: ({ isSelected }) => `
        border-radius: 100px;
        background-color: ${isSelected ? 'white' : undefined}`,
    },
  },
};

export const CustomDateCalendar = () => (
  <Viewport theme={customTheme} themeMode="dark">
    <Box align="center" background="dark-1" gap="small">
      <Box
        direction="row"
        justify="center"
        align="center"
        gap="small"
        pad="small"
      >
        <Plan size="medium" />
        <Text size="xlarge" margin="none">
          Calendar
        </Text>
      </Box>
      <Calendar
        // date={new Date().toISOString()}
        date="2020-07-28T06:00:01.409Z"
        daysOfWeek
        firstDayOfWeek={1}
      />
    </Box>
  </Viewport>
);

CustomDateCalendar.story = {
  name: 'Custom date',
};
