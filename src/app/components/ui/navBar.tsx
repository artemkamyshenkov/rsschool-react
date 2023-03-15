import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from '../../HOC/withRoute';
import { WithRouterProps } from '../../HOC/withRoute';
import './navBar.css';

class NavBar extends Component<WithRouterProps> {
  render(): ReactNode {
    const { location } = this.props;
    const currentPage = location.pathname === '/' ? 'main' : location.pathname.slice(1);
    return (
      <>
        <ul className="header__nav">
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'nav__link' + ' active-link' : 'nav__link')}
              to="/"
            >
              Main
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'nav__link' + ' active-link' : 'nav__link')}
              to="/about"
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="header__current">Current page: {currentPage}</div>
      </>
    );
  }
}

export default withRouter(NavBar);
