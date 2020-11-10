import React from 'react';
import renderer from 'react-test-renderer';
import { cleanup, fireEvent, render } from '@testing-library/react';
import 'jest-styled-components';

import { Viewport } from '../../Viewport';
import { Box } from '..';

describe('Box', () => {
  afterEach(cleanup);

  test('default', () => {
    const component = renderer.create(
      <Viewport>
        <Box />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('direction', () => {
    const component = renderer.create(
      <Viewport>
        <Box direction="row" />
        <Box direction="row-responsive" />
        <Box direction="column" />
        <Box direction="column-reverse" />
        <Box direction="row-reverse" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('responsive', () => {
    const component = renderer.create(
      <Viewport>
        <Box responsive />
        <Box responsive={false} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('wrap', () => {
    const component = renderer.create(
      <Viewport>
        {[true, false, 'reverse'].map(wrap => (
          <Box key={`${wrap}`} wrap={wrap} />
        ))}
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('justify', () => {
    const component = renderer.create(
      <Viewport>
        <Box justify="start" />
        <Box justify="center" />
        <Box justify="between" />
        <Box justify="around" />
        <Box justify="evenly" />
        <Box justify="end" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('align', () => {
    const component = renderer.create(
      <Viewport>
        <Box align="start" />
        <Box align="center" />
        <Box align="baseline" />
        <Box align="stretch" />
        <Box align="end" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('alignContent', () => {
    const component = renderer.create(
      <Viewport>
        <Box alignContent="start" />
        <Box alignContent="center" />
        <Box alignContent="between" />
        <Box alignContent="around" />
        <Box alignContent="stretch" />
        <Box alignContent="end" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('alignSelf', () => {
    const component = renderer.create(
      <Viewport>
        <Box alignSelf="start" />
        <Box alignSelf="center" />
        <Box alignSelf="stretch" />
        <Box alignSelf="end" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  /* eslint-disable max-len */
  test('background', () => {
    const component = renderer.create(
      <Viewport>
        <Box background="brand" />
        <Box background="accent-1" />
        <Box background="neutral-1" />
        <Box background="light-1" />
        <Box background="dark-1" />
        <Box background="status-critical" />
        <Box background="#aabbcc" />
        <Box background="#def" />
        <Box background="rgb(90, 80, 50)" />
        <Box background="rgba(200, 100, 150, 0.8)" />
        <Box background="hsl(10, 50%, 20%)" />
        <Box background="hsla(10, 50%, 70%, 0.7)" />
        <Box background="url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)" />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            dark: false,
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            dark: true,
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            position: 'top center',
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            opacity: 'strong',
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            color: 'accent-1',
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            size: 'contain',
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            repeat: 'repeat',
          }}
        />
        <Box
          background={{
            image:
              'url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAMAAAADCAYAAABWKLW/AAAABGdBTUEAALGPC/xhBQAAAA9JREFUCB1jYMAC/mOIAQASFQEAlwuUYwAAAABJRU5ErkJggg==)',
            opacity: 0.5,
          }}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
  /* eslint-enable max-len */

  test('basis', () => {
    const component = renderer.create(
      <Viewport>
        <Box>
          <Box basis="xsmall" />
          <Box basis="small" />
          <Box basis="medium" />
          <Box basis="large" />
          <Box basis="xlarge" />
        </Box>
        <Box direction="row">
          <Box basis="full" />
        </Box>
        <Box direction="row">
          <Box basis="1/2" />
          <Box basis="2/4" />
        </Box>
        <Box direction="row">
          <Box basis="1/3" />
          <Box basis="2/3" />
        </Box>
        <Box direction="row">
          <Box basis="1/4" />
          <Box basis="3/4" />
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('flex', () => {
    const component = renderer.create(
      <Viewport>
        <Box>
          <Box flex />
          <Box flex={false} />
          <Box flex="grow" />
          <Box flex="shrink" />
          <Box flex={{ grow: 2 }} />
          <Box flex={{ shrink: 2 }} />
          <Box flex={{ grow: 2, shrink: 2 }} />
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('fill', () => {
    const component = renderer.create(
      <Viewport>
        <Box>
          <Box fill />
          <Box fill={false} />
          <Box fill="horizontal" />
          <Box fill="vertical" />
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('gap', () => {
    const component = renderer.create(
      <Viewport>
        {['xsmall', 'small', 'medium', 'large', '80px', 'none'].map(gap => (
          <Box key={gap} gap={gap} direction="row">
            <Box />
          </Box>
        ))}
        <Box as="span" gap="small">
          <span>first</span>
          <span>second</span>
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('margin', () => {
    const component = renderer.create(
      <Viewport>
        <Box margin="small" />
        <Box margin="medium" />
        <Box margin="large" />
        <Box margin={{ horizontal: 'small' }} />
        <Box margin={{ vertical: 'small' }} />
        <Box margin={{ bottom: 'small' }} />
        <Box margin={{ left: 'small' }} />
        <Box margin={{ right: 'small' }} />
        <Box margin={{ start: 'small' }} />
        <Box margin={{ end: 'small' }} />
        <Box margin={{ top: 'small' }} />
        <Box margin={{ top: 'small', left: 'medium', horizontal: 'large' }} />
        <Box margin={{ top: 'small', vertical: 'large' }} />
        <Box
          margin={{
            horizontal: 'large',
            vertical: 'large',
            left: 'small',
          }}
        />
        <Box
          margin={{
            top: 'small',
            right: 'small',
            left: 'small',
            bottom: 'small',
          }}
        />
        <Box
          margin={{
            left: 'small',
            right: 'medium',
            bottom: 'large',
            top: 'small',
            horizontal: 'medium',
            vertical: 'small',
          }}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('pad', () => {
    const component = renderer.create(
      <Viewport>
        <Box pad="small" />
        <Box pad="medium" />
        <Box pad="large" />
        <Box pad={{ horizontal: 'small' }} />
        <Box pad={{ vertical: 'small' }} />
        <Box pad={{ bottom: 'small' }} />
        <Box pad={{ left: 'small' }} />
        <Box pad={{ right: 'small' }} />
        <Box pad={{ start: 'small' }} />
        <Box pad={{ end: 'small' }} />
        <Box pad={{ top: 'small' }} />
        <Box pad={{ top: 'small', left: 'medium', horizontal: 'large' }} />
        <Box pad={{ horizontal: 'large', vertical: 'large' }} />
        <Box
          pad={{
            top: 'small',
            right: 'medium',
            horizontal: 'small',
            vertical: 'large',
          }}
        />
        <Box
          pad={{
            top: 'medium',
            right: 'medium',
            left: 'medium',
            bottom: 'medium',
            horizontal: 'small',
          }}
        />
        <Box
          pad={{
            left: 'small',
            right: 'medium',
            bottom: 'large',
            top: 'small',
            horizontal: 'medium',
            vertical: 'small',
          }}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('gridArea', () => {
    const component = renderer.create(
      <Viewport>
        <Box gridArea="header" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('round', () => {
    const component = renderer.create(
      <Viewport>
        <Box round />
        <Box round="xsmall" />
        <Box round="small" />
        <Box round="medium" />
        <Box round="large" />
        <Box round="full" />
        <Box round={{ corner: 'left' }} />
        <Box round={{ corner: 'top' }} />
        <Box round={{ corner: 'right' }} />
        <Box round={{ corner: 'bottom' }} />
        <Box round={{ corner: 'top-left' }} />
        <Box round={{ corner: 'top-right' }} />
        <Box round={{ corner: 'bottom-left' }} />
        <Box round={{ corner: 'bottom-right' }} />
        <Box round={{ size: 'xsmall' }} />
        <Box round={{ size: 'small' }} />
        <Box round={{ size: 'medium' }} />
        <Box round={{ size: 'large' }} />
        <Box round={{ size: 'xlarge' }} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('border', () => {
    const component = renderer.create(
      <Viewport>
        <Box border="all" />
        <Box border="horizontal" />
        <Box border="vertical" />
        <Box border="top" />
        <Box border="left" />
        <Box border="bottom" />
        <Box border="right" />
        <Box border={{ color: 'accent-1' }} />
        <Box border={{ side: 'all' }} />
        <Box border={{ size: 'xsmall' }} />
        <Box border={{ size: 'small' }} />
        <Box border={{ size: 'medium' }} />
        <Box border={{ size: 'large' }} />
        <Box border={{ size: 'xlarge' }} />
        <Box border={{ style: 'dotted' }} />
        <Box border={{ style: 'double' }} />
        <Box border={{ style: 'dashed' }} />
        <Box
          border={[
            { side: 'top', color: 'accent-1', size: 'medium', style: 'dotted' },
            { side: 'left', color: 'accent-2', size: 'large', style: 'dashed' },
          ]}
        />
        <Box border="between" gap="small">
          <Box>one</Box>
          <Box>two</Box>
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('elevation', () => {
    const component = renderer.create(
      <Viewport>
        <Box elevation="none" />
        <Box elevation="xsmall" />
        <Box elevation="small" />
        <Box elevation="medium" />
        <Box elevation="large" />
        <Box elevation="xlarge" />
        <Box background="dark-1" elevation="small">
          <Box elevation="small" />
        </Box>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('as', () => {
    const component = renderer.create(
      <Viewport>
        <Box as="header" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('tag proxied', () => {
    const tagComponent = renderer.create(
      <Viewport>
        <Box tag="header" />
      </Viewport>,
    );
    const asComponent = renderer.create(
      <Viewport>
        <Box as="header" />
      </Viewport>,
    );
    expect(tagComponent.toJSON()).toEqual(asComponent.toJSON());
  });

  test('animation', () => {
    const component = renderer.create(
      <Viewport>
        {[
          'fadeIn',
          'fadeOut',
          'jiggle',
          'pulse',
          'rotateLeft',
          'rotateRight',
          'slideUp',
          'slideDown',
          'slideLeft',
          'slideRight',
          'zoomIn',
          'zoomOut',
        ].map(type => (
          <Box key={type} animation={type} />
        ))}
        <Box animation={['fadeIn', 'slideUp']} />
        <Box animation={{ type: 'fadeIn', duration: 1000, delay: 500 }} />
        <Box
          animation={[
            { type: 'fadeIn', duration: 1000, delay: 500 },
            { type: 'slideUp', duration: 1000, delay: 500 },
          ]}
        />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('width', () => {
    const component = renderer.create(
      <Viewport>
        <Box width="xsmall" />
        <Box width="small" />
        <Box width="medium" />
        <Box width="large" />
        <Box width="xlarge" />
        <Box width="111px" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('width object', () => {
    const component = renderer.create(
      <Viewport>
        <Box width={{ width: '100px' }} />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('height', () => {
    const component = renderer.create(
      <Viewport>
        <Box height="xsmall" />
        <Box height="small" />
        <Box height="medium" />
        <Box height="large" />
        <Box height="xlarge" />
        <Box height="111px" />
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('onClick', () => {
    const onClick = jest.fn();
    const { getByText, container } = render(
      <Viewport>
        <Box onClick={onClick}>test box</Box>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.click(getByText('test box'));

    expect(onClick).toBeCalled();
  });
});
