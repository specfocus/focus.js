import React from 'react';

import { Box, DateInput, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const European = () => {
  const [value, setValue] = React.useState();
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <DateInput format="dd/mm/yyyy" value={value} onChange={onChange} />
        </Box>
      </Box>
    </Viewport>
  );
};

European.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
