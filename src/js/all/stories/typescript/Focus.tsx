import React from 'react';
import { storiesOf } from '@storybook/react';

import { deepMerge } from 'focus/utils';

import {
  focus,
  Anchor,
  Box,
  Button,
  Viewport,
  Menu,
  Text,
  TextInput,
} from 'focus';

const customFocus = deepMerge(focus, {
  global: {
    colors: {
      focus: 'neutral-3',
    },
  },
});

const CustomFocusFC = () => (
  <Viewport theme={customFocus}>
    <Box pad="small" gap="medium" width="medium">
      <Text>
        Focus on the input components and notice the custom focus color
      </Text>
      <TextInput placeholder="hi" />
      <Anchor href="">Anchor</Anchor>
      <Menu
        label="Menu"
        items={[{ label: 'One', onClick: () => {} }, { label: 'Two' }]}
      />
      <Button label="Button" onClick={() => {}} />
    </Box>
  </Viewport>
);

storiesOf('Theme', module).add('Focus', () => <CustomFocusFC />);
