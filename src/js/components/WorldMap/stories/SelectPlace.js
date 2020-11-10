import React from 'react';

import { Box, Viewport, WorldMap } from 'focus';
import { focus } from 'focus/themes';

export const SelectPlace = () => {
  const [places, setPlaces] = React.useState();

  const onSelectPlace = place => {
    setPlaces([{ color: 'graph-1', location: place }]);
  };

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <WorldMap onSelectPlace={onSelectPlace} places={places} />
      </Box>
    </Viewport>
  );
};

SelectPlace.story = {
  name: 'Select place',
  parameters: {
    chromatic: { disable: true },
  },
};
