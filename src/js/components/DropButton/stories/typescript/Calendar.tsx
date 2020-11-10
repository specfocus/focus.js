import React, { useState } from 'react';
import { FormDown } from 'grommet-icons';

import { Viewport, Box, Calendar, DropButton, Text } from 'focus';
import { focus } from 'focus/themes';

const CalendarDropButton = () => {
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);

  const onSelect = selectedDate => {
    setDate(selectedDate);
    setOpen(false);
  };

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <DropButton
          open={open}
          onClose={() => setOpen(false)}
          onOpen={() => setOpen(true)}
          dropContent={<Calendar date={date} onSelect={onSelect} />}
        >
          <Box direction="row" gap="medium" align="center" pad="small">
            <Text>
              {date ? new Date(date).toLocaleDateString() : 'Select date'}
            </Text>
            <FormDown color="brand" />
          </Box>
        </DropButton>
      </Box>
    </Viewport>
  );
};

export const CalendarDrop = () => <CalendarDropButton />;
CalendarDrop.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
