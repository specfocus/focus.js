import React, { useEffect, useRef, useState } from 'react';

import { Box, Drop, Viewport } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

const customTheme = deepMerge(focus, {
  global: {
    drop: {
      background: { dark: 'neutral-2', light: 'neutral-2' },
      border: { radius: '10px' },
      zIndex: '13',
    },
  },
});

const CustomDrop = () => {
  const [, setShowDrop] = useState(false);
  const targetRef = useRef();

  useEffect(() => setShowDrop(true), []);
  return (
    <Viewport theme={customTheme} full>
      <Box fill align="center" justify="center">
        <Box
          background="dark-3"
          pad="medium"
          align="center"
          justify="start"
          ref={targetRef}
        >
          Box
        </Box>
        {targetRef.current && (
          <Drop
            align={{ top: 'bottom', left: 'right' }}
            target={targetRef.current}
          >
            <Box pad="small">This Drop uses a custom theme</Box>
          </Drop>
        )}
      </Box>
    </Viewport>
  );
};

export const Custom = () => <CustomDrop />;
