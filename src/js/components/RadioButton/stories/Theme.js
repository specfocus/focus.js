import React from 'react';

import { Viewport, Box, Button, RadioButton } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

const theme = deepMerge(focus, {
  radioButton: {
    gap: 'xsmall',
    size: '18px',
    hover: {
      border: {
        color: 'dark-3',
      },
    },
    check: {
      color: {
        light: 'neutral-1',
      },
      background: {
        color: 'red',
      },
    },
    icon: {
      size: '10px',
    },
    font: {
      weight: 500,
    },
  },
});

export const ThemeRadioButton = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Viewport theme={theme}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Viewport>
  );
};

ThemeRadioButton.story = {
  name: 'Theme',
};
