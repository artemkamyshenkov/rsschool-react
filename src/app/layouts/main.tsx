import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from '../ui/molecules/header';
import './main.css';

const MainLayout = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'main' : location.pathname.slice(1);
  return (
    <div className="wrapper" data-testid="wrapper">
      <header className="header">
        <div className="container header__container">{<Header currentPage={currentPage} />}</div>
      </header>
      <main className="main">
        <div className="container main__container">{<Outlet />}</div>
      </main>
      <footer></footer>
    </div>
  );
};

export default MainLayout;
