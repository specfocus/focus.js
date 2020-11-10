import React from 'react';
import { Box, Viewport, MaskedInput } from 'focus';
import { focus } from 'focus/themes';

export const UrlMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium" gap="medium">
          <MaskedInput
            mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

UrlMaskedInput.story = {
  name: 'URL',
  parameters: {
    chromatic: { disable: true },
  },
};
