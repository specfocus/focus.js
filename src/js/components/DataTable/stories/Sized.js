import React from 'react';

import { Viewport,, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/specfocus/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

export const SizedDataTable = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={data} size="medium" />
    </Box>
  </Viewport>
);

SizedDataTable.story = {
  name: 'Sized',
};
