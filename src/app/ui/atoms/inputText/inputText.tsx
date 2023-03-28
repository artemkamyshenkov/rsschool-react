import React, { ChangeEvent } from 'react';
import { InputProps } from './inputText.types';

const InputText = ({ className, placeholder, onChange, value }: InputProps) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };
  return (
    <>
      <input
        type="text"
        className={className}
        placeholder={placeholder}
        data-testid="search-input"
        onChange={handleChange}
        value={value}
      />
    </>
  );
};

export default InputText;
