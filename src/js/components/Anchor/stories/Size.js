import React from 'react';

import { Anchor, Box, Viewport } from 'focus';
import { focus } from 'focus/themes';

const SizeAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        {['xxlarge', 'xlarge', 'large', 'medium', 'small', 'xsmall'].map(
          size => (
            <Box key={size} margin="small">
              <Anchor size={size} label={size} href="#" />
            </Box>
          ),
        )}
      </Box>
    </Viewport>
  );
};

export const Size = () => <SizeAnchor />;
