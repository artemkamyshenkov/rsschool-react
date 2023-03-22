import React, { Component, ReactNode, RefObject } from 'react';

interface CheckBoxProps {
  onChange: (name: string, value: boolean) => void;
  error: boolean;
  isChecked: boolean;
}
interface CheckBoxState {
  checked: boolean;
}
class CheckBoxField extends Component<CheckBoxProps> {
  checkbox: RefObject<HTMLInputElement> = React.createRef();

  handleChange = () => {
    const isChecked =
      this.checkbox.current?.checked === undefined ? '' : this.checkbox.current?.checked;
    this.props.onChange('isChecked', isChecked as boolean);
  };

  render(): ReactNode {
    return (
      <div>
        <input
          type="checkbox"
          ref={this.checkbox}
          onChange={this.handleChange}
          id="checkbox-licence"
          className="input__checkbox"
          checked={this.props.isChecked ? true : false}
        />
        <label htmlFor="checkbox-licence">
          I agree with the terms of placement and user agreement
        </label>
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default CheckBoxField;
