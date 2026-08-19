import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Rating from "@/components/Rating/Rating";
import ProsCons from "@/components/ProsCons/ProsCons";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { bettingSites, getBettingSiteBySlug } from "@/data/betting-sites";
import { getThemeByPath } from "@/data/themes";
import styles from "./ReviewPage.module.css";

interface ReviewPageProps {
  params: Promise<{
    "review-slug": string;
  }>;
}

export async function generateStaticParams() {
  return bettingSites.map((site) => ({
    "review-slug": site.slug,
  }));
}

export async function generateMetadata({ params }: ReviewPageProps): Promise<Metadata> {
  const { "review-slug": slug } = await params;
  const site = getBettingSiteBySlug(slug);

  if (!site) {
    return {
      title: "Review Not Found | Pookie Play",
    };
  }

  return {
    title: `${site.name} Review & Welcome Bonus | Pookie Play`,
    description: `${site.name} review: ${site.bonusText}. In-depth analysis of odds, payment options, licensing, and security.`,
    alternates: {
      canonical: `https://pookieplay.com/${site.slug}/`,
    },
    openGraph: {
      title: `${site.name} Review - ${site.bonusText}`,
      description: site.summary,
      url: `https://pookieplay.com/${site.slug}/`,
      images: [{ url: site.logo, alt: `${site.name} Logo` }],
    },
  };
}

export default async function ReviewPage({ params }: ReviewPageProps) {
  const { "review-slug": slug } = await params;
  const site = getBettingSiteBySlug(slug);

  if (!site) {
    notFound();
  }

  const reviewJsonLd = {
    "@context": "https://schema.org",
    "@type": "Review",
    itemReviewed: {
      "@type": "Organization",
      name: site.name,
      image: `https://pookieplay.com${site.logo}`,
    },
    reviewRating: {
      "@type": "Rating",
      ratingValue: (site.rating / 20).toFixed(1),
      bestRating: "5",
      worstRating: "1",
    },
    author: {
      "@type": "Organization",
      name: "Pookie Play",
    },
    publisher: {
      "@type": "Organization",
      name: "Pookie Play",
    },
    reviewBody: site.summary,
  };

  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Reviews", url: "/review/" },
    { name: `${site.name} Review`, url: `/${site.slug}/` },
  ];

  const paymentImageMap: Record<string, string> = {
    "UPI": "/images/payments/upi.svg",
    "NetBanking": "/images/payments/netbanking.svg",
    "Credit Card": "/images/payments/card.svg",
    "Bitcoin": "/images/payments/crypto.svg",
    "Cards": "/images/payments/card.svg",
    "Crypto": "/images/payments/crypto.svg",
    "Interac": "/images/payments/netbanking.svg",
    "Visa": "/images/payments/card.svg",
    "Mastercard": "/images/payments/card.svg",
  };

  const theme = getThemeByPath(slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <div className="container" data-theme={theme.themeId}>
        <div className={styles.reviewWrapper}>
          <Breadcrumbs items={breadcrumbs} />

          {/* Page Heading & Short Intro */}
          <header className={styles.header}>
            <h1 className={styles.brandTitle}>{site.name}</h1>
            <p className={styles.introSummary}>{site.summary}</p>
          </header>

          {/* Hero Review Card */}
          <div className={styles.heroCard}>
            <div className={styles.cardMain}>
              {/* 1. Left: Brand Logo Box with white outline */}
              <div className={styles.logoBox}>
                <Image
                  src={site.logo}
                  alt={site.name}
                  width={240}
                  height={80}
                  className={styles.brandLogo}
                  unoptimized
                />
              </div>

              {/* 2. Rating & Trust Badge */}
              <div className={styles.ratingSection}>
                <Rating score={site.rating} />
              </div>

              {/* 3. Center: Bonus Highlight */}
              <div className={styles.bonusBox}>
                <span className={styles.bonusLabel}>
                  {site.bonusLabel || "Exclusive Welcome Bonus"}
                </span>
                <h2 className={styles.bonusTitle}>{site.bonusText}</h2>
              </div>

              {/* 4. Right: Claim CTA */}
              <div className={styles.ctaBox}>
                <a
                  href={site.claimUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className={styles.btnClaim}
                >
                  Claim Bonus
                </a>
              </div>
            </div>

            {/* Spec & Payment Strip */}
            <div className={styles.specStrip}>
              <div className={styles.paymentSection}>
                <span className={styles.specLabel}>Payment Methods:</span>
                <div className={styles.paymentList}>
                  {site.paymentMethods
                    .filter(
                      (pm) =>
                        !["crypto", "bitcoin", "btc", "cryptocurrency"].includes(
                          pm.toLowerCase()
                        )
                    )
                    .map((pm, idx) => (
                      <span key={idx} className={styles.paymentPill}>
                        {pm}
                      </span>
                    ))}
                </div>
              </div>

              {site.features && (
                <div className={styles.quickSpecs}>
                  <span className={styles.quickSpecPill}>
                    ⚡ Payout: {site.features.payoutSpeed}
                  </span>
                  <span className={styles.quickSpecPill}>
                    🛡️ {site.features.license}
                  </span>
                </div>
              )}
            </div>

            {/* Disclaimer */}
            <div className={styles.disclaimerRow}>
              <p>{site.disclaimer}</p>
            </div>
          </div>

          {/* Pros & Cons */}
          <ProsCons pros={site.pros} cons={site.cons} />

          {/* Long-form Editorial Review Content */}
          <article className={styles.editorialArticle}>
            {site.fullReview.map((paragraph, index) => (
              <p key={index} className={styles.reviewParagraph}>
                {paragraph}
              </p>
            ))}
          </article>
        </div>
      </div>
    </>
  );
}
