import React from 'react';

import { Viewport, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/specfocus/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

export const GroupedDataTable = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <DataTable
        columns={groupColumns}
        data={DATA}
        groupBy="location"
        sortable
      />
    </Box>
  </Viewport>
);

GroupedDataTable.story = {
  name: 'Grouped',
};
