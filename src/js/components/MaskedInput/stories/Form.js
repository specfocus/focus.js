import React from 'react';

import { Box, Button, Form, FormField, Viewport, MaskedInput } from 'focus';
import { focus } from 'focus/themes';

export const MaskedInputForm = () => {
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
          <FormField name="value" label="url" required>
            <MaskedInput
              name="value"
              mask={[{ fixed: 'https://' }, { regexp: /^.*$/ }]}
            />
          </FormField>
          <Button type="submit" label="submit" />
        </Form>
      </Box>
    </Viewport>
  );
};

MaskedInputForm.story = {
  name: 'Form',
};
