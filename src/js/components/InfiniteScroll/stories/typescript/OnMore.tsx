import React, { useState } from 'react';

import {
  Viewport,
  Box,
  InfiniteScroll,
  InfiniteScrollProps,
  Text,
} from 'focus';
import { focus } from 'focus/themes';

const allItems = Array(2000)
  .fill(0)
  .map((_, i) => `item ${i + 1}`);

// 'interface' declarations can only be used in TypeScript files.
// Remove ': 'interface IProps' if you are not using Typescript.
export interface IProps {
  props?: InfiniteScrollProps;
  step?: InfiniteScrollProps['step'];
}

// Type annotations can only be used in TypeScript files.
// Remove ': React.FC<IProps>' if you are not using Typescript.
const OnMoreInfiniteScroll: React.FC<IProps> = ({ props }) => {
  const [items, setItems] = useState(allItems.slice(0, 50));

  const onMore = () => {
    setTimeout(() => {
      setItems(allItems.slice(0, items.length + 50));
    }, 1000);
  };

  return (
    <Viewport theme={focus}>
      <Box>
        <InfiniteScroll items={items} onMore={onMore} {...props}>
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
};

export const onMore = () => <OnMoreInfiniteScroll />;
export const onMoreStep = () => <OnMoreInfiniteScroll step={75} />;

onMore.story = {
  name: 'onMore',
};

onMoreStep.story = {
  name: 'onMore step',
};
