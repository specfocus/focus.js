import React from 'react';
import { Box, Viewport } from 'focus';
import { FocusAnimation } from 'focus/components/FocusLogo/FocusAnimation';
import styled from 'styled-components';

const Container = styled.div`
`;

const Loader = ({ }) => {
  return (<FocusAnimation active={true} />);
};

Loader.story = {
  name: 'Loader',
};

export { Loader };