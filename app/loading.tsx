import React from "react";
import styles from "./Loading.module.css";

export default function Loading() {
  return (
    <div className="container">
      <div className={styles.loadingWrapper}>
        <div className={styles.spinner}></div>
        <p className={styles.loadingText}>Loading Pookie Play...</p>
      </div>
    </div>
  );
}
