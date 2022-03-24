import React from "react";
import NavBar from "../NavBar/NavBar";
import styles from "./AppBar.module.css";

function AppBar() {
  return (
    <header className={styles.header}>
      <NavBar />
    </header>
  );
}

export default AppBar;
