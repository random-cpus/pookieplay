import React from "react";
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "../terms/PolicyPage.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy | Pookie Play",
  description: "Privacy Policy detailing data collection, cookies, and protection on Pookie Play.",
  alternates: {
    canonical: "https://pookieplay.com/privacy/",
  },
};

export default function PrivacyPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Privacy Policy", url: "/privacy/" },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <article className={styles.policyCard}>
          <h1 className={styles.title}>Privacy Policy</h1>
          <p className={styles.lastUpdated}>Last Updated: January 2025</p>

          <div className={styles.content}>
            <section>
              <h2>1. Information We Collect</h2>
              <p>
                Pookie Play does not require account creation to browse reviews. We may collect
                non-personally identifiable technical telemetry (e.g. browser type, operating system,
                page views, regional country estimation) strictly for site performance and content
                localization.
              </p>
            </section>

            <section>
              <h2>2. Contact Form Inquiries</h2>
              <p>
                If you voluntarily reach out via our Contact Us form, we receive your name, email
                address, and message body solely to respond to your inquiry. We never sell or share
                contact data with third-party marketing brokers.
              </p>
            </section>

            <section>
              <h2>3. Cookies and Tracking Technologies</h2>
              <p>
                We use functional cookies to remember regional selections (such as preferred country
                portal) and standard analytics cookies to measure anonymous website traffic. You can
                manage or disable cookies directly in your browser settings.
              </p>
            </section>

            <section>
              <h2>4. Third-Party Links</h2>
              <p>
                Our website includes outbound links to third-party sportsbooks and external
                resources. Once you navigate away from Pookie Play, your data is governed by the
                privacy policies of those external entities.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
}
