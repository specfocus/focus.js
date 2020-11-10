import React, { useState } from 'react';

import { Box, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

export const Dark = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <Viewport full theme={focus}>
      <Box fill background="dark-1" align="center" justify="center">
        <Select
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </Viewport>
  );
};
