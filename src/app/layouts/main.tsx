import React, { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../ui/molecules/header';
import './main.css';

class MainLayout extends Component {
  render(): ReactNode {
    return (
      <div className="wrapper" data-testid="wrapper">
        <header className="header">
          <div className="container header__container">{<Header />}</div>
        </header>
        <main className="main">
          <div className="container main__container">{<Outlet />}</div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default MainLayout;
