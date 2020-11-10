import React from 'react';

import { Box, Viewport, Layer } from 'focus';
import { focus } from 'focus/themes';

const MarginLayer = ({ margin, ...rest }) => (
  <Viewport theme={focus}>
    <Layer
      margin={
        margin || { left: '40px', top: '50px', right: '30px', bottom: '10px' }
      }
      {...rest}
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

export const Margin = () => <MarginLayer full />;
export const MarginCenter = () => <MarginLayer margin="large" />;
MarginCenter.story = { name: 'Margin (center)' };
export const MarginTopCenter = () => (
  <MarginLayer margin={{ top: 'large' }} position="top" />
);
MarginTopCenter.story = { name: 'Margin top (center)' };
