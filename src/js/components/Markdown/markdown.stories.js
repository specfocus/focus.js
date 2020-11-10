import React from 'react';
import styled from 'styled-components';

import { Box, Viewport, Markdown } from 'focus';
import { focus } from 'focus/themes';

const CONTENT = `
  # Out of Breath

  You know, sometimes in life it seems like there's no way out. Like
  a sheep trapped in a maze designed by wolves. See all the
  options [here](https://github.com/probablyup/markdown-to-jsx/)

  [reference](#)

\`\`\`
import { Viewport } from 'focus';
\`\`\`

  > i carry your heart with me

  ![alt text](//v2.specfocus.com/assets/IMG_4245.jpg "Markdown Image")

  Markdown | Less | Pretty
  --- | --- | ---
  *Still* | \`renders\` | **nicely**
  1 | 2 | 3
`;

export const Simple = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Markdown>{CONTENT}</Markdown>
    </Box>
  </Viewport>
);

const StyledPre = styled.pre`
  background-color: #7d4cdb;
`;

export const ComponentOverrideMarkdown = () => (
  <Viewport theme={focus}>
    <Box align="center" pad="large">
      <Markdown components={{ pre: StyledPre }}>{CONTENT}</Markdown>
    </Box>
  </Viewport>
);

ComponentOverrideMarkdown.story = {
  name: 'Component override markdown',
};

export default {
  title: 'Type/Markdown',
};
