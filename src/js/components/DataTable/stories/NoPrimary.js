import React from 'react';

import { Viewport, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/grommet/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { DATA } from './data';

const columns = [
  { property: 'name', header: 'Name' },
  { property: 'location', header: 'Location' },
];

export const NoPrimaryKeyDataTable = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <DataTable columns={columns} data={DATA} step={10} primaryKey={false} />
    </Box>
  </Viewport>
);

NoPrimaryKeyDataTable.story = {
  name: 'No primary',
};
