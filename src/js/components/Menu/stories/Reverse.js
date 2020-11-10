import React from 'react';

import { Viewport, Box, Menu } from 'focus';
import { Power, User } from 'grommet-icons';
import { focus } from 'focus/themes';

const ReverseMenu = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{ align: { top: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Home' },
          { label: 'Profile', icon: <User />, gap: 'small' },
          { label: 'Logout', icon: <Power />, reverse: true, gap: 'small' },
        ]}
      />
    </Box>
  </Viewport>
);

export const Reverse = () => <ReverseMenu />;
Reverse.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
