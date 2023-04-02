import React from 'react';
import Label from '../../atoms/label/index';
import InputWithLabelProps from './inputWithLabel.types';

const InputWithLabel = ({
  children,
  type,
  className,
  register,
  placeholder,
  error,
  ...rest
}: InputWithLabelProps) => {
  return (
    <Label>
      {children}
      <input type={type} className={className} placeholder={placeholder} {...rest} {...register} />
      {error && <p>{error}</p>}
    </Label>
  );
};

export default InputWithLabel;
