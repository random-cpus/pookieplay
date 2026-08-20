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
  title: "Online Sports Betting Sites in Canada | Pookie Play",
  description:
    "Best online sports betting sites in Canada. Top CAD deposit options, Interac payouts, exclusive sportsbook bonuses, and reviews.",
  alternates: {
    canonical: "https://pookieplay.com/canada/",
  },
};

export default function CanadaPage() {
  const canadaSites = getBettingSitesByCountry("CA");

  return (
    <div className="container" data-theme="canada">
      <Hero
        countryName="CANADA"
        headlineTitle="BETTING SITES IN CANADA"
      />

      {/* Recommended Betting Sites List */}
      <section aria-label="Top Betting Sites in Canada">
        {canadaSites.map((site) => (
          <BettingSiteCard key={site.slug} site={site} />
        ))}
      </section>

      {/* Sports Scores: Default to Football */}
      <SportsScores
        defaultSport="football"
        tabsOrder={["football", "cricket"]}
      />

      {/* Expert Picks */}
      <ExpertPicks countryCode="ca" />

      {/* Quick Help FAQ */}
      <FAQ items={homeFAQs} title="Quick Help" />
    </div>
  );
}
