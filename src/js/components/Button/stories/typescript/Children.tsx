import React from 'react';

import { focus, Box, Button, Viewport, Text } from 'focus';
import { Add } from 'grommet-icons';

const ButtonWithChildren = props => (
  <Button hoverIndicator="light-1" onClick={() => {}} {...props}>
    {({ disabled, hover, focus }) => (
      <Box pad="small" direction="row" align="center" gap="small">
        {hover || disabled ? <Add color="brand" /> : <Add />}
        {focus ? (
          <Text>Child Button is focused</Text>
        ) : (
          <Text color={disabled && 'control'}>Child Button</Text>
        )}
      </Box>
    )}
  </Button>
);

export const Children = () => {
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="medium" gap="medium">
        <ButtonWithChildren />
        <ButtonWithChildren disabled />
      </Box>
    </Viewport>
  );
};
