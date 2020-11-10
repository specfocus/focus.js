import React from 'react';

import { focus, Box, Button, Viewport } from 'focus';
import { Tip } from '../../Tip';

export const Simple = () => {
  return (
    <Viewport full theme={focus}>
      <Box align="center" justify="center" fill>
        <Tip content="action info">
          <Button label="action" />
        </Tip>
      </Box>
    </Viewport>
  );
};

Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
