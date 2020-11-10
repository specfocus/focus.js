import React from 'react';
import { cleanup } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Avatar } from '../../Avatar';
import { Viewport } from '../../Viewport';
import { Sidebar } from '..';

const src = '';

describe('Sidebar', () => {
  afterEach(cleanup);

  test('renders', () => {
    const component = renderer.create(
      <Viewport>
        <Sidebar id="test id" name="test name" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('header', () => {
    const component = renderer.create(
      <Viewport>
        <Sidebar header={<Avatar src={src} />} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('footer', () => {
    const component = renderer.create(
      <Viewport>
        <Sidebar footer={<Avatar src={src} />} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children', () => {
    const component = renderer.create(
      <Viewport>
        <Sidebar>
          <Avatar src={src} />
          children test
        </Sidebar>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('all', () => {
    const component = renderer.create(
      <Viewport>
        <Sidebar
          footer={<Avatar>SY</Avatar>}
          header={<Avatar src={src} />}
          background="brand"
        >
          test all props and children
        </Sidebar>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
