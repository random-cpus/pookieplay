export interface NormalizedFootballMatch {
  id: string;
  home: string;
  away: string;
  homeLogo?: string;
  awayLogo?: string;
  league: string;
  country: string;
  leagueLogo?: string;
  countryFlag?: string;
  round?: string;
  status: string; // "inprogress" | "notstarted" | "finished"
  statusDetail?: string; // "2nd half", "Not started", "HT", etc.
  timestamp?: number;
  startTime?: string;
  homeScore?: number;
  awayScore?: number;
  displayScore?: string;
}

export interface FootballApiResponse {
  success: boolean;
  updatedAt: string;
  live: NormalizedFootballMatch[];
  upcoming: NormalizedFootballMatch[];
  liveCount: number;
  upcomingCount: number;
  error?: string;
}

interface RawSportSRCLeagueGroup {
  league: {
    name?: string;
    country?: string;
    flag?: string;
    logo?: string;
  };
  matches: Array<{
    id: string;
    title?: string;
    timestamp?: number;
    status: string;
    status_detail?: string;
    round?: string;
    teams?: {
      home?: {
        name?: string;
        code?: string;
        badge?: string;
      };
      away?: {
        name?: string;
        code?: string;
        badge?: string;
      };
    };
    score?: {
      current?: {
        home?: number;
        away?: number;
      };
      display?: string;
    };
  }>;
}

interface RawSportSRCResponse {
  success: boolean;
  total_leagues?: number;
  total_matches?: number;
  data?: RawSportSRCLeagueGroup[];
}

function formatStartTime(timestamp?: number): string {
  if (!timestamp) return "";
  try {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  } catch {
    return "";
  }
}

function normalizeSportSRC(rawData?: RawSportSRCLeagueGroup[]): NormalizedFootballMatch[] {
  if (!rawData || !Array.isArray(rawData)) return [];

  const result: NormalizedFootballMatch[] = [];

  for (const group of rawData) {
    const leagueName = group.league?.name || "Football League";
    const countryName = group.league?.country || "International";
    const leagueLogo = group.league?.logo;
    const countryFlag = group.league?.flag;

    if (group.matches && Array.isArray(group.matches)) {
      for (const m of group.matches) {
        const homeName = m.teams?.home?.name || "Home Team";
        const awayName = m.teams?.away?.name || "Away Team";
        const homeLogo = m.teams?.home?.badge;
        const awayLogo = m.teams?.away?.badge;

        result.push({
          id: m.id || `${homeName}-${awayName}-${m.timestamp || Date.now()}`,
          home: homeName,
          away: awayName,
          homeLogo,
          awayLogo,
          league: leagueName,
          country: countryName,
          leagueLogo,
          countryFlag,
          round: m.round,
          status: m.status,
          statusDetail: m.status_detail || (m.status === "inprogress" ? "LIVE" : "Upcoming"),
          timestamp: m.timestamp,
          startTime: formatStartTime(m.timestamp),
          homeScore: m.score?.current?.home,
          awayScore: m.score?.current?.away,
          displayScore: m.score?.display || (m.score?.current ? `${m.score.current.home} - ${m.score.current.away}` : undefined),
        });
      }
    }
  }

  return result;
}

export async function fetchSportSRCFootball(): Promise<FootballApiResponse> {
  const apiKey = process.env.SPORTSRC_API_KEY;
  const now = new Date();
  const dateStr = now.toISOString().split("T")[0]; // YYYY-MM-DD

  // If no API key configured, return clean empty state without crashing
  if (!apiKey) {
    return {
      success: true,
      updatedAt: now.toISOString(),
      live: [],
      upcoming: [],
      liveCount: 0,
      upcomingCount: 0,
    };
  }

  try {
    // 1. Fetch LIVE matches (status=inprogress) with 30s cache
    const liveUrl = `https://api.sportsrc.org/v2/?type=matches&sport=football&status=inprogress&date=${dateStr}`;
    const liveRes = await fetch(liveUrl, {
      headers: {
        "X-API-KEY": apiKey,
        "Accept": "application/json",
      },
      next: { revalidate: 30 },
    });

    let liveData: RawSportSRCResponse = { success: false };
    if (liveRes.ok) {
      liveData = await liveRes.json();
    }

    // 2. Fetch UPCOMING matches (status=notstarted) with 300s cache
    const upcomingUrl = `https://api.sportsrc.org/v2/?type=matches&sport=football&status=notstarted&date=${dateStr}`;
    const upcomingRes = await fetch(upcomingUrl, {
      headers: {
        "X-API-KEY": apiKey,
        "Accept": "application/json",
      },
      next: { revalidate: 300 },
    });

    let upcomingData: RawSportSRCResponse = { success: false };
    if (upcomingRes.ok) {
      upcomingData = await upcomingRes.json();
    }

    const normalizedLive = normalizeSportSRC(liveData.data);
    const normalizedUpcoming = normalizeSportSRC(upcomingData.data);

    return {
      success: true,
      updatedAt: now.toISOString(),
      live: normalizedLive,
      upcoming: normalizedUpcoming,
      liveCount: normalizedLive.length,
      upcomingCount: normalizedUpcoming.length,
    };
  } catch (error) {
    console.error("SportSRC API fetch error:", error);
    return {
      success: false,
      updatedAt: now.toISOString(),
      live: [],
      upcoming: [],
      liveCount: 0,
      upcomingCount: 0,
      error: error instanceof Error ? error.message : "Failed to fetch football scores",
    };
  }
}
