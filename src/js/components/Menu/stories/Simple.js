import React from 'react';

import { Viewport, Box, Menu } from 'focus';
import { focus } from 'focus/themes';

const SimpleMenu = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Menu
        dropProps={{
          align: { top: 'bottom', left: 'left' },
          elevation: 'xlarge',
        }}
        label="actions"
        items={[
          { label: 'Launch', onClick: () => {} },
          { label: 'Abort', onClick: () => {} },
          { label: 'Disabled', disabled: true },
        ]}
      />
    </Box>
  </Viewport>
);

export const Simple = () => <SimpleMenu />;
Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
