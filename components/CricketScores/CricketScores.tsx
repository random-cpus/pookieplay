"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NormalizedCricketMatch, CricketApiResponse } from "@/lib/api/sportmonks";
import styles from "./CricketScores.module.css";

function CricketLeagueLogo({ logo, league }: { logo?: string; league?: string }) {
  const [error, setError] = useState(false);
  if (!logo || error) return null;
  return (
    <span className={styles.leagueFlag}>
      <Image
        src={logo}
        alt={league || "League"}
        width={16}
        height={16}
        className={styles.flagImg}
        onError={() => setError(true)}
        unoptimized
      />
    </span>
  );
}

function CricketTeamBadge({ name, logo }: { name: string; logo?: string }) {
  const [imgError, setImgError] = useState(false);
  const initials = (name || "T")
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 3)
    .toUpperCase();

  if (logo && !imgError) {
    return (
      <div className={styles.teamLogoWrapper}>
        <Image
          src={logo}
          alt={name}
          width={32}
          height={32}
          className={styles.teamLogoImg}
          onError={() => setImgError(true)}
          unoptimized
        />
      </div>
    );
  }

  return (
    <div className={styles.teamInitialsBadge} title={name}>
      {initials}
    </div>
  );
}

function CricketCardItem({ match }: { match: NormalizedCricketMatch }) {
  const isLive =
    match.isLive ||
    match.status.toLowerCase().includes("live") ||
    match.status.toLowerCase().includes("in progress");

  return (
    <div className={styles.matchCard}>
      {/* League & Meta Header */}
      <div className={styles.matchMeta}>
        <div className={styles.leagueInfo}>
          {match.format && (
            <span
              className={`${styles.formatBadge} ${
                styles["format_" + match.format.toLowerCase()] || ""
              }`}
            >
              {match.format}
            </span>
          )}
          <CricketLeagueLogo logo={match.leagueLogo} league={match.league} />
          <span className={styles.leagueName}>{match.league}</span>
          {match.round && (
            <span className={styles.roundText}>• {match.round}</span>
          )}
          {match.date && (
            <span className={styles.dateText}>• {match.date}</span>
          )}
        </div>

        <div className={styles.statusBadgeWrapper}>
          <span className={isLive ? styles.liveTag : styles.finishedTag}>
            {match.status}
          </span>
        </div>
      </div>

      {/* Teams & Scores List (2 Clean Rows) */}
      <div className={styles.teamsList}>
        {/* Home Team Row */}
        <div className={styles.teamRow}>
          <div className={styles.teamLeft}>
            <CricketTeamBadge name={match.homeTeam.name} logo={match.homeTeam.logo} />
            <span className={styles.teamName} title={match.homeTeam.name}>
              {match.homeTeam.name}
            </span>
          </div>
          <div className={styles.teamRight}>
            {match.homeTeam.score ? (
              <div className={styles.scoreContainer}>
                <span className={styles.scoreRuns}>{match.homeTeam.score}</span>
                {match.homeTeam.overs && (
                  <span className={styles.scoreOvers}>({match.homeTeam.overs})</span>
                )}
              </div>
            ) : (
              <span className={styles.yetToBat}>Yet to bat</span>
            )}
          </div>
        </div>

        {/* Away Team Row */}
        <div className={styles.teamRow}>
          <div className={styles.teamLeft}>
            <CricketTeamBadge name={match.awayTeam.name} logo={match.awayTeam.logo} />
            <span className={styles.teamName} title={match.awayTeam.name}>
              {match.awayTeam.name}
            </span>
          </div>
          <div className={styles.teamRight}>
            {match.awayTeam.score ? (
              <div className={styles.scoreContainer}>
                <span className={styles.scoreRuns}>{match.awayTeam.score}</span>
                {match.awayTeam.overs && (
                  <span className={styles.scoreOvers}>({match.awayTeam.overs})</span>
                )}
              </div>
            ) : (
              <span className={styles.yetToBat}>Yet to bat</span>
            )}
          </div>
        </div>
      </div>

      {/* Match Result / Summary Footer */}
      {match.scoreNote && (
        <div className={styles.matchFooter}>
          <p className={isLive ? styles.liveFooterText : styles.finishedFooterText}>
            {match.scoreNote}
          </p>
        </div>
      )}
    </div>
  );
}

