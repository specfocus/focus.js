import React from 'react';

import { Viewport, Box, DateInput } from 'focus';
import { focus } from 'focus/themes';

export const Format = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Box width="medium">
          <DateInput format="mm/dd/yyyy" value={value} onChange={onChange} />
        </Box>
      </Box>
    </Viewport>
  );
};
