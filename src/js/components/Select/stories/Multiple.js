import React, { useState } from 'react';

import { Box, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

const options = ['one', 'two'];

export const Multiple = () => {
  const [value, setValue] = useState(['one']);

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          placeholder="Select"
          multiple
          closeOnChange={false}
          value={value}
          options={options}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </Viewport>
  );
};

Multiple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