export default function CricketScores() {
  const [data, setData] = useState<CricketApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadData = async (isInitial = false) => {
      if (isInitial) setLoading(true);
      else setRefreshing(true);

      try {
        const res = await fetch("/api/cricket", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          const json: CricketApiResponse = await res.json();
          if (isMounted) setData(json);
        }
      } catch {
        // Silently ignore aborted or transient network blips
      } finally {
        if (isMounted) {
          setLoading(false);
          setRefreshing(false);
        }
      }
    };

    loadData(true);

    const interval = setInterval(() => {
      loadData(false);
    }, 60000);

    return () => {
      isMounted = false;
      controller.abort();
      clearInterval(interval);
    };
  }, []);

  if (loading && !data) {
    return (
      <div className={styles.scoresContainer}>
        <div className={styles.loadingSkeleton}>
          <div className={styles.skeletonHeader}></div>
          <div className={styles.skeletonRow}></div>
          <div className={styles.skeletonRow}></div>
        </div>
      </div>
    );
  }

  const liveMatches = data?.live?.matches || [];
  const recentMatches = data?.recent || [];
  const isFallback = data?.live?.isFallback || false;
  const fallbackMessage = data?.live?.message || "";

  return (
    <div className={styles.scoresContainer}>
      {/* Top Header */}
      <div className={styles.sectionHeader}>
        <div className={styles.titleRow}>
          <h3 className={styles.mainTitle}>🏏 Cricket Matches & Live Scores</h3>
          {refreshing && <span className={styles.refreshIndicator}>Syncing...</span>}
        </div>
        <p className={styles.subNotice}>
          Live scores powered by SportMonks. Auto-refreshes every 60 seconds.
        </p>

        {isFallback && fallbackMessage && (
          <div className={styles.fallbackNoticeBox}>
            <p>{fallbackMessage}</p>
          </div>
        )}
      </div>

      {/* If LIVE matches exist, show Section 1 (Live) and Section 2 (Recent) */}
      {!isFallback ? (
        <>
          {/* SECTION 1: LIVE CRICKET MATCHES */}
          <div className={styles.subSection}>
            <div className={styles.subSectionHeader}>
              <h4 className={styles.subSectionTitle}>
                <span className={styles.liveDot}></span> LIVE MATCHES
                {liveMatches.length > 0 && (
                  <span className={styles.countBadge}>{liveMatches.length}</span>
                )}
              </h4>
            </div>

            {liveMatches.length > 0 ? (
              <div className={styles.matchesList}>
                {liveMatches.map((match) => (
                  <CricketCardItem key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>No live cricket matches right now.</p>
              </div>
            )}
          </div>

          {/* SECTION 2: RECENT INTERNATIONAL MATCHES */}
          <div className={`${styles.subSection} ${styles.recentSubSection}`}>
            <div className={styles.subSectionHeader}>
              <h4 className={styles.subSectionTitle}>
                🏆 RECENT INTERNATIONAL MATCHES
                {recentMatches.length > 0 && (
                  <span className={styles.countBadgeRecent}>{recentMatches.length}</span>
                )}
              </h4>
            </div>

            {recentMatches.length > 0 ? (
              <div className={styles.matchesList}>
                {recentMatches.map((match) => (
                  <CricketCardItem key={match.id} match={match} />
                ))}
              </div>
            ) : (
              <div className={styles.emptyState}>
                <p className={styles.emptyText}>No recent international matches available right now.</p>
              </div>
            )}
          </div>
        </>
      ) : (
        /* If NO live matches are currently on, show single clear Recently Finished section */
        <div className={styles.subSection}>
          <div className={styles.subSectionHeader}>
            <h4 className={styles.subSectionTitle}>
              🏆 RECENTLY FINISHED MATCHES
              {recentMatches.length > 0 && (
                <span className={styles.countBadgeRecent}>{recentMatches.length}</span>
              )}
            </h4>
          </div>

          {recentMatches.length > 0 ? (
            <div className={styles.matchesList}>
              {recentMatches.map((match) => (
                <CricketCardItem key={match.id} match={match} />
              ))}
            </div>
          ) : (
            <div className={styles.emptyState}>
              <p className={styles.emptyText}>No recent cricket matches found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
