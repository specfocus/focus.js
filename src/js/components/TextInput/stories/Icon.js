import React from 'react';

import { Search } from 'grommet-icons';
import { Box, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

export const Icon = () => {
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <TextInput icon={<Search />} placeholder="search ..." />
          <TextInput icon={<Search />} reverse placeholder="search ..." />
        </Box>
      </Box>
    </Viewport>
  );
};
