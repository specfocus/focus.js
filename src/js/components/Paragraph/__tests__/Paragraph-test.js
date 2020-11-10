import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

import { Viewport } from '../../Viewport';
import { Paragraph } from '..';

test('Paragraph renders', () => {
  const component = renderer.create(
    <Viewport>
      <Paragraph />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph size renders', () => {
  const component = renderer.create(
    <Viewport>
      <Paragraph size="small" />
      <Paragraph size="medium" />
      <Paragraph size="large" />
      <Paragraph size="xlarge" />
      <Paragraph size="xxlarge" />
      <Paragraph fill />
      <Paragraph fill={false} />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph margin renders', () => {
  const component = renderer.create(
    <Viewport>
      <Paragraph margin="small" />
      <Paragraph margin="medium" />
      <Paragraph margin="large" />
      <Paragraph margin="none" />
      <Paragraph margin={{ bottom: 'small' }} />
      <Paragraph margin={{ top: 'small' }} />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

test('Paragraph textAlign renders', () => {
  const component = renderer.create(
    <Viewport>
      <Paragraph textAlign="start" />
      <Paragraph textAlign="center" />
      <Paragraph textAlign="end" />
    </Viewport>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
