import React from 'react';

import { Viewport, Header, Anchor, Box, ResponsiveContext, Menu } from 'focus';
import { Grommet as GrommetIcon, Menu as MenuIcon } from 'grommet-icons';
import { focus } from 'focus/themes';

export const Responsive = () => (
  <Viewport theme={focus}>
    <Header background="light-4" pad="medium" height="xsmall">
      <Anchor
        href="https://tools.specfocus.com/"
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
                    href: 'https://v2.specfocus.com/',
                  },
                  {
                    label: <Box pad="small">Feedback</Box>,
                    href: 'https://github.com/specfocus/focus.js/issues',
                  },
                ]}
              />
            </Box>
          ) : (
            <Box justify="end" direction="row" gap="medium">
              <Anchor href="https://v2.specfocus.com/" label="Grommet.io" />
              <Anchor
                href="https://github.com/specfocus/focus.js/issues"
                label="Feedback"
              />
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </Header>
  </Viewport>
);
