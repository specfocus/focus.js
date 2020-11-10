import React from 'react';

import { Anchor, Box, Viewport, Main, Nav } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

const navItems = [
  { label: 'HTML', href: '#' },
  { label: 'JS', href: '#' },
  { label: 'CSS', href: '#' },
  { label: 'REACT', href: '#' },
];

const customTheme = deepMerge(grommet, {
  anchor: {
    textDecoration: 'none',
    fontWeight: 500,
    color: {
      dark: 'white',
      light: 'neutral-2',
    },
    hover: {
      textDecoration: 'none',
      fontWeight: 700,
    },
  },
});

const CustomAnchorNav = () => (
  <Viewport full theme={customTheme}>
    <Box background="dark-1" pad="large" fill>
      <Box direction="row" pad={{ vertical: 'medium' }}>
        <Nav width="small" margin={{ right: 'large' }}>
          {navItems.map(item => (
            <Anchor href={item.href} label={item.label} key={item.label} />
          ))}
        </Nav>
        <Main>Place main content here</Main>
      </Box>
    </Box>
  </Viewport>
);

export const CustomAnchor = () => <CustomAnchorNav />;
CustomAnchor.story = {
  name: 'Custom anchor',
};
