import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onChange: (name: string, value: string) => void;
}

class InpitDate extends Component<InputNameProps> {
  date: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const date = this.date.current?.value === undefined ? '' : this.date.current?.value;
    this.props.onChange('productDate', date);
  };

  render(): ReactNode {
    return (
      <input
        className="input__date"
        type="date"
        ref={this.date}
        onChange={() => this.handleChange()}
      />
    );
  }
}

export default InpitDate;
