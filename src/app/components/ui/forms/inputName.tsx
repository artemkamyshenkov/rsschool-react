import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onChange: (name: string, value: string) => void;
}

class InpitName extends Component<InputNameProps> {
  name: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const name = this.name.current?.value === undefined ? '' : this.name.current?.value;
    this.props.onChange('productName', name);
  };

  render(): ReactNode {
    return (
      <input
        className="input__form input__name"
        placeholder="Enter product name"
        type="text"
        ref={this.name}
        onChange={() => this.handleChange()}
      />
    );
  }
}

export default InpitName;
