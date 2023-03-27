import React from 'react';
import { InputProps } from './inputText.types';

const InputText = ({ className, placeholder }: InputProps) => {
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        data-testid="search-input"
      />
    </>
  );
};

export default InputText;
