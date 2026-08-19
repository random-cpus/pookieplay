import React from "react";
import styles from "./Hero.module.css";

interface HeroProps {
  countryName?: string;
  headlineTitle?: string;
  headlineSubtitle?: string;
  showHeroImage?: boolean;
}

export default function Hero({
  countryName = "INDIA",
  headlineTitle,
  headlineSubtitle,
}: HeroProps) {
  const dynamicTitle = headlineTitle || `BETTING SITES IN ${countryName.toUpperCase()}`;
  const defaultSubtitle =
    headlineSubtitle ||
    "With so many cricket betting websites available, sometimes it can be hard deciding which one to pick. This is where Pookieplay can help. Our list of recommended sites below are among the best in the industry.";

  return (
    <section className={styles.heroSection}>
      <div className={styles.heroContent}>
        <div className={styles.textColumn}>
          <h1 className={styles.title}>
            <span className={styles.titleLine1}>ONLINE SPORTS</span>
            <span className={`text-gradient ${styles.titleLine2}`}>{dynamicTitle}</span>
          </h1>
          <p className={styles.subtitle}>{defaultSubtitle}</p>
        </div>
      </div>
    </section>
  );
}
