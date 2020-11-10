import React from 'react';
import PropTypes from 'prop-types';
import { focus } from 'focus/themes';
import { AnnounceContext, Box, Viewport, Heading, Text } from 'focus';

const Announcer = ({ announce, message, mode, role }) => {
  React.useEffect(() => {
    const timeout = 3000;
    announce(message, mode, timeout);
  }, [announce, message, mode]);

  return (
    <Text align="center" role={role} aria-live={mode}>
      {message}
    </Text>
  );
};

Announcer.propTypes = {
  announce: PropTypes.func.isRequired,
  message: PropTypes.string,
  mode: PropTypes.string,
  role: PropTypes.string,
};

Announcer.defaultProps = {
  message: 'Here is a simple announcement. This will soon disappear',
  mode: 'polite',
  role: 'log',
};

const AnnounceContextComponent = props => (
  <Viewport theme={focus} full>
    <Box justify="center" align="center" background="brand" fill>
      <Heading>Welcome to announcement section</Heading>
      <AnnounceContext.Consumer>
        {announce => <Announcer announce={announce} {...props} />}
      </AnnounceContext.Consumer>
    </Box>
  </Viewport>
);

export const Polite = () => <AnnounceContextComponent />;
export const Assertive = () => (
  <AnnounceContextComponent
    message="Turn on Accessibility feature to listen to this announcement.
    This will soon disappear"
    mode="assertive"
    role="alert"
  />
);

export default {
  title: 'Utilities/AnnounceContext',
};
