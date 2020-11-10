import React, { useState } from 'react';

import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';
import { Box, Text, ThemeContext, Viewport, Select } from 'focus';

const customTheme = deepMerge(focus, {
  global: {
    focus: {
      border: {
        color: 'red',
      },
      shadow: {
        color: 'red',
      },
    },
  },
});

export const GlobalThemeWithThemeContext = () => {
  const options = ['one', 'two', 'three'];
  const [valueRed, setValueRed] = useState('');
  const [valueBlue, setValueBlue] = useState('');

  return (
    <Viewport theme={customTheme}>
      <Box align="center" pad="large" direction="column" gap="large">
        <Box>
          <Text margin="medium">
            The focus color of this select component is being altered by the
            custom theme that is passed into the Grommet component.
          </Text>
          <Select
            alignSelf="center"
            placeholder="Select"
            value={valueRed}
            options={options}
            onChange={({ option }) => setValueRed(option)}
          />
        </Box>
        <Box>
          <ThemeContext.Extend
            value={{
              global: {
                focus: {
                  border: {
                    color: 'blue',
                  },
                },
              },
            }}
          >
            <Text margin="medium">
              The focus color of this select component is being altered by
              ThemeContext, independent from the custom theme
            </Text>
            <Select
              alignSelf="center"
              placeholder="Select"
              value={valueBlue}
              options={options}
              onChange={({ option }) => setValueBlue(option)}
            />
          </ThemeContext.Extend>
        </Box>
      </Box>
    </Viewport>
  );
};

GlobalThemeWithThemeContext.story = {
  name: 'ThemeContext.Extend',
};
