import React, { Component, ReactNode, RefObject } from 'react';

interface DropDownState {
  selectedOption: string;
}

interface DropDownProps {
  onChange: (name: string, value: string) => void;
}

class DropDown extends Component<DropDownProps, DropDownState> {
  selectRef: RefObject<HTMLSelectElement> = React.createRef();

  constructor(props: DropDownProps) {
    super(props);
    this.selectRef = React.createRef<HTMLSelectElement>();
    this.state = {
      selectedOption: '',
    };
  }

  handleChange = () => {
    const selectedValue =
      this.selectRef.current?.value === undefined ? '' : this.selectRef.current?.value;

    this.setState({ selectedOption: selectedValue });
    this.props.onChange('productCategory', selectedValue);
  };

  render(): ReactNode {
    const options = ['Smartphone', 'Auto', 'TV', 'Jewelry', 'Other'];
    return (
      <select
        className="selected__field"
        ref={this.selectRef}
        value={this.state.selectedOption}
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
    );
  }
}

export default DropDown;
