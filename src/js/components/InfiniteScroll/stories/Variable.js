import React from 'react';
import { focus } from 'focus/themes';

import { Viewport, Box, InfiniteScroll, Text } from 'focus';

const allItems = Array(240)
  .fill()
  .map((_, i) => i + 1);

const Example = props => {
  return (
    <Viewport theme={focus}>
      <Box>
        <InfiniteScroll items={allItems} {...props}>
          {item => (
            <Box
              key={item}
              height={item <= 25 ? 'xsmall' : 'xxsmall'}
              pad="medium"
              border={{ side: 'bottom' }}
              align="center"
            >
              <Text>item {item}</Text>
            </Box>
          )}
        </InfiniteScroll>
      </Box>
    </Viewport>
  );
};

export const Height = () => <Example />;
export const HeightReplace = () => <Example replace />;

Height.story = {
  name: 'Variable item height',
  parameters: {
    chromatic: { disable: true },
  },
};

HeightReplace.story = {
  name: 'Variable item height w/replace',
  parameters: {
    chromatic: { disable: true },
  },
};
