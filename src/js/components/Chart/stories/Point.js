import React from 'react';

import { Viewport, Box, Chart, Heading } from 'focus';
import { focus } from 'focus/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

export const Point = () => (
  <Viewport theme={focus}>
    <Box direction="row-responsive" wrap pad="large">
      {['circle', 'square', 'diamond', 'star', 'triangle', 'triangleDown'].map(
        point => (
          <Box key={point} margin="medium">
            <Heading size="small" textAlign="center">
              {point}
            </Heading>
            <Chart type="point" values={values} point={point} />
          </Box>
        ),
      )}
    </Box>
  </Viewport>
);
