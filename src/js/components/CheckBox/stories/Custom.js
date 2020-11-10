import React, { useState } from 'react';

import { Box, Viewport, CheckBox } from 'focus';
import { focus } from 'focus/themes';
import { normalizeColor, deepMerge } from 'focus/utils';

import { FormCheckmark } from 'grommet-icons';

const customCheckBoxTheme = {
  checkBox: {
    border: {
      color: {
        light: 'accent-2',
      },
      // width: 'xsmall',
      radius: '2px',
    },
    check: {
      extend: ({ theme, checked }) => `
        ${checked && `background-color: ${normalizeColor('neutral-1', theme)};`}
        `,
    },
    color: {
      light: 'neutral-3',
      dark: 'neutral-3',
    },
    gap: 'xsmall',
    hover: {
      border: {
        color: undefined,
      },
    },
    icon: {
      size: '18px',
      extend: 'stroke: white;',
    },
    icons: {
      checked: FormCheckmark,
    },
    size: '18px',
    extend: `
      color: #9C9C9C;
    `,
  },
};

export const Custom = props => {
  const [checked, setChecked] = useState(false);

  return (
    <Viewport theme={deepMerge(grommet, customCheckBoxTheme)}>
      <Box align="center" pad="large">
        <CheckBox
          {...props}
          label="Choice"
          checked={checked}
          onChange={event => setChecked(event.target.checked)}
        />
      </Box>
    </Viewport>
  );
};
