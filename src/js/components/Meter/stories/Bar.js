import React from 'react';

import { Viewport, Box, Meter } from 'focus';
import { focus } from 'focus/themes';

export const Bar = () => {
  const value = 30;

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
    </Viewport>
  );
};
