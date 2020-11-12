import React, { useState } from 'react';

import { Box, Viewport, TextArea } from 'focus';
import { focus } from 'focus/themes';

const Resize = props => {
  const [value, setValue] = useState('');

  const onChange = event => setValue(event.target.value);

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <TextArea value={value} onChange={onChange} {...props} />
      </Box>
    </Viewport>
  );
};

const Auto = () => <Resize resize="auto" />;

Auto.story = {
  name: 'Auto',
};

const Simple = () => <Resize resize />;

Simple.story = {
  name: 'Simple',
};


const NonResizable = () => <Resize resize={false} />;

NonResizable.story = {
  name: 'Non resizable',
};

export { Auto, Simple, NonResizable };