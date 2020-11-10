import React, { useState } from 'react';

import { Box, Viewport, CheckBox } from 'focus';
import { focus } from 'focus/themes';

const SimpleCheckBox = ({ checked: checkedProp, ...rest }) => {
  const [checked, setChecked] = useState(!!checkedProp);
  const onChange = event => setChecked(event.target.checked);

  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <CheckBox {...rest} checked={checked} onChange={onChange} />
      </Box>
    </Viewport>
  );
};

export const Simple = () => <SimpleCheckBox label="Choice" />;

export const Toggle = () => <SimpleCheckBox label="Choice" toggle />;

export const Disabled = () => (
  <SimpleCheckBox label="Choice" checked disabled />
);

export const Reverse = () => <SimpleCheckBox label="Choice" reverse />;

export const NoLabel = () => <SimpleCheckBox />;

NoLabel.story = {
  name: 'No label',
};
