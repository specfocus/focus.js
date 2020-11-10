import React from 'react';
import { Box, Viewport, MaskedInput } from 'focus';
import { focus } from 'focus/themes';

export const CustomBoxMaskedInput = () => {
  const [value, setValue] = React.useState('');
  const [box, setBox] = React.useState();
  const boxRef = React.useCallback(setBox, []);

  return (
    <Viewport full theme={focus}>
      <Box
        direction="row"
        align="center"
        pad={{ horizontal: 'xsmall' }}
        border="all"
        ref={boxRef}
        wrap
      >
        <span role="img" aria-label="Disk size">
          💾
        </span>
        <Box flex width="medium" gap="medium">
          <MaskedInput
            plain
            dropProps={{ target: box }}
            mask={[
              {
                length: [1, 4],
                options: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024],
                regexp: /^\d{1,4}$/,
                placeholder: 'nnn',
              },
              { fixed: ' ' },
              {
                length: 2,
                options: ['MB', 'GB', 'TB'],
                regexp: /^[mgt]b$|^[MGT]B$|^[mMgGtT]$/,
                placeholder: 'gb',
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

CustomBoxMaskedInput.story = {
  name: 'Custom box',
  parameters: {
    chromatic: { disable: true },
  },
};
