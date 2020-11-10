import React from 'react';

import { Box, Viewport, Layer } from 'focus';
import { focus } from 'focus/themes';

export const RTLLayer = () => (
  <Viewport theme={focus} dir="rtl">
    <Layer
      position="start"
      margin={{ vertical: 'small', start: 'xlarge', end: 'medium' }}
    >
      <Box height="small" overflow="auto">
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
        <Box pad="xlarge">text</Box>
      </Box>
    </Layer>
  </Viewport>
);

RTLLayer.story = { name: 'RTL' };
