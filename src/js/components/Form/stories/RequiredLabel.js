import React from 'react';

import { Box, Button, Form, FormField, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

const FormFieldLabel = props => {
  const { required, label, ...rest } = props;
  return (
    <FormField
      label={
        required ? (
          <Box direction="row">
            <Text>{label}</Text>
            <Text color="status-critical">*</Text>
          </Box>
        ) : (
          label
        )
      }
      required={required}
      {...rest}
    />
  );
};

export const RequiredLabel = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Form>
        <FormFieldLabel name="firstName" label="FirstName" required />
        <FormFieldLabel name="LastName" label="LastName" required />
        <FormFieldLabel name="email" label="Email" />
        <Button type="submit" label="Submit" primary />
        <Text margin={{ left: 'small' }} size="small" color="status-critical">
          * Required Field
        </Text>
      </Form>
    </Box>
  </Viewport>
);

RequiredLabel.story = {
  name: 'Required label',
};
