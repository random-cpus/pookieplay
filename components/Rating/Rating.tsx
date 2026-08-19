import React from "react";
import styles from "./Rating.module.css";

interface RatingProps {
  score: number; // e.g. 92 for 92%
}

export default function Rating({ score }: RatingProps) {
  const ratingOutOf5 = (score / 20).toFixed(1);

  return (
    <div className={styles.ratingContainer}>
      <div className={styles.scorePill}>
        <span className={styles.starIcon}>★</span>
        <span className={styles.scoreNumber}>{ratingOutOf5}</span>
        <span className={styles.scoreMax}>/5</span>
      </div>
      <div className={styles.ratingMeta}>
        <div className={styles.starsGroup}>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
          <span className={styles.star}>★</span>
        </div>
        <span className={styles.verifiedText}>✓ Verified Site</span>
      </div>
    </div>
  );
}
