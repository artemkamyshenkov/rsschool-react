import React from 'react';
import { ButtonProps } from './button.types';

const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
