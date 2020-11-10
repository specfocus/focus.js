import * as React from 'react';
import { ThemeType } from '../../themes';
import { BackgroundType } from '../../utils';

export interface ViewportProps {
  background?: BackgroundType;
  containerTarget?: HTMLElement;
  cssVars?: boolean;
  dir?: 'rtl';
  full?: boolean;
  plain?: boolean;
  theme?: ThemeType;
  themeMode?: 'dark' | 'light';
  userAgent?: string;
}

declare const Viewport: React.ComponentClass<ViewportProps &
  JSX.IntrinsicElements['div']>;

export { Viewport };
