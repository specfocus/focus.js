import React from 'react';

import { Anchor, Box, Viewport, Paragraph } from 'focus';
import { focus } from 'focus/themes';

const InlineAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Paragraph>
          This is <Anchor label="an inline link" href="#" /> with surrounding
          text.
        </Paragraph>
      </Box>
    </Viewport>
  );
};

export const Inline = () => <InlineAnchor />;
