import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onNameChange: (nameValue: string) => void;
}

class InpitName extends Component<InputNameProps> {
  name: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const name = this.name.current?.value === undefined ? '' : this.name.current?.value;
    this.props.onNameChange(name);
  };

  render(): ReactNode {
    return (
      <div>
        <input type="text" ref={this.name} onChange={() => this.handleChange()} />
      </div>
    );
  }
}

export default InpitName;
