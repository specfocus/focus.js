import React, { useState } from 'react';

import {
  focus,
  Anchor,
  Box,
  DataTable,
  Viewport,
  Heading,
  Paragraph,
  Text,
  Tip,
} from 'focus';
import { Trash, Refresh, Info } from 'grommet-icons';

// Source code for the data can be found here
// https://github.com/specfocus/focus/blob/master/src/js/components/DataTable/stories/data.js
import { storageColumns, storageData } from '../../DataTable/stories/data';

const TipContent = ({ message, icon }) => (
  <Box direction="row" gap="small">
    {icon && <Info color="accent-4" />}
    <Text color="accent-1">{message}</Text>
  </Box>
);

export const HeaderActions = () => {
  const [data, setData] = useState(storageData);
  const [selected, setSelected] = useState();

  const removeRow = () => {
    const filteredData = data.filter(item => item.id !== selected.id);
    setData(filteredData);
    setSelected(undefined);
  };

  return (
    <Viewport full theme={focus}>
      <Box
        align="center"
        background="dark-1"
        gap="large"
        height={{ min: '100%' }}
      >
        <Paragraph textAlign="center">
          <b>Follow</b> the Tips of the Trash & Reload icons for directions.
          Those Tooltips <b>change</b> according to the actions the user perform
          on the table. The Table meters are also using the Tip component.
        </Paragraph>
        <Box gap="small">
          <Box fill direction="row" justify="between" align="center">
            <Heading level={2}> Storage Pools with tooltips</Heading>
            <Box gap="small" direction="row">
              <Tip
                dropProps={{ align: { bottom: 'top' } }}
                content={
                  <TipContent
                    message={
                      !selected
                        ? 'Select a table row to enable'
                        : 'Delete table Row'
                    }
                    icon={!selected}
                  />
                }
              >
                <Anchor
                  disabled={!selected}
                  icon={<Trash />}
                  onClick={removeRow}
                />
              </Tip>
              <Tip
                dropProps={{ align: { bottom: 'top' } }}
                content={
                  <TipContent
                    message={
                      data.length < storageData.length
                        ? 'Reload Data'
                        : 'Delete items before reload action is enabled'
                    }
                    icon={!selected}
                  />
                }
              >
                <Anchor
                  icon={<Refresh />}
                  onClick={() => setData(storageData)}
                  disabled={data.length === storageData.length}
                />
              </Tip>
            </Box>
          </Box>
          <DataTable
            columns={storageColumns}
            data={data}
            step={10}
            onClickRow={event => setSelected(event.datum)}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

HeaderActions.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
