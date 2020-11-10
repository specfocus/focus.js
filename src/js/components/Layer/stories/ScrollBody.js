import React from 'react';

import { FormClose } from 'grommet-icons';

import { Box, Button, Viewport, Layer, Text } from 'focus';
import { focus } from 'focus/themes';

export const ScrollBodyLayer = () => (
  <Viewport theme={focus}>
    <Layer full="vertical" position="right">
      <Box fill style={{ minWidth: '378px' }}>
        <Box
          direction="row"
          align="center"
          as="header"
          elevation="small"
          justify="between"
        >
          <Text margin={{ left: 'small' }}>Header</Text>
          <Button icon={<FormClose />} />
        </Box>
        <Box flex overflow="auto" pad="xsmall">
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
          <span>body</span>
        </Box>
        <Box
          as="footer"
          border={{ side: 'top' }}
          pad="small"
          justify="end"
          direction="row"
          align="center"
        >
          <Button primary label="Save" />
        </Box>
      </Box>
    </Layer>
  </Viewport>
);

ScrollBodyLayer.story = { name: 'Fixed header, scroll body' };
