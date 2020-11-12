import React, { useContext } from 'react';

import {
  focus,
  Box,
  Card,
  Grid,
  Viewport,
  ResponsiveContext,
  Text,
} from 'focus';

const cards = Array(20)
  .fill()
  // eslint-disable-next-line react/no-array-index-key
  .map((_, i) => <Text key={i}>{`Card ${i}`}</Text>);

export const Example = () => {
  const size = useContext(ResponsiveContext);
  return (
    <Viewport theme={focus}>
      <Box pad="large">
        <Grid columns={size !== 'small' ? 'small' : '100%'} gap="small">
          {cards.map((card, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Card pad="large" key={index}>
              {card}
            </Card>
          ))}
        </Grid>
      </Box>
    </Viewport>
  );
};

Example.story = { name: 'Responsive cards' };
