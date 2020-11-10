import React from 'react';

import { TreeOption } from 'grommet-icons';
import { Box, Heading, Viewport, Tab, Tabs } from 'focus';
import { focus } from 'focus/themes';

const ScrollableTabs = () => (
  <Viewport theme={focus} full>
    <Box fill>
      <Tabs flex>
        <Tab title="Tab 1">
          <Box
            fill
            overflow="auto"
            pad="xlarge"
            align="center"
            background="accent-1"
          >
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
            <Heading>hello!</Heading>
          </Box>
        </Tab>
        <Tab title="Tab 2">
          <Box margin="small" pad="large" align="center" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  </Viewport>
);

export const Scrollable = () => <ScrollableTabs />;
