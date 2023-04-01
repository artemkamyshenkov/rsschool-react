import React from 'react';
import { InputProps } from './inputText.types';

const InputText = ({ className, placeholder, value, ...rest }: InputProps) => {
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        data-testid="search-input"
        value={value}
        {...rest}
      />
    </>
  );
};

export default InputText;
