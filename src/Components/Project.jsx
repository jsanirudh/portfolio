import React from "react";
import styles from "./project.module.css";
import Spammer from "../assets/spammer.webp";
import Scrum from "../assets/Scrumsimulator.webp";
import OnlineHouse from "../assets/OnlineHouse.webp";
import chatbot from "../assets/chatbot.webp";

export default function Project() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Project </h1>
        {/* Auto BIM Route AI Section */}
        <div className={styles.projectContainer}>
          <img src={Scrum} alt="Scrum" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Scrum Simulator (August 2023 - December 2023)
            </h1>
            <h4 className={styles.subheading}> Developer</h4>
            <p className={styles.projectDescription}>
              Developed an innovative Java-based Auto BIM Route AI application
              focused on automated route planning for PCB design. Integrated
              advanced algorithms to visualize and optimize connections between
              nodes, enhancing pathfinding efficiency. Designed and implemented
              features that dynamically display preferred paths on the user
              interface, ensuring smooth zooming and precise drawing of paths.
              Incorporated start/stop controls, providing users with greater
              control and flexibility in designing and visualizing PCB routes.
            </p>
          </div>
        </div>

        {/* Arizona State University Section */}
        <div className={styles.projectContainer}>
          <img src={chatbot} alt="chatbot" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Chatbot (August 2020 - December 2020)
            </h1>
            <h4 className={styles.subheading}> Graduate Student Assistant</h4>
            <p className={styles.projectDescription}>
              Designed and evaluated coursework for programming courses,
              ensuring clarity and effectiveness in assignments and projects.
              Delivered lectures to enhance student understanding and
              engagement. Provided guidance through office hours, helping
              students grasp programming concepts and improve problem-solving
              skills. Led coding workshops and peer reviews, fostering a
              collaborative learning environment.
            </p>
          </div>
        </div>

        {/* Tata Consultancy Services Section */}
        <div className={styles.projectContainer}>
          <img src={Spammer} alt="Spammer" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Spammer Detection and Fake User Identification (January 2020 - May
              2022)
            </h1>
            <h4 className={styles.subheading}>Software Engineer</h4>
            <p className={styles.projectDescription}>
              Developed an advanced system to detect spam and identify fake
              users on Twitter using machine learning algorithms like Random
              Forest, Naive Bayes, and SVM. The project followed a structured
              approach to design, testing, and iterative optimization. Utilized
              Java, JSP, HTML, CSS, and JavaScript for implementation, with
              MySQL for database management, ensuring enhanced accuracy,
              security, and efficiency.
            </p>
          </div>
        </div>
        <div className={styles.projectContainer}>
          <img src={OnlineHouse} alt="TCS" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Online House Construction Supporting System (March 2020 - May
              2020)
            </h1>
            <h4 className={styles.subheading}>Software Engineer</h4>
            <p className={styles.projectDescription}>
              Developed a web application to streamline house construction
              planning and management. Led cross-functional collaboration,
              utilizing Java for backend processing and HTML, CSS, and
              JavaScript for the frontend. Designed a user-friendly search
              interface and implemented REST APIs to enhance state management
              and performance, while optimizing database efficiency for seamless
              user interaction.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
