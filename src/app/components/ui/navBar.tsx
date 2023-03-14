import React, { Component, ReactNode } from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from '../../HOC/withRoute';
import { WithRouterProps } from '../../HOC/withRoute';
import './navBar.css';

class NavBar extends Component {
  handleClick() {
    console.log('1');
  }

  render(): ReactNode {
    return (
      <>
        <ul className="header__nav">
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'nav__link' + ' active-link' : 'nav__link')}
              to="/"
              onClick={this.handleClick}
            >
              Main
            </NavLink>
          </li>
          <li className="nav__item">
            <NavLink
              className={({ isActive }) => (isActive ? 'nav__link' + ' active-link' : 'nav__link')}
              to="/about"
              onClick={this.handleClick}
            >
              About Us
            </NavLink>
          </li>
        </ul>
        <div className="header__current">current</div>
      </>
    );
  }
}

export default NavBar;
