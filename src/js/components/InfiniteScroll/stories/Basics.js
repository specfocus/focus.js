import React from 'react';

import { Viewport, Box, InfiniteScroll, Text } from 'focus';
import { focus } from 'focus/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const Example = props => (
  <Viewport theme={focus}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => (
          <Box
            key={item}
            pad="medium"
            border={{ side: 'bottom' }}
            align="center"
          >
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Box>
  </Viewport>
);

export const Simple = () => <Example />;
export const Show = () => <Example show={117} />;
export const Marker = () => (
  <Example
    renderMarker={marker => (
      <Box pad="medium" background="accent-1">
        {marker}
      </Box>
    )}
  />
);

Show.story = {
  name: 'Show 118th item',
};
