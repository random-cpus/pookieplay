import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./PolicyPage.module.css";

export const metadata: Metadata = {
  title: "Terms & Conditions | Pookie Play",
  description: "Terms and Conditions governing the use of Pookie Play's website and review services.",
  alternates: {
    canonical: "https://pookieplay.com/terms/",
  },
};

export default function TermsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Terms & Conditions", url: "/terms/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <article className={styles.policyCard}>
          <h1 className={styles.title}>Terms & Conditions</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2025</p>

          <div className={styles.content}>
            <section>
              <h2>1. Agreement to Terms</h2>
              <p>
                By accessing and utilizing Pookieplay.com (&quot;the Website&quot;), you acknowledge
                that you have read, understood, and agreed to be bound by these Terms and Conditions.
                If you do not agree with any part of these terms, you must discontinue use of this
                website immediately.
              </p>
            </section>

            <section>
              <h2>2. Informational and Affiliate Nature</h2>
              <p>
                Pookie Play operates solely as an independent editorial guide and review aggregator.
                We do not operate sportsbooks, do not accept bets, and do not process financial
                wagering transactions. Any betting or casino activities are conducted on third-party
                platforms subject to their respective terms and regulatory licenses.
              </p>
            </section>

            <section>
              <h2>3. Age Restrictions (18+)</h2>
              <p>
                The Website is intended exclusively for individuals aged 18 years or older (or the
                legal age of majority for gambling in your jurisdiction). It is the user&apos;s sole
                responsibility to ensure compliance with applicable local laws and regulations before
                engaging in online betting.
              </p>
            </section>

            <section>
              <h2>4. Intellectual Property</h2>
              <p>
                All original text, layout designs, and graphics on Pookie Play are the property of
                Resilience Esports LLP. Third-party brand logos and trade names are the property of
                their respective owners and are displayed strictly for review and identification
                purposes.
              </p>
            </section>

            <section>
              <h2>5. Limitation of Liability</h2>
              <p>
                Pookie Play makes no warranties regarding the complete accuracy or timeliness of
                odds or bonus promotions offered by third-party operators. In no event shall Pookie
                Play or its operators be held liable for any financial losses or disputes arising
                from wagering activities conducted on third-party platforms.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
