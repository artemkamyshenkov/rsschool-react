import React, { Component, ReactNode, RefObject } from 'react';

interface InputNameProps {
  onChange: (name: string, value: string) => void;
  error: string;
}

class InpitDate extends Component<InputNameProps> {
  date: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const date = this.date.current?.value === undefined ? '' : this.date.current?.value;
    this.props.onChange('productDate', date);
  };

  render(): ReactNode {
    return (
      <div className="input__container">
        <input
          className={'input__date' + (this.props.error ? ' input__error' : '')}
          type="date"
          ref={this.date}
          onChange={() => this.handleChange()}
          data-testid="productDate-input"
        />
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default InpitDate;
