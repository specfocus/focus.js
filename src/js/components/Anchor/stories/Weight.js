import React from 'react';

import { Anchor, Box, Viewport } from 'focus';
import { focus } from 'focus/themes';

const WeightAnchor = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large" gap="xsmall">
        <Anchor href="#" label="Anchor default weight" />
        <Anchor href="#" label="Anchor weight Normal" weight="normal" />
        <Anchor href="#" label="Anchor weight Bold" weight="bold" />
        <Anchor href="#" label="Anchor weight 200" weight="200" />
        <Anchor href="#" label="Anchor weight 400" weight="400" />
        <Anchor href="#" label="Anchor weight 600" weight="600" />
      </Box>
    </Viewport>
  );
};

export const Weight = () => <WeightAnchor />;
