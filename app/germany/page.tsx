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
  title: "Online Sports Betting Sites in Germany | Pookie Play",
  description:
    "Compare top online sports betting sites in Germany with Bundesliga odds, fast payouts, and exclusive welcome bonuses.",
  alternates: {
    canonical: "https://pookieplay.com/germany/",
  },
};

export default function GermanyPage() {
  const germanySites = getBettingSitesByCountry("DE");

  return (
    <div className="container" data-theme="germany">
      <Hero
        countryName="GERMANY"
        headlineTitle="BETTING SITES IN GERMANY"
        headlineSubtitle="Discover top-rated sports betting operators with premier odds for the Bundesliga, Champions League, and secure payment options."
      />

      <section aria-label="Top Betting Sites in Germany">
        {germanySites.map((site) => (
          <BettingSiteCard key={site.slug} site={site} />
        ))}
      </section>

      <SportsScores
        defaultSport="football"
        tabsOrder={["football", "cricket"]}
      />

      <ExpertPicks countryCode="de" />
      <FAQ items={homeFAQs} title="Quick Help" />
    </div>
  );
}
