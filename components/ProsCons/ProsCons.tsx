import React from "react";
import styles from "./ProsCons.module.css";

interface ProsConsProps {
  pros: string[];
  cons: string[];
}

export default function ProsCons({ pros, cons }: ProsConsProps) {
  return (
    <div className={styles.prosConsGrid}>
      {/* Pros Box */}
      <div className={styles.columnBox}>
        <h3 className={styles.prosTitle}>Pros</h3>
        <ul className={styles.list}>
          {pros.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.prosBullet}>•</span>
              <span className={styles.itemText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cons Box */}
      <div className={styles.columnBox}>
        <h3 className={styles.consTitle}>Cons</h3>
        <ul className={styles.list}>
          {cons.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <span className={styles.consBullet}>•</span>
              <span className={styles.itemText}>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
