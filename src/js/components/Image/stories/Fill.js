import React from 'react';

import { Viewport, Box, Image, Anchor } from 'focus';
import { focus } from 'focus/themes';

export const Fill = () => {
  return (
    <Viewport theme={focus}>
      <Box align="start" gap="small">
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image fit="cover" fill src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          </Anchor>
        </Box>
        <Box height="small" width="small" border>
          <Anchor href="#">
            <Image
              fit="contain"
              fill
              src="//v2.specfocus.com/assets/IMG_4245.jpg"
            />
          </Anchor>
        </Box>
      </Box>
    </Viewport>
  );
};
