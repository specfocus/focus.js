import React from 'react';

import { ThemeType } from 'focus/themes';
import { focus, Box, Button, Viewport } from 'focus';

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = {
  global: {
    font: {
      family: 'Arial',
    },
  },
  button: {
    border: {
      radius: undefined,
      color: '#2196f3',
    },
    disabled: {
      color: '#fe2693',
      opacity: '.1',
      border: {
        color: '#000000',
        width: '10px',
      },
    },
    padding: {
      vertical: '12px',
      horizontal: '24px',
    },
    primary: {
      color: '#2196f3',
    },
    extend: props => {
      let extraStyles = '';
      if (props.primary) {
        extraStyles = `
          text-transform: uppercase;
        `;
      }
      return `
        color: white;
        font-size: 12px;
        font-weight: bold;

        ${extraStyles}
      `;
    },
  },
};

export const TSCustom = () => (
  <>
    <Viewport theme={customTheme}>
      <Box align="center" pad="large">
        <Button label="custom theme" onClick={() => {}} primary />
      </Box>
    </Viewport>
    <Viewport theme={customTheme}>
      <Box align="center" pad="large">
        <Button label="custom theme disabled" disabled primary />
      </Box>
    </Viewport>
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Button as="span" label="Custom as=span" />
      </Box>
    </Viewport>
  </>
);
TSCustom.story = { name: 'TS-Custom' };
