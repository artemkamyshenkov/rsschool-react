import React, { Component, ReactNode, RefObject } from 'react';

interface InputNumberProps {
  onChange: (name: string, value: string) => void;
}

class InpitNumber extends Component<InputNumberProps> {
  number: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const number = this.number.current?.value === undefined ? '' : this.number.current?.value;
    this.props.onChange('productPrice', number);
  };

  render(): ReactNode {
    return (
      <input
        placeholder="Enter product price (in euro)"
        className="input__form input__number"
        type="number"
        ref={this.number}
        onChange={this.handleChange}
      />
    );
  }
}

export default InpitNumber;
