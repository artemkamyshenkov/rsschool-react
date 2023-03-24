import React, { Component, ReactNode, RefObject, ChangeEvent } from 'react';

interface RadioFieldProps {
  onChange: (name: string, value: string) => void;
  error: string;
  publicDays: string;
}

class RadioField extends Component<RadioFieldProps> {
  radio: RefObject<HTMLInputElement> = React.createRef();

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const radio = event.target.value === undefined ? '' : event.target.value;
    this.props.onChange('publicDays', radio);
  };

  render(): ReactNode {
    const options = [
      { name: '30 days', value: '30' },
      { name: '60 days', value: '60' },
      { name: '90 days', value: '90' },
    ];
    return (
      <div className="publish__day" data-testid="publicDays-radio">
        <p>Choose how many days you want to publish the product?</p>
        {options &&
          options.map((option) => (
            <div key={option.name + '_' + option.value} className="radio__container">
              {' '}
              <input
                type="radio"
                ref={React.createRef<HTMLInputElement>()}
                onChange={this.handleChange}
                id={option.name + '_' + option.value}
                value={option.value}
                name="radio-day"
                className="input__radio"
                checked={this.props.publicDays === option.value}
              />
              <label htmlFor={option.name + '_' + option.value}>{option.name}</label>
            </div>
          ))}
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default RadioField;
