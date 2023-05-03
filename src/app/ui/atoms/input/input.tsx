import React from 'react';
import { InputProps } from './input.types';

const Input = ({ className, placeholder, value, type = 'text', ...rest }: InputProps) => {
  return (
    <input
      type={type}
      className={className}
      placeholder={placeholder}
      data-testid="search-input"
      value={value}
      {...rest}
    />
  );
};

export default Input;
