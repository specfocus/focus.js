import React from 'react';

import { focus, Box, Button, Viewport, Text, Tip } from 'focus';
import { Help as HelpOption, CircleInformation } from 'grommet-icons';

export const Info = () => {
  return (
    <Viewport full theme={focus}>
      <Box
        fill
        background="background-back"
        gap="large"
        pad="large"
        align="start"
      >
        <Tip
          content={
            <Box pad="small" gap="small" width={{ max: 'small' }}>
              <Text weight="bold">Information</Text>
              <>
                <Text size="small">
                  A battle is won by him who is firmly resolved to win it.
                </Text>
                <Text size="small">-Leo Tolstoy</Text>
              </>
            </Box>
          }
          dropProps={{ align: { left: 'right' } }}
        >
          <Button icon={<CircleInformation size="large" />} />
        </Tip>
        <Tip
          plain
          content={
            <Box
              pad="small"
              gap="small"
              width={{ max: 'small' }}
              round="small"
              background="background-front"
              responsive={false}
            >
              <Text weight="bold">Help</Text>
              <Text size="small">
                Help is on the way! Who are you going to call?
              </Text>
            </Box>
          }
          dropProps={{ align: { left: 'right' } }}
        >
          <Button icon={<HelpOption size="large" />} />
        </Tip>
      </Box>
    </Viewport>
  );
};

Info.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
