import React from 'react';

import { Box, Button, DateInput, Form, FormField, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const DateForm = () => {
  const [value, setValue] = React.useState({ value: '' });
  const onChange = nextValue => {
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Form
          value={value}
          onChange={onChange}
          onSubmit={({ value: nextValue }) => {
            console.log(nextValue);
            setValue({ value: '' });
          }}
        >
          <FormField name="value" label="value" required>
            <DateInput name="value" format="mm/dd/yyyy" />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </Viewport>
  );
};

DateForm.story = {
  name: 'Form',
};
