import React from 'react';

import { Viewport, Box, Image } from 'focus';
import { focus } from 'focus/themes';

export const Fit = () => (
  <Viewport theme={focus}>
    <Box align="start" gap="medium">
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="contain" />
      </Box>
      <Box height="small" width="small" border>
        <Image src="//v2.grommet.io/assets/IMG_4245.jpg" fit="cover" />
      </Box>
    </Box>
  </Viewport>
);
