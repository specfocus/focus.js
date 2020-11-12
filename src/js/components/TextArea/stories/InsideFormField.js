import React, { useState } from 'react';

import { Box, Button, Form, FormField, Viewport, Text, TextArea } from 'focus';
import { focus } from 'focus/themes';

export const InsideFormField = () => {
  const [value, setValue] = useState({ name: '', email: '', value: '' });

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Text weight="bold">TextArea as component prop of FormField</Text>
        <Form>
          <FormField
            label="FormField label"
            htmlFor="text-area"
            component={TextArea}
            placeholder="placeholder from FormField"
          />
          <Button type="submit" label="submit" />
        </Form>
      </Box>

      <Box align="center" pad="large">
        <Text weight="bold">TextArea inside FormField</Text>
        <Form
          value={value}
          onChange={nextValue => setValue(nextValue)}
          onSubmit={() => console.log(value)}
        >
          <FormField name="value" label="FormField label" required>
            <TextArea name="value" placeholder="placeholder from TextArea" />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </Viewport>
  );
};

InsideFormField.story = {
  name: 'Inside a FormField',
};
