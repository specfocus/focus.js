import React from 'react';

import { Viewport, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/specfocus/focus.js/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

export const Select = () => {
  const [select, setSelect] = React.useState([]);
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <DataTable
          columns={columns}
          data={DATA}
          step={10}
          select={select}
          onSelect={setSelect}
        />
      </Box>
    </Viewport>
  );
};
