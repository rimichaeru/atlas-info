import React from "react";
import styles from "./NavBar.module.scss";
import {Link} from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/atlas-info" className={styles.link}>Home</Link>
          </li>
          <li>
            <Link to="/atlas-info/uk" className={styles.link}>UK</Link>
          </li>
          <li>
            <Link to="/atlas-info/india" className={styles.link}>India</Link>
          </li>
          <li>
            <Link to="/atlas-info/china" className={styles.link}>China</Link>
          </li>
          <li>
            <Link to="/atlas-info/us" className={styles.link}>US</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default NavBar;
