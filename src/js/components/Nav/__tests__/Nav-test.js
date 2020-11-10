import React from 'react';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { render, cleanup } from '@testing-library/react';

import { Viewport, Nav } from '../..';

describe('Nav', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Viewport>
        <Nav />
      </Viewport>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });
});
