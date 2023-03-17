import React, { ChangeEvent, Component, ReactNode } from 'react';

class SearchInput extends Component<{}, { inputText: string }> {
  constructor(props: {}) {
    super(props);
    this.state = {
      inputText: localStorage.getItem('searchInputValue') || '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event: ChangeEvent<HTMLInputElement>) {
    this.setState({
      inputText: event.target.value,
    });
  }

  handleBeforeUnload() {
    localStorage.setItem('searchInputValue', this.state.inputText);
  }

  componentDidMount() {
    this.setState({
      inputText: this.state.inputText,
    });
    window.addEventListener('beforeunload', () => this.handleBeforeUnload());
  }

  componentWillUnmount() {
    localStorage.setItem('searchInputValue', this.state.inputText);
    window.removeEventListener('beforeunload', () => this.handleBeforeUnload());
  }

  render(): ReactNode {
    return (
      <>
        <input
          type="text"
          value={this.state.inputText}
          className="search__input"
          onChange={this.handleChange}
          placeholder="Search..."
          data-testid="search-input"
        />
      </>
    );
  }
}

export default SearchInput;
