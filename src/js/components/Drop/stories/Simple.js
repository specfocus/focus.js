import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, Viewport } from 'focus';
import { focus } from 'focus/themes';

const SimpleDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => {
    setShowDrop(true);
  }, []);

  return (
    <Viewport theme={focus} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Target
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">Drop Contents</Box>
          </Drop>
        )}
      </Box>
    </Viewport>
  );
};

export const Simple = () => <SimpleDrop />;
Simple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
