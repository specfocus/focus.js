import React, { useState } from 'react';

import { Box, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

const objectOptions = [
  {
    label: 'Male',
    value: 1,
  },
  {
    label: 'Female',
    value: 2,
  },
  {
    label: 'Non Binary',
    value: 3,
  },
  {
    label: 'Other',
    value: 4,
  },
];

export const ObjectOptions = () => {
  const [value, setValue] = useState('');

  return (
    <Viewport theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Select
          id="select"
          name="select"
          placeholder="Select"
          labelKey="label"
          valueKey={{ key: 'value', reduce: true }}
          value={value}
          options={objectOptions}
          onChange={({ value: nextValue }) => setValue(nextValue)}
        />
      </Box>
    </Viewport>
  );
};

ObjectOptions.story = {
  name: 'Object options',
  parameters: {
    chromatic: { disable: true },
  },
};
