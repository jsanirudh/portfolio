import { useEffect, useRef, useState } from "react";
import styles from "./experiencehome.module.css";
import AutoBimLogo from "../../assets/autobim.png";
import AsuLogo from "../../assets/Ira.jpg";
import TataLogo from "../../assets/tcs.png";

export default function Experiencehome() {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.mainContainer} ${
        isVisible ? styles.show : styles.hidden
      }`}
    >
      <h1>Worked At</h1>
      <div className={styles.gridContainer}>
        <div className={styles.componentContainer}>
          <img src={AutoBimLogo} alt="Auto BIM" className={styles.image} />
          <h2>Auto Bim Route AI</h2>
          <h4>
            An innovative Java-based Auto BIM Route AI application focused on
            automated route planning for PCB design.
          </h4>
        </div>
        <div className={styles.componentContainer}>
          <img src={AsuLogo} alt="ASU" className={styles.image} />
          <h2>Arizona State University</h2>
          <h4>
            Worked as a Graduate Student Assistant for CSE 240 - Principles of
            Programming Languages & SER 594 - Game Programming.
          </h4>
        </div>
        <div className={styles.componentContainer}>
          <img src={TataLogo} alt="TCS" className={styles.image} />
          <h2>Tata Consultancy Services</h2>
          <h4>
            Software Engineer at TCS, designed and developed scalable APIs using
            Java Spring Boot, integrating Kafka for efficient microservices
            communication and optimizing database performance with PostgreSQL,
            SQL Server, and Elasticsearch.
          </h4>
        </div>
      </div>
    </div>
  );
}
