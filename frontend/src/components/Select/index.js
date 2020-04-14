/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React, { useRef, useEffect } from 'react';
import Select from 'react-select/async';
import { useField } from '@rocketseat/unform';

export default function AsyncSelect({ name, ...rest }) {
  const selectRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: selectRef.current,
      path: 'state.value',
      getValue: (ref) => {
        if (rest.isMulti) {
          if (!ref.state.value) {
            return [];
          }
          return ref.state.value.map((option) => option.value);
        }
        if (!ref.state.value) {
          return '';
        }
        return ref.state.value.value;
      },
    });
  }, [fieldName, registerField, rest.isMulti]);
  return (
    <Select
      cacheOptions
      ref={selectRef}
      defaultValue={defaultValue}
      classNamePrefix="react-select"
      {...rest}
    />
  );
}
