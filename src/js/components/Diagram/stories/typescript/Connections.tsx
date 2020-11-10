import React from 'react';

import { Gremlin, IceCream } from 'grommet-icons';
import { Stack, grommet, Viewport, Box, Diagram } from 'focus';

import { DiagramConnectionAnchor, DiagramConnectionType } from '../../index';

// Type annotations can only be used in TyoeScript files.
// Remove ':DiagramConnection...' if not using TypeScript.
const anchor: DiagramConnectionAnchor = 'horizontal';
const type: DiagramConnectionType = 'curved';

const connection = {
  id: 'shimi',
  anchor,
  color: 'accent-1',
  thickness: 'xsmall',
  type,
  toTarget: 'yummy',
  fromTarget: 'gremlin',
  round: true,
};

const connections = [connection];

export const Connections = () => {
  return (
    <Viewport theme={focus}>
      <Stack>
        <Box fill pad="xlarge">
          <Box align="start">
            <Gremlin id="gremlin" color="neutral-2" size="xlarge" />
          </Box>
          <Box align="end" pad={{ vertical: 'large' }}>
            <IceCream id="yummy" color="neutral-2" size="xlarge" />
          </Box>
        </Box>
        <Diagram connections={connections} />
      </Stack>
    </Viewport>
  );
};
