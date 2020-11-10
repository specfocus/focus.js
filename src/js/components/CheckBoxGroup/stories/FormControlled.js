import React, { useState } from 'react';

import { Box, Button, CheckBoxGroup, Form, FormField, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const FormControlled = () => {
  const [value, setValue] = useState();

  return (
    <Viewport theme={focus}>
      <Box pad="medium" width="medium">
        <Form
          onSubmit={({ value: values, touched }) =>
            // 'touched' is a single boolean value indication of
            // whether any of the checkboxes had changed.
            console.log('Submit', values, touched)
          }
        >
          <FormField name="controlled">
            <CheckBoxGroup
              id="check-box-group-id"
              name="controlled"
              value={value}
              onChange={({ value: nextValue }) => setValue(nextValue)}
              options={['Maui', 'Jerusalem', 'Wuhan']}
            />
          </FormField>
          <Button type="submit" label="Submit" />
        </Form>
      </Box>
    </Viewport>
  );
};

FormControlled.story = {
  name: 'Form controlled',
};
