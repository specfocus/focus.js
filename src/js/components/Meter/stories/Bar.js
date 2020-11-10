import React from 'react';

import { Grommet, Box, Meter } from 'grommet';
import { grommet } from 'grommet/themes';

export const Bar = () => {
  const value = 30;

  return (
    <Grommet theme={grommet}>
      <Box align="center" pad="large">
        <Meter type="bar" background="light-2" values={[{ value }]} />
      </Box>
    </Grommet>
  );
};
