import React from 'react';

import { Hide, View } from 'grommet-icons';
import { Box, Button, Viewport, TextInput } from 'focus';
import { focus } from 'focus/themes';

export const Password = () => {
  const [value, setValue] = React.useState('');
  const [reveal, setReveal] = React.useState(false);

  return (
    <Viewport full theme={focus}>
      <Box
        width="medium"
        direction="row"
        margin="large"
        align="center"
        round="small"
        border
      >
        <TextInput
          plain
          type={reveal ? 'text' : 'password'}
          value={value}
          onChange={event => setValue(event.target.value)}
        />
        <Button
          icon={reveal ? <View size="medium" /> : <Hide size="medium" />}
          onClick={() => setReveal(!reveal)}
        />
      </Box>
    </Viewport>
  );
};
