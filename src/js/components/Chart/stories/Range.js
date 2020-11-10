import React from 'react';

import { Viewport, Box, Chart, Heading } from 'focus';
import { focus } from 'focus/themes';

const values = [
  [10, 20, 30],
  [20, 30, 60],
  [30, 15, 20],
];

export const Range = () => (
  <Viewport theme={focus}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} thickness="small" />
        </Box>
      ))}
    </Box>
  </Viewport>
);
