import React from 'react';

import { Box, Viewport, Heading, Keyboard } from 'focus';
import { focus } from 'focus/themes';

export const OnDocument = () => (
  <Viewport theme={focus}>
    {/* eslint-disable no-alert */}
    <Keyboard target="document" onEsc={() => alert('You pressed Esc!')}>
      <Box pad="large" background="light-4">
        <Heading level="3">Press Esc on me!</Heading>
      </Box>
    </Keyboard>
  </Viewport>
);

OnDocument.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
