import React from "react";
import styles from "./navbar.module.css";

export default function Navbar({ setActiveComponent, navBackground }) {
  return (
    <nav className={styles.navbar} style={{ background: navBackground }}>
      <div className={styles.logo}>My Portfolio</div>
      <div className={styles.navLinks}>
        <button
          onClick={() => setActiveComponent("About")}
          className={styles.navItem}
        >
          About
        </button>
        <button
          onClick={() => setActiveComponent("Experience")}
          className={styles.navItem}
        >
          Experience
        </button>
        <button
          onClick={() => setActiveComponent("Education")}
          className={styles.navItem}
        >
          Education
        </button>
        <button
          onClick={() => setActiveComponent("Certificates")}
          className={styles.navItem}
        >
          Certificates
        </button>
      </div>
    </nav>
  );
}
