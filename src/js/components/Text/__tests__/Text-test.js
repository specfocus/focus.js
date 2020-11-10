import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { Viewport } from '../../Viewport';
import { Text } from '..';

test('should have no accessibility violations', async () => {
  const { container } = render(
    <Viewport>
      <Text a11yTitle="test"> Example</Text>
    </Viewport>,
  );
  const results = await axe(container);
  expect(results).toHaveNoViolations();
  expect(container.firstChild).toMatchSnapshot();
});

test('renders', () => {
  const component = renderer.create(
    <Viewport>
      <Text>text</Text>
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('accepts ref', () => {
  const ref = React.createRef();
  const component = renderer.create(
    <Viewport>
      <Text ref={ref}>text</Text>
    </Viewport>,
    { createNodeMock: el => el },
  );
  expect(ref.current).not.toBeNull();
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders size', () => {
  const component = renderer.create(
    <Viewport>
      <Text size="xsmall" />
      <Text size="small" />
      <Text size="medium" />
      <Text size="large" />
      <Text size="xlarge" />
      <Text size="xxlarge" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders textAlign', () => {
  const component = renderer.create(
    <Viewport>
      <Text textAlign="start" />
      <Text textAlign="center" />
      <Text textAlign="end" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders margin', () => {
  const component = renderer.create(
    <Viewport>
      <Text margin="small" />
      <Text margin="medium" />
      <Text margin="large" />
      <Text margin="none" />
      <Text margin={{ vertical: 'small' }} />
      <Text margin={{ horizontal: 'small' }} />
      <Text margin={{ bottom: 'small' }} />
      <Text margin={{ top: 'small' }} />
      <Text margin={{ left: 'small' }} />
      <Text margin={{ right: 'small' }} />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

const LONG = 'a b c d e f g h i j k l m n o p q r s t u v w x y z';

test('renders truncate', () => {
  const component = renderer.create(
    <Viewport>
      <Text truncate={false}>{LONG}</Text>
      <Text truncate>{LONG}</Text>
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders color', () => {
  const component = renderer.create(
    <Viewport>
      <Text color="status-critical" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders tag', () => {
  const component = renderer.create(
    <Viewport>
      <Text as="div" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('proxies tag', () => {
  const tagComponent = renderer.create(
    <Viewport>
      <Text tag="div" />
    </Viewport>,
  );
  const asComponent = renderer.create(
    <Viewport>
      <Text as="div" />
    </Viewport>,
  );
  expect(tagComponent.toJSON()).toEqual(asComponent.toJSON());
});

test('renders weight', () => {
  const component = renderer.create(
    <Viewport>
      <Text weight="normal" />
      <Text weight="bold" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
