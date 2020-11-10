import React, { Component } from 'react';
import { render } from 'react-dom';

import { focus, Box, Heading, Viewport, Paragraph } from 'focus';

class App extends Component {
  render() {
    return (
      <Viewport theme={focus}>
        <Box pad="small">
          <Heading level={3}>
            <strong>Hello World</strong>
          </Heading>
          <Paragraph>Hello from a Focus page!</Paragraph>
        </Box>
      </Viewport>
    );
  }
}

render(<App />, document.getElementById('root'));
