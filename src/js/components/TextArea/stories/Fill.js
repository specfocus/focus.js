import React, { useState } from 'react';

import { Box, Viewport, TextArea } from 'focus';
import { focus } from 'focus/themes';

export const Fill = () => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Viewport theme={focus}>
      <Box
        width="large"
        height="medium"
        border={{ color: 'brand', size: 'medium' }}
      >
        <TextArea value={value} onChange={onChange} fill />
      </Box>
    </Viewport>
  );
};
