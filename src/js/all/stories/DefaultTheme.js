import React from 'react';
import { storiesOf } from '@storybook/react';

import { base } from 'focus/themes';
import { deepMerge } from 'focus/utils';

import { Box, extendDefaultTheme } from 'focus';

extendDefaultTheme(
  deepMerge(base, {
    global: {
      colors: {
        brand: 'red',
      },
    },
  }),
);

const CustomDefaultProps = () => (
  <Box background="brand" pad="small">
    Hello
  </Box>
);

storiesOf('Theme', module).add('Extend default', () => <CustomDefaultProps />);
