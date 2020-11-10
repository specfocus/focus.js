import React from 'react';

import { Box, Button, Viewport, Layer } from 'focus';
import { focus } from 'focus/themes';

export const FullLayer = () => {
  const [showLayer, setShowLayer] = React.useState(false);

  return (
    <Viewport theme={focus} full>
      <Box pad="small" fill background="dark-3" align="center" justify="center">
        <Button
          primary
          color="accent-3"
          label="Show"
          onClick={() => setShowLayer(true)}
        />
        {showLayer && (
          <Layer full animation="fadeIn">
            <Box fill background="light-4" align="center" justify="center">
              <Button
                primary
                label="Close"
                onClick={() => setShowLayer(false)}
              />
            </Box>
          </Layer>
        )}
      </Box>
    </Viewport>
  );
};

FullLayer.story = {
  name: 'Full',
  parameters: {
    chromatic: { disable: true },
  },
};
