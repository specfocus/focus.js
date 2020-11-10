import React from 'react';

import { Box, Form, Viewport, TextInput, Text } from 'focus';
import { focus } from 'focus/themes';

export const StyledPlaceholder = () => {
  return (
    <Viewport full theme={focus}>
      <Box>
        <Form>
          <TextInput name="name" placeholder={<Text>placeholder</Text>} />
        </Form>
      </Box>
    </Viewport>
  );
};

StyledPlaceholder.story = {
  name: 'Styled placeholder',
};
