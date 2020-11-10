import React from 'react';

import { Anchor, Viewport, Nav } from 'focus';
import { focus } from 'focus/themes';

const items = [
  { label: 'Item A', href: '#' },
  { label: 'Item B', href: '#' },
  { label: 'Item C', href: '#' },
  { label: 'Item D', href: '#' },
];

const SimpleNav = () => (
  <Viewport theme={focus}>
    <Nav pad="large">
      {items.map(item => (
        <Anchor href={item.href} label={item.label} key={item.label} />
      ))}
    </Nav>
  </Viewport>
);

export const Simple = () => <SimpleNav />;
