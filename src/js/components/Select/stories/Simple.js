import React, { useState } from 'react';

import { Box, Viewport, Select, Text } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large" gap="medium">
        <Text weight="bold">Enabled</Text>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
        <Text weight="bold">Disabled</Text>
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          disabled
        />
      </Box>
    </Viewport>
  );
};
