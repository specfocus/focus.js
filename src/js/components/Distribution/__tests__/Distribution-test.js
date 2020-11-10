import React from 'react';
import 'jest-styled-components';
import { render } from '@testing-library/react';

import { Viewport } from '../../Viewport';
import { Distribution } from '..';

describe('Distribution', () => {
  test('renders', () => {
    const { container } = render(
      <Viewport>
        <Distribution values={[]} />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('values renders', () => {
    const { container } = render(
      <Viewport>
        <Distribution
          values={[{ value: 20 }, { value: 3 }, { value: 2 }, { value: 1 }]}
        >
          {value => <span>{value.value}</span>}
        </Distribution>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('gap renders', () => {
    const { container } = render(
      <Viewport>
        {['xsmall', 'small', 'medium', 'large'].map(gap => (
          <Distribution
            key={gap}
            gap={gap}
            values={[{ value: 3 }, { value: 2 }, { value: 1 }]}
          >
            {value => <span>{value.value}</span>}
          </Distribution>
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
