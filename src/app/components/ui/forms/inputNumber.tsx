import React, { Component, ReactNode, RefObject } from 'react';

interface InputNumberProps {
  onChange: (name: string, value: string) => void;
  error: string;
}

class InpitNumber extends Component<InputNumberProps> {
  number: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const number = this.number.current?.value === undefined ? '' : this.number.current?.value;
    this.props.onChange('productPrice', number);
  };

  render(): ReactNode {
    return (
      <div className="input__container">
        <input
          placeholder="Enter product price (in euro)"
          className={'input__form input__number' + (this.props.error ? ' input__error' : '')}
          type="number"
          ref={this.number}
          onChange={this.handleChange}
          data-testid="productPrice-input"
        />
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default InpitNumber;
