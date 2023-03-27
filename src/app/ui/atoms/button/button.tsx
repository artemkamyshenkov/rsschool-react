import React from 'react';
import styles from './button.modeule.css';
import { ButtonProps } from './button.types';

const Button = ({ className, children }: ButtonProps) => {
  return <button className={className}>{children}</button>;
};

export default Button;
