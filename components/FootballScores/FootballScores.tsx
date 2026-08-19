"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { NormalizedFootballMatch, FootballApiResponse } from "@/lib/api/sportsrc";
import styles from "./FootballScores.module.css";

function LeagueFlag({ flag, country }: { flag?: string; country?: string }) {
  const [error, setError] = useState(false);
  if (!flag || error) return null;
  return (
    <span className={styles.leagueFlag}>
      <Image
        src={flag}
        alt={country || "Flag"}
        width={16}
        height={12}
        className={styles.flagImg}
        onError={() => setError(true)}
        unoptimized
      />
    </span>
  );
}

function TeamBadge({ name, logo }: { name: string; logo?: string }) {
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

function FootballMatchCard({
  match,
  isLive,
}: {
  match: NormalizedFootballMatch;
  isLive: boolean;
}) {
  return (
    <div className={styles.matchCard}>
      {/* Top Meta Header */}
      <div className={styles.matchMeta}>
        <div className={styles.leagueInfo}>
          <LeagueFlag flag={match.countryFlag} country={match.country} />
          <span className={styles.leagueName}>{match.league}</span>
          {match.country && (
            <span className={styles.countryName}>• {match.country}</span>
          )}
          {match.round && (
            <span className={styles.roundText}>• {match.round}</span>
          )}
        </div>

        <div className={styles.statusBadgeWrapper}>
          {isLive ? (
            <span className={styles.liveTag}>{match.statusDetail || "LIVE"}</span>
          ) : match.startTime ? (
            <span className={styles.matchTimeBadge}>{match.startTime}</span>
          ) : null}
        </div>
      </div>

      {/* Main Teams Rows (2 Rows) */}
      <div className={styles.teamsList}>
        {/* Home Team Row */}
        <div className={styles.teamRow}>
          <div className={styles.teamLeft}>
            <TeamBadge name={match.home} logo={match.homeLogo} />
            <span className={styles.teamName} title={match.home}>
              {match.home}
            </span>
          </div>
          <div className={styles.teamRight}>
            {isLive ? (
              <span className={styles.scoreNumber}>{match.homeScore ?? 0}</span>
            ) : (
              <span className={styles.vsDash}>-</span>
            )}
          </div>
        </div>

        {/* Away Team Row */}
        <div className={styles.teamRow}>
          <div className={styles.teamLeft}>
            <TeamBadge name={match.away} logo={match.awayLogo} />
            <span className={styles.teamName} title={match.away}>
              {match.away}
            </span>
          </div>
          <div className={styles.teamRight}>
            {isLive ? (
              <span className={styles.scoreNumber}>{match.awayScore ?? 0}</span>
            ) : (
              <span className={styles.vsDash}>-</span>
            )}
          </div>
        </div>
      </div>

      {/* Match Footer */}
      {(isLive || match.startTime) && (
        <div className={styles.matchFooter}>
          <span className={isLive ? styles.liveFooterText : styles.upcomingFooterText}>
            {isLive ? (match.statusDetail || "Match In Progress") : `Scheduled at ${match.startTime}`}
          </span>
        </div>
      )}
    </div>
  );
}

export default function FootballScores() {
  const [data, setData] = useState<FootballApiResponse | null>(null);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const loadData = async (isInitial = false) => {
      if (isInitial) setLoading(true);
      else setRefreshing(true);

      try {
        const res = await fetch("/api/football", {
          signal: controller.signal,
          headers: { Accept: "application/json" },
        });
        if (res.ok) {
          const json: FootballApiResponse = await res.json();
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
    }, 30000);

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

  const liveMatches = data?.live || [];
  const upcomingMatches = data?.upcoming || [];

  return (
    <div className={styles.scoresContainer}>
      {/* Top Header */}
      <div className={styles.sectionHeader}>
        <div className={styles.titleRow}>
          <h3 className={styles.mainTitle}>⚽ Football Matches & Live Scores</h3>
          {refreshing && <span className={styles.refreshIndicator}>Syncing...</span>}
        </div>
        <p className={styles.subNotice}>
          Live data powered by SportSRC. Auto-refreshes every 30 seconds.
        </p>
      </div>

      {/* SECTION 1: LIVE MATCHES */}
      <div className={styles.subSection}>
        <div className={styles.subSectionHeader}>
          <h4 className={styles.subSectionTitle}>
            <span className="live-dot"></span> LIVE MATCHES
            {liveMatches.length > 0 && (
              <span className={styles.countBadge}>{liveMatches.length}</span>
            )}
          </h4>
        </div>

        {liveMatches.length > 0 ? (
          <div className={styles.matchesList}>
            {liveMatches.map((match) => (
              <FootballMatchCard key={match.id} match={match} isLive={true} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No live football matches right now.</p>
          </div>
        )}
      </div>

      {/* SECTION 2: UPCOMING MATCHES */}
      <div className={`${styles.subSection} ${styles.upcomingSubSection}`}>
        <div className={styles.subSectionHeader}>
          <h4 className={styles.subSectionTitle}>
            📅 UPCOMING MATCHES
            {upcomingMatches.length > 0 && (
              <span className={styles.countBadgeUpcoming}>{upcomingMatches.length}</span>
            )}
          </h4>
        </div>

        {upcomingMatches.length > 0 ? (
          <div className={styles.matchesList}>
            {upcomingMatches.map((match) => (
              <FootballMatchCard key={match.id} match={match} isLive={false} />
            ))}
          </div>
        ) : (
          <div className={styles.emptyState}>
            <p className={styles.emptyText}>No upcoming football matches right now.</p>
          </div>
        )}
      </div>
    </div>
  );
}
