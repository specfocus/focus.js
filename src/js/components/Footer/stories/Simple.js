import React from 'react';

import { Box, Footer, grommet, Viewport, Main, Text } from 'focus';

export const Simple = () => (
  <Viewport theme={focus}>
    <Main background="light-2" elevation="large" pad="large" gap="large">
      <Text margin="small" size="xsmall">
        Main Content
      </Text>
      <Box flex />
    </Main>
    <Footer background="light-4" justify="center" pad="small">
      <Text textAlign="center" size="small">
        © 2019 Copyright Focus
      </Text>
    </Footer>
  </Viewport>
);
