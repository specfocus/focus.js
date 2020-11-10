import React from 'react';
import renderer from 'react-test-renderer';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Viewport } from '../../Viewport';
import { Grid } from '..';

describe('Grid', () => {
  test('renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('a11yTitle renders', () => {
    const { container, getByLabelText } = render(
      <Viewport>
        <Grid a11yTitle="My Grid" />
      </Viewport>,
    );
    const gridWithLabel = getByLabelText('My Grid');
    expect(gridWithLabel).toBeTruthy();
    expect(container).toMatchSnapshot();
  });

  test('rows renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid rows={[['small', 'medium'], 'large', 'medium']} />
        <Grid rows={['small', 'large', 'medium']} />
        <Grid rows="small" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('rows renders with warning', () => {
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    const component = renderer.create(
      <Viewport>
        <Grid rows={['flex']} fill={false} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(warnSpy).toHaveBeenCalledWith(
      'Grid needs `fill` when using fractional row sizes',
    );
  });

  test('columns renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid columns={['1/2', '2/4']} />
        <Grid columns={['1/3', '2/3']} />
        <Grid columns={['1/4', '3/4']} />
        <Grid columns={[['1/2', '2/4'], '1/4', '3/4']} />
        <Grid columns="small" />
        <Grid columns="flex" />
        <Grid columns={{ count: 'fit', size: 'small' }} />
        <Grid columns={{ count: 'fill', size: ['small', 'medium'] }} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('areas renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid
          rows={['xxsmall', 'medium', 'xsmall']}
          columns={['3/4', '1/4']}
          areas={[
            { name: 'header', start: [0, 0], end: [0, 1] },
            { name: 'main', start: [1, 0], end: [1, 0] },
            { name: 'sidebar', start: [1, 1], end: [1, 1] },
            { name: 'footer', start: [2, 0], end: [2, 1] },
          ]}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('areas renders with warning and throws error', () => {
    console.error = jest.fn();
    console.warn = jest.fn();
    const warnSpy = jest.spyOn(console, 'warn');
    expect(() => {
      renderer.create(
        <Viewport>
          <Grid
            rows={['xxsmall', 'medium', 'xsmall']}
            columns="small"
            areas={[
              { name: 'header', start: [0, 0], end: [0, 1] },
              { name: 'main', start: [1, 0], end: [1, 0] },
              { name: 'sidebar', start: [1, 1], end: [1, 1] },
              { name: 'footer', start: [2, 0], end: [2, 1] },
            ]}
          />
        </Viewport>,
      );
    }).toThrow('props.columns.map is not a function');
    expect(warnSpy).toHaveBeenCalledWith(
      'Grid `areas` requires `rows` and `columns` to be arrays.',
    );
  });

  test('areas renders when given an array of string arrays', () => {
    const component = renderer.create(
      <Viewport>
        <Grid
          rows={['xxsmall', 'medium', 'xsmall']}
          columns={['3/4', '1/4']}
          areas={[
            ['header', 'header'],
            ['sidebar', 'main'],
            ['footer', 'footer'],
          ]}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('justify renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid justify="start" />
        <Grid justify="center" />
        <Grid justify="end" />
        <Grid justify="stretch" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('align renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid align="start" />
        <Grid align="center" />
        <Grid align="end" />
        <Grid align="stretch" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('justifyContent renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid justifyContent="start" />
        <Grid justifyContent="center" />
        <Grid justifyContent="between" />
        <Grid justifyContent="around" />
        <Grid justifyContent="end" />
        <Grid justifyContent="stretch" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('alignContent renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid alignContent="start" />
        <Grid alignContent="center" />
        <Grid alignContent="between" />
        <Grid alignContent="around" />
        <Grid alignContent="end" />
        <Grid alignContent="stretch" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('gap renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid gap="small" />
        <Grid gap="medium" />
        <Grid gap="large" />
        <Grid gap={{ row: 'small' }} />
        <Grid gap={{ row: 'medium' }} />
        <Grid gap={{ row: 'large' }} />
        <Grid gap={{ column: 'small' }} />
        <Grid gap={{ column: 'medium' }} />
        <Grid gap={{ column: 'large' }} />
        <Grid gap={{ row: 'small', column: 'medium' }} />
        <Grid gap={{ test: 'test' }} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid fill />
        <Grid fill={false} />
        <Grid fill="horizontal" />
        <Grid fill="vertical" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('responsive', () => {
    const component = renderer.create(
      <Viewport>
        <Grid responsive />
        <Grid responsive={false} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('as renders', () => {
    const component = renderer.create(
      <Viewport>
        <Grid as="article" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('proxies tag', () => {
    const tagComponent = renderer.create(
      <Viewport>
        <Grid tag="article" />
      </Viewport>,
    );
    const asComponent = renderer.create(
      <Viewport>
        <Grid as="article" />
      </Viewport>,
    );
    expect(tagComponent.toJSON()).toEqual(asComponent.toJSON());
  });

  test('pad', () => {
    const component = renderer.create(
      <Viewport>
        <Grid pad="small" />
        <Grid pad="medium" />
        <Grid pad="large" />
        <Grid pad={{ horizontal: 'small' }} />
        <Grid pad={{ vertical: 'small' }} />
        <Grid pad={{ bottom: 'small' }} />
        <Grid pad={{ left: 'small' }} />
        <Grid pad={{ right: 'small' }} />
        <Grid pad={{ start: 'small' }} />
        <Grid pad={{ end: 'small' }} />
        <Grid pad={{ top: 'small' }} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('border', () => {
    const component = renderer.create(
      <Viewport>
        <Grid border="all" />
        <Grid border="horizontal" />
        <Grid border="vertical" />
        <Grid border="top" />
        <Grid border="left" />
        <Grid border="bottom" />
        <Grid border="right" />
        <Grid border={{ color: 'accent-1' }} />
        <Grid border={{ side: 'all' }} />
        <Grid border={{ size: 'xsmall' }} />
        <Grid border={{ size: 'small' }} />
        <Grid border={{ size: 'medium' }} />
        <Grid border={{ size: 'large' }} />
        <Grid border={{ size: 'xlarge' }} />
        <Grid border={{ style: 'dotted' }} />
        <Grid border={{ style: 'double' }} />
        <Grid border={{ style: 'dashed' }} />
        <Grid
          border={[
            { side: 'top', color: 'accent-1', size: 'medium', style: 'dotted' },
            { side: 'left', color: 'accent-2', size: 'large', style: 'dashed' },
          ]}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
