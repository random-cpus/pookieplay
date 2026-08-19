import React from "react";
import Link from "next/link";
import Image from "next/image";
import { BettingSite } from "@/data/betting-sites";
import styles from "./BettingSiteCard.module.css";

interface BettingSiteCardProps {
  site: BettingSite;
  currency?: string;
}

export default function BettingSiteCard({ site }: BettingSiteCardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.mainContent}>
        {/* Left Logo Box Container */}
        <div className={styles.logoBox}>
          <Link href={site.reviewUrl} className={styles.logoLink} title={`${site.name} Review`}>
            <Image
              src={site.logo}
              alt={site.name}
              width={360}
              height={130}
              className={styles.logoImg}
              unoptimized
            />
          </Link>
        </div>

        {/* Center Bonus Info */}
        <div className={styles.bonusWrapper}>
          <span className={styles.bonusLabel}>{site.bonusLabel || "Exclusive Welcome Bonus"}</span>
          <h3 className={styles.bonusTitle}>{site.bonusText}</h3>
        </div>

        {/* Right Action Buttons */}
        <div className={styles.actionsWrapper}>
          <a
            href={site.claimUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className={styles.btnClaim}
          >
            Claim Now
          </a>
          <Link href={site.reviewUrl} className={styles.btnReview}>
            Review
          </Link>
        </div>
      </div>

      {/* Bottom Centered Disclaimer */}
      <div className={styles.disclaimerWrapper}>
        <p className={styles.disclaimerText}>
          Advertising link 18+. Terms & Conditions apply. Please play responsibly.
        </p>
      </div>
    </div>
  );
}
