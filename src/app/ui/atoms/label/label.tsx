import React from 'react';

type LabelProps = {
  children?: React.ReactNode;
  className?: string;
};

const Label = ({ children, className }: LabelProps) => {
  return <label className={className}>{children}</label>;
};

export default Label;
