import React from 'react';

import { Add } from 'grommet-icons';

import { Box, Button, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

const PlainButtons = props => (
  <Box pad="large" gap="large">
    {/* Out of the Box Button */}
    <Viewport theme={focus}>
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
          {/*  When Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Add</Text>
          </Box>
        </Button>
      </Box>
    </Viewport>
    {/* Kind Button */}
    <Viewport
      theme={{
        global: {
          font: {
            family: `-apple-system, BlinkMacSystemFont`,
          },
        },
        button: { default: {} }, // enabling kind button functionality
      }}
    >
      <Box align="center">
        <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
          {/*  When kind Button include children, it is treated as plain */}
          <Box pad="small" direction="row" align="center" gap="small">
            <Add />
            <Text>Kind</Text>
          </Box>
        </Button>
      </Box>
    </Viewport>
  </Box>
);

export const Plain = () => <PlainButtons />;
export const Active = () => <PlainButtons active />;
