import React from 'react';

import { Viewport, Header, Anchor, Box, ResponsiveContext, Menu } from 'focus';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { focus } from 'focus/themes';

export const Responsive = () => (
  <Viewport theme={focus}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="https://tools.grommet.io/"
        icon={<GrommetIcon color="brand" />}
        label="Grommet Tools"
      />
      <ResponsiveContext.Consumer>
        {size =>
          size === 'small' ? (
            <Box justify="end">
              <Menu
                a11yTitle="Navigation Menu"
                dropProps={{ align: { top: 'bottom', right: 'right' } }}
                icon={<MenuIcon color="brand" />}
                items={[
                  {
                    label: <Box pad="small">Grommet.io</Box>,
                    href: 'https://v2.grommet.io/',
                  },
                  {
                    label: <Box pad="small">Feedback</Box>,
                    href: 'https://github.com/grommet/grommet/issues',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.grommet.io/" label="Grommet.io" />
              <Anchor
                href="https://github.com/grommet/grommet/issues"
                label="Feedback"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Viewport>
);
