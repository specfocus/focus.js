import React from 'react';

import { Avatar, Anchor, Nav, Viewport, Header } from 'focus';
import { focus } from 'focus/themes';

const gravatarLink =
  '//s.gravatar.com/avatar/b7fb138d53ba0f573212ccce38a7c43b?s=80';

export const Simple = () => (
  <Viewport theme={focus}>
    <Header background="light-4" pad="small">
      <Avatar src={gravatarLink} />
      <Nav direction="row">
        <Anchor label="Home" href="#" />
        <Anchor label="Profile" href="#" />
      </Nav>
    </Header>
  </Viewport>
);
