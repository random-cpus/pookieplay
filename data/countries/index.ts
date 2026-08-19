export interface Country {
  name: string;
  code: string;
  flag: string;
  path: string;
  currency: string;
  headlineTitle: string;
  headlineSubtitle: string;
  defaultSportTab: string;
  popularSports: string[];
}

export const countries: Country[] = [
  {
    name: "India",
    code: "IN",
    flag: "🇮🇳",
    path: "/",
    currency: "₹ INR",
    headlineTitle: "BETTING SITES IN INDIA",
    headlineSubtitle: "With so many cricket betting websites available, sometimes it can be hard deciding which one to pick. This is where Pookieplay can help. Our list of recommended sites below are among the best in the industry.",
    defaultSportTab: "cricket",
    popularSports: ["Cricket", "Football"]
  },
  {
    name: "Canada",
    code: "CA",
    flag: "🇨🇦",
    path: "/canada/",
    currency: "$ CAD",
    headlineTitle: "BETTING SITES IN CANADA",
    headlineSubtitle: "With so many cricket betting websites available, sometimes it can be hard deciding which one to pick. This is where Pookieplay can help. Our list of recommended sites below are among the best in the industry.",
    defaultSportTab: "football",
    popularSports: ["Cricket", "Football"]
  },
  {
    name: "Brazil",
    code: "BR",
    flag: "🇧🇷",
    path: "/brazil/",
    currency: "R$ BRL",
    headlineTitle: "BETTING SITES IN BRAZIL",
    headlineSubtitle: "Find the most reliable, high-odds betting platforms accepting Pix, with top football leagues and exclusive welcome bonuses.",
    defaultSportTab: "football",
    popularSports: ["Cricket", "Football"]
  },
  {
    name: "Portugal",
    code: "PT",
    flag: "🇵🇹",
    path: "/portugal/",
    currency: "€ EUR",
    headlineTitle: "BETTING SITES IN PORTUGAL",
    headlineSubtitle: "Discover premier licensed European bookmakers with prime odds on Primeira Liga, Champions League, and fast Multibanco cashouts.",
    defaultSportTab: "football",
    popularSports: ["Cricket", "Football"]
  },
  {
    name: "Germany",
    code: "DE",
    flag: "🇩🇪",
    path: "/germany/",
    currency: "€ EUR",
    headlineTitle: "BETTING SITES IN GERMANY",
    headlineSubtitle: "Explore the most reputable sportsbooks in Germany with comprehensive Bundesliga coverage, Sofort/PayPal banking, and high limits.",
    defaultSportTab: "football",
    popularSports: ["Cricket", "Football"]
  },
  {
    name: "Mexico",
    code: "MX",
    flag: "🇲🇽",
    path: "/mexico/",
    currency: "$ MXN",
    headlineTitle: "BETTING SITES IN MEXICO",
    headlineSubtitle: "Your ultimate guide to online sports betting in Mexico. Top Liga MX odds, SPEI deposits, and certified licensed bookmakers.",
    defaultSportTab: "football",
    popularSports: ["Cricket", "Football"]
  }
];

export function getCountryByCode(code: string): Country {
  return countries.find(c => c.code.toUpperCase() === code.toUpperCase()) || countries[0];
}

export function getCountryByPath(path: string): Country {
  const cleanPath = path.endsWith("/") ? path : `${path}/`;
  return countries.find(c => c.path === cleanPath || c.path === path) || countries[0];
}
