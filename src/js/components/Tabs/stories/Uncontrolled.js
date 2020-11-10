import React from 'react';
import PropTypes from 'prop-types';

import { Attraction, Car, TreeOption } from 'grommet-icons';
import { Box, Viewport, Tab, Tabs } from 'focus';
import { focus } from 'focus/themes';

const UncontrolledTabs = ({ plain = false }) => (
  <Viewport theme={focus} full>
    <Box fill>
      <Tabs flex>
        <Tab plain={plain} title="Tab 1">
          <Box fill pad="large" align="center" background="accent-1">
            <Attraction size="xlarge" />
          </Box>
        </Tab>
        <Tab plain={plain} title="Tab 2">
          <Box fill pad="large" align="center" background="accent-2">
            <TreeOption size="xlarge" />
          </Box>
        </Tab>
        <Tab plain={plain} title="Tab 3">
          <Box fill pad="large" align="center" background="accent-3">
            <Car size="xlarge" />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  </Viewport>
);

UncontrolledTabs.propTypes = {
  plain: PropTypes.bool, // eslint-disable-line react/require-default-props
};

export const Uncontrolled = () => <UncontrolledTabs />;
export const Plain = () => <UncontrolledTabs plain />;
