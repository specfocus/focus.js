import React from 'react';

import { Viewport, Box, Chart, Text } from 'focus';
import { focus } from 'focus/themes';

const LabelledChart = ({ color, label, value }) => (
  <Box flex={false} basis="xsmall" align="center" gap="small">
    <Chart
      bounds={[
        [0, 2],
        [0, 400],
      ]}
      type="bar"
      values={[{ value: [1, value] }]}
      color={color}
      round
      size={{ height: 'medium', width: 'xsmall' }}
    />
    <Box align="center">
      <Text>{label}</Text>
      <Text weight="bold">{value} TiB</Text>
    </Box>
  </Box>
);

export const LabelledCharts = () => (
  <Viewport theme={focus}>
    <Box pad="large" direction="row" gap="medium">
      <LabelledChart label="Exported" value={300} />
      <LabelledChart label="Usable" value={200} color="accent-2" />
      <LabelledChart label="Used" value={98.2} color="accent-3" />
    </Box>
  </Viewport>
);

LabelledCharts.story = {
  name: 'Labelled',
};
