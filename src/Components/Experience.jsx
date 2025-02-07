import styles from "./experience.module.css";

export default function Experience() {
  return (
    <div className={styles.mainContainer}>
      {/* About Me Section */}
      <div className={styles.experienceContainerleft}>
        <h1 className={styles.experienceHeadingleft}>
          Auto Bim Route AI (August 2024 - December 2024)
        </h1>
        <p className={styles.experienceDescriptionleft}>
          Developed an innovative Java-based Auto BIM Route AI application
          focused on automated route planning for PCB design. Integrated
          advanced algorithms to visualize and optimize connections between
          nodes, enhancing pathfinding efficiency. Designed and implemented
          features that dynamically display preferred paths on the user
          interface, ensuring smooth zooming and precise drawing of paths.
          Incorporated start/stop controls, providing users with greater control
          and flexibility in designing and visualizing PCB routes.
        </p>
      </div>
      <div className={styles.experienceContainerright}>
        <h1 className={styles.experienceHeadingright}>
          Arizona State University (August 2024 - December 2024)
        </h1>
        <p className={styles.experienceDescriptionright}>
          Designed and evaluated coursework for programming courses, ensuring
          clarity and effectiveness in assignments and projects. Delivered
          lectures to enhance student understanding and engagement. Provided
          guidance through office hours, helping students grasp programming
          concepts and improve problem-solving skills. Led coding workshops and
          peer reviews, fostering a collaborative learning environment.
        </p>
      </div>
      <div className={styles.experienceContainerleft}>
        <h1 className={styles.experienceHeadingleft}>
          Tata Consultancy Service (January 2021 - December 2022)
        </h1>
        <p className={styles.experienceDescriptionleft}>
          Designed and developed scalable APIs using Java Spring Boot,
          integrating Kafka for efficient microservices communication and
          optimizing database performance with PostgreSQL, SQL Server, and
          Elasticsearch. Built and maintained CI/CD pipelines with Jenkins,
          GitLab, and AWS CodePipeline, streamlining deployment workflows.
          Developed authentication systems with RBAC and AWS Cognito to enhance
          security. Created responsive user interfaces with React.js and Vue.js,
          collaborating with UX/UI teams to improve user experience. Led
          enhancements to cloud-based projects by integrating Java, MySQL, and
          Spring Boot, ensuring seamless functionality and performance
          optimization.
        </p>
      </div>
    </div>
  );
}
