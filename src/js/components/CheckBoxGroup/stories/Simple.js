import React from 'react';

import { Box, CheckBoxGroup, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  return (
    <Viewport theme={focus}>
      <Box pad="medium">
        <CheckBoxGroup options={['First', 'Second', 'Third']} />
      </Box>
    </Viewport>
  );
};
