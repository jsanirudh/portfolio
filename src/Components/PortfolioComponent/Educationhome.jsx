import styles from "./educationhome.module.css";
import JNTUA from "../../assets/jntua.png";
import AsuLogo from "../../assets/asu.png";

export default function Educationhome() {
  return (
    <div className={styles.mainContainer}>
      <h1>Studied At</h1>
      <div className={styles.gridContainer}>
        <div className={styles.componentContainer}>
          <img src={AsuLogo} alt="AsuLogo" className={styles.image} />
          <h2>Arizona State University</h2>
          <h4>
            Earned my Master’s in Computer Software Engineering with a CGPA of
            3.90 from ASU.
          </h4>
        </div>
        <div className={styles.componentContainer}>
          <img src={JNTUA} alt="JNTUA" className={styles.image} />
          <h2>Sri Venkateswara College of Engineering</h2>
          <h3>
            {" "}
            Affiliated to Jawaharlal Nehru Technological University, Anantapur{" "}
          </h3>
          <h4>
            Completed my Bachelor's in Information Technology with a CGPA of
            8.26
          </h4>
        </div>
      </div>
    </div>
  );
}
