import React from 'react';

import { Add } from 'grommet-icons';

import { Anchor, Box, Viewport } from 'focus';
import { focus } from 'focus/themes';

const ColorAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
      <Box background="dark-1" pad="medium" gap="medium">
        <Anchor icon={<Add />} href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor icon={<Add />} label="Add" href="#" />
        <Anchor label="Add" href="#" />
      </Box>
    </Viewport>
  );
};

export const Color = () => <ColorAnchor />;
