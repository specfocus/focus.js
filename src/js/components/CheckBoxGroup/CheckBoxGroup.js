import React, { forwardRef, useContext, useMemo } from 'react';

import { Box } from '../Box';
import { CheckBox } from '../CheckBox';
import { FormContext } from '../Form/FormContext';

export const CheckBoxGroup = forwardRef(
  (
    {
      value: valueProp,
      disabled: disabledProp,
      gap = 'small', // consistent with RadioButtonGroup default
      labelKey,
      valueKey,
      onChange,
      options: optionsProp,
      name,
      ...rest
    },
    ref,
  ) => {
    const formContext = useContext(FormContext);

    // In case option is a string, normalize it to be an object
    const options = useMemo(
      () =>
        optionsProp.map(option => {
          return typeof option === 'string'
            ? {
                disabled: disabledProp,
                value: option,
                label: option,
              }
            : option;
        }),
      [optionsProp, disabledProp],
    );

    // 'value' is an array of checked valueKeys
    const [value, setValue] = formContext.useFormInput(name, valueProp, []);

    // Logic is necessary to maintain a proper data structure for Form logic
    const onCheckBoxChange = (event, optionValue, option) => {
      // deep copy of value
      const nextValue = JSON.parse(JSON.stringify(value)) || [];
      const optionIndex = nextValue.indexOf(optionValue);
      // If the value option isn't in the array, add it.
      // Otherwise, remove it.
      if (optionIndex < 0) nextValue.push(optionValue);
      else nextValue.splice(optionIndex, 1);
      setValue(nextValue);
      // Similar functionality to Select onChange()
      if (onChange) {
        event.persist(); // extract from React synthetic event pool
        const adjustedEvent = event;
        adjustedEvent.value = nextValue;
        adjustedEvent.option = option;
        onChange(adjustedEvent);
      }
    };

    return (
      <Box ref={ref} gap={gap} {...rest}>
        {options.map(option => {
          const optionValue = option.value;
          const label = labelKey ? option[labelKey] : option.label;
          const valueOption = valueKey ? option[valueKey] : optionValue;
          const checked = value.indexOf(valueOption) >= 0;
          const disabled = disabledProp || option.disabled;
          const key = `${label}-${valueOption}`;

          if (option.checked)
            console.warn(
              // eslint-disable-next-line max-len
              `'checked' prop of an individual CheckBox shouldn't be used in a CheckBoxGroup component. Use the CheckBoxGroup 'value' prop instead.`,
            );
          // value shouldn't propagate the input field and the onChange option
          const { value: omit, ...optionRest } = option;
          const optionProps = { ...optionRest, label, disabled };
          return (
            <CheckBox
              key={key}
              {...optionProps}
              disabled={disabled}
              checked={checked}
              label={label}
              onChange={event =>
                onCheckBoxChange(event, valueOption, optionProps)
              }
            />
          );
        })}
      </Box>
    );
  },
);

CheckBoxGroup.displayName = 'CheckBoxGroup';

let CheckBoxGroupDoc;
if (process.env.NODE_ENV !== 'production') {
  // eslint-disable-next-line global-require
  CheckBoxGroupDoc = require('./doc').doc(CheckBoxGroup);
}
const RadioButtonGroupWrapper = CheckBoxGroupDoc || CheckBoxGroup;

export { RadioButtonGroupWrapper as RadioButtonGroup };
