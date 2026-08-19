import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import BettingSiteCard from "@/components/BettingSiteCard/BettingSiteCard";
import { bettingSites } from "@/data/betting-sites";
import styles from "./ReviewIndex.module.css";

export const metadata: Metadata = {
  title: "Online Betting Site Reviews & Ratings | Pookie Play",
  description:
    "Comprehensive directory of online sports betting site reviews, welcome bonuses, payment methods, and trust ratings.",
  alternates: {
    canonical: "https://pookieplay.com/review/",
  },
};

export default function ReviewIndexPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/review/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <header className={styles.header}>
          <h1 className={styles.title}>
            <span>ONLINE BETTING SITE</span>{" "}
            <span className="text-gradient">REVIEWS & RATINGS</span>
          </h1>
          <p className={styles.subtitle}>
            Explore unbiased expert audits of the top licensed sports betting operators. We evaluate
            odds margins, withdrawal speeds, cricket market depth, and promotional terms.
          </p>
        </header>

        <div className={styles.cardsList}>
          {bettingSites.map((site) => (
            <BettingSiteCard key={site.slug} site={site} />
          ))}
        </div>
      </div>
    </div>
  );
}
