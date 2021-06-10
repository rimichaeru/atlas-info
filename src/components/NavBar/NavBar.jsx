import React from "react";
import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/uk" className={styles.link}>UK</Link>
          </li>
          <li>
            <Link to="/india" className={styles.link}>India</Link>
          </li>
          <li>
            <Link to="/china" className={styles.link}>China</Link>
          </li>
          <li>
            <Link to="/us" className={styles.link}>US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
