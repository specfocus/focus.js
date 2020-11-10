import React from 'react';

import {
  Box,
  Viewport,
  RoutedButton as GrommetRoutedButton,
  Text,
} from 'focus';
import { focus } from 'focus/themes';

export const RoutedButton = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Text margin="medium" size="small">
        Note: RoutedButton will soon be deprecated
      </Text>
      <GrommetRoutedButton label="Go" path="/" />
    </Box>
  </Viewport>
);
