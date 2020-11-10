import React, { useEffect, useRef, useState } from 'react';

import {
  getBodyChildElements,
  makeNodeFocusable,
  makeNodeUnfocusable,
} from '../utils';

const isNotAncestorOf = child => parent => !parent.contains(child);

export const FocusedContainer = ({
  hidden = false,
  restrictScroll = false,
  children,
  trapFocus,
  ...rest
}) => {
  const [bodyOverflowStyle, setBodyOverflowStyle] = useState('');
  const ref = useRef(null);

  useEffect(() => {
    const removeTrap = () => {
      const child = ref.current;
      getBodyChildElements()
        .filter(isNotAncestorOf(child))
        .forEach(makeNodeFocusable);
      if (restrictScroll) {
        document.body.style.overflow = bodyOverflowStyle;
      }
    };

    const handleTrapFocus = () => {
      const child = ref.current;
      getBodyChildElements()
        .filter(isNotAncestorOf(child))
        .forEach(makeNodeUnfocusable);

      if (restrictScroll && bodyOverflowStyle !== 'hidden') {
        setBodyOverflowStyle(document.body.style.overflow);
        document.body.style.overflow = 'hidden';
      }
    };

    const timer = setTimeout(() => {
      if (!hidden && trapFocus) {
        handleTrapFocus();
      }
    }, 0);

    return () => {
      removeTrap();
      clearTimeout(timer);
    };
  }, [hidden, bodyOverflowStyle, restrictScroll, trapFocus]);

  return (
    <div ref={ref} aria-hidden={hidden} {...rest}>
      {children}
    </div>
  );
};
