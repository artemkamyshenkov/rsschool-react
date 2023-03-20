import React, { Component, ReactNode } from 'react';

class ErrorPage extends Component {
  render(): ReactNode {
    return (
      <>
        <h1>404</h1>
        <p>Page not found</p>
      </>
    );
  }
}

export default ErrorPage;
