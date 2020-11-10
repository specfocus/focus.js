import React from 'react';

import { Box, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

const sizes = [
  'xxlarge',
  'xlarge',
  'large',
  'medium',
  'small',
  'xsmall',
  '77px',
];

export const All = () => (
  <Viewport theme={focus}>
    <>
      {sizes.map(size => (
        <Box key={size} margin="small">
          <Text size={size}>{`Text ${size}`}</Text>
        </Box>
      ))}
      <Box background="light-3" align="end" width="small" pad="small">
        <Text truncate>
          This is a long truncated string of text that is aligned to the end.
        </Text>
      </Box>
    </>
  </Viewport>
);
