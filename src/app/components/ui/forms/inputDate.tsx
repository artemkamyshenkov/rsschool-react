import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onDateChange: (nameValue: string) => void;
}

class InpitDate extends Component<InputNameProps> {
  date: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const date = this.date.current?.value === undefined ? '' : this.date.current?.value;
    this.props.onDateChange(date);
  };

  render(): ReactNode {
    return (
      <div>
        <input type="date" ref={this.date} onChange={() => this.handleChange()} />
      </div>
    );
  }
}

export default InpitDate;
