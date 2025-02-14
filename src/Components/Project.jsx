import React from "react";
import styles from "./project.module.css";
import { FaGithub } from "react-icons/fa"; // Import GitHub icon
import Spammer from "../assets/spammer.webp";
import Scrum from "../assets/Scrumsimulator.webp";
import OnlineHouse from "../assets/OnlineHouse.webp";
import chatbot from "../assets/chatbot.webp";

export default function Project() {
  return (
    <div className={styles.mainContainer}>
      <div>
        <h1 className={styles.mainheading}>Projects</h1>

        {/* Scrum Simulator */}
        <div className={styles.projectContainer}>
          <img src={Scrum} alt="Scrum" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Scrum Simulator (August 2023 - December 2023)
            </h1>
            <p className={styles.projectDescription}>
              Collaborated in the development of 'Scrum Simulator,' an
              innovative software tool designed to emulate Scrum agile
              methodology within a virtual environment. This project entailed
              architecting a user-centric platform to facilitate exploration and
              mastery of Scrum roles, ceremonies, and artifacts. Key features
              included robust user management, authentic role simulation,
              dynamic event handling, and comprehensive reporting capabilities.
              This venture underscored my proficiency in software engineering,
              agile frameworks, and project management, effectively synthesizing
              theoretical Scrum principles with their practical, real-world
              application.
            </p>
            {/* GitHub Button */}
            <a
              href="https://github.com/jsanirudh/ScrumSimulator"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>

        {/* Chatbot */}
        <div className={styles.projectContainer}>
          <img src={chatbot} alt="Chatbot" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Chatbot (August 2020 - December 2020)
            </h1>
            <p className={styles.projectDescription}>
              Developed an interactive chatbot in Google Colab, leveraging
              advanced Natural Language Processing (NLP) techniques to enhance
              response accuracy and user experience. Built using Python in a
              Jupyter Notebook, the chatbot integrates a custom knowledge base
              (chatbot.txt) to provide contextually relevant answers for data
              science-related queries. Implemented NLTK, spaCy, and Hugging
              Face’s Transformers for tokenization, named entity recognition,
              and semantic understanding, enabling more natural and intelligent
              conversations. This project showcases my expertise in Machine
              Learning, NLP, and AI-driven chatbot development, focusing on
              response optimization and user interaction.
            </p>
            <a
              href="https://github.com/jsanirudh/Chatbot"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>

        {/* Spammer Detection */}
        <div className={styles.projectContainer}>
          <img src={Spammer} alt="Spammer" className={styles.projectLogo} />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Spammer Detection and Fake User Identification (January 2020 - May
              2022)
            </h1>
            <p className={styles.projectDescription}>
              Developed an advanced system to detect spam and identify fake
              users on Twitter using machine learning algorithms like Random
              Forest, Naive Bayes, and SVM. The project followed a structured
              approach to design, testing, and iterative optimization. Utilized
              Java, JSP, HTML, CSS, and JavaScript for implementation, with
              MySQL for database management, ensuring enhanced accuracy,
              security, and efficiency
            </p>
            <a
              href="https://github.com/jsanirudh/Spammer-Detection-and-Fake-User-Identification"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>

        {/* Online House Construction */}
        <div className={styles.projectContainer}>
          <img
            src={OnlineHouse}
            alt="Online House Construction"
            className={styles.projectLogo}
          />
          <div className={styles.projectContent}>
            <h1 className={styles.projectHeading}>
              Online House Construction Supporting System (March 2020 - May
              2020)
            </h1>
            <p className={styles.projectDescription}>
              Developed a web application to streamline house construction
              planning and management. Led cross-functional collaboration,
              utilizing Java for backend processing and HTML, CSS, and
              JavaScript for the frontend. Designed a user-friendly search
              interface and implemented REST APIs to enhance state management
              and performance, while optimizing database efficiency for seamless
              user interaction.
            </p>
            <a
              href="https://github.com/jsanirudh/Online-House-Support-Construction-System"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.githubButton}
            >
              <FaGithub className={styles.githubIcon} /> View on GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
