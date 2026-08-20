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
  title: "Online Sports Betting Sites in Portugal | Pookie Play",
  description:
    "Discover the best sports betting sites in Portugal with competitive odds, fast payouts, and exclusive welcome bonuses.",
  alternates: {
    canonical: "https://pookieplay.com/portugal/",
  },
};

export default function PortugalPage() {
  const portugalSites = getBettingSitesByCountry("PT");

  return (
    <div className="container" data-theme="portugal">
      <Hero
        countryName="PORTUGAL"
        headlineTitle="BETTING SITES IN PORTUGAL"
        headlineSubtitle="Discover top-rated sports betting operators with premier odds for Primeira Liga and European championships."
      />

      <section aria-label="Top Betting Sites in Portugal">
        {portugalSites.map((site) => (
          <BettingSiteCard key={site.slug} site={site} />
        ))}
      </section>

      <SportsScores
        defaultSport="football"
        tabsOrder={["football", "cricket"]}
      />

      <ExpertPicks countryCode="pt" />
      <FAQ items={homeFAQs} title="Quick Help" />
    </div>
  );
}
