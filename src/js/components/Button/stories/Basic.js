import React from 'react';

import { focus, Box, Button, Viewport } from 'focus';

export const Basic = props => (
  <Viewport theme={focus}>
    <Box align="center" pad="medium">
      <Button label="Default" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button label="Anchor" href="#" />
    </Box>
    <Box align="center" pad="medium">
      <Button disabled label="Disabled" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button primary label="Primary" onClick={() => {}} {...props} />
    </Box>
    <Box align="center" pad="medium">
      <Button
        primary
        label="Active Primary"
        active
        onClick={() => {}}
        {...props}
      />
    </Box>
  </Viewport>
);
