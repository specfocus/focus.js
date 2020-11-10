import React from 'react';

import { Box, Viewport, WorldMap } from 'focus';
import { focus } from 'focus/themes';

export const Continents = () => {
  const [active, setActive] = React.useState();
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <WorldMap
          continents={[
            {
              name: 'Africa',
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Africa</Box>}
      </Box>
    </Viewport>
  );
};
