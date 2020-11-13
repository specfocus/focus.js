import React from 'react';
import { FocusLogo } from 'focus/components/FocusLogo';

const Logo = ({ }) => (<FocusLogo />);

Logo.story = {
  name: 'Logo',
};

const Plus = ({ }) => (<FocusLogo translation={1} />);

Plus.story = {
  name: 'Plus',
};

export { Logo, Plus };
