import React from 'react';

import { Box, Button, Collapsible, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

export const Default = props => {
  const [open, setOpen] = React.useState(false);

  return (
    <Viewport theme={focus}>
      <Box align="start" gap="small">
        <Button primary onClick={() => setOpen(!open)} label="Toggle" />
        <Collapsible open={open} {...props}>
          <Box
            background="light-2"
            round="medium"
            pad="medium"
            align="center"
            justify="center"
          >
            <Text>This is a box inside a Collapsible component</Text>
          </Box>
        </Collapsible>
        <Text>This is other content outside the Collapsible box</Text>
      </Box>
    </Viewport>
  );
};

Default.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
