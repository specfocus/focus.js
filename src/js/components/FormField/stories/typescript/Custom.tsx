import React from 'react';

import { Box, FormField, Viewport, TextArea } from 'focus';
import { focus, ThemeType } from 'focus/themes';
import { deepMerge } from 'focus/utils';

// Type annotations can only be used in TypeScript files.
// Remove ': ThemeType' if you are not using Typescript.
const customTheme: ThemeType = {
  global: {
    font: {
      size: '13px',
    },
    input: {
      weight: 400,
    },
  },
  formField: {
    label: {
      color: 'dark-3',
      size: 'xsmall',
      margin: { vertical: '0', bottom: 'small', horizontal: '0' },
      weight: 600,
    },
    border: false,
    margin: '0',
  },
};

export const Custom = () => (
  <Viewport theme={deepMerge(grommet, customTheme)}>
    <Box align="center" pad="large">
      <FormField label="Label" htmlFor="text-area">
        <TextArea id="text-area" placeholder="placeholder" />
      </FormField>
    </Box>
  </Viewport>
);
