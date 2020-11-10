import React from 'react';

import { Anchor, Box, Viewport } from 'focus';
import { focus } from 'focus/themes';

const DefaultAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Anchor href="#">Link</Anchor>
      </Box>
    </Viewport>
  );
};

export const Default = () => <DefaultAnchor />;
Default.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
