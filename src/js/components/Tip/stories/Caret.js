import React from 'react';

import { focus, Box, Button, Viewport,, Heading, Text, Tip } from 'focus';
import { Trash } from 'grommet-icons';

const TipContent = ({ message }) => (
  <Box direction="row" align="center">
    <svg viewBox="0 0 22 22" version="1.1" width="22px" height="22px">
      <polygon
        fill="grey"
        points="6 2 18 12 6 22"
        transform="matrix(-1 0 0 1 30 0)"
      />
    </svg>
    <Box background="grey" direction="row" pad="small" round="xsmall">
      <Text color="accent-1">{message}</Text>
    </Box>
  </Box>
);

export const Caret = () => {
  return (
    <Viewport full theme={focus}>
      <Box align="center" justify="center" background="dark-1" fill gap="large">
        <Heading textAlign="center" level="1" size="xsmall">
          Tooltip is styled with a Caret
        </Heading>
        <Box>
          <Box fill direction="row" justify="between">
            <Tip
              dropProps={{ align: { left: 'right' } }}
              content={<TipContent message="Designed with an SVG of Caret" />}
              plain
            >
              <Button icon={<Trash />} plain={false} />
            </Tip>
          </Box>
        </Box>
      </Box>
    </Viewport>
  );
};

Caret.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
