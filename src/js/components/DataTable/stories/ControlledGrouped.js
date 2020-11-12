import React, { useState } from 'react';

import { Viewport, DataTable } from 'focus';
import { focus } from 'focus/themes';

// Source code for the data can be found here
// https://github.com/specfocus/focus.js/blob/master/src/js/components/DataTable/stories/data.js
import { columns, DATA } from './data';

const groupColumns = [...columns];
const first = groupColumns[0];
groupColumns[0] = { ...groupColumns[1] };
groupColumns[1] = { ...first };
groupColumns[0].footer = groupColumns[1].footer;
delete groupColumns[1].footer;

export const ControlledGroupedDataTable = () => {
  const [expandedGroups, setExpandedGroups] = useState([DATA[2].location]);

  return (
    <Viewport theme={focus}>
      <DataTable
        columns={groupColumns}
        data={DATA}
        groupBy={{
          property: 'location',
          expand: expandedGroups,
          onExpand: setExpandedGroups,
        }}
        sortable
      />
    </Viewport>
  );
};

ControlledGroupedDataTable.story = {
  name: 'Controlled grouped',
};
