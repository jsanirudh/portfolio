import React from "react";
import styles from "./education.module.css";
import Asulogo from "../assets/asu.png";
import Jntualogo from "../assets/jntua.png";

export default function Education() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Education</h1>
        {/* Education Section */}
        <div className={styles.educationContainer}>
          <img src={Asulogo} alt="ASU" className={styles.educationLogo} />
          <div className={styles.educationContent}>
            <h1 className={styles.educationHeading}>
              Arizona State University (January 2023 - December 2024)
            </h1>
            <p className={styles.educationDescription}>
              Earned my Master’s in Computer Software Engineering with a CGPA of
              3.90 from ASU. Developed expertise in full-stack development,
              cloud computing, and scalable software solutions. Worked as a
              Graduate Student Assistant, teaching Intro to Programming
              Languages and Game Programming, where I mentored students and
              enhanced my instructional skills. Additionally, contributed to
              innovative projects like Auto BIM Route AI, focusing on automated
              route planning and optimization.
            </p>
          </div>
        </div>

        <div className={styles.educationContainer}>
          <img src={Jntualogo} alt="JNTUA" className={styles.educationLogo} />
          <div className={styles.educationContent}>
            <h1 className={styles.educationHeading}>
              Sri Venkateswara College of Engineering (August 2016 - September
              2020)
            </h1>
            <h5 className={styles.educationSubheading}>
              Affiliated to Jawaharlal Nehru Technological University, Anantapur
            </h5>
            <p className={styles.educationDescription}>
              Completed my Bachelor's in Information Technology with a CGPA of
              8.26, gaining a strong foundation in software development, data
              structures, and algorithms. Engaged in various projects,
              coursework, and collaborative learning environments that honed my
              problem-solving and programming skills. This degree laid the
              groundwork for my passion for software engineering and innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
