import React from 'react';

import { Box, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput value={value} onChange={onChange} />
        </Box>
      </Box>
    </Viewport>
  );
};

Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
