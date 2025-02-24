import React, { useState, useEffect } from "react";
import styles from "./portfolio.module.css";
import profile from "../assets/profile.jpg";
import Experiencehome from "./PortfolioComponent/Experiencehome";
import Educationhome from "./PortfolioComponent/Educationhome";

export default function Portfolio() {
  const words = ["Full Stack Developer", "Software Engineer", "Problem Solver"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const pauseTime = 1000;

  useEffect(() => {
    const currentWord = words[wordIndex];
    let typingTimeout;

    if (!isDeleting) {
      if (text.length < currentWord.length) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev + currentWord.charAt(prev.length));
        }, typingSpeed);
      } else {
        setTimeout(() => setIsDeleting(true), pauseTime);
      }
    } else {
      if (text.length > 0) {
        typingTimeout = setTimeout(() => {
          setText((prev) => prev.slice(0, -1));
        }, deletingSpeed);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }

    return () => clearTimeout(typingTimeout);
  }, [text, isDeleting, wordIndex]);

  return (
    <div className={styles.landingpage}>
      <img src={profile} alt="Profile" className={styles.iconFull} />
      <h1 className={styles.heading}>Hi, I'm Anirudh.</h1>
      <h2 className={styles.subheading}>
        {text}
        <span className={styles.cursor}>|</span>
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
