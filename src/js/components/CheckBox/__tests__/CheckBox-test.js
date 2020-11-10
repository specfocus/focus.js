import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { Viewport } from '../../Viewport';
import { CheckBox } from '..';

describe('CheckBox', () => {
  afterEach(cleanup);

  test('should not have accessibility violations', async () => {
    const { container } = render(
      <Viewport>
        <CheckBox a11yTitle="test" />
      </Viewport>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('label should not have accessibility violations', async () => {
    const { container } = render(
      <Viewport>
        <CheckBox label="test" />
      </Viewport>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox />
        <CheckBox id="test id" name="test name" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox label="test label" />
        <CheckBox label={<div>test label</div>} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('checked renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox checked />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox disabled />
        <CheckBox disabled checked />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox reverse label="test label" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('toggle renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox toggle />
        <CheckBox toggle checked />
        <CheckBox toggle label="test label" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate renders', () => {
    const component = renderer.create(
      <Viewport>
        <CheckBox indeterminate />
        <CheckBox indeterminate label="test label" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('indeterminate checked warns', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <Viewport>
        <CheckBox indeterminate checked />
      </Viewport>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox cannot be "checked" and "indeterminate" at the same time.',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('indeterminate toggle warns', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    render(
      <Viewport>
        <CheckBox indeterminate toggle />
      </Viewport>,
    );
    expect(warnSpy).toBeCalledWith(
      'Checkbox of type toggle does not have "indeterminate" state.',
    );

    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('controlled', () => {
    const { container, getByText } = render(
      <Viewport>
        <CheckBox label="test-label" checked />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('test-label'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
