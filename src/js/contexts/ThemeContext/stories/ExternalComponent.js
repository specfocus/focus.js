import React from 'react';

import { focus } from 'focus/themes';
import { Box, Text, ThemeContext, Viewport } from 'focus';

export const ExternalComponentWithTheme = () => (
  <Viewport theme={focus}>
    <Box background="neutral-3">
      <Text color="light-1">This is a focus component</Text>
    </Box>
    <ThemeContext.Consumer>
      {theme => (
        <div style={{ backgroundColor: theme.global.colors['neutral-3'] }}>
          <p style={{ color: theme.global.colors['light-1'] }}>
            This component is leveraging the focus theme capabilities although
            it is not a focus component
          </p>
        </div>
      )}
    </ThemeContext.Consumer>
  </Viewport>
);

ExternalComponentWithTheme.story = {
  name: 'External components',
};
