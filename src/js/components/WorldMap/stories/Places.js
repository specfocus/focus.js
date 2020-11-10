import React from 'react';

import { Box, Viewport, WorldMap } from 'focus';
import { focus } from 'focus/themes';

export const Places = () => {
  const [active, setActive] = React.useState();
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <WorldMap
          places={[
            {
              name: 'Sydney',
              location: [-33.8830555556, 151.216666667],
              color: 'graph-1',
              onClick: () => setActive(!active),
            },
          ]}
        />
        {active && <Box margin="large">Sydney</Box>}
      </Box>
    </Viewport>
  );
};
