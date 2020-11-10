import React from 'react';

import { Viewport, Box, Chart, Heading } from 'focus';
import { focus } from 'focus/themes';

const values = [{ value: [10, 20] }, { value: [20, 30] }, { value: [30, 15] }];

export const AnimatedChart = () => (
  <Viewport theme={focus}>
    <Box direction="row-responsive" wrap pad="large">
      {['bar', 'line', 'area', 'point'].map(type => (
        <Box key={type} margin="medium">
          <Heading size="small" textAlign="center">
            {type}
          </Heading>
          <Chart type={type} values={values} animate />
        </Box>
      ))}
    </Box>
  </Viewport>
);

AnimatedChart.story = {
  name: 'Animate',
  parameters: {
    chromatic: { disable: true },
  },
};
