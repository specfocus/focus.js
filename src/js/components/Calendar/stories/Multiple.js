import React, { useState } from 'react';

import { Box, Calendar, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const Multiple = () => {
  const [dates, setDates] = useState([]);

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Calendar
          dates={dates}
          onSelect={date => {
            const nextDates = [...dates];
            const index = nextDates.indexOf(date);
            if (index === -1) {
              nextDates.push(date);
            } else {
              nextDates.splice(index, 1);
            }
            setDates(nextDates);
            console.log('Select', date, nextDates);
          }}
          bounds={['2018-09-08', '2020-12-13']}
        />
      </Box>
    </Viewport>
  );
};
