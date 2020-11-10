import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { findAllByType } from '../../../utils';

import { Viewport } from '../../Viewport';
import { Anchor } from '..';

describe('Anchor', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Viewport>
        <Anchor>Link</Anchor>
      </Viewport>,
    );

    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container).toMatchSnapshot();
  });

  test('renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('renders with children', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor href="#">children</Anchor>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('warns about invalid label render', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    const { container } = render(
      <Viewport>
        <Anchor href="#" label="Test">
          invalid
        </Anchor>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('warns about invalid icon render', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    const { container } = render(
      <Viewport>
        <Anchor href="#" icon={<svg />}>
          invalid
        </Anchor>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Anchor should not have children if icon or label is provided',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('primary renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor href="#" primary label="Test" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focus renders', () => {
    const onFocus = jest.fn();
    const { container, getByText } = render(
      <Viewport>
        <Anchor href="#" label="Test" onFocus={onFocus} />
      </Viewport>,
    );
    fireEvent.focus(getByText('Test'));
    expect(container.firstChild).toMatchSnapshot();
    expect(onFocus).toHaveBeenCalledTimes(1);
  });

  test('blur renders', () => {
    const onBlur = jest.fn();
    const { container, getByText } = render(
      <Viewport>
        <Anchor href="#" label="Test" onBlur={onBlur} />
      </Viewport>,
    );
    fireEvent.blur(getByText('Test'));
    expect(container.firstChild).toMatchSnapshot();
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor disabled />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('icon label renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor icon={<svg />} label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse icon label renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor reverse icon={<svg />} label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('size renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor size="xsmall" />
        <Anchor size="small" />
        <Anchor size="medium" />
        <Anchor size="large" />
        <Anchor size="xlarge" />
        <Anchor size="xxlarge" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('is clickable', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <Viewport>
        <Anchor href="#" label="Test" onClick={onClick} />
      </Viewport>,
    );
    const tree = component.toJSON();

    const anchor = findAllByType(tree, 'a');
    anchor[0].props.onClick();
    expect(onClick).toBeCalled();
  });

  test('renders tag', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor href="#" label="Test" as="span" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('weight renders', () => {
    const component = renderer.create(
      <Viewport>
        <Anchor href="#" label="Normal" weight="normal" />
        <Anchor href="#" label="Bold" weight="bold" />
        <Anchor href="#" label="Bold" weight={500} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
