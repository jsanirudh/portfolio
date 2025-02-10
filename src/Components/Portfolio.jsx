import React from "react";
import styles from "./portfolio.module.css";
import profile from "../assets/profile.jpg";
import Experiencehome from "./PortfolioComponent/Experiencehome";
import Educationhome from "./PortfolioComponent/Educationhome";

export default function Portfolio() {
  return (
    <div className={styles.landingpage}>
      <img src={profile} alt="LinkedIn" className={styles.iconFull} />
      <h1 className={styles.heading}>Hi, I'm Anirudh.</h1>
      <h2 className={styles.subheading}>
        {" "}
        - an enthusiastic Software Developer, Tempe, United States
      </h2>

      <h4 className={styles.body}>
        Full-Stack Developer with over 2 years of experience in building
        scalable and secure web applications. Proficient in frontend and backend
        technologies, delivering innovative solutions. Expertise in cloud
        platforms, CI/CD pipelines, RESTful APIs, and agile methodologies.
        Recognized for improving performance and optimizing processes.
      </h4>

      <Experiencehome />
      <Educationhome />
    </div>
  );
}
