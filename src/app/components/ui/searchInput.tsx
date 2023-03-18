import React, { Component, ReactNode, ChangeEvent } from 'react';

interface InputProps {
  value: string;
  placeholder: string;
  onChange: (value: string) => void;
}

class SearchInput extends Component<InputProps> {
  handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { onChange } = this.props;
    onChange(event.target.value);
  }

  handleBeforeUnload() {
    localStorage.setItem('searchInputValue', this.props.value);
  }

  componentDidMount() {
    window.addEventListener('beforeunload', () => this.handleBeforeUnload());
  }

  componentWillUnmount() {
    localStorage.setItem('searchInputValue', this.props.value);
    window.removeEventListener('beforeunload', () => this.handleBeforeUnload());
  }

  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          value={this.props.value}
          className="search__input"
          onChange={this.handleChange.bind(this)}
          placeholder={this.props.placeholder}
          data-testid="search-input"
        />
      </>
    );
  }
}

export default SearchInput;
