import React, { useState } from 'react';

import { Box, Button, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

export const Controlled = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');
  const [open, setOpen] = useState(false);

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large" gap="small">
        <Button onClick={() => setOpen(!open)} label="Control the select" />
        <Select
          id="select"
          name="select"
          placeholder="Select"
          open={open}
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
        />
      </Box>
    </Viewport>
  );
};
