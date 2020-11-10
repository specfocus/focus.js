import React from 'react';

import { Add } from 'grommet-icons';

import { Box, Button, Viewport, Layer, Text } from 'focus';
import { focus } from 'focus/themes';

export const CornerLayer = () => {
  const [open, setOpen] = React.useState();

  const onOpen = () => setOpen(true);

  const onClose = () => setOpen(undefined);

  return (
    <Viewport theme={focus} full>
      <Box fill align="center" justify="center">
        <Button
          icon={<Add color="brand" />}
          label={
            <Text>
              <strong>Add Corner Layer</strong>
            </Text>
          }
          onClick={onOpen}
          plain
        />
      </Box>
      {open && (
        <Layer position="top-right" onClickOutside={onClose}>
          <Box height="small" overflow="auto">
            <Box pad="xlarge">Corner top-right position</Box>
          </Box>
        </Layer>
      )}
    </Viewport>
  );
};

CornerLayer.story = {
  name: 'Corner',
  parameters: {
    chromatic: { disable: true },
  },
};
