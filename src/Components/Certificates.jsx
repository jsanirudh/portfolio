import React from "react";
import styles from "./certificates.module.css";
import awsLogo from "../assets/aws.jpg";
import azureLogo from "../assets/azure.jpg";

export default function Certificates() {
  return (
    <div className={styles.certificatesContainer}>
      <h1 className={styles.certificatesHeading}>Certifications</h1>
      <div className={styles.certificatesGrid}>
        <div className={styles.certificateCard}>
          <div className={styles.certificateHeader}>
            License & Certification
          </div>
          <div className={styles.certificateContent}>
            <a
              href="https://www.credly.com/badges/083e2ebe-b4cf-46a5-a74f-8b2759c5e8ac/linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={awsLogo}
                alt="AWS Certified"
                className={styles.certLogo}
              />
            </a>
            <div>
              <a
                href="https://www.credly.com/badges/083e2ebe-b4cf-46a5-a74f-8b2759c5e8ac/linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certTitleLink}
              >
                <h2 className={styles.certificateTitle}>
                  AWS Certified Developer – Associate
                </h2>
              </a>
              <p className={styles.certificateIssuer}>
                Amazon Web Services (AWS)
              </p>
              <p className={styles.certificateDate}>
                Issued Jul 2024 - Expires Jul 2027
              </p>
            </div>
          </div>
        </div>

        <div className={styles.certificateCard}>
          <div className={styles.certificateHeader}>
            License & Certification
          </div>
          <div className={styles.certificateContent}>
            <a
              href="https://www.credly.com/badges/33564ae2-a96c-4194-99ac-02124cc53785?source=linked_in_profile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={azureLogo}
                alt="Azure Certified"
                className={styles.certLogo}
              />
            </a>
            <div>
              <a
                href="https://www.credly.com/badges/33564ae2-a96c-4194-99ac-02124cc53785?source=linked_in_profile"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.certTitleLink}
              >
                <h2 className={styles.certificateTitle}>
                  Microsoft Certified: Azure Data Fundamentals
                </h2>
              </a>
              <p className={styles.certificateIssuer}>Microsoft</p>
              <p className={styles.certificateDate}>Issued May 2022</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
