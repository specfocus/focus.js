import React from 'react';
import { Box, Viewport, MaskedInput } from 'focus';
import { focus } from 'focus/themes';

const IPv4ElementExp = /^[0-1][0-9][0-9]$|^2[0-4][0-9]$|^25[0-5]$|^[0-9][0-9]$|^[0-9]$/;

export const IPv4RangeMaskedInput = () => {
  const [value, setValue] = React.useState('');

  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="start" pad="large">
        <Box width="medium">
          <MaskedInput
            mask={[
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: ' - ' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
              { fixed: '.' },
              {
                length: [1, 3],
                regexp: IPv4ElementExp,
                placeholder: 'xxx',
              },
            ]}
            value={value}
            onChange={event => setValue(event.target.value)}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

IPv4RangeMaskedInput.story = {
  name: 'IPv4 range',
};
