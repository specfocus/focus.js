import React from 'react';

import { Viewport, Box, Text } from 'focus';
import { focus } from '../../../themes';

export const GradientColorBox = () => (
  <Viewport theme={focus}>
    <Box
      justify="center"
      align="center"
      pad="xlarge"
      background="linear-gradient(102.77deg, #865ED6 -9.18%, #18BAB9 209.09%)"
      round="large"
    >
      <Text color="white">I have a linear gradient background</Text>
    </Box>
  </Viewport>
);

GradientColorBox.story = { name: 'Gradient' };
