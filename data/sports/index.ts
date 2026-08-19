export interface SportsMatch {
  id: string;
  sport: "cricket" | "football" | "hockey" | "basketball" | "formula1";
  tournament: string;
  team1: {
    name: string;
    image: string;
    score?: string;
  };
  team2: {
    name: string;
    image: string;
    score?: string;
  };
  status: "LIVE" | "FINISHED" | "UPCOMING";
  resultText: string;
  date?: string;
  winnerTeam?: string;
}

export const cricketMatches: {
  live: SportsMatch[];
  recent: SportsMatch[];
} = {
  live: [
    {
      id: "cricket-live-1",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 10 runs",
      winnerTeam: "India"
    },
    {
      id: "cricket-live-2",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 23 runs",
      winnerTeam: "India"
    },
    {
      id: "cricket-live-3",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 10 wkts (with 40 balls remaining)",
      winnerTeam: "India"
    },
    {
      id: "cricket-live-4",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "Bangladesh", image: "/images/flags/bangladesh.svg" },
      status: "FINISHED",
      resultText: "Bangladesh won by 7 wkts (with 22 balls remaining)",
      winnerTeam: "Bangladesh"
    },
    {
      id: "cricket-live-5",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "Bangladesh", image: "/images/flags/bangladesh.svg" },
      status: "FINISHED",
      resultText: "Bangladesh won by 9 runs",
      winnerTeam: "Bangladesh"
    }
  ],
  recent: [
    {
      id: "cricket-rec-1",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 10 runs",
      winnerTeam: "India",
      date: "06 Jul 2024"
    },
    {
      id: "cricket-rec-2",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 23 runs",
      winnerTeam: "India",
      date: "07 Jul 2024"
    },
    {
      id: "cricket-rec-3",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 10 wkts (with 40 balls remaining)",
      winnerTeam: "India",
      date: "13 Jul 2024"
    },
    {
      id: "cricket-rec-4",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "Bangladesh", image: "/images/flags/bangladesh.svg" },
      status: "FINISHED",
      resultText: "Bangladesh won by 7 wkts (with 22 balls remaining)",
      winnerTeam: "Bangladesh",
      date: "14 Jul 2024"
    },
    {
      id: "cricket-rec-5",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "Bangladesh", image: "/images/flags/bangladesh.svg" },
      status: "FINISHED",
      resultText: "Bangladesh won by 9 runs",
      winnerTeam: "Bangladesh",
      date: "17 Jul 2024"
    },
    {
      id: "cricket-rec-6",
      sport: "cricket",
      tournament: "Twenty20 International",
      team1: { name: "Zimbabwe", image: "/images/flags/zimbabwe.svg" },
      team2: { name: "Bangladesh", image: "/images/flags/bangladesh.svg" },
      status: "FINISHED",
      resultText: "Zimbabwe won by 8 wkts",
      winnerTeam: "Zimbabwe",
      date: "21 Jul 2024"
    },
    {
      id: "cricket-rec-7",
      sport: "cricket",
      tournament: "Test 4/5 International",
      team1: { name: "England", image: "/images/flags/england.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "England won by 28 runs",
      winnerTeam: "England",
      date: "15 Jan 2024"
    },
    {
      id: "cricket-rec-8",
      sport: "cricket",
      tournament: "Test 2/5 International",
      team1: { name: "England", image: "/images/flags/england.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 106 runs",
      winnerTeam: "India",
      date: "02 Feb 2024"
    },
    {
      id: "cricket-rec-9",
      sport: "cricket",
      tournament: "Test 3/5 International",
      team1: { name: "England", image: "/images/flags/england.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 434 runs",
      winnerTeam: "India",
      date: "15 Feb 2024"
    },
    {
      id: "cricket-rec-10",
      sport: "cricket",
      tournament: "Test 4/5 International",
      team1: { name: "England", image: "/images/flags/england.svg" },
      team2: { name: "India", image: "/images/flags/india.svg" },
      status: "FINISHED",
      resultText: "India won by 5 wkts (with 20 balls remaining)",
      winnerTeam: "India",
      date: "23 Feb 2024"
    }
  ]
};

export const footballMatches: {
  live: SportsMatch[];
  recent: SportsMatch[];
} = {
  live: [],
  recent: [
    {
      id: "football-rec-1",
      sport: "football",
      tournament: "Premier League",
      team1: { name: "Arsenal", image: "/images/sports/arsenal.svg", score: "2" },
      team2: { name: "Chelsea", image: "/images/sports/chelsea.svg", score: "1" },
      status: "FINISHED",
      resultText: "Arsenal won 2-1",
      winnerTeam: "Arsenal",
      date: "Yesterday"
    },
    {
      id: "football-rec-2",
      sport: "football",
      tournament: "La Liga",
      team1: { name: "Real Madrid", image: "/images/sports/realmadrid.svg", score: "3" },
      team2: { name: "Barcelona", image: "/images/sports/barcelona.svg", score: "2" },
      status: "FINISHED",
      resultText: "Real Madrid won 3-2",
      winnerTeam: "Real Madrid",
      date: "2 days ago"
    }
  ]
};
