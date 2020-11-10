import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Viewport } from '../../Viewport';
import { Markdown } from '..';

const CONTENT = `
# H1

Paragraph

## H2

### H3

#### H4

[a link](#)

> i carry your heart with me

![alt text](//v2.specfocus.com/assets/IMG_4245.jpg "Markdown Image")

Markdown | Less | Pretty
--- | --- | ---
*Still* | \`renders\` | **nicely**
1 | 2 | 3
`;

test('Markdown renders', () => {
  const component = renderer.create(
    <Viewport>
      <Markdown>{CONTENT}</Markdown>
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
