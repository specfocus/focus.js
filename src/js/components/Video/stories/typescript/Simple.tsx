import React from 'react';

import { Box, Viewport, Video } from 'focus';
import { focus } from 'focus/themes';

const SimpleVideo = props => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Video {...props}>
        <source src="small.mp4" type="video/mp4" />
        <source
          src="http://techslides.com/demos/sample-videos/small.webm"
          type="video/webm"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.ogv"
          type="video/ogg"
        />
        <source
          src="http://techslides.com/demos/sample-videos/small.3gp"
          type="video/3gp"
        />
      </Video>
    </Box>
  </Viewport>
);

export const Simple = () => <SimpleVideo />;
export const ControlsBelow = () => <SimpleVideo controls="below" />;

ControlsBelow.story = {
  name: 'Controls below',
};
