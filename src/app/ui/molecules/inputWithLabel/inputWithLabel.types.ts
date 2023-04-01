import React, { InputHTMLAttributes } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';
export default interface InputWithLabelProps extends InputHTMLAttributes<HTMLInputElement> {
  children?: React.ReactNode;
  type: string;
  className: string;
  register?: UseFormRegisterReturn<string>;
  placeholder: string;
}
