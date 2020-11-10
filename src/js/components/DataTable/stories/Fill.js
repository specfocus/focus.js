import React from 'react';
import { Viewport,, Box, DataTable } from 'focus';
import { focus } from 'focus/themes';
import { deepMerge } from 'focus/utils';

// Source code for the data can be found here
// https://github.com/specfocus/grommet/blob/master/src/js/components/DataTable/stories/data.js
import { columns, data } from './data';

const pinnedColumns = columns.map(c => ({ ...c }));
pinnedColumns[0].pin = true;

const myTheme = deepMerge(focus, {
  table: {
    header: {
      background: {
        color: 'background',
      },
    },
    footer: {
      background: {
        color: 'background-back',
      },
    },
  },
  dataTable: {
    pinned: {
      header: {
        background: {
          color: 'brand',
          opacity: 'medium',
        },
        extend: `backdrop-filter: blur(8px);`,
      },
      footer: {
        background: { color: 'light-2' },
      },
    },
  },
});

export const Fill = () => (
  <Viewport theme={myTheme} full>
    <Box fill="vertical">
      <DataTable
        columns={pinnedColumns}
        data={data}
        step={10}
        fill
        pin
        background={{
          pinned: { color: 'orange' },
        }}
      />
    </Box>
  </Viewport>
);

Fill.story = {
  name: 'Fill and pin',
};
