import { describe } from 'react-desc';

import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Nav => {
  const DocumentedNav = describe(Nav)
    .availableAt(getAvailableAtBadge('Nav'))
    .description('Is a Box container for navigation links')
    .usage(
      `import { Nav } from 'focus';
<Nav />`,
    );

  return DocumentedNav;
};
