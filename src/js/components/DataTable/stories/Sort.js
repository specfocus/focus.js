import React from 'react';

import { Viewport, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/specfocus/focus.js/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

export const Sort = () => {
  const [sort, setSort] = React.useState({
    property: 'name',
    direction: 'desc',
  });
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns.map(c => ({
            ...c,
            search: c.property === 'name' || c.property === 'location',
          }))}
          data={DATA}
          sort={sort}
          onSort={setSort}
          resizeable
        />
      </Box>
    </Viewport>
  );
};
