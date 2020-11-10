import React from 'react';

import { Viewport, Box, Grid } from 'focus';
import { focus } from '../../../themes';

export const Animation = () => (
  <Viewport theme={focus}>
    <Box pad="medium">
      <Grid columns="small" gap="medium">
        {[
          'fadeIn',
          'fadeOut',
          'jiggle',
          'pulse',
          'rotateRight',
          'rotateLeft',
          'slideUp',
          'slideDown',
          'slideLeft',
          'slideRight',
          'zoomIn',
          'zoomOut',
        ].map(animation => (
          <Box
            key={animation}
            pad="large"
            background="brand"
            animation={{ type: animation, duration: 4000 }}
            align="center"
          >
            {animation}
          </Box>
        ))}
      </Grid>
    </Box>
  </Viewport>
);
