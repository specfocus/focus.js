import React from 'react';

import { Viewport, Box, Button, RadioButton } from 'focus';
import { Ascend } from 'grommet-icons';
import { focus } from 'focus/themes';

export const Children = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        >
          {({ checked }) => (
            <Ascend color={checked ? 'brand' : 'status-unknown'} />
          )}
        </RadioButton>

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Viewport>
  );
};
