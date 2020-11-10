import React from 'react';

import {
  Anchor,
  Box,
  Viewport,
  Header,
  Nav,
  Menu,
  ResponsiveContext,
} from 'focus';
import { focus } from 'focus/themes';

const CollapsableNav = () => (
  <Viewport theme={focus}>
    <Header background="dark-1" pad="medium">
      <Box direction="row" align="center" gap="small">
        Resize the page to collapse the Nav into a Menu
      </Box>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === 'small' ? (
            <Menu
              label="Click me"
              items={[
                { label: 'This is', onClick: () => {} },
                { label: 'The Menu', onClick: () => {} },
                { label: 'Component', onClick: () => {} },
              ]}
            />
          ) : (
            <Nav direction="row">
              <Anchor href="#" label="This is" />
              <Anchor href="#" label="The Nav" />
              <Anchor href="#" label="Component" />
            </Nav>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Viewport>
);

export const Collapsable = () => <CollapsableNav />;
