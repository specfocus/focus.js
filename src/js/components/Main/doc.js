import { describe } from 'react-desc';

import { getAvailableAtBadge } from '../../utils/mixins';

export const doc = Main => {
  const DocumentedMain = describe(Main)
    .availableAt(getAvailableAtBadge('Main'))
    .description('main content of a document.')
    .usage(
      `import { Main } from 'focus';
<Main />`,
    );

  return DocumentedMain;
};
