import React from 'react';

import { Viewport, Box, Button, RadioButton } from 'focus';
import { focus } from 'focus/themes';

export const Simple = () => {
  const [selected, setSelected] = React.useState();

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large" gap="large">
        <RadioButton
          label="option 1"
          name="name"
          value="option 1"
          checked={selected === 'option 1'}
          onChange={event => setSelected(event.target.value)}
        />

        <Button label="clear" onClick={() => setSelected(undefined)} />
      </Box>
    </Viewport>
  );
};
