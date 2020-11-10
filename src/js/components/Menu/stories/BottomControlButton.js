import React from 'react';

import { Viewport, Box, Menu } from 'focus';
import { focus } from 'focus/themes';

const ControlBottomMenu = () => (
  <Viewport theme={focus}>
    <Box height="medium" justify="center" align="center" pad="large">
      <Menu
        dropProps={{ align: { bottom: 'bottom', left: 'left' } }}
        label="actions"
        items={[
          { label: 'Profile', onClick: () => {} },
          { label: 'Settings', onClick: () => {} },
          { label: 'FAQ', onClick: () => {} },
        ]}
      />
    </Box>
  </Viewport>
);

export const BottomControlButton = () => <ControlBottomMenu />;
BottomControlButton.story = {
  name: 'Bottom control button',
  parameters: {
    chromatic: { disable: true },
  },
};
