import React from "react";
import { Link } from "react-router-dom"; // Import Link from React Router
import styles from "./navbar.module.css";

export default function Navbar({ setActiveComponent, navBackground }) {
  return (
    <nav className={styles.navbar} style={{ background: navBackground }}>
      <Link
        to="/"
        className={styles.logo}
        onClick={() => setActiveComponent("Portfolio")}
        style={{ textDecoration: "none" }}
      >
        A JS
      </Link>
      <div className={styles.navLinks}>
        <Link
          to="/about"
          className={styles.navItem}
          onClick={() => setActiveComponent("About")}
          style={{ textDecoration: "none" }}
        >
          About
        </Link>
        <Link
          to="/experience"
          className={styles.navItem}
          onClick={() => setActiveComponent("Experience")}
          style={{ textDecoration: "none" }}
        >
          Experience
        </Link>
        <Link
          to="/education"
          className={styles.navItem}
          onClick={() => setActiveComponent("Education")}
          style={{ textDecoration: "none" }}
        >
          Education
        </Link>
        <Link
          to="/project"
          className={styles.navItem}
          onClick={() => setActiveComponent("Project")}
          style={{ textDecoration: "none" }}
        >
          Project
        </Link>
        <Link
          to="/certificates"
          className={styles.navItem}
          onClick={() => setActiveComponent("Certificates")}
          style={{ textDecoration: "none" }}
        >
          Certificates
        </Link>
        <a
          href="https://drive.google.com/file/d/1eJTievr-wpTfbbM9XWlwSffKebV7h-4z/view?usp=drive_link"
          className={styles.navItem}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          Resume
        </a>
      </div>
    </nav>
  );
}
