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
  title: "Online Sports Betting Sites in Mexico | Pookie Play",
  description:
    "Compare top online sports betting sites in Mexico with Liga MX odds, SPEI / OXXO deposits, and exclusive welcome bonuses.",
  alternates: {
    canonical: "https://pookieplay.com/mexico/",
  },
};

export default function MexicoPage() {
  const mexicoSites = getBettingSitesByCountry("MX");

  return (
    <div className="container" data-theme="mexico">
      <Hero
        countryName="MEXICO"
        headlineTitle="BETTING SITES IN MEXICO"
        headlineSubtitle="Discover top-rated sports betting operators in Mexico with premier odds for Liga MX, boxing, and secure payment methods."
      />

      <section aria-label="Top Betting Sites in Mexico">
        {mexicoSites.map((site) => (
          <BettingSiteCard key={site.slug} site={site} />
        ))}
      </section>

      <SportsScores
        defaultSport="football"
        tabsOrder={["football", "cricket"]}
      />

      <ExpertPicks countryCode="mx" />
      <FAQ items={homeFAQs} title="Quick Help" />
    </div>
  );
}
