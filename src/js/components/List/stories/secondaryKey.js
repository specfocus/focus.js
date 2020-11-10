import React from 'react';

import { Viewport, Box, List } from 'focus';
import { focus } from 'focus/themes';

const locations = [
  'Boise',
  'Fort Collins',
  'Los Gatos',
  'Palo Alto',
  'San Francisco',
];

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
    location: locations[i % locations.length],
  });
}

export const SecondaryKey = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <List
        data={data.slice(0, 10)}
        primaryKey="entry"
        secondaryKey="location"
      />
    </Box>
  </Viewport>
);
