import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, Viewport } from 'focus';
import { focus } from 'focus/themes';

const PlainDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => setShowDrop(true), []);
  return (
    <Viewport theme={focus} full>
      <Box background="brand" fill align="center" justify="center">
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
            plain
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">No background no shadow</Box>
          </Drop>
        )}
      </Box>
    </Viewport>
  );
};

export const Plain = () => <PlainDrop />;
Plain.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
