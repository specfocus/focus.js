import React from 'react';

import { Box, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

const suggestions = Array(100)
  .fill()
  .map((_, i) => `suggestion ${i + 1}`);

export const Suggestions = () => {
  const [value, setValue] = React.useState('');

  const onChange = event => setValue(event.target.value);

  const onSelect = event => setValue(event.suggestion);

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <TextInput
            value={value}
            onChange={onChange}
            onSelect={onSelect}
            suggestions={suggestions}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

Suggestions.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
