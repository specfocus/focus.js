import React from 'react';

import { Viewport, Box, DateInput } from 'focus';
import { focus } from 'focus/themes';

const dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
});

export const Range = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:27:42.920Z',
    '2020-08-07T15:27:42.920Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <DateInput
          value={value}
          buttonProps={{
            label: `${dateFormat.format(
              new Date(value[0]),
            )} - ${dateFormat.format(new Date(value[1]))}`,
          }}
          onChange={onChange}
        />
      </Box>
    </Viewport>
  );
};

Range.story = {
  parameters: {
    chromatic: { disable: true },
  },
};
