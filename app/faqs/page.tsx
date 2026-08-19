import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import FAQ from "@/components/FAQ/FAQ";
import { homeFAQs } from "@/data/faqs";
import styles from "./FAQsPage.module.css";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | Pookie Play",
  description:
    "Find answers to common questions about online cricket betting, bookmaker licensing, welcome bonuses, UPI deposits, and tax on winnings.",
  alternates: {
    canonical: "https://pookieplay.com/faqs/",
  },
};

export default function FAQsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "FAQs", url: "/faqs/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <header className={styles.header}>
          <h1 className={styles.title}>
            <span>FREQUENTLY ASKED </span>
            <span className="text-gradient">QUESTIONS</span>
          </h1>
          <p className={styles.subtitle}>
            Have questions about sports betting platforms, deposit methods, or bonus claims? Find
            direct and verified answers below.
          </p>
        </header>

        <FAQ items={homeFAQs} title="" />
      </div>
    </div>
  );
}
