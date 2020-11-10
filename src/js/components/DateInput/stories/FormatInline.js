import React from 'react';

import { Viewport, Box, DateInput } from 'focus';
import { focus } from 'focus/themes';

export const FormatInline = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <DateInput
          format="mm/dd/yyyy"
          inline
          value={value}
          onChange={onChange}
        />
      </Box>
    </Viewport>
  );
};

FormatInline.story = {
  name: 'Format inline',
};
