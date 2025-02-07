import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./navbar.module.css";

export default function Navbar({ setActiveComponent, navBackground }) {
  return (
    <nav className={styles.navbar} style={{ background: navBackground }}>
      <div className={styles.logo}>My Portfolio</div>
      <div className={styles.navLinks}>
        <Link
          to="/about"
          className={styles.navItem}
          onClick={() => setActiveComponent("About")}
        >
          About
        </Link>
        <Link
          to="/experience"
          className={styles.navItem}
          onClick={() => setActiveComponent("Experience")}
        >
          Experience
        </Link>
        <Link
          to="/education"
          className={styles.navItem}
          onClick={() => setActiveComponent("Education")}
        >
          Education
        </Link>
        <Link
          to="/certificates"
          className={styles.navItem}
          onClick={() => setActiveComponent("Certificates")}
        >
          Certificates
        </Link>
      </div>
    </nav>
  );
}
