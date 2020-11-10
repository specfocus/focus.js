import React from 'react';

import { Viewport, Box, List, Menu } from 'focus';
import { More } from 'grommet-icons';
import { focus } from 'focus/themes';

const data = [];

for (let i = 0; i < 40; i += 1) {
  data.push({
    entry: `entry-${i + 1}`,
  });
}

export const Action = () => (
  <Viewport theme={focus}>
    <Box pad="large">
      <List
        data={data.slice(0, 10)}
        pad={{ left: 'small', right: 'none' }}
        action={(item, index) => {
          return (
            <Menu
              key={index}
              icon={<More />}
              hoverIndicator
              items={[{ label: 'one' }]}
            />
          );
        }}
      />
    </Box>
  </Viewport>
);
