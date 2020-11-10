import React, { useState } from 'react';

import {
  Box,
  Button,
  CheckBox,
  Form,
  FormField,
  Viewport,
  TextInput,
} from 'focus';
import { focus } from 'focus/themes';

export const DynamicFields = () => {
  const [haveAlias, setHaveAlias] = useState();
  return (
    <Viewport full theme={focus}>
      <Box fill align="center" justify="center">
        <Box width="medium">
          <Form
            onReset={event => console.log(event)}
            onSubmit={({ value }) => console.log('Submit', value)}
          >
            <FormField label="Name" name="name" required>
              <TextInput name="name" />
            </FormField>
            <FormField name="haveAlias">
              <CheckBox
                name="haveAlias"
                label="alias?"
                checked={haveAlias}
                onChange={() => setHaveAlias(!haveAlias)}
              />
            </FormField>
            {haveAlias && (
              <FormField label="Alias" name="alias" required>
                <TextInput name="alias" />
              </FormField>
            )}
            <Box direction="row" justify="between" margin={{ top: 'medium' }}>
              <Button type="reset" label="Reset" />
              <Button type="submit" label="Update" primary />
            </Box>
          </Form>
        </Box>
      </Box>
    </Viewport>
  );
};

DynamicFields.story = {
  name: 'Dynamic fields',
};
