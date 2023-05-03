import { UseFormRegisterReturn } from 'react-hook-form';
interface RadioFieldOptions {
  name: string;
  value: string;
}
export interface IRadioField {
  options: RadioFieldOptions[];
  className?: string;
  error?: string;
  register?: UseFormRegisterReturn<string>;
}
