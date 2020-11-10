import React from 'react';

import { Viewport, Box, Grid } from 'focus';
import { focus } from 'focus/themes';

export const NColumnGrid = () => (
  <Viewport theme={focus} full>
    <Grid
      columns={{
        count: 6,
        size: 'auto',
      }}
      gap="small"
    >
      <Box background="brand">Item 1</Box>
      <Box background="brand">Item 2</Box>
      <Box background="brand">Item 3</Box>
      <Box background="brand">Item 4</Box>
      <Box background="brand">Item 5</Box>
      <Box background="brand">Item 6</Box>
    </Grid>
  </Viewport>
);

NColumnGrid.story = { name: 'N-column layout' };
