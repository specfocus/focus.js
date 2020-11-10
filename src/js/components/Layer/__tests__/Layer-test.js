import React from 'react';
import 'jest-styled-components';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { getByTestId, queryByTestId } from '@testing-library/dom';

import { createPortal, expectPortal } from '../../../utils/portal';

import { Viewport, Box, Layer } from '../..';
import { LayerContainer } from '../LayerContainer';

const SimpleLayer = () => {
  const [showLayer, setShowLayer] = React.useState(true);

  React.useEffect(() => setShowLayer(false), []);

  let layer;
  if (showLayer) {
    layer = <Layer data-testid="test-dom-removal">This is a test</Layer>;
  }
  return <Box>{layer}</Box>;
};

const FakeLayer = ({ children, dataTestid }) => {
  const [showLayer, setShowLayer] = React.useState(false);

  React.useEffect(() => setShowLayer(true), []);

  let layer;
  if (showLayer) {
    layer = (
      <Layer onEsc={() => setShowLayer(false)}>
        <div data-testid={dataTestid}>
          This is a layer
          <input data-testid="test-input" />
        </div>
      </Layer>
    );
  }
  return (
    <Box>
      {layer}
      {children}
    </Box>
  );
};

const TargetLayer = props => {
  const [target, setTarget] = React.useState();
  let layer;
  if (target) {
    layer = (
      <Layer {...props} target={target}>
        this is a test layer
      </Layer>
    );
  }
  return (
    <Viewport>
      <div ref={setTarget} />
      {layer}
    </Viewport>
  );
};

