import React from 'react';
import { Attraction } from 'grommet-icons';

import { Viewport, Box, Text } from 'focus';
import { focus } from '../../../themes';

export const OnClickBox = () => (
  <Viewport theme={focus}>
    <Box justify="center" align="center" pad="large">
      {/* eslint-disable no-alert */}
      <Box
        border
        pad="large"
        align="center"
        round
        gap="small"
        hoverIndicator
        onClick={() => {
          alert('clicked');
        }}
      >
        <Attraction size="large" />
        <Text>Party</Text>
      </Box>
    </Box>
  </Viewport>
);

OnClickBox.story = { name: 'onClick' };
