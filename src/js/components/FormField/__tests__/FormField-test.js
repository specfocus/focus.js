import React from 'react';
import renderer from 'react-test-renderer';
import styled from 'styled-components';
import 'jest-styled-components';
import 'jest-axe/extend-expect';
import 'regenerator-runtime/runtime';

import { axe } from 'jest-axe';
import { cleanup, render } from '@testing-library/react';
import { Alert, StatusInfo } from 'grommet-icons';
import { Viewport } from '../../Viewport';
import { Form } from '../../Form';
import { FormField } from '..';
import { TextInput } from '../../TextInput';

const CustomFormField = styled(FormField)`
  font-size: 40px;
`;

describe('FormField', () => {
  afterEach(cleanup);

  test(`should have no accessibility violations`, async () => {
    const { container } = render(
      <Viewport>
        <FormField />
      </Viewport>,
    );
    const results = await axe(container);
    expect(container.firstChild).toMatchSnapshot();
    expect(results).toHaveNoViolations();
  });

  test('default', () => {
    const component = renderer.create(
      <Viewport>
        <FormField />
        <FormField>
          <TextInput />
        </FormField>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('label', () => {
    const component = renderer.create(
      <Viewport>
        <FormField label="test label" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('help', () => {
    const component = renderer.create(
      <Viewport>
        <FormField help="test help" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('error', () => {
    const component = renderer.create(
      <Viewport>
        <FormField error="test error" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('info', () => {
    const component = renderer.create(
      <Viewport>
        <FormField info="test info" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('htmlFor', () => {
    const component = renderer.create(
      <Viewport>
        <FormField htmlFor="test-id" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('margin', () => {
    const component = renderer.create(
      <Viewport>
        <FormField margin="medium" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('empty margin', () => {
    const component = renderer.create(
      <Viewport>
        <FormField margin="none" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad', () => {
    const component = renderer.create(
      <Viewport>
        <FormField pad />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField htmlFor="test-id" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('abut with margin', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            border: {
              color: 'border',
              error: {
                color: {
                  dark: 'white',
                  light: 'status-critical',
                },
              },
              size: 'large',
              position: 'outer',
              side: 'all',
            },
            margin: { bottom: 'small' },
          },
        }}
      >
        <FormField margin="medium" htmlFor="test-id" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom formfield', () => {
    const component = renderer.create(
      <Viewport>
        <CustomFormField htmlFor="test-id" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled', () => {
    const component = renderer.create(
      <Viewport>
        <FormField disabled /> {/* don't use FormField without Form */}
        <Form>
          <FormField disabled />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('required', () => {
    const component = renderer.create(
      <Viewport>
        <FormField required /> {/* don't use FormField without Form */}
        <Form>
          <FormField required />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom label', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            label: {
              color: 'red',
              size: 'small',
              margin: 'xsmall',
              weight: 600,
            },
          },
        }}
      >
        <Form>
          <FormField label="label" />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('disabled with custom label', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            label: {
              color: 'red',
              size: 'small',
              margin: 'xsmall',
              weight: 600,
            },
            disabled: {
              label: {
                color: 'teal',
              },
            },
          },
        }}
      >
        <Form>
          <FormField disabled label="label" />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad with border undefined', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            border: undefined,
            content: {
              pad: 'large',
            },
          },
        }}
      >
        <Form>
          <FormField label="label" pad />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom input margin', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            content: {
              margin: { vertical: 'large' },
            },
          },
        }}
      >
        <Form>
          <FormField label="label" />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('contentProps', () => {
    const component = renderer.create(
      <Viewport>
        <Form>
          <FormField
            label="label"
            contentProps={{
              border: false,
            }}
          />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('custom error and info icon and container', () => {
    const component = renderer.create(
      <Viewport
        theme={{
          formField: {
            error: {
              icon: <Alert />,
              container: {
                background: {
                  color: 'green',
                },
              },
            },
            info: {
              icon: <StatusInfo />,
              container: {
                pad: { horizontal: 'large' },
              },
            },
          },
        }}
      >
        <Form>
          <FormField
            label="label"
            error="This is an error message."
            info="Here is a little added info on FormField."
            contentProps={{
              border: false,
            }}
          />
        </Form>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
