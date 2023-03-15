import React, { Component, ReactNode } from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/ui/navBar';
import SearchInput from '../components/searchInput';
import './main.css';

class MainLayout extends Component {
  render(): ReactNode {
    return (
      <div className="wrapper">
        <header className="header">
          <div className="container header__container">{<NavBar />}</div>
        </header>
        <main className="main">
          <div className="container">{<Outlet />}</div>
        </main>
        <footer>footer</footer>
      </div>
    );
  }
}

export default MainLayout;
