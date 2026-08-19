"use client";

import React, { useEffect } from "react";
import styles from "./Error.module.css";

export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="container">
      <div className={styles.errorWrapper}>
        <h1 className={styles.title}>Something went wrong</h1>
        <p className={styles.description}>
          An unexpected error occurred while loading this page. Please try again or return to the
          homepage.
        </p>
        <button type="button" onClick={() => reset()} className="btn-pink">
          Try Again
        </button>
      </div>
    </div>
  );
}
