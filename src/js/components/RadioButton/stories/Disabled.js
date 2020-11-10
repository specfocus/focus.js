import React from 'react';

import { Viewport, Box, RadioButton } from 'focus';
import { focus } from 'focus/themes';

export const Disabled = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked
          disabled
        />
      </Box>
    </Viewport>
  );
};
