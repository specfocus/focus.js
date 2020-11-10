import React, { useRef, useState } from 'react';

import {
  Box,
  Button,
  Drop,
  DropButton,
  Viewport,
  Layer,
  TextInput,
} from 'focus';
import { focus } from 'focus/themes';

const MultipleDrop = () => {
  const [showDrop, setShowDrop] = useState(false);
  const [showLayer, setShowLayer] = useState(false);
  const targetRef = useRef();

  return (
    <Viewport theme={focus} full>
      <Box fill align="center" justify="center">
        <DropButton
          label="drop button"
          dropAlign={{ right: 'left' }}
          dropContent={
            <Box pad="large">
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          }
        />
        <Button
          ref={targetRef}
          label="button"
          onClick={() => setShowDrop(true)}
        />
        {showDrop && (
          <Drop
            align={{ left: 'right' }}
            target={targetRef.current}
            onClickOutside={() => setShowDrop(false)}
          >
            <Box pad="large">
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          </Drop>
        )}
        <Button label="layer" onClick={() => setShowLayer(!showLayer)} />
        {showLayer && (
          <Layer position="left" modal={false}>
            <Box pad="large" border>
              <TextInput
                value=""
                onChange={() => {}}
                suggestions={['one', 'two']}
              />
            </Box>
          </Layer>
        )}
      </Box>
    </Viewport>
  );
};

export const Multiple = () => <MultipleDrop />;
Multiple.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
