import React from 'react';
import { addDecorator, addParameters } from '@storybook/react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';

addParameters({
  options: {
    showRoots: true,
  },
});
/*
addDecorator(storyFn => (
  <I18nextProvider i18n={i18n}>{storyFn()}</I18nextProvider>
));
*/