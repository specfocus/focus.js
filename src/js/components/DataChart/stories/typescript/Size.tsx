import React from 'react';

import { Box, DataChart, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

const data = [];
for (let i = 1; i < 8; i += 1) {
  const v = Math.sin(i / 2.0);
  data.push({
    date: `2020-${((i % 12) + 1).toString().padStart(2, '0')}-01`,
    percent: Math.abs(v * 100),
  });
}

export const Size = () => (
  <Viewport full theme={focus}>
    <Box fill="horizontal" align="center" justify="center" pad="large">
      <DataChart
        axis
        data={data}
        chart="percent"
        guide
        series={[
          {
            property: 'date',
            render: date => (
              <Text margin={{ horizontal: 'xsmall' }}>
                {new Date(date).toLocaleDateString('en-US', { month: 'short' })}
              </Text>
            ),
          },
          { property: 'percent', suffix: '%' },
        ]}
        size={{ width: 'fill' }}
        gap="small"
        pad={{ horizontal: 'medium', vertical: 'small' }}
      />
    </Box>
  </Viewport>
);
