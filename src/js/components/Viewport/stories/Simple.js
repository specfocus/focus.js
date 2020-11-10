import React from 'react';

import { focus, Viewport, Anchor, Box } from 'focus';
import { Add } from 'grommet-icons';

const customTheme = {
  global: {
    colors: {
      custom: '#cc6633',
    },
  },
};

export const Theme = () => (
  <Viewport theme={customTheme}>
    <Box pad="medium">
      <Anchor icon={<Add />} label="Add" color="custom" />
    </Box>
  </Viewport>
);

export const Plain = () => (
  <>
    <Viewport plain>
      <Box pad="medium">
        <p>Plain Focus</p>
      </Box>
    </Viewport>
    <Viewport>
      <Box pad="medium">
        <p>Not plain Focus</p>
      </Box>
    </Viewport>
  </>
);

export const Vars = () => (
  <Viewport theme={focus} cssVars>
    <Box pad="medium" background="var(--accent-2)" gap="medium">
      <Box>
        Checkout Focus variables, you can find them in the StyledGrommet DOM.
      </Box>
      <Box with>
        For example, the background color in this Box is using var(--accent-2)
      </Box>
    </Box>
  </Viewport>
);
