import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "../terms/PolicyPage.module.css";

export const metadata: Metadata = {
  title: "Affiliate Disclosure | Pookie Play",
  description:
    "Transparency and Affiliate Disclosure explaining how Pookie Play monetizes through affiliate partnerships.",
  alternates: {
    canonical: "https://pookieplay.com/affiliate-disclosure/",
  },
};

export default function AffiliateDisclosurePage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Affiliate Disclosure", url: "/affiliate-disclosure/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <article className={styles.policyCard}>
          <h1 className={styles.title}>Affiliate Disclosure</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2025</p>

          <div className={styles.content}>
            <section>
              <h2>1. How We Monetize</h2>
              <p>
                Pookie Play is an independently owned and free-to-access sports betting guide. To
                support our operational costs, editorial research, and live match data infrastructure,
                we participate in affiliate marketing programs with licensed gaming operators.
              </p>
            </section>

            <section>
              <h2>2. How Affiliate Links Work</h2>
              <p>
                When you click on a &quot;Claim Now&quot; button or promotional link on our site and
                subsequently register or make a deposit with a betting operator, we may receive a
                referral commission from that operator at zero additional cost to you.
              </p>
            </section>

            <section>
              <h2>3. Editorial Independence and Review Integrity</h2>
              <p>
                Our commercial relationships with betting operators do not influence our ratings,
                cons assessments, or editorial verdict. If a platform demonstrates poor withdrawal
                performance, predatory bonus terms, or substandard odds margins, our reviews will
                reflect these weaknesses regardless of commercial affiliations.
              </p>
            </section>

            <section>
              <h2>4. Responsible Gaming Reminder</h2>
              <p>
                We only feature operators holding verified gaming licenses. Please bet responsibly,
                never wager funds you cannot afford to lose, and adhere strictly to the 18+ age
                requirement.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
