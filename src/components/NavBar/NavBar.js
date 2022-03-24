import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.css";

function NavBar() {
  return (
    <nav>
      <NavLink
        className={(navData) =>
          navData.isActive ? styles.active : styles.link
        }
        to="/"
      >
        Products
      </NavLink>
      <NavLink
        className={(navData) =>
          navData.isActive ? styles.active : styles.link
        }
        to="/cart"
      >
        Cart
      </NavLink>
    </nav>
  );
}

export default NavBar;
