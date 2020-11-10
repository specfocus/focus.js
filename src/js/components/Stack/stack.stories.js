import React from 'react';
import { storiesOf } from '@storybook/react';

import { Viewport, Box, Stack } from 'focus';
import { focus } from 'focus/themes';

const SimpleStack = () => (
  <Viewport>
    <Stack anchor="center">
      <Box pad="large" background="neutral-1" />
      <Box pad="small" background="accent-1" />
    </Stack>
  </Viewport>
);

const FillStack = () => (
  <Viewport theme={focus} full>
    <Stack fill>
      <Box background="brand" fill>
        Test
      </Box>
    </Stack>
  </Viewport>
);

storiesOf('Stack', module)
  .add('Simple', () => <SimpleStack />)
  .add('Fill', () => <FillStack />);
