import React from 'react';

import { Viewport, Image } from 'focus';
import { focus } from 'focus/themes';

export const Fallback = () => (
  <Viewport theme={focus}>
    <Image
      fallback="//v2.specfocus.com/assets/IMG_4245.jpg"
      src="//v2.specfocus.com/assets/IMG_4245_not_exists.jpg"
    />
  </Viewport>
);
