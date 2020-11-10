import React from 'react';

import { Box, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

export const Uncontrolled = () => {
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            onChange={event => console.log('Change', event.target.value)}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

Uncontrolled.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
