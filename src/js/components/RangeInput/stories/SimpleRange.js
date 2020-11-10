import React from 'react';

import { Box, Viewport, RangeInput } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  const [value, setValue] = React.useState(5);

  const onChange = event => setValue(event.target.value);

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <RangeInput value={value} onChange={onChange} />
      </Box>
    </Viewport>
  );
};
