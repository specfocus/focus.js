import React from 'react';

import { Box, Viewport, WorldMap } from 'focus';
import { focus } from 'focus/themes';

export const Color = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <WorldMap color="graph-1" />
      </Box>
    </Viewport>
  );
};

Color.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
