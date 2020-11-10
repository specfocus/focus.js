import React from 'react';

import { Box, Form, FormField, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

export const HelpAndError = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Form>
        <FormField
          label="Label"
          htmlFor="text-input"
          help="Text to help the user know what is possible"
          error="Text to call attention to an issue with this field"
        >
          <TextInput
            id="text-input"
            placeholder="placeholder"
            value="Value"
            onChange={() => {}}
          />
        </FormField>
      </Form>
    </Box>
  </Viewport>
);

HelpAndError.story = {
  name: 'Help and error',
};
