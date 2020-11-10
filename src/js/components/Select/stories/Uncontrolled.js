import React from 'react';

import { Box, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

export const Uncontrolled = () => {
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          options={['one', 'two']}
          onChange={({ option }) => console.log(option)}
        />
      </Box>
    </Viewport>
  );
};

Uncontrolled.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
