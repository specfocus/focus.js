import React from 'react';

import { Box, Viewport, Layer, Text } from 'focus';
import { focus } from 'focus/themes';

export const PlainLayer = () => (
  <Viewport theme={focus} full>
    <Box fill background="dark-3">
      <Layer margin="medium" plain>
        <Box pad="large" border={{ color: 'accent-1', size: 'large' }}>
          <Text color="accent-2">Text</Text>
        </Box>
      </Layer>
    </Box>
  </Viewport>
);

PlainLayer.story = { name: 'Plain' };
