import React from 'react';

import { Box, Grommet, Text } from 'grommet';
import { grommet } from 'grommet/themes';

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
  <Grommet theme={grommet}>
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
  </Grommet>
);
