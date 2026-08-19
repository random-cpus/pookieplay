import React from "react";
import Link from "next/link";
import styles from "./NotFound.module.css";

export default function NotFound() {
  return (
    <div className="container">
      <div className={styles.wrapper}>
        <div className={styles.errorCode}>404</div>
        <h1 className={styles.title}>Page Not Found</h1>
        <p className={styles.description}>
          The page or review you are looking for might have been moved, renamed, or is temporarily
          unavailable.
        </p>

        <div className={styles.buttonGroup}>
          <Link href="/" className="btn-pink">
            Return to Homepage
          </Link>
          <Link href="/review/" className="btn-review">
            Browse All Reviews
          </Link>
        </div>

        <div className={styles.popularLinks}>
          <p className={styles.popularTitle}>Popular Destinations:</p>
          <div className={styles.linksRow}>
            <Link href="/canada/" className={styles.quickLink}>
              Canada Sportsbooks
            </Link>
            <Link href="/blogs/" className={styles.quickLink}>
              Betting Guides
            </Link>
            <Link href="/faqs/" className={styles.quickLink}>
              FAQs
            </Link>
            <Link href="/about-us/" className={styles.quickLink}>
              About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
