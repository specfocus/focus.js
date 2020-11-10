import React from 'react';

import { Grid, Viewport, Box, Image, InfiniteScroll, Text } from 'focus';
import { focus } from 'focus/themes';

const allItems = Array(2000)
  .fill()
  .map((_, i) => `item ${i + 1}`);

export const GridInfiniteScroll = ({ ...rest }) => (
  <Viewport theme={focus}>
    <Grid columns="xsmall" rows="small">
      <InfiniteScroll items={allItems} step={12} {...rest}>
        {item => (
          <Box key={item} as="article" pad="xsmall">
            <Image src="https://via.placeholder.com/350x150" />
            <Text>{item}</Text>
          </Box>
        )}
      </InfiniteScroll>
    </Grid>
  </Viewport>
);

export const GridWithShow = () => <GridInfiniteScroll show={78} />;

GridInfiniteScroll.story = {
  name: 'Grid',
};

GridWithShow.story = {
  name: 'Grid with show item 77',
};
