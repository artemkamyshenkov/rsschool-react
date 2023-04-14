import { UseFormRegisterReturn } from 'react-hook-form';
import React from 'react';

export interface ISelectField {
  options: string[];
  error?: string;
  register?: UseFormRegisterReturn<string>;
  className?: string;
  onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  defaultValue: string;
}
