import React from 'react';

import { Viewport, Box, DateInput, Text } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  const [value, setValue] = React.useState('');
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box direction="row" align="center" justify="center" pad="large">
        <Text weight="bold">
          {value && new Date(value).toLocaleDateString()}
        </Text>
        <DateInput value={value} onChange={onChange} />
      </Box>
    </Viewport>
  );
};

Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
