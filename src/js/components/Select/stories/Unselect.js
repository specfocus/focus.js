import React, { useState } from 'react';

import { Box, Button, Viewport, Select } from 'focus';
import { focus } from 'focus/themes';

const optionList = [
  'One',
  'Two',
  'Three',
  'Four',
  'Five',
  'Six',
  'Seven',
  'Eight',
  'Nine',
  'Ten',
];

export const Unselect = () => {
  const [value, setValue] = useState('');

  const onChange = e => {
    setValue(e.value);
  };

  const onClickClearOptions = () => {
    setValue('');
  };

  return (
    <Viewport theme={focus}>
      <Box
        pad="medium"
        direction="row"
        align="center"
        justify="center"
        gap="small"
      >
        <Select
          options={optionList}
          onChange={e => onChange(e)}
          value={value}
          placeholder="Select multiple options"
          multiple
        />
        <Button
          onClick={onClickClearOptions}
          disabled={!value}
          plain
          label="Clear All"
        />
      </Box>
    </Viewport>
  );
};