describe('Layer', () => {
  beforeEach(createPortal);
  afterEach(cleanup);
  const positions = [
    'top',
    'bottom',
    'left',
    'right',
    'start',
    'end',
    'center',
    'top-left',
    'top-right',
    'bottom-left',
    'bottom-right',
  ];

  const fullOptions = [true, false, 'horizontal', 'vertical'];

  positions.forEach(position =>
    fullOptions.forEach(full => {
      test(`position: ${position} - full: ${full}`, () => {
        render(
          <Viewport>
            <Layer id="position-full-test" position={position} full={full}>
              This is a layer
            </Layer>
          </Viewport>,
        );
        expectPortal('position-full-test').toMatchSnapshot();
      });
    }),
  );

  ['none', 'xsmall', 'small', 'medium', 'large'].forEach(margin =>
    test(`margin ${margin}`, () => {
      render(
        <Viewport>
          <Layer id="margin-test" margin={margin}>
            This is a layer
          </Layer>
        </Viewport>,
      );
      expectPortal('margin-test').toMatchSnapshot();
    }),
  );

  test(`custom margin`, () => {
    render(
      <Viewport>
        <Layer
          id="margin-test"
          margin={{ top: '50px', bottom: '40px', left: '30px', right: '20px' }}
        >
          This is a layer
        </Layer>
      </Viewport>,
    );
    expectPortal('margin-test').toMatchSnapshot();
  });

  test('hidden', () => {
    const { rerender } = render(
      <Viewport>
        <Layer id="hidden-test" position="hidden">
          This is a layer
        </Layer>
      </Viewport>,
    );
    expectPortal('hidden-test').toMatchSnapshot();

    rerender(
      <Viewport>
        <Layer id="hidden-test" position="center">
          This is a layer
        </Layer>
      </Viewport>,
    );
    expectPortal('hidden-test').toMatchSnapshot();
  });

  test('plain', () => {
    render(
      <Viewport>
        <Layer id="plain-test" plain>
          This is a plain layer
        </Layer>
      </Viewport>,
    );
    expectPortal('plain-test').toMatchSnapshot();
  });

  test('non-modal', () => {
    render(
      <Viewport>
        <Layer id="non-modal-test" modal={false}>
          This is a non-modal layer
        </Layer>
      </Viewport>,
    );
    expectPortal('non-modal-test').toMatchSnapshot();
  });

  test('dark context', () => {
    render(
      <Viewport>
        <Box background="dark-1">
          <Layer id="non-modal-test" modal={false}>
            This is a non-modal layer
          </Layer>
        </Box>
      </Viewport>,
    );
    expectPortal('non-modal-test').toMatchSnapshot();
  });

  ['slide', 'fadeIn', false, true].forEach(animation =>
    test(`animation ${animation}`, () => {
      render(
        <Viewport>
          <Layer id="animation-test" animation={animation}>
            This is a layer
          </Layer>
        </Viewport>,
      );
      expectPortal('animation-test').toMatchSnapshot();
    }),
  );

  test('invokes onEsc', () => {
    const onEsc = jest.fn();
    render(
      <Viewport>
        <LayerContainer onEsc={onEsc}>
          <input data-testid="test-input" />
        </LayerContainer>
      </Viewport>,
    );

    const inputNode = getByTestId(document, 'test-input');
    fireEvent.keyDown(inputNode, { key: 'Esc', keyCode: 27, which: 27 });
    expect(onEsc).toBeCalled();
  });

  test('is accessible', done => {
    /* eslint-disable jsx-a11y/tabindex-no-positive */
    render(
      <Viewport>
        <FakeLayer dataTestid="test-layer-node">
          <div data-testid="test-body-node">
            <input />
            <input tabIndex="10" />
          </div>
        </FakeLayer>
      </Viewport>,
    );
    /* eslint-enable jsx-a11y/tabindex-no-positive */

    let bodyNode = getByTestId(document, 'test-body-node');
    const layerNode = getByTestId(document, 'test-layer-node');
    const inputNode = getByTestId(document, 'test-input');
    expect(bodyNode).toMatchSnapshot();
    expect(layerNode).toMatchSnapshot();

    fireEvent.keyDown(inputNode, { key: 'Esc', keyCode: 27, which: 27 });
    // because of de-animation, we test both the initial and delayed states
    bodyNode = getByTestId(document, 'test-body-node');
    expect(bodyNode).toMatchSnapshot();
    setTimeout(() => {
      expect(queryByTestId(document, 'test-layer-node')).toBeNull();
      done();
    }, 300);
  });

  test('focus on layer', () => {
    /* eslint-disable jsx-a11y/no-autofocus */
    render(
      <Viewport>
        <Layer data-testid="focus-layer-test">
          <input />
        </Layer>
        <input autoFocus />
      </Viewport>,
    );
    /* eslint-disable jsx-a11y/no-autofocus */

    const layerNode = getByTestId(document, 'focus-layer-test');
    expect(layerNode).toMatchSnapshot();
    expect(document.activeElement.nodeName).toBe('A');
  });

  test('not steal focus from an autofocus focusable element', () => {
    /* eslint-disable jsx-a11y/no-autofocus */
    render(
      <Viewport>
        <Layer data-testid="focus-layer-input-test">
          <input autoFocus data-testid="focus-input" />
          <button type="button">Button</button>
        </Layer>
      </Viewport>,
    );
    /* eslint-disable jsx-a11y/no-autofocus */
    const layerNode = getByTestId(document, 'focus-layer-input-test');
    const inputNode = getByTestId(document, 'focus-input');
    expect(layerNode).toMatchSnapshot();
    expect(document.activeElement).toBe(inputNode);
  });

  test('target', () => {
    render(
      <Viewport>
        <TargetLayer id="target-test">This layer has a target</TargetLayer>
      </Viewport>,
    );
    expectPortal('target-test').toMatchSnapshot();
  });

  test('target not modal', () => {
    render(
      <Viewport>
        <TargetLayer id="target-test" modal={false}>
          This layer has a target
        </TargetLayer>
      </Viewport>,
    );
    expectPortal('target-test').toMatchSnapshot();
  });

  test('unmounts from dom', () => {
    render(
      <Viewport>
        <SimpleLayer />
      </Viewport>,
    );
    setTimeout(() => {
      expect(queryByTestId(document, 'test-dom-removal')).toBeNull();
    }, 1000);
  });

  test('default containerTarget', () => {
    render(
      <Viewport>
        <Layer data-testid="layer">Test</Layer>
      </Viewport>,
    );
    const layer = getByTestId(document, 'layer');
    const actualRoot = layer.parentNode.parentNode.parentNode.parentNode;
    expect(actualRoot).toBe(document.body);
  });

  test('custom containerTarget', () => {
    const target = document.createElement('div');
    document.body.appendChild(target);
    try {
      render(
        <Viewport containerTarget={target}>
          <Layer data-testid="layer">Test</Layer>
        </Viewport>,
      );
      const layer = getByTestId(document, 'layer');
      const actualRoot = layer.parentNode.parentNode.parentNode.parentNode;
      expect(actualRoot).toBe(target);
    } finally {
      document.body.removeChild(target);
    }
  });
});
