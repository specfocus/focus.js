import React from 'react';

import { Viewport, Box, DateInput } from 'focus';
import { focus } from 'focus/themes';

const dateFormat = new Intl.DateTimeFormat(undefined, {
  month: 'short',
  day: 'numeric',
});

export const RangeFormat = () => {
  const [value, setValue] = React.useState([
    '2020-07-31T15:24:26.256Z',
    '2020-08-07T15:24:26.256Z',
  ]);
  const onChange = event => {
    const nextValue = event.value;
    console.log('onChange', nextValue);
    setValue(nextValue);
  };
  return (
    <Viewport theme={focus}>
      <Box align="center" pad="large">
        <Box width="medium">
          <DateInput
            value={value}
            format="mm/dd/yyyy-mm/dd/yyyy"
            buttonProps={{
              label: `${dateFormat.format(
                new Date(value[0]),
              )} - ${dateFormat.format(new Date(value[1]))}`,
            }}
            onChange={onChange}
          />
        </Box>
      </Box>
    </Viewport>
  );
};

RangeFormat.story = {
  name: 'Range format',
};
