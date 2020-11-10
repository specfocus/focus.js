import React from 'react';

import { Anchor, Box, Viewport } from 'focus';
import { focus } from 'focus/themes';

const DisabledAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Box margin="small">
          <Anchor disabled label="Disabled Anchor" />
        </Box>
      </Box>
    </Viewport>
  );
};

export const Disabled = () => <DisabledAnchor />;
