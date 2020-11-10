import React from 'react';
import 'jest-styled-components';
import { cleanup, render, fireEvent } from '@testing-library/react';

import { Viewport } from '../../Viewport';
import { DataTable } from '..';

describe('DataTable', () => {
  afterEach(cleanup);

  test('empty', () => {
    const { container } = render(
      <Viewport>
        <DataTable />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('basic', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('!primaryKey', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey={false}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('paths', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b.c', header: 'B' },
          ]}
          data={[
            { a: 'one', b: { c: 1 } },
            { a: 'two', b: { c: 2 } },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('primaryKey', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          primaryKey="b"
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('footer', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sortable', () => {
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sortable
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('onSort', () => {
    const onSort = jest.fn();
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          onSort={onSort}
          sortable
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(onSort).toBeCalledWith(
      expect.objectContaining({ property: 'a', direction: 'asc' }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sort={{ property: 'a', direction: 'asc' }}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort nested object', () => {
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b.value',
              header: 'Value',
              render: datum => datum.b && datum.b.value,
            },
          ]}
          data={[
            { a: 'zero', b: { value: 1 } },
            { a: 'one', b: { value: 2 } },
            { a: 'two', b: { value: 3 } },
          ]}
          sort={{ property: 'b.value', direction: 'asc' }}
        />
      </Viewport>,
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    fireEvent.click(getByText('Value'));

    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');

    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort nested object with onSort', () => {
    const onSort = jest.fn();
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b.value',
              header: 'Value',
              render: datum => datum.b && datum.b.value,
            },
          ]}
          data={[
            { a: 'zero', b: { value: 1 } },
            { a: 'one', b: { value: 2 } },
            { a: 'two', b: { value: 3 } },
          ]}
          onSort={onSort}
          sort={{ property: 'b.value', direction: 'asc' }}
        />
      </Viewport>,
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('1');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('3');

    fireEvent.click(getByText('Value'));

    expect(onSort).toBeCalledWith(
      expect.objectContaining({ property: 'b.value' }),
    );

    expect(container.querySelectorAll('td').item(0).textContent).toBe('3');
    expect(container.querySelectorAll('td').item(1).textContent).toBe('2');
    expect(container.querySelectorAll('td').item(2).textContent).toBe('1');

    expect(container.firstChild).toMatchSnapshot();
  });

  test('sort external', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'zero', b: 0 },
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          sort={{ property: 'a', direction: 'asc', external: true }}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('search', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[{ property: 'a', header: 'A', search: true }]}
          data={[{ a: 'Alpha' }, { a: 'beta' }, { a: '[]' }]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(container.querySelector('[aria-label="Open search by a"]'));
    const searchInput = container.querySelector('[name="search-a"]');
    expect(document.activeElement).toBe(searchInput);
    fireEvent.change(searchInput, {
      target: { value: '[' },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  test('resizeable', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          resizeable
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('aggregate', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'b',
              header: 'B',
              aggregate: 'sum',
              footer: { aggregate: true },
            },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('aggregate with nested object', () => {
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            {
              property: 'obj.value',
              header: 'object',
              aggregate: 'sum',
              footer: { aggregate: true },
            },
            {
              property: 'obj2.value',
              header: 'object 2',
              render: datum => datum.obj2.value,
            },
          ]}
          data={[
            { a: 'one', obj: { value: 1 }, obj2: { value: 10 } },
            { a: 'two', obj: { value: 2 }, obj2: { value: 20 } },
          ]}
        />
      </Viewport>,
    );
    expect(getByText('3')).toBeTruthy();
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy', () => {
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy="a"
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('click', () => {
    const onClickRow = jest.fn();
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          onClickRow={onClickRow}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByText('beta'));
    expect(onClickRow).toBeCalledWith(
      expect.objectContaining({ datum: { a: 'beta' } }),
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('background', () => {
    const { container } = render(
      <Viewport>
        {[
          'accent-1',
          ['accent-1', 'accent-2'],
          { header: 'accent-1', body: 'accent-2', footer: 'accent-3' },
        ].map(background => (
          <DataTable
            key={JSON.stringify(background)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            background={background}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('border', () => {
    const { container } = render(
      <Viewport>
        {[
          true,
          'top',
          { color: 'accent-1', side: 'top', size: 'small' },
          {
            header: 'top',
            body: { color: 'accent-1', side: 'top', size: 'small' },
          },
        ].map(border => (
          <DataTable
            key={JSON.stringify(border)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            border={border}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pad', () => {
    const { container } = render(
      <Viewport>
        {[
          'small',
          { vertical: 'small', horizontal: 'medium' },
          {
            header: 'small',
            body: { vertical: 'small', horizontal: 'medium' },
          },
        ].map(pad => (
          <DataTable
            key={JSON.stringify(pad)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pad={pad}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('rowProps', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A', footer: 'Total' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
          rowProps={{
            one: { background: 'accent-1', border: 'bottom', pad: 'large' },
          }}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy property', () => {
    const { container, getByText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          groupBy={{ property: 'a' }}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    const headerCell = getByText('A');
    fireEvent.click(headerCell, {});
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy expand', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          groupBy={{ property: 'a', expand: ['one'] }}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('groupBy onExpand', () => {
    const onExpand = jest.fn(groupState => groupState);
    const { getAllByLabelText } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          groupBy={{ property: 'a', onExpand }}
        />
      </Viewport>,
    );

    const expandButtons = getAllByLabelText('expand');
    fireEvent.click(expandButtons[1], {});

    expect(onExpand).toBeCalled();
    expect(onExpand.mock.results[0].value).toEqual(['one']);
    expect(onExpand.mock.results[0].value).toMatchSnapshot();
  });

  test('replace', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A' },
            { property: 'b', header: 'B' },
          ]}
          data={[
            { a: 'one', b: 1.1 },
            { a: 'one', b: 1.2 },
            { a: 'two', b: 2.1 },
            { a: 'two', b: 2.2 },
          ]}
          primaryKey="b"
          step={2}
          replace
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('themeColumnSizes', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: 'medium' },
            { property: 'b', header: 'B', size: 'small' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('absoluteColumnSizes', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '400px' },
            { property: 'b', header: 'B', size: '200px' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('relativeColumnSizes', () => {
    const { container } = render(
      <Viewport>
        <DataTable
          columns={[
            { property: 'a', header: 'A', size: '2/3' },
            { property: 'b', header: 'B', size: '1/3' },
          ]}
          data={[
            { a: 'one', b: 1 },
            { a: 'two', b: 2 },
          ]}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('fill', () => {
    const { container } = render(
      <Viewport>
        {[true, 'horizontal', 'vertical'].map(fill => (
          <DataTable
            key={JSON.stringify(fill)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total' },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            fill={fill}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pin', () => {
    const { container } = render(
      <Viewport>
        {[true, 'header', 'footer'].map(pin => (
          <DataTable
            key={JSON.stringify(pin)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total', pin: true },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pin={pin}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('pin + background', () => {
    const theme = {
      dataTable: {
        pinned: {
          header: {
            background: {
              color: 'blue',
            },
          },
          footer: {
            background: {
              color: 'green',
            },
          },
        },
      },
    };

    const { container } = render(
      <Viewport theme={theme}>
        {[true, 'header', 'footer'].map(pin => (
          <DataTable
            background={{ pinned: 'red' }}
            key={JSON.stringify(pin)}
            columns={[
              { property: 'a', header: 'A', footer: 'Total', pin: true },
              { property: 'b', header: 'B' },
            ]}
            data={[
              { a: 'one', b: 1 },
              { a: 'two', b: 2 },
            ]}
            pin={pin}
          />
        ))}
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  test('select', () => {
    const onSelect = jest.fn();
    const { container, getByLabelText } = render(
      <Viewport>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          primaryKey="a"
          select={['alpha']}
          onSelect={onSelect}
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    fireEvent.click(getByLabelText('select beta'));
    expect(onSelect).toBeCalledWith(expect.arrayContaining(['alpha', 'beta']));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('custom theme', () => {
    const customTheme = {
      dataTable: {
        header: {
          background: 'skyblue',
          border: {
            color: 'brand',
            size: 'medium',
          },
          gap: 'none',
          pad: { horizontal: 'small', vertical: 'xsmall' },
          font: {
            weight: 'bold',
          },
          hover: {
            background: {
              color: 'light-2',
            },
          },
        },
        resize: {
          hover: {
            border: {
              color: 'red',
              side: 'end',
              size: 'xsmall',
            },
          },
        },
      },
    };

    const { container, getByLabelText } = render(
      <Viewport theme={customTheme}>
        <DataTable
          columns={[{ property: 'a', header: 'A' }]}
          data={[{ a: 'alpha' }, { a: 'beta' }]}
          primaryKey="a"
          select={['alpha']}
          sortable
          resizeable
        />
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.mouseOver(getByLabelText('select beta'));
    expect(container.firstChild).toMatchSnapshot();
  });
});
