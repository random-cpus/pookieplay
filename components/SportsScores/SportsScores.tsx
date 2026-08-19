"use client";

import React, { useState } from "react";
import CricketScores from "@/components/CricketScores/CricketScores";
import FootballScores from "@/components/FootballScores/FootballScores";
import styles from "./SportsScores.module.css";

interface SportsScoresProps {
  defaultSport?: string;
  tabsOrder?: string[];
}

export default function SportsScores({
  defaultSport = "cricket",
  tabsOrder = ["cricket", "football"],
}: SportsScoresProps) {
  const [activeTab, setActiveTab] = useState<string>(defaultSport.toLowerCase());

  const tabLabels: Record<string, string> = {
    cricket: "CRICKET",
    football: "FOOTBALL",
  };

  return (
    <section className={styles.sportsSection} aria-label="Sports Matches and Scores">
      <div className={styles.tabNav}>
        {tabsOrder.map((tabKey) => {
          const key = tabKey.toLowerCase();
          const isActive = activeTab === key;
          return (
            <button
              key={key}
              type="button"
              className={`${styles.tabBtn} ${isActive ? styles.activeTab : ""}`}
              onClick={() => setActiveTab(key)}
            >
              {tabLabels[key] || tabKey.toUpperCase()}
            </button>
          );
        })}
      </div>

      <div className={styles.tabContent} key={activeTab}>
        {activeTab === "cricket" ? <CricketScores /> : <FootballScores />}
      </div>
    </section>
  );
}
