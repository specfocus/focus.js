import React, { useState } from 'react';

import { Box, Viewport, TextArea } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

const customTheme = deepMerge(focus, {
  textArea: {
    extend: () => `
      font-size: 40px;
      color: red;
    `,
  },
});

export const Themed = () => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Viewport theme={customTheme}>
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
