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
    date: `2018-07-${(i % 30) + 1}`,
    percent: (i % 11) * 10,
    paid: ((i + 1) * 17) % 1000,
  });
}

export const OnClickItemList = () => {
  const [clicked, setClicked] = React.useState();
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large" gap="large">
        <List
          data={data.slice(0, 10)}
          onClickItem={event => setClicked(event.item)}
        />

        {clicked && JSON.stringify(clicked, null, 2)}
      </Box>
    </Viewport>
  );
};

OnClickItemList.story = {
  name: 'onClickItem',
  parameters: {
    // chromatic disabled because snapshot is covered by jest testing
    // and snapshot is the same as selection
    chromatic: { disable: true },
  },
};
