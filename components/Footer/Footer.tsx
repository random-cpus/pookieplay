"use client";

import React, { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import { getThemeByPath } from "@/data/themes";
import styles from "./Footer.module.css";

function FooterContent() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const countryParam = searchParams?.get("country") || searchParams?.get("c");
  const theme = getThemeByPath(pathname || "", countryParam);

  return (
    <footer className={styles.footer}>
      <div className="container">
        {/* Top 4-Column Grid */}
        <div className={styles.footerGrid}>
          {/* Column 1: Brand Info */}
          <div className={styles.brandCol}>
            <Link href={theme.homePath || "/"} className={styles.footerLogo}>
              <Image
                src={theme.logo}
                alt={theme.logoAlt}
                width={160}
                height={64}
                unoptimized
                className={styles.logoImg}
              />
            </Link>
            <p className={styles.brandDesc}>
              Pookie Play guides you to trusted online sports & cricket betting sites with expert reviews,
              insights, and updates to help you bet safely and smartly.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Quick Links</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/about-us/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> FAQ&apos;s
                </Link>
              </li>
              <li>
                <Link href="/blogs/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> Blogs
                </Link>
              </li>
              <li>
                <Link href="/contact-us/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Policies */}
          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Policies</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/terms/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/affiliate-disclosure/" className={styles.footerLink}>
                  <span className={styles.bullet}>•</span> Affiliate Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Responsible Gambling Disclaimer Box */}
        <div className={styles.disclaimerBox}>
          <h5 className={styles.disclaimerTitle}>PLEASE PLAY RESPONSIBLY</h5>
          <p className={styles.disclaimerText}>
            Pookie play has no affiliation with the cricket, football, hockey other sports/esports teams,
            tournaments or organizations displayed on this website. We claim no credit for any associated
            images posted on the site unless otherwise noted. Images are copyright to their respective owners.
            Furthermore, We are not a betting site and do not accept bets from players. We do not endorse illegal
            gambling. Please check the online gambling regulations in your jurisdiction before placing any bets on
            any betting sites advertised on our website.
          </p>
        </div>

        {/* Copyright Bottom Bar */}
        <div className={styles.copyright}>
          <p>Copyright © 2025 Pookieplay.com. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function Footer() {
  return (
    <Suspense fallback={null}>
      <FooterContent />
    </Suspense>
  );
}
