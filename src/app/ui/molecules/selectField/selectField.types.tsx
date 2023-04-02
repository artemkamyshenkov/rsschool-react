import { UseFormRegisterReturn } from 'react-hook-form';
export interface ISelectField {
  options: string[];
  error?: string;
  register?: UseFormRegisterReturn<string>;
  className?: string;
}
