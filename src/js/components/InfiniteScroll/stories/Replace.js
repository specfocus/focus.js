import React from 'react';
import { focus } from 'focus/themes';

import { Viewport, Box, InfiniteScroll, Text } from 'focus';

const allItems = Array(240)
  .fill()
  .map((_, i) => `item ${i + 1}`);

const Example = props => (
  <Viewport theme={focus}>
    <InfiniteScroll items={allItems} {...props}>
      {item => (
        <Box key={item} pad="medium" border={{ side: 'bottom' }} align="center">
          <Text>{item}</Text>
        </Box>
      )}
    </InfiniteScroll>
  </Viewport>
);

export const Replace = () => <Example replace />;
export const ShowBefore = () => <Example replace show={27} />;
export const ShowAfter = () => <Example replace show={87} />;

Replace.story = {
  parameters: {
    chromatic: { disable: true },
  },
};

ShowBefore.story = {
  name: 'Replace, show before step',
  parameters: {
    chromatic: { disable: true },
  },
};

ShowAfter.story = {
  name: 'Replace, show after step',
  parameters: {
    chromatic: { disable: true },
  },
};
