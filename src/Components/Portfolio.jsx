import React from "react";
import styles from "./portfolio.module.css";

export default function Portfolio() {
  return (
    <div className={styles.landingpage}>
      <h1 className={styles.heading}>Hi, I'm Anirudh.</h1>
      <h4 className={styles.subheading}>
        Full-Stack Developer with over 2 years of experience in building
        scalable and secure web applications. Proficient in frontend and backend
        technologies, delivering innovative solutions. Expertise in cloud
        platforms, CI/CD pipelines, RESTful APIs, and agile methodologies.
        Recognized for improving performance and optimizing processes.
      </h4>
    </div>
  );
}
