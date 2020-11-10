import React from 'react';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import { cleanup, render, fireEvent, act } from '@testing-library/react';

import { Viewport } from '../../Viewport';
import { Carousel } from '..';
import { Image } from '../../Image';

describe('Carousel', () => {
  afterEach(cleanup);

  test('basic', () => {
    const component = renderer.create(
      <Viewport>
        <Carousel>
          <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          <Image src="//v2.specfocus.com/assets/IMG_4210.jpg" />
        </Carousel>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('basic with `initialChild: 1`', () => {
    const component = renderer.create(
      <Viewport>
        <Carousel initialChild={1}>
          <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          <Image src="//v2.specfocus.com/assets/IMG_4210.jpg" />
        </Carousel>
      </Viewport>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('navigate', () => {
    const { getByTestId, container } = render(
      <Viewport>
        <Carousel data-testid="test-carousel">
          <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          <Image src="//v2.specfocus.com/assets/IMG_4210.jpg" />
        </Carousel>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.keyDown(getByTestId('test-carousel'), {
      key: 'Right',
      keyCode: 39,
      which: 39,
    });
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.keyDown(getByTestId('test-carousel'), {
      key: 'Left',
      keyCode: 37,
      which: 37,
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  test('should trigger events of focus, blur and click', () => {
    const onFocus = jest.fn();
    const onBlur = jest.fn();
    const { container } = render(
      <Viewport>
        <Carousel
          id="test-carousel"
          onFocus={onFocus}
          onBlur={onBlur}
          controls="selectors"
        >
          <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          <Image src="//v2.specfocus.com/assets/IMG_4210.jpg" />
        </Carousel>
      </Viewport>,
    );

    const button = document
      .getElementById('test-carousel')
      .querySelector('button');

    fireEvent.focus(button);
    expect(onFocus).toHaveBeenCalledTimes(1);

    fireEvent.click(button);
    expect(container.firstChild).toMatchSnapshot();

    fireEvent.blur(button);
    expect(onBlur).toHaveBeenCalledTimes(1);
  });

  test('play', () => {
    jest.useFakeTimers();
    const { container } = render(
      <Viewport>
        <Carousel play={1000}>
          <Image src="//v2.specfocus.com/assets/IMG_4245.jpg" />
          <Image src="//v2.specfocus.com/assets/IMG_4210.jpg" />
        </Carousel>
      </Viewport>,
    );
    expect(container.firstChild).toMatchSnapshot();
    // Advance timers so the carousel advances
    act(() => {
      jest.advanceTimersByTime(1300);
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
