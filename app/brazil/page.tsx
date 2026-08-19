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
  title: "Online Sports Betting Sites in Brazil | Pookie Play",
  description:
    "Complete guide to the best online sports betting sites in Brazil with Pix, exclusive welcome bonuses, and in-depth reviews.",
  alternates: {
    canonical: "https://pookieplay.com/brazil/",
  },
};

export default function BrazilPage() {
  const brazilSites = getBettingSitesByCountry("BR");

  return (
    <div className="container" data-theme="brazil">
      <Hero
        countryName="BRAZIL"
        headlineTitle="BETTING SITES IN BRAZIL"
        headlineSubtitle="Find the most trusted betting platforms with top odds, fast Pix payouts, and exclusive welcome rewards."
      />

      <section aria-label="Top Betting Sites in Brazil">
        {brazilSites.map((site) => (
          <BettingSiteCard key={site.slug} site={site} />
        ))}
      </section>

      <SportsScores
        defaultSport="football"
        tabsOrder={["football", "cricket"]}
      />

      <ExpertPicks />
      <FAQ items={homeFAQs} title="Quick Help" />
    </div>
  );
}
