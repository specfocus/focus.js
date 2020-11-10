import React from 'react';

import { Grommet as GrommetIcon } from 'grommet-icons';
import { Anchor, Box, Footer, grommet, Viewport, Main, Text } from 'focus';
import { threeColumns as data } from './data';

const FooterAnchor = ({ ...rest }) => (
  <Anchor href="/" size="small" color="white" {...rest} />
);

const FooterContent = () => {
  return data.map(item => (
    <Box gap="medium" key={item[0]}>
      <Text weight="bold" size="small">
        {item[0]}
      </Text>
      <Box>
        {[1, 2, 3].map(i => (
          <FooterAnchor key={item[i]}>{item[i]}</FooterAnchor>
        ))}
      </Box>
    </Box>
  ));
};

export const Sitemap = () => {
  return (
    <Viewport theme={focus}>
      <Main
        background="light-4"
        elevation="large"
        pad="large"
        gap="large"
        border
      >
        <Text margin="small" size="xsmall">
          Main Content
        </Text>
        <Box flex />
      </Main>
      <Footer background="dark-1" pad="large">
        <Box direction="row-responsive" gap="xsmall">
          <Box align="center" gap="small">
            <GrommetIcon color="brand" size="large" />
            <Text alignSelf="center" color="brand" weight="bold">
              specfocus.com
            </Text>
          </Box>
        </Box>
        <FooterContent />
      </Footer>
    </Viewport>
  );
};
