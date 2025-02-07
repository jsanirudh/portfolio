import React from "react";
import styles from "./about.module.css";
import linkedinLogo from "../assets/linkedin.png";
import githubLogo from "../assets/github.png";

export default function About() {
  return (
    <div className={styles.mainContainer}>
      {/* About Me Section */}
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutHeading}>About Me</h1>
        <p className={styles.aboutDescription}>
          As a passionate Full-Stack Developer with experience in building
          scalable, secure web applications, I thrive on driving performance
          improvements. From creating seamless frontends to architecting robust
          backends, my expertise spans a range of technologies, including
          React.js, Node.js, and Spring Boot. My hands-on experience with cloud
          platforms like AWS, Azure, and GCP enables me to optimize processes
          and design solutions that address real-world business challenges.
        </p>
        <p className={styles.aboutDescription}>
          {" "}
          In my recent role at Tata Consultancy Services, I contributed to
          enhancing system performance through the development of secure APIs. I
          also built and optimized CI/CD pipelines, enabling faster delivery
          cycles and minimizing deployment risks. Additionally, I implemented
          advanced authentication systems to strengthen data security and ensure
          compliance with industry standards.
        </p>
        <p className={styles.aboutDescription}>
          {" "}
          Currently, as a Graduate Student Assistant at Arizona State
          University, I lead courses on programming languages and game
          development, fostering collaborative learning through workshops,
          lectures, and peer reviews. I am committed to empowering students with
          the tools they need to excel.{" "}
        </p>
        <p className={styles.aboutDescription}>
          My career goal is to continue developing innovative, user-centric
          applications while expanding my expertise in cloud technologies and
          software architecture. I am open to new opportunities where I can
          leverage my technical skills, passion for problem-solving, and
          collaborative spirit to make a meaningful impact. If you're looking
          for a dedicated and solution-oriented developer, let’s connect!
        </p>
      </div>

      {/* Contact Section */}
      <div className={styles.contactContainer}>
        <div className={styles.contactBox}>
          <h3>Contact Me</h3>
          <p>Email: jsanirudh1998@gmail.com</p>
          <p>Phone: +1 (623) 291-9159</p>
        </div>
        <div className={styles.contactBox}>
          <a
            href="https://www.linkedin.com/in/anirudh-jayamangala-srinivas-68127a196/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={linkedinLogo}
              alt="LinkedIn"
              className={styles.iconFull}
            />
          </a>
        </div>
        <div className={styles.contactBox}>
          <a
            href="https://github.com/jsanirudh"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} alt="GitHub" className={styles.iconFull} />
          </a>
        </div>
      </div>
    </div>
  );
}
