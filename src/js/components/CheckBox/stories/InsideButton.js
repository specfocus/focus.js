import React, { useState } from 'react';

import { Box, Button, CheckBox, Viewport, Text } from 'focus';
import { focus } from 'focus/themes';

export const InsideButton = () => {
  const [checked, setChecked] = useState(false);
  const onButtonClick = () => setChecked(!checked);
  const onCheckboxChange = () => {};

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Button hoverIndicator="background" onClick={onButtonClick}>
          <CheckBox
            tabIndex="-1"
            checked={checked}
            label={<Text>Hi</Text>}
            onChange={onCheckboxChange}
          />
        </Button>
      </Box>
    </Viewport>
  );
};

InsideButton.story = {
  name: 'Inside a Button',
};
