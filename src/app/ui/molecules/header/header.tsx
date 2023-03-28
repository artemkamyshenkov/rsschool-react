import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styles from './header.module.css';

const Header = () => {
  const location = useLocation();
  const currentPage = location.pathname === '/' ? 'main' : location.pathname.slice(1);

  const addActiveClassLink = (isActive: boolean) => {
    return isActive ? `${styles.nav__link} ${styles.active__link}` : styles.nav__link;
  };
  return (
    <>
      <ul className={styles.header__nav}>
        <li className={styles.nav__item}>
          <NavLink className={({ isActive }) => addActiveClassLink(isActive)} to="/">
            Main
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={({ isActive }) => addActiveClassLink(isActive)} to="/about">
            About Us
          </NavLink>
        </li>
        <li className={styles.nav__item}>
          <NavLink className={({ isActive }) => addActiveClassLink(isActive)} to="/form">
            Form
          </NavLink>
        </li>
      </ul>
      <div className={styles.header__current}>Current page: {currentPage}</div>
    </>
  );
};

export default Header;
