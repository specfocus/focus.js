import React from 'react';

import { Viewport, Box, InfiniteScroll, Text } from 'focus';
import { focus } from 'focus/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

/* eslint-disable react/prefer-stateless-function */
const MyItem = ({ item }) => {
  return (
    <Box pad="medium" border={{ side: 'bottom' }} align="center">
      <Text>{item}</Text>
    </Box>
  );
};

export const ClassChildrenInfiniteScroll = props => (
  <Viewport theme={focus}>
    <Box>
      <InfiniteScroll items={allItems} {...props}>
        {item => <MyItem key={item} item={item} />}
      </InfiniteScroll>
    </Box>
  </Viewport>
);

ClassChildrenInfiniteScroll.story = {
  name: 'Class children',
};
