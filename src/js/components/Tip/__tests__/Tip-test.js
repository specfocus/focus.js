import React from 'react';
import renderer from 'react-test-renderer';
import { render, fireEvent, waitForElement } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import 'jest-styled-components';
import { axe } from 'jest-axe';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { Box } from '../../Box';
import { Button } from '../../Button';
import { Viewport } from '../../Viewport';
import { Tip } from '../Tip';

describe('Tip', () => {
  test('should have no accessibility violations', async () => {
    const { container } = render(
      <Viewport>
        <Tip content="tooltip content"> Example</Tip>
      </Viewport>,
    );
    const results = await axe(container);
    expect(results).toHaveNoViolations();
    expect(container.firstChild).toMatchSnapshot();
  });

  test(`mouseOver and mouseOut events on the Tip's child`, async () => {
    const { getByText } = render(
      <Viewport>
        <Tip
          content={
            <Box id="tooltip-id" data-testid="tooltip">
              tooltip
            </Box>
          }
        >
          Test Events
        </Tip>
      </Viewport>,
    );

    fireEvent.mouseOver(getByText('Test Events'));
    const tooltip = await waitForElement(() => screen.getByText('tooltip'));
    expect(document.getElementById('tooltip-id')).not.toBeNull();
    expect(tooltip.parentNode.parentNode).toMatchSnapshot();

    fireEvent.mouseOut(getByText('Test Events'));
    expect(document.getElementById('tooltip-id')).toBeNull();
  });

  test(`focus and blur events on the Tip's child`, async () => {
    const { container, getByText } = render(
      <Viewport>
        <Tip content="tooltip">
          <Button label="Test Events" />
        </Tip>
      </Viewport>,
    );

    fireEvent.focus(getByText('Test Events'));
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.blur(getByText('Test Events'));
    expect(container.firstChild).toMatchSnapshot();
  });

  test('plain', async () => {
    const { getByText } = render(
      <Viewport>
        <Tip plain content="tooltip">
          Example
        </Tip>
      </Viewport>,
    );

    // Styles of plain are captured in snapshots only when applying mouseOver
    fireEvent.mouseOver(getByText('Example'));
    const tooltip = await waitForElement(() => screen.getByText('tooltip'));
    expect(tooltip.parentNode.parentNode).toMatchSnapshot();
  });

  test(`dropProps should pass props to Drop`, async () => {
    const { getByText } = render(
      <Viewport>
        <Tip
          dropProps={{
            plain: false, // should display box-shadow
          }}
          content="hello dropProps"
        >
          Test dropProps
        </Tip>
      </Viewport>,
    );

    fireEvent.mouseOver(getByText('Test dropProps'));
    const tooltip = await waitForElement(() =>
      screen.getByText('hello dropProps'),
    );
    expect(tooltip.parentNode.parentNode).toMatchSnapshot();
  });

  test(`should work with a child that isn't a React Element`, () => {
    const component = renderer.create(
      <Viewport>
        <Tip content="Hello">Not React Element</Tip>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test(`throw error with more than one child`, () => {
    console.error = jest.fn();
    expect(() => {
      renderer.create(
        <Viewport>
          <Tip>
            <Box>1</Box>
            <Box>2</Box>
          </Tip>
        </Viewport>,
      );
    }).toThrow(
      `React.Children.only expected to receive a single React element child.`,
    );
  });

  test(`throw error with more than one non React Element`, () => {
    console.error = jest.fn();
    expect(() => {
      renderer.create(
        <Viewport>
          <Tip>123 {false}</Tip>
        </Viewport>,
      );
    }).toThrow(
      `React.Children.only expected to receive a single React element child.`,
    );
  });
});
