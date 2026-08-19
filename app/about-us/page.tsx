import React from "react";
import type { Metadata } from "next";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import styles from "./AboutUs.module.css";

export const metadata: Metadata = {
  title: "About Us | Pookie Play - Trusted Cricket Betting Guide",
  description:
    "Learn about Pookie Play's mission to provide honest, transparent reviews, betting tips, and safe recommendations for cricket fans.",
  alternates: {
    canonical: "https://pookieplay.com/about-us/",
  },
};

export default function AboutUsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "About Us", url: "/about-us/" },
  ];

  const trustCards = [
    {
      title: "Unbiased Reviews",
      icon: "/images/icons/unbiased.svg",
      desc: "Our recommendations are based on research and testing, not sponsorships.",
    },
    {
      title: "Transparency",
      icon: "/images/icons/transparency.svg",
      desc: "While we may earn a commission from affiliate links, it never influences our ratings.",
    },
    {
      title: "Expertise",
      icon: "/images/icons/expertise.svg",
      desc: "Our team consists of cricket lovers and betting enthusiasts with deep knowledge.",
    },
    {
      title: "User Safety First",
      icon: "/images/icons/safety.svg",
      desc: "We only promote betting sites that are licensed, regulated, and secure.",
    },
  ];

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        {/* Hero Banner with Title & Intro */}
        <header className={styles.header}>
          <h1 className={styles.pageTitle}>
            <span>ABOUT </span>
            <span className="text-gradient">US</span>
          </h1>
          <p className={styles.headerSubtitle}>
            Welcome to <strong>Pookie Play</strong>, your ultimate destination for everything
            related to <strong>cricket betting</strong>. We are not a betting operator – Instead,
            we act as your <strong>trusted guide</strong>, connecting cricket fans with the best,
            safest, and most rewarding online cricket betting platforms.
          </p>
          <p className={styles.headerNote}>
            Whether you&apos;re a seasoned punter or just getting started with cricket betting, our
            goal is to help you make smarter, safer, and more enjoyable betting decisions.
          </p>
        </header>

        {/* Our Mission Section */}
        <section className={styles.missionSection} aria-label="Our Mission">
          <h2 className={styles.sectionTitle}>Our Mission</h2>

          <div className={styles.missionGrid}>
            <div className={styles.missionImgCol}>
              <Image
                src="/images/about/mission-phone.jpg"
                alt="Pookie Play Mobile Sports Betting Guide"
                width={480}
                height={480}
                className={styles.missionImg}
              />
            </div>

            <div className={styles.missionTextCol}>
              <p>
                At Pookie Play, our mission is to create a safe and reliable space for cricket fans
                who are interested in exploring online betting. We aim to provide{" "}
                <strong>honest, transparent, and detailed reviews</strong> of cricket betting sites
                so that our users can make informed choices without falling for misleading claims.
                Our focus is on guiding users toward{" "}
                <strong>licensed, secure, and trustworthy platforms</strong> that prioritize fair
                play and responsible gaming practices. We believe betting should always be an
                enjoyable and entertaining part of following cricket, not a financial risk or a
                harmful habit.
              </p>
              <p>
                With so many websites in the online betting industry claiming to be the
                &quot;best,&quot; we understand how confusing it can be for newcomers as well as
                experienced players. That&apos;s why our goal is to{" "}
                <strong>cut through the noise and filter out unreliable platforms</strong>,
                presenting only those that deliver genuine value, safety, and credibility. By
                combining our love for cricket with our expertise in the betting industry, we strive
                to help our audience bet smarter, safer, and with greater confidence.
              </p>
            </div>
          </div>
        </section>

        {/* What We Do Section */}
        <section className={styles.whatWeDoSection} aria-label="What We Do">
          <h2 className={styles.sectionTitle}>What We Do</h2>
          <p className={styles.whatWeDoIntro}>
            We specialize in curating and delivering high-quality information for cricket betting
            fans worldwide. Here&apos;s what you&apos;ll find on Pookie Play:
          </p>

          <ul className={styles.offerList}>
            <li>
              <strong>Detailed Reviews:</strong> Honest breakdowns of cricket betting websites,
              covering usability, odds, security, payment methods, and customer service.
            </li>
            <li>
              <strong>Latest Bonuses & Offers:</strong> Stay updated with exclusive bonus codes,
              welcome packages, free bets, and promotional offers from trusted betting operators.
            </li>
            <li>
              <strong>Cricket Predictions & Tips:</strong> Expert insights and betting strategies to
              help you understand odds, betting markets, and match outcomes.
            </li>
            <li>
              <strong>Beginner&apos;s Guides:</strong> Easy-to-follow tutorials on how to bet on
              cricket, from understanding odds to placing your first wager.
            </li>
            <li>
              <strong>News & Updates:</strong> Stay informed with the latest cricket betting news,
              tournaments, and market trends.
            </li>
          </ul>

          <p className={styles.whatWeDoOutro}>
            We are committed to helping you enjoy cricket betting in a{" "}
            <strong>safe, informed, and responsible way</strong>.
          </p>
        </section>

        {/* Why Trust Us Section */}
        <section className={styles.trustSection} aria-label="Why Trust Us">
          <h2 className={styles.sectionTitle}>Why Trust Us?</h2>
          <p className={styles.trustIntro}>
            Trust is the foundation of our website. Here&apos;s why thousands of cricket fans rely
            on us:
          </p>

          <div className={styles.trustGrid}>
            {trustCards.map((card, idx) => (
              <div key={idx} className={styles.trustCard}>
                <div className={styles.trustIconBox}>
                  <Image
                    src={card.icon}
                    alt={card.title}
                    width={70}
                    height={70}
                    className={styles.trustIcon}
                  />
                </div>
                <h3 className={styles.trustCardTitle}>{card.title}</h3>
                <p className={styles.trustCardDesc}>{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Responsible Gambling Commitment Box */}
        <div className={styles.responsibleBox}>
          <h3 className={styles.responsibleTitle}>OUR COMMITMENT TO RESPONSIBLE GAMBLING</h3>
          <p className={styles.responsibleDesc}>
            We believe that cricket betting should always be a fun and entertaining activity, never
            one that causes harm. That&apos;s why we strongly advocate responsible gaming and
            encourage users to never wager more than they can afford to lose. It&apos;s important to
            set clear limits on both spending and time, treating betting as a form of entertainment
            rather than a source of income. If you ever feel that gambling is becoming a problem, we
            strongly urge you to seek assistance from professional organizations that specialize in
            supporting individuals with gambling-related issues.
          </p>
        </div>
      </div>
    </div>
  );
}
