import React from 'react';
import renderer from 'react-test-renderer';

import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { Add, Next } from 'grommet-icons';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { findAllByType } from '../../../utils';
import { Viewport, Button, Text } from '../..';

describe('Button', () => {
  afterEach(cleanup);

  test('should have no accessibility violations', async () => {
    const { container, getByText } = render(
      <Viewport>
        <Button a11yTitle="Test button" label="Test" onClick={() => {}} />
      </Viewport>,
    );

    fireEvent.click(getByText('Test'));
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('basic', () => {
    const component = renderer.create(
      <Viewport>
        <Button label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children function', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}}>{() => <Text>Test</Text>}</Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('children function with disabled prop', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}} disabled>
          {({ disabled }) => <Text>{disabled ? 'Disabled' : 'Test'}</Text>}
        </Button>
        <Button onClick={() => {}}>
          {({ disabled }) => <Text>{disabled ? 'Disabled' : 'Test'}</Text>}
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('warns about invalid label', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    const { container } = render(
      <Viewport>
        <Button label="Test" onClick={() => {}}>
          invalid
        </Button>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Button should not have children if icon or label is provided',
    );
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('warns about invalid icon', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    const { container } = render(
      <Viewport>
        <Button icon={<svg />} onClick={() => {}}>
          invalid
        </Button>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Button should not have children if icon or label is provided',
    );
    warnSpy.mockReset();
    warnSpy.mockRestore();
    console.warn.mockReset();
  });

  test('primary', () => {
    const component = renderer.create(
      <Viewport>
        <Button primary label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('color', () => {
    const component = renderer.create(
      <Viewport>
        <Button color="accent-1" label="Test" onClick={() => {}} />
        <Button color="accent-1" primary label="Test" onClick={() => {}} />
        <Button color="#111111" primary label="Test" onClick={() => {}} />
        <Button color="#123" primary label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill', () => {
    const component = renderer.create(
      <Viewport>
        <Button>
          <Button fill />
          <Button fill={false} />
          <Button fill="horizontal" />
          <Button fill="vertical" />
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('focus', () => {
    const { container, getByText } = render(
      <Viewport>
        <Button label="Test" onClick={() => {}} />
      </Viewport>,
    );

    fireEvent.focus(getByText('Test'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Viewport>
        <Button disabled />
        <Button disabled primary label="Button" />
        <Button disabled label="Button" />
        <Button disabled plain label="Button" />
        <Button disabled plain={false} label="Button" />
        <Button disabled icon={<svg />} />
        <Button disabled icon={<svg />} plain />
        <Button disabled icon={<svg />} plain={false} />
        <Button disabled icon={<svg />} label="Button" />
        <Button disabled icon={<svg />} label="Button" plain />
        <Button disabled icon={<svg />} label="Button" primary />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('active', () => {
    const component = renderer.create(
      <Viewport>
        <Button active label="Button" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('active + primary', () => {
    const component = renderer.create(
      <Viewport>
        <Button active primary label="Button" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('icon label', () => {
    const component = renderer.create(
      <Viewport>
        <Button icon={<svg />} label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('reverse icon label', () => {
    const component = renderer.create(
      <Viewport>
        <Button reverse icon={<svg />} label="Test" onClick={() => {}} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('href', () => {
    const component = renderer.create(
      <Viewport>
        <Button href="test" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hoverIndicator background', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}} hoverIndicator="background">
          hoverIndicator
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hoverIndicator as object with color', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}} hoverIndicator={{ color: 'brand' }}>
          hoverIndicator
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hoverIndicator as object with invalid color', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}} hoverIndicator={{ color: 'invalid' }}>
          hoverIndicator
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('hoverIndicator color', () => {
    const component = renderer.create(
      <Viewport>
        <Button onClick={() => {}} hoverIndicator="dark-3">
          hoverIndicator
        </Button>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onClick', () => {
    const onClick = jest.fn();
    const component = renderer.create(
      <Viewport>
        <Button label="Test" onClick={onClick} />
      </Viewport>,
    );
    const tree = component.toJSON();

    const button = findAllByType(tree, 'button');
    button[0].props.onClick();
    expect(onClick).toBeCalled();
  });

  test('size', () => {
    const component = renderer.create(
      <Viewport>
        <Button size="small" label="Small" />
        <Button size="medium" label="Medium" />
        <Button label="Default" />
        <Button size="large" label="Large" />
        <Button primary size="small" label="Small" />
        <Button primary size="medium" label="Medium" />
        <Button primary label="Default" />
        <Button primary size="large" label="Large" />
        <Button size="small" icon={<Add />} primary />
        <Button size="medium" icon={<Add />} primary />
        <Button icon={<Add />} primary />
        <Button size="large" icon={<Add />} primary />
        <Button size="small" label="Small" icon={<Next />} reverse />
        <Button size="medium" label="Medium" icon={<Next />} reverse />
        <Button label="Default" icon={<Next />} reverse />
        <Button size="large" label="Large" icon={<Next />} reverse />
      </Viewport>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('as', () => {
    const component = renderer.create(
      <Viewport>
        <Button as="span" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`disabled state cursor should indicate the button cannot be 
  clicked`, () => {
    const { getByText } = render(
      <Viewport>
        <Button disabled label="Button" />
      </Viewport>,
    );

    const button = getByText('Button');
    // eslint-disable-next-line no-underscore-dangle
    const cursorStyle = window.getComputedStyle(button)._values.cursor;
    expect(cursorStyle).not.toBe('pointer');
    expect(cursorStyle).toBe('default');
  });
});
