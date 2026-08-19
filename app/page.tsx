import React from "react";
import type { Metadata } from "next";
import Hero from "@/components/Hero/Hero";
import BettingSiteCard from "@/components/BettingSiteCard/BettingSiteCard";
import SportsScores from "@/components/SportsScores/SportsScores";
import ExpertPicks from "@/components/ExpertPicks/ExpertPicks";
import FAQ from "@/components/FAQ/FAQ";
import { getBettingSitesByCountry } from "@/data/betting-sites";
import { homeFAQs } from "@/data/faqs";

export const metadata: Metadata = {
  title: "Online Sports Betting Sites in India | Pookie Play",
  description:
    "With so many cricket betting websites available, Pookieplay helps you find the best betting sites in India with top bonuses, live cricket scores, and reviews.",
  alternates: {
    canonical: "https://pookieplay.com/",
  },
};

export default function HomePage() {
  const indiaSites = getBettingSitesByCountry("IN");

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: homeFAQs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container">
        {/* Section 1: Hero */}
        <Hero countryName="INDIA" headlineTitle="BETTING SITES IN INDIA" />

        {/* Section 2: Recommended Betting Sites List */}
        <section aria-label="Top Betting Sites in India">
          {indiaSites.map((site) => (
            <BettingSiteCard key={site.slug} site={site} />
          ))}
        </section>

        {/* Section 3: Sports Scores & Tabs */}
        <SportsScores
          defaultSport="cricket"
          tabsOrder={["cricket", "football"]}
        />

        {/* Section 4: Expert Picks */}
        <ExpertPicks />

        {/* Section 5: Quick Help FAQ */}
        <FAQ items={homeFAQs} title="Quick Help" />
      </div>
    </>
  );
}
