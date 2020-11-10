import React from 'react';
import { storiesOf } from '@storybook/react';

import { Viewport, Header, Main, Text } from 'focus';
import { focus } from 'focus/themes';

const Simple = () => (
  <Viewport theme={focus}>
    <Header background="light-4" pad="small">
      <Text size="small">Header</Text>
    </Header>
    <Main pad="small">
      I am Main! Main is a good place to place your content.
    </Main>
  </Viewport>
);

storiesOf('Main', module).add('Simple', () => <Simple />);
