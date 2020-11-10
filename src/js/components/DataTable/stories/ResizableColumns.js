import React from 'react';

import { Viewport, Box, DataTable, Heading } from 'focus';
import { focus } from 'focus/themes';

export const DATA = [
  {
    location: 'Winston Salem',
    date: '2018-01-09',
    percent: 24,
    paid: 3425,
  },
  {
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 30,
    paid: 1234,
  },
  {
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 2345,
  },
  {
    location: 'Palo Alto',
    date: '2018-06-11',
    percent: 80,
    paid: 3456,
  },
  {
    location: 'Fort Collins',
    date: '2018-06-10',
    percent: 60,
    paid: 1234,
  },
  {
    location: 'Palo Alto',
    date: '2018-06-09',
    percent: 40,
    paid: 3456,
  },
  {
    location: 'Boise',
    date: '2018-06-11',
    percent: 50,
    paid: 1234,
  },
  {
    location: 'San Francisco',
    date: '2018-06-10',
    percent: 10,
    paid: 2345,
  },
];

const columnsResize = [
  { property: 'location', header: 'Location', size: 'small' },
  { property: 'date', header: 'Date', size: 'small', align: 'end' },
  { property: 'percent', header: 'Percent', size: 'xsmall', align: 'end' },
  { property: 'paid', header: 'Paid', size: 'xsmall', align: 'end' },
];

export const ResizableDataTable = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Heading level="3">Table with resizable & column sizes</Heading>
      <DataTable
        columns={columnsResize}
        data={DATA}
        primaryKey={false}
        resizeable
      />
    </Box>
  </Viewport>
);

ResizableDataTable.story = {
  name: 'Resizable columns',
};
