import React from 'react';
import { Add } from 'grommet-icons';

import { Box, Button, Viewport } from 'focus';
import { focus } from 'focus/themes';

export const IconLabel = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Box round="full" overflow="hidden" background="neutral-1">
        <Button icon={<Add />} hoverIndicator onClick={() => {}} />
      </Box>
      <Box align="center" pad="large" gap="small">
        <Button icon={<Add />} label="Add" onClick={() => {}} primary />
        <Button icon={<Add />} label="Add" onClick={() => {}} />
        <Button icon={<Add />} label="Add" gap="xlarge" onClick={() => {}} />
        <Button
          icon={<Add />}
          label="500px gap"
          gap="500px"
          onClick={() => {}}
        />
      </Box>
    </Box>
  </Viewport>
);

IconLabel.story = { name: 'Icon label' };
