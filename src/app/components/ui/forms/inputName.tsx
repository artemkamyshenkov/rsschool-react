import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onChange: (name: string, value: string) => void;
  error: string;
}

class InpitName extends Component<InputNameProps> {
  name: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const name = this.name.current?.value === undefined ? '' : this.name.current?.value;
    this.props.onChange('productName', name);
  };

  render(): ReactNode {
    return (
      <div className="input__container">
        <input
          className={'input__form input__name' + (this.props.error ? ' input__error' : '')}
          placeholder="Enter product name"
          type="text"
          ref={this.name}
          onChange={() => this.handleChange()}
          data-testid="productName-input"
        />
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default InpitName;
