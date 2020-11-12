import React, { useState } from 'react';
import { deepMerge } from 'focus/utils';

import { Box, Calendar, Viewport, focus } from 'focus';

const customHeading = deepMerge(focus, {
  calendar: {
    heading: {
      level: '3',
    },
  },
});

export const CustomSizeCalendar = () => {
  const [date, setDate] = useState();

  const onSelect = nextDate => {
    setDate(nextDate !== date ? nextDate : undefined);
  };

  return (
    <Viewport theme={customHeading}>
      <Box align="center" pad="large">
        <Calendar
          date={date}
          onSelect={onSelect}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Viewport>
  );
};

CustomSizeCalendar.story = {
  name: 'Heading size',
};
