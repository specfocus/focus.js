import React, { useState } from 'react';

import { CaretDown } from 'grommet-icons';
import { Box, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

export const Custom = () => {
  const options = ['one', 'two'];
  const [value, setValue] = useState('');

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          value={value}
          options={options}
          onChange={({ option }) => setValue(option)}
          plain
          valueLabel={
            <Box
              background="brand"
              width="small"
              round="small"
              overflow="hidden"
              align="center"
            >
              {value || 'Select...'}
            </Box>
          }
          icon={
            <Box>
              <CaretDown color="black" />
            </Box>
          }
        />
      </Box>
    </Viewport>
  );
};
