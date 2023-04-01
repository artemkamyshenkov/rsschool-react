import { InputHTMLAttributes } from 'react';
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  className: string;
  value: string;
  type?: string;
}
