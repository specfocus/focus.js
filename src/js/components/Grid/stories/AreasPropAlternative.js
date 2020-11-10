import React from 'react';

import { Viewport, Box, Grid } from 'focus';
import { focus } from 'focus/themes';

export const GridAreasAlternative = () => {
  return (
    <Viewport full theme={focus}>
      <Grid
        rows={['xxsmall', 'medium', 'xsmall']}
        columns={['1/4', '3/4']}
        areas={[
          ['header', 'header'],
          ['sidebar', 'main'],
          ['footer', 'footer'],
        ]}
        gap="small"
      >
        <Box background="brand" gridArea="header">
          Header
        </Box>

        <Box background="light-5" gridArea="sidebar">
          Sidebar
        </Box>

        <Box background="light-2" gridArea="main">
          Main
        </Box>

        <Box background="dark-2" gridArea="footer">
          Footer
        </Box>
      </Grid>
    </Viewport>
  );
};

GridAreasAlternative.story = { name: 'Areas prop alternative' };
