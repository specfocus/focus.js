import React from 'react';
import { Gremlin } from 'grommet-icons';

import { Viewport, Box, DropButton, Text } from 'focus';
import { focus } from 'focus/themes';

const renderItems = () => (
  <Box>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
    <Text>hi</Text>
  </Box>
);

const MenuItem = () => (
  <Box height="36px" width="36px" align="center">
    <Gremlin />
  </Box>
);

const GremlinDropButton = () => (
  <DropButton
    alignSelf="center"
    margin={{ vertical: 'small' }}
    dropContent={renderItems()}
    dropProps={{ align: { top: 'bottom' } }}
  >
    <MenuItem />
  </DropButton>
);

const MenuDropButton = () => {
  return (
    <Viewport theme={focus} full>
      <Box fill>
        <Box fill="vertical" width="xxsmall" background="dark-2">
          <GremlinDropButton />
          <Box flex />
          <GremlinDropButton />
        </Box>
      </Box>
    </Viewport>
  );
};

export const Menu = () => <MenuDropButton />;
Menu.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
