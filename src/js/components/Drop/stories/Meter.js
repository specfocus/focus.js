import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, Viewport, Meter } from 'focus';
import { focus } from 'focus/themes';

const TestDrop = () => {
  const targetRef = useRef();

  const [, setShowDrop] = useState(false);
  useEffect(() => setShowDrop(true), []);
  return (
    <Viewport theme={focus} full>
      <Box fill align="center" justify="center" pad="large">
        <Meter
          ref={targetRef}
          size="small"
          background="light-2"
          values={[{ value: 20, color: 'accent-1' }]}
        />
        {targetRef.current && (
          <Drop
            id="test-drop-with-svg"
            plain
            align={{ top: 'bottom', left: 'left' }}
            target={targetRef.current}
          >
            <Box pad="large">target is an svg</Box>
          </Drop>
        )}
      </Box>
    </Viewport>
  );
};

export const SVGChild = () => <TestDrop />;
SVGChild.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
