import React from 'react';

import { Viewport, Box, Image } from 'focus';
import { focus } from 'focus/themes';

export const Opacity = () => (
  <Viewport theme={focus}>
    <Box gap="small" direction="row">
      <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
      <Image opacity="strong" src="//v2.specfocus.com/assets/IMG_4245.jpg" />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity="medium" src="//v2.specfocus.com/assets/IMG_4245.jpg" />
      <Image opacity="weak" src="//v2.specfocus.com/assets/IMG_4245.jpg" />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity={false} src="//v2.specfocus.com/assets/IMG_4245.jpg" />
      <Image opacity src="//v2.specfocus.com/assets/IMG_4245.jpg" />
    </Box>
    <Box gap="small" direction="row">
      <Image opacity="0.6" src="//v2.specfocus.com/assets/IMG_4245.jpg" />
    </Box>
  </Viewport>
);
