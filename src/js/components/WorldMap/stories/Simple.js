import React from 'react';

import { Box, Viewport, WorldMap } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <WorldMap />
      </Box>
    </Viewport>
  );
};

Simple.story = {
  parameters: {
    // chromatic disabled because snapshot is the same as SelectPlace
    chromatic: { disable: true },
  },
};
