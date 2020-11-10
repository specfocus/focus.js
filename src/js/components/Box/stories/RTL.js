import React from 'react';

import { Viewport, Box } from 'focus';
import { focus } from '../../../themes';

export const RTLBox = () => (
  <Viewport theme={focus} dir="rtl">
    <Box direction="row" align="center" pad="small" gap="small" border>
      <Box direction="row" align="center" pad="small" border="start">
        border start
      </Box>
      <Box
        direction="row"
        align="center"
        pad={{ start: 'large' }}
        background="brand"
      >
        pad start
      </Box>
      <Box
        direction="row"
        align="center"
        margin={{ start: 'large' }}
        background="brand"
      >
        margin start
      </Box>
    </Box>
  </Viewport>
);

RTLBox.story = { name: 'RTL' };
