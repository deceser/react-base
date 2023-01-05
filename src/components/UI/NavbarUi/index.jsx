import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./index.module.scss";

const NavbarUi = () => {
  const isActive = ({ isActive }) => (isActive ? styles.active : "");
  return (
    <header className={styles.navbar}>
      <li>
        <NavLink className={isActive} to="/posts">
          Posts
        </NavLink>
      </li>
      <li>
        <NavLink className={isActive} to="/about">
          About
        </NavLink>
      </li>
    </header>
  );
};

export default NavbarUi;
