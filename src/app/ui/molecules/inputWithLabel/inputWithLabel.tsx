import React from 'react';
import Label from '../../atoms/label/index';
import InputWithLabelProps from './inputWithLabel.types';

const InputWithLabel = ({
  children,
  type,
  className,
  register,
  placeholder,
  ...rest
}: InputWithLabelProps) => {
  return (
    <Label>
      {children}
      <input type={type} className={className} {...register} placeholder={placeholder} {...rest} />
    </Label>
  );
};

export default InputWithLabel;
