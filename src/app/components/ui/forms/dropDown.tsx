import React, { Component, ReactNode, RefObject } from 'react';

interface DropDownProps {
  onChange: (name: string, value: string) => void;
  error: string;
  selectedOption: string;
}

class DropDown extends Component<DropDownProps> {
  selectRef: RefObject<HTMLSelectElement> = React.createRef();
  handleChange = () => {
    const selectedValue =
      this.selectRef.current?.value === undefined ? '' : this.selectRef.current?.value;
    this.props.onChange('productCategory', selectedValue);
  };

  render(): ReactNode {
    const options = ['Smartphone', 'Auto', 'TV', 'Jewelry', 'Other'];
    return (
      <div className="input__container">
        <select
          className={'selected__field' + (this.props.error ? ' input__error' : '')}
          ref={this.selectRef}
          value={this.props.selectedOption}
          onChange={this.handleChange}
        >
          <option disabled value="">
            {'Choose a category'}
          </option>
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
        {this.props.error && <p className="text__error">{this.props.error}</p>}
      </div>
    );
  }
}

export default DropDown;
