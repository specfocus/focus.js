import React, { useState } from 'react';

import { Box, FormField, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

const allOptions = Array(100)
  .fill()
  .map((_, i) => `option ${i + 1}`);

export const Simple = () => {
  const [value, setValue] = useState('');

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <FormField label="Label" htmlFor="select">
          <Select
            id="select"
            placeholder="placeholder"
            options={allOptions}
            value={value}
            onChange={({ option }) => setValue(option)}
          />
        </FormField>
      </Box>
    </Viewport>
  );
};
