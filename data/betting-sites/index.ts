export interface BettingSite {
  slug: string;
  name: string;
  logo: string;
  logoAlt?: string;
  badge?: string;
  rating: number; // e.g. 89 for 89%
  bonusLabel: string;
  bonusText: string;
  claimUrl: string;
  reviewUrl: string;
  disclaimer: string;
  paymentMethods: string[];
  pros: string[];
  cons: string[];
  countries: string[]; // ["IN", "CA", "BR", "PT", "DE", "MX"]
  summary: string;
  fullReview: string[];
  features?: {
    license: string;
    payoutSpeed: string;
    minDeposit: string;
    sportsAvailable: string[];
  };
}

export const bettingSites: BettingSite[] = [
  // India Sites
  {
    slug: "khelguru",
    name: "KHELGURU",
    logo: "/images/logos/khelguru.png",
    rating: 89,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "330% Up To ₹65,000",
    claimUrl: "https://khelguru.co.in/?utm_source=resilience&utm_medium=meta&utm_campaign=rlxkhelguru",
    reviewUrl: "/khelguru/",
    disclaimer: "Accepts: ₹INR 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["UPI", "NetBanking", "Credit Card"],
    countries: ["IN"],
    summary: "Khelguru positions itself as an iGaming platform focused on live casino entertainment, slots, jackpots, and promotions, with payment support that includes UPI and manual bank transfer. The site also presents itself as a Curacao-registered operator and includes live casino help text on the platform.",
    pros: [
      "Strong focus on live casino content and slot entertainment.",
      "Offers simple payment routes such as UPI and manual bank transfer.",
      "Includes jackpot games, which adds variety beyond standard sportsbook content.",
      "Public site text suggests a long-running branded casino environment rather than a bare-bones betting page."
    ],
    cons: [
      "The live casino help text still references Flash, which makes the platform feel less modern than newer mobile-first brands.",
      "Publicly visible payment details are more limited than on larger international books.",
      "Sports depth is not as prominent in the available site text as casino play.",
      "Brand transparency is thinner than on bigger mainstream operators."
    ],
    fullReview: [
      "Khelguru is best described as a casino-focused online iGaming platform that primarily caters to users interested in live casino entertainment, slot gaming, jackpots, roulette, and fast-access gaming experiences rather than a highly advanced sportsbook ecosystem. Unlike many large international betting brands that heavily prioritize sports wagering and professional sportsbook analytics, Khelguru appears to position itself more strongly as a casino-first platform designed for users who enjoy online casino entertainment through a relatively simple and accessible interface.",
      "One of the most noticeable aspects of Khelguru is its strong emphasis on live casino gaming. The platform promotes access to live dealer tables, roulette, slot games, jackpot-style entertainment, and additional casino-focused experiences that are designed to recreate the atmosphere of real casino environments through online gameplay. This casino-first approach gives the platform a different identity compared to sportsbook-heavy operators that mainly focus on cricket betting or international sports coverage.",
      "Slot gaming appears to be one of the major attractions within the Khelguru ecosystem. Users may access multiple slot categories, themed gaming titles, jackpot games, and instant-play entertainment options depending on platform availability and regional access. The inclusion of jackpot-style gaming is particularly important because it adds an additional layer of entertainment beyond standard casino products and sportsbook betting.",
      "The platform also includes live casino functionality, which allows users to participate in real-time dealer-hosted games through streamed casino environments. Games such as roulette, blackjack, baccarat, poker-style tables, and additional dealer-led experiences help create a more immersive gaming atmosphere for users who prefer interactive casino gameplay over automated gaming systems.",
      "Public-facing content associated with Khelguru frequently highlights bonuses, promotional offers, and casino rewards. Promotional campaigns appear to play an important role within the platform's user engagement strategy. Depending on the region and ongoing campaigns, users may encounter welcome bonuses, cashback offers, deposit promotions, casino rewards, and seasonal gaming campaigns designed to encourage regular participation.",
      "Another important aspect of Khelguru is its relatively straightforward payment structure. Public site information indicates that users may fund accounts using UPI and manual bank transfer systems. This focus on simple deposit methods is especially useful for users who prefer direct local payment options rather than relying only on international banking systems or cryptocurrency wallets. The simplified payment approach helps make the platform more accessible for casual users and first-time online gaming participants.",
      "Khelguru also publicly states that it is operated by KHELGURU OPERATIONS N.V. based in Curaçao. This gives the platform a more formal offshore-operator identity compared to smaller anonymous casino websites that provide little operational information. For many users, visible operational details help create a stronger sense of legitimacy and organizational structure within the platform.",
      "From a user-experience perspective, Khelguru appears designed mainly for users who want quick access to casino entertainment without navigating through highly technical sportsbook systems or complex betting dashboards. The platform's overall structure feels more focused on convenience, simple navigation, and direct gaming access rather than advanced sportsbook analysis or professional betting tools.",
      "Overall, Khelguru is best positioned as a casino-first online gaming platform focused on live dealer experiences, slot entertainment, jackpot gaming, simple deposit systems, and accessible online casino gameplay. Its strongest strengths are straightforward usability, casino-focused entertainment, and accessible payment methods, while its main limitations are a less modern interface and a lighter sportsbook ecosystem compared to larger international betting brands."
    ],
    features: {
      license: "Curaçao eGaming (KHELGURU OPERATIONS N.V.)",
      payoutSpeed: "Instant - 24 Hours",
      minDeposit: "₹500",
      sportsAvailable: ["Cricket", "Football", "Tennis", "Basketball", "Live Casino", "Slots"]
    }
  },
  {
    slug: "12bet",
    name: "12BET.com",
    logo: "/images/logos/12bet.png",
    rating: 92,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "200% First Deposit Sportsbook Bonus",
    claimUrl: "https://goto.12bix24.com/join/65525/hien/google/index.html",
    reviewUrl: "/12bet/",
    disclaimer: "Accepts: ₹INR 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["UPI", "NetBanking", "Visa", "Mastercard"],
    countries: ["IN"],
    summary: "12BET is an established international online betting platform renowned for its extensive Asian handicap markets, deep cricket sportsbook coverage, and reliable payment gateways.",
    pros: [
      "Extensive cricket coverage with ultra-competitive odds on IPL and ICC events.",
      "Decades of established brand reputation and global sports sponsorships.",
      "Seamless INR transactions with instant UPI and NetBanking deposits.",
      "24/7 dedicated customer support via live chat and WhatsApp."
    ],
    cons: [
      "Desktop interface design feels slightly traditional.",
      "Higher rollover requirements on certain promotional sportsbook bonuses."
    ],
    fullReview: [
      "12BET has solidified its standing as one of the premier sports betting operators in the Asian and global markets. With a legacy spanning over a decade, the platform specializes in providing comprehensive sports coverage with an emphasis on cricket, football, and major international leagues.",
      "The sportsbook offers a wide array of betting markets, including match winner, top batsman, innings runs, over/under totals, and ball-by-ball in-play betting for major cricket tournaments such as the IPL, Big Bash League, and ICC World Cup.",
      "Security and reliability are central to 12BET's operations. The operator operates under recognized gaming licenses and deploys 256-bit SSL encryption to guarantee user privacy and financial integrity."
    ],
    features: {
      license: "Isle of Man / PAGCOR",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "₹1,000",
      sportsAvailable: ["Cricket", "Football", "Kabaddi", "Tennis", "Table Tennis", "Esports"]
    }
  },
  {
    slug: "melbet",
    name: "MELBET",
    logo: "/images/logos/melbet.png",
    rating: 94,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "300% Indian Grand Welcome",
    claimUrl: "https://refpa3665.com/L?tag=d_4757511m_2170c_[]ALL[]null[]null[]general[]_d180754_l226340_direct_link&site=4757511&ad=2170&r=registration",
    reviewUrl: "/melbet/",
    disclaimer: "Accepts: ₹INR 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["UPI", "Paytm", "PhonePe", "Skrill"],
    countries: ["IN", "BR"],
    summary: "Melbet offers one of the most comprehensive sportsbooks in the world, featuring thousands of live daily events, top-tier cricket odds, and expansive welcome incentives.",
    pros: [
      "Massive market depth on all global and domestic cricket formats.",
      "Rich live streaming platform with real-time multi-view live betting.",
      "Broad array of Indian banking options including PhonePe, Paytm, and UPI.",
      "Dedicated high-speed mobile apps for Android and iOS."
    ],
    cons: [
      "Dense sportsbook interface can be overwhelming for total beginners.",
      "Verification process required for large initial withdrawals."
    ],
    fullReview: [
      "Melbet is a powerhouse in the international sports betting arena, delivering a feature-packed betting experience designed to satisfy both casual sports enthusiasts and veteran wagering professionals.",
      "Boasting coverage of over 1,000 daily sports events, Melbet's cricket section offers unmatched depth, with live match trackers, statistical breakdowns, and instant accumulator bonuses.",
      "Payment processing is tailored to regional preferences, allowing Indian players to deposit and withdraw effortlessly using UPI, Paytm, IMPS, and leading payment channels."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "15 Minutes - 2 Hours",
      minDeposit: "₹300",
      sportsAvailable: ["Cricket", "Football", "Tennis", "Basketball", "Hockey", "Esports", "Virtual Sports"]
    }
  },
  {
    slug: "96com",
    name: "96.com",
    logo: "/images/logos/96com.png",
    rating: 88,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "100% Bonus",
    claimUrl: "https://96.com/",
    reviewUrl: "/96com/",
    disclaimer: "Accepts: ₹INR 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["UPI", "NetBanking", "Bank Transfer"],
    countries: ["IN"],
    summary: "96.com is a dynamic sports betting and casino hub tailored specifically for Indian players with ultra-fast UPI deposits and cricket exchange options.",
    pros: [
      "Cricket betting exchange with competitive commission rates.",
      "Instant deposit and rapid cashout processing via UPI.",
      "Sleek, modern mobile-optimized interface.",
      "Special promotions for major Indian cricket leagues."
    ],
    cons: [
      "Smaller catalog of niche non-sports games.",
      "Limited live streaming for lower-tier tournaments."
    ],
    fullReview: [
      "96.com has rapidly emerged as a favorite among Indian sports bettors due to its streamlined user interface, tailored cricket betting options, and dedicated betting exchange functionality.",
      "The platform enables users to both back and lay bets on international test series, ODIs, and domestic T20 competitions, providing greater odds flexibility compared to standard fixed-odds bookmakers.",
      "Deposits and withdrawals are handled swiftly with support for all standard Indian digital payment methods."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 4 Hours",
      minDeposit: "₹500",
      sportsAvailable: ["Cricket Exchange", "Sportsbook", "Live Casino", "Indian Card Games"]
    }
  },
  {
    slug: "parimatch",
    name: "PARI MATCH",
    logo: "/images/logos/parimatch.png",
    rating: 96,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Reward",
    claimUrl: "https://aff.parimatch365.net/click?campaign_id=3&pub_id=59",
    reviewUrl: "/parimatch/",
    disclaimer: "Accepts: ₹INR 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["UPI", "NetBanking", "AstroPay", "Cards"],
    countries: ["IN"],
    summary: "PariMatch is a tier-one global sports betting giant known for industry-leading cricket odds, brand ambassadors, rapid payouts, and an exceptional mobile app.",
    pros: [
      "Top-rated cricket odds in the industry with minimal bookmaker margin.",
      "Award-winning mobile apps for iOS and Android.",
      "Instant UPI deposits and withdrawals within 15 minutes.",
      "Official partner of leading sports leagues and franchise teams."
    ],
    cons: [
      "Strict KYC verification required before first withdrawal.",
      "Support queues can lengthen during high-profile IPL finals."
    ],
    fullReview: [
      "PariMatch represents the gold standard in sports entertainment, offering world-class technology, licensed security, and a relentless focus on cricket and regional sports markets.",
      "Indian bettors benefit from customized promotions, localized customer support in Hindi and English, and a seamless betting slip with one-click betting options.",
      "In addition to traditional pre-match markets, PariMatch's live betting platform features live score updates, ball-by-ball animations, and cash-out functionality."
    ],
    features: {
      license: "Curaçao eGaming / UKGC",
      payoutSpeed: "15 Minutes - 1 Hour",
      minDeposit: "₹300",
      sportsAvailable: ["Cricket", "Football", "Kabaddi", "UFC", "Tennis", "Basketball", "Esports"]
    }
  },

  // Canada Sites
  {
    slug: "dimebit",
    name: "dimebit",
    logo: "/images/logos/dimebit.png",
    rating: 91,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "100% Bonus First Deposit",
    claimUrl: "https://dimebit.com/affiliate/orca",
    reviewUrl: "/dimebit/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Interac", "Visa", "Mastercard", "Crypto", "iDebit"],
    countries: ["CA"],
    summary: "Dimebit is a modern crypto-friendly sportsbook and casino popular among Canadian bettors for its fast Interac cashouts and extensive NHL and soccer markets.",
    pros: [
      "Seamless Interac e-Transfer deposits and withdrawals for Canadian players.",
      "Comprehensive coverage of NHL, CFL, NBA, and Premier League.",
      "Clean, responsive dark-mode user interface.",
      "Generous welcome match on first CAD deposits."
    ],
    cons: [
      "Newer brand in the Canadian market with growing reputation.",
      "Phone support not available 24/7."
    ],
    fullReview: [
      "Dimebit brings a cutting-edge betting experience tailored to Canadian players. With support for CAD currency and local Canadian payment channels like Interac and iDebit, funding your account is frictionless.",
      "The sportsbook covers all major North American leagues including the NHL, NBA, NFL, and MLB, alongside extensive international soccer, cricket, and esports markets."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 2 Hours",
      minDeposit: "$10 CAD",
      sportsAvailable: ["Hockey", "Football", "Basketball", "Cricket", "Soccer", "Tennis"]
    }
  },
  {
    slug: "tenex",
    name: "TENEX CASINO",
    logo: "/images/logos/tenex.png",
    rating: 87,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "No Deposit Bonus - Free Credits On Slot Games",
    claimUrl: "https://m.tenexcasino.com/redirect.aspx?mid=17&sid=7&cid=&pid=&affid=11",
    reviewUrl: "/tenex/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Interac", "Credit Card", "Bitcoin", "Ethereum"],
    countries: ["CA"],
    summary: "Tenex is an exciting casino and sports platform offering zero-deposit welcome rewards, rich slot catalogs, and competitive sports betting lines.",
    pros: [
      "Free credits no-deposit bonus for new account registrations.",
      "Wide selection of top-tier slot providers and table games.",
      "Fast crypto and Interac payment options.",
      "Intuitive web design on both desktop and mobile."
    ],
    cons: [
      "Higher wagering requirement on no-deposit bonus funds.",
      "Sportsbook section is secondary to casino offerings."
    ],
    fullReview: [
      "Tenex delivers an enticing promotional suite with its signature no-deposit free credit package, enabling players to test games with zero upfront risk.",
      "Backed by modern encryption and transparent terms, Tenex provides high-yield casino entertainment alongside standard sportsbook wagering."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 6 Hours",
      minDeposit: "$15 CAD",
      sportsAvailable: ["Slots", "Live Casino", "Hockey", "Football", "Basketball"]
    }
  },
  {
    slug: "blaze",
    name: "Blaze SPINS",
    logo: "/images/logos/blaze.png",
    rating: 93,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "300% Bonus upto 20K USD",
    claimUrl: "https://orcaaffiliatesinc10873518.o18a.com/c?o=21767535&m=24308&a=699794",
    reviewUrl: "/blaze/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Interac", "Pix", "Crypto", "Cards"],
    countries: ["CA", "BR", "MX"],
    summary: "Blaze is a high-energy gaming and betting powerhouse famous for original games, massive high-roller deposit matches, and comprehensive sports betting.",
    pros: [
      "Enormous 300% welcome package scaling up to 20,000 USD.",
      "Original provably fair crash and roulette games.",
      "Instant cryptocurrency and local fiat payment support.",
      "Active international community and regular prize tournaments."
    ],
    cons: [
      "Bonus funds released in tiered rollover segments.",
      "Geographic availability varies by jurisdiction."
    ],
    fullReview: [
      "Blaze has taken the global iGaming world by storm, blending proprietary provably fair games with a full-throttle sportsbook covering over 30 sporting disciplines.",
      "Canadian and international bettors can take advantage of record-breaking deposit bonus packages, VIP loyalty cashbacks, and instant withdrawal processing."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 30 Minutes",
      minDeposit: "$10 CAD / $10 USD",
      sportsAvailable: ["Soccer", "Hockey", "Basketball", "Formula 1", "Esports", "Crash Games"]
    }
  },
  {
    slug: "bluffbet",
    name: "BLUFFBET",
    logo: "/images/logos/bluffbet.png",
    rating: 90,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Bonus of $25,000 + 1000 Free Spins",
    claimUrl: "https://record.gb1aff.com/_OUsQjtM5Bj4WqcfzuvZcQGNd7ZgqdRLk/1/",
    reviewUrl: "/bluffbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Interac", "Visa", "Mastercard", "MuchBetter", "Crypto"],
    countries: ["CA"],
    summary: "Bluffbet offers an industry-leading high-roller bonus package, combining deep sports betting coverage with an elite casino and free spins suite.",
    pros: [
      "Massive welcome bonus combining matched funds and 1,000 free spins.",
      "Extensive North American sports markets with early cashout features.",
      "Prompt Canadian payment settlement via Interac.",
      "Clean UI with live match tracking visualization."
    ],
    cons: [
      "Free spins distributed over multiple consecutive days.",
      "Minimum deposit required to activate full bonus tier."
    ],
    fullReview: [
      "Bluffbet sets a high bar for welcome offers in Canada with its mammoth $25,000 matched package accompanied by 1,000 free spins on premier slot titles.",
      "The sportsbook features high limits, competitive odds across major leagues, and comprehensive in-play live betting tools."
    ],
    features: {
      license: "Kahnawake / Curaçao",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "$20 CAD",
      sportsAvailable: ["Hockey", "Football", "Cricket", "Tennis", "Basketball", "Golf"]
    }
  },

  // Brazil Sites
  {
    slug: "borawin",
    name: "BORAWIN",
    logo: "/images/logos/borawin.png",
    rating: 94,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://trk.resiliencemedia.tech/c/69fdb3d5002095d96e6d?aff=Pookie",
    reviewUrl: "/borawin/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Pix", "Boleto", "Cards", "Crypto"],
    countries: ["BR"],
    summary: "Borawin is a rapidly growing sports betting and online casino platform in Brazil, distinguished by instant Pix withdrawals and premier football odds.",
    pros: [
      "Instant 24/7 deposits and withdrawals via Pix.",
      "Comprehensive coverage of Brasileirão Série A, Copa do Brasil, and Libertadores.",
      "Modern, 100% mobile-optimized responsive interface.",
      "Dedicated 24/7 live chat support."
    ],
    cons: [
      "iOS app accessed primarily via home-screen PWA.",
      "Standard wagering requirements apply to promotional bonuses."
    ],
    fullReview: [
      "Borawin has quickly established itself as a top choice for sports bettors in Brazil seeking speed, security, and competitive odds across domestic and international football.",
      "With native support for Brazilian Real (BRL) via Pix, deposits reflect instantly and payout requests are processed within minutes.",
      "The platform offers full sports coverage, including live in-play betting, corner markets, bookings, Asian handicaps, and an immersive live casino suite."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant via Pix (5 - 15 min)",
      minDeposit: "R$ 20",
      sportsAvailable: ["Football", "Basketball", "Tennis", "MMA", "Esports", "Live Casino"]
    }
  },
  {
    slug: "rainbet",
    name: "RAINBET",
    logo: "/images/logos/rainbet.png",
    rating: 92,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://playrainbet.com/tpabvjjiz",
    reviewUrl: "/rainbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Pix", "Crypto", "Cards", "PicPay"],
    countries: ["BR"],
    summary: "Rainbet combines high-tech sports wagering with provably fair games, delivering ultra-fast settlements and seamless Pix payments.",
    pros: [
      "Modern crypto and fiat platform with instant Pix support.",
      "Expansive selection of original titles and crash games.",
      "Competitive odds across all global football leagues.",
      "VIP rewards program featuring daily rakeback."
    ],
    cons: [
      "Strong emphasis on fast-paced high-volatility games.",
      "Additional verification for high-tier withdrawal limits."
    ],
    fullReview: [
      "Rainbet is a next-generation betting platform crafted for players who value speed, transparency, and engaging gamification features.",
      "Bettors in Brazil benefit from frictionless local payment methods, ensuring swift deposits in BRL and rapid bet settlements.",
      "The sportsbook features comprehensive live match tracking, statistical depth, and responsive real-time markets."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant (10 - 30 min)",
      minDeposit: "R$ 30",
      sportsAvailable: ["Football", "Esports", "Basketball", "Tennis", "Formula 1", "Crash"]
    }
  },
  {
    slug: "stake",
    name: "STAKE",
    logo: "/images/logos/stake.png",
    rating: 96,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "http://stake.bet/?c=Resilience5",
    reviewUrl: "/stake/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Pix", "Boleto", "Crypto", "Cards"],
    countries: ["BR"],
    summary: "Stake is a global titan in sports betting and online entertainment, official partner of UFC and premier Formula 1 teams, offering unrivaled odds and reliability.",
    pros: [
      "Global reputation with world-class sponsorships (UFC, F1).",
      "Instant hassle-free cashouts via Pix and cryptocurrencies.",
      "Industry-leading odds across Brazilian and international football.",
      "Elite VIP club with unmatched cashback and reload bonuses."
    ],
    cons: [
      "Traditional deposit matches substituted with daily races and raffles.",
      "Direct phone customer support unavailable."
    ],
    fullReview: [
      "Stake is synonymous with excellence in online sports entertainment, blending cutting-edge tech, robust security, and one of the world's most vibrant betting communities.",
      "For Brazilian users, complete Pix integration ensures zero-delay deposits and automated payouts processed in seconds.",
      "Whether wagering on the Brasileirão, European leagues, or combat sports, Stake delivers unrivaled market liquidity and limits."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant (0 - 15 min)",
      minDeposit: "R$ 20",
      sportsAvailable: ["Football", "MMA / UFC", "Basketball", "Tennis", "F1", "Esports"]
    }
  },
  {
    slug: "spinwitz",
    name: "SPINWITZ",
    logo: "/images/logos/spinwitz.png",
    rating: 90,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://record.rainmakercasino.net/_ftLa5f5m23EFdcHOaJb9T2Nd7ZgqdRLk/1/?pg=0",
    reviewUrl: "/spinwitz/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Pix", "Cards", "PicPay", "Boleto"],
    countries: ["BR"],
    summary: "Spinwitz provides an engaging sports betting and gaming experience featuring extensive sports markets and top-tier provider slots.",
    pros: [
      "Streamlined Pix deposits with instant account crediting.",
      "Vast catalog of slots and live dealer tables.",
      "Generous welcome incentives and weekly prize distributions.",
      "Smooth, intuitive navigation across all mobile devices."
    ],
    cons: [
      "Emerging brand with continuously expanding sportsbook lines.",
      "Chat support queues may lengthen during major match finals."
    ],
    fullReview: [
      "Spinwitz fuses casino thrill with dynamic sports betting in a safe, licensed environment tailored for modern sports fans.",
      "The platform emphasizes transaction convenience, ensuring users can deposit and withdraw effortlessly through Pix.",
      "Weekly promotional tournaments and bet boosts keep the community active and engaged."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 4 Hours",
      minDeposit: "R$ 25",
      sportsAvailable: ["Football", "Basketball", "Volleyball", "Tennis", "Slots", "Live Casino"]
    }
  },
  {
    slug: "melbet-br",
    name: "MELBET",
    logo: "/images/logos/melbet.png",
    rating: 94,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://refpa3665.com/L?tag=d_4618908m_66329c_&site=4618908&ad=66329",
    reviewUrl: "/melbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Pix", "Boleto", "Cards", "Crypto"],
    countries: ["BR"],
    summary: "Melbet offers one of the most comprehensive sportsbooks in the world, featuring thousands of live daily events, top-tier football odds, and expansive welcome incentives.",
    pros: [
      "Massive market depth on all global and Brazilian football leagues.",
      "Rich live streaming platform with real-time multi-view live betting.",
      "Broad array of Brazilian banking options including Pix and Boleto.",
      "Dedicated high-speed mobile apps for Android and iOS."
    ],
    cons: [
      "Dense sportsbook interface can be overwhelming for total beginners.",
      "Verification process required for large initial withdrawals."
    ],
    fullReview: [
      "Melbet is a powerhouse in the international sports betting arena, delivering a feature-packed betting experience designed to satisfy both casual sports enthusiasts and veteran wagering professionals.",
      "Boasting coverage of over 1,000 daily sports events, Melbet's sports section offers unmatched depth, with live match trackers, statistical breakdowns, and instant accumulator bonuses.",
      "Payment processing is tailored to regional preferences, allowing Brazilian players to deposit and withdraw effortlessly using Pix and leading payment channels."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "15 Minutes - 2 Hours",
      minDeposit: "R$ 20",
      sportsAvailable: ["Football", "Basketball", "Tennis", "MMA", "Esports", "Live Casino"]
    }
  },

  // Portugal Sites
  {
    slug: "coldbet",
    name: "COLDBET",
    logo: "/images/logos/coldbet.png",
    rating: 93,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://coldredir.com/L?tag=d_5641462m_126625c_&site=5641462&ad=126625",
    reviewUrl: "/coldbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Multibanco", "MB WAY", "Visa", "Mastercard", "Crypto"],
    countries: ["PT"],
    summary: "Coldbet is a modern sports betting operator offering competitive football odds across European leagues, fast MB WAY deposits, and an extensive in-play betting platform.",
    pros: [
      "Instant deposits and fast payouts with MB WAY and Multibanco.",
      "Comprehensive Primeira Liga and UEFA Champions League markets.",
      "Sleek, responsive dark-mode user experience.",
      "24/7 dedicated customer assistance."
    ],
    cons: [
      "Relatively new brand in the European market.",
      "Bonus promotions require account verification."
    ],
    fullReview: [
      "Coldbet delivers a robust, modern sports betting experience with a strong emphasis on top-flight European football, tennis, basketball, and esports.",
      "Portuguese players benefit from seamless domestic payment options including MB WAY and Multibanco references, ensuring secure and immediate account funding.",
      "The sportsbook features competitive betting margins, dynamic live score trackers, and flexible accumulator boosts."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 2 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Tennis", "Basketball", "Futsal", "Esports", "Live Casino"]
    }
  },
  {
    slug: "7signs",
    name: "7SIGNS",
    logo: "/images/logos/7signs.png",
    rating: 91,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://www.revkingsnetwork.net/track/811e23b2-b9cf-4dac-88a1-e55ae2b005bd?type=facebook&s1=7S_PT10219FB&s4=XXXX&s5=FB",
    reviewUrl: "/7signs/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["MB WAY", "Multibanco", "Skrill", "Neteller", "Cards"],
    countries: ["PT"],
    summary: "7Signs is an engaging, gamified sports and casino destination offering customizable welcome avatars, rich promotional calendars, and reliable payouts.",
    pros: [
      "Unique gamified reward structure with selectable welcome bonus avatars.",
      "Expansive sports market depth covering over 30 international disciplines.",
      "Multiple convenient banking options tailored for Portuguese players.",
      "High withdrawal limits for active VIP members."
    ],
    cons: [
      "Gamified layout might feel busy for minimalist bettors.",
      "Wagering conditions apply to avatar promotional packages."
    ],
    fullReview: [
      "7Signs combines creative visual gamification with a comprehensive sportsbook covering hundreds of daily sporting fixtures.",
      "Players in Portugal can easily manage their deposits and withdrawals using local favorites such as MB WAY, Multibanco, and top e-wallets.",
      "The platform regularly updates its promotions with weekly reloads, cashback incentives, and sports tournament leaderboards."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "€15",
      sportsAvailable: ["Football", "Basketball", "Tennis", "Motorsports", "Slots", "Live Casino"]
    }
  },
  {
    slug: "jokery",
    name: "JOKERY",
    logo: "/images/logos/jokery.png",
    rating: 89,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://www.revkingsnetwork.net/track/ee8f9f6e-c778-4c25-9bb9-a5a44d43d212?type=email&s1=JK_PT10219FB&s4=XXXX&s5=FB",
    reviewUrl: "/jokery/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["MB WAY", "Multibanco", "Cards", "Crypto"],
    countries: ["PT"],
    summary: "Jokery offers a vibrant sports betting hub featuring live match tracking, high payout speed, and a rich array of casino entertainment.",
    pros: [
      "Fast account setup and instant deposit verification.",
      "Deep in-play football markets with live visual match statistics.",
      "Full compatibility with modern mobile browsers.",
      "Generous loyalty point rewards system."
    ],
    cons: [
      "Smaller catalog of niche virtual sports.",
      "Customer support response times can peak on match nights."
    ],
    fullReview: [
      "Jokery delivers an energetic sports betting experience equipped with all essential tools for both casual punters and seasoned bettors.",
      "From standard match outcome bets to intricate prop wagers, Jokery ensures comprehensive market depth across major sporting leagues.",
      "Payment handling is swift, providing hassle-free deposits and transparent cashout policies."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 4 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Tennis", "Basketball", "Handball", "Esports"]
    }
  },
  {
    slug: "boxbet",
    name: "BOXBET",
    logo: "/images/logos/boxbet.png",
    rating: 95,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://boxbetplay.com/j0d11207a",
    reviewUrl: "/boxbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["MB WAY", "Multibanco", "Visa", "Mastercard", "Crypto"],
    countries: ["PT"],
    summary: "Boxbet is a premier sports betting powerhouse known for industry-leading odds, high wagering limits, and instant settlement times.",
    pros: [
      "Top-rated odds margin on Portuguese Primeira Liga and European football.",
      "Instant withdrawal approvals and direct MB WAY integrations.",
      "Advanced betting slip features including cash-out and bet builder.",
      "Enterprise-grade encryption and secure account management."
    ],
    cons: [
      "Strict KYC verification needed before substantial withdrawals.",
      "Focus is heavily centered on football and major sports."
    ],
    fullReview: [
      "Boxbet represents top-tier sports wagering technology, delivering fast load times, deep market liquidity, and responsive live betting consoles.",
      "Bettors in Portugal enjoy localized banking, rapid payouts, and dedicated Portuguese customer service.",
      "With extensive coverage of football, tennis, and combat sports, Boxbet stands out as a market leader."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant (15 - 30 min)",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Tennis", "Basketball", "MMA / UFC", "Boxing", "F1"]
    }
  },
  {
    slug: "atoz",
    name: "ATOZ",
    logo: "/images/logos/atoz.png",
    rating: 88,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "#",
    reviewUrl: "/atoz/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["MB WAY", "Multibanco", "Bank Transfer", "Cards"],
    countries: ["PT"],
    summary: "AtoZ provides an all-in-one sports wagering platform covering everything from A to Z with simple navigation and localized Portuguese payment channels.",
    pros: [
      "Straightforward user interface ideal for beginners.",
      "Full domestic payment support via MB WAY and Multibanco.",
      "Solid coverage of domestic and international sports.",
      "Transparent bonus terms with fair wagering requirements."
    ],
    cons: [
      "Fewer live streaming options compared to top-tier international operators.",
      "Interface design is relatively simple and traditional."
    ],
    fullReview: [
      "AtoZ delivers an approachable, reliable sports betting experience designed to provide complete coverage of popular sports without unnecessary complexity.",
      "Users can easily deposit with MB WAY or bank transfer, place bets across a wide range of markets, and request prompt cashouts.",
      "Its transparent terms and clean betting slip make it a solid choice for Portuguese sports fans."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Basketball", "Tennis", "Cycling", "Volleyball"]
    }
  },

  // Germany Sites
  {
    slug: "featured-de",
    name: "TOP CHOICE",
    logo: "/images/logos/placeholder.svg",
    rating: 96,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "#",
    reviewUrl: "/featured-de/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["PayPal", "Sofort", "Giropay", "Trustly", "Cards"],
    countries: ["DE"],
    summary: "Featured top-rated German sports betting operator offering premier Bundesliga odds, instant payment settlement, and dedicated European customer service.",
    pros: [
      "Extensive coverage of Bundesliga, 2. Bundesliga, and European competitions.",
      "Instant deposit and payout processing via Sofort, Giropay, and Trustly.",
      "Transparent terms with certified fair play gaming standards.",
      "Comprehensive mobile web app with fast bet slip creation."
    ],
    cons: [
      "Standard KYC identity verification required before initial cashout.",
      "Promotional rollover requirements apply."
    ],
    fullReview: [
      "This featured operator delivers a premier sports betting ecosystem tailored specifically for German sports enthusiasts.",
      "Featuring competitive odds margins across the Bundesliga and international tournaments, users benefit from extensive pre-match and in-play betting depth.",
      "Payment options are fully optimized for Germany, supporting instant direct banking and secure e-wallets."
    ],
    features: {
      license: "EU / Curaçao Regulated",
      payoutSpeed: "Instant - 2 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Handball", "Basketball", "Tennis", "Ice Hockey", "Esports"]
    }
  },
  {
    slug: "pubs",
    name: "PUBS.COM",
    logo: "/images/logos/pubs.png",
    rating: 93,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://record.affiliatedrinks.com/_D4XZ2tP6N_iXrZzxC638nWNd7ZgqdRLk/1/",
    reviewUrl: "/pubs/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Sofort", "Giropay", "Trustly", "Visa", "Mastercard"],
    countries: ["DE"],
    summary: "Pubs.com is a dynamic sports betting and gaming destination featuring high payout limits, competitive football margins, and fast cashout processing.",
    pros: [
      "Top-tier Bundesliga odds with minimal bookmaker margin.",
      "Instant banking connections via Sofort and Giropay.",
      "Intuitive match tracker and live statistics widget.",
      "24/7 dedicated customer support team."
    ],
    cons: [
      "Emerging platform in the German market.",
      "Bonus promotions require account verification."
    ],
    fullReview: [
      "Pubs.com delivers an energetic, feature-packed sportsbook covering hundreds of daily sporting fixtures across Europe and beyond.",
      "Bettors in Germany benefit from hassle-free local payment gateways and rapid settlement times on all major leagues.",
      "The platform is fully responsive on mobile devices, ensuring a seamless wagering experience anywhere."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant - 4 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Tennis", "Handball", "Basketball", "Motorsports"]
    }
  },
  {
    slug: "havanabet",
    name: "HAVANABET",
    logo: "/images/logos/havanabet.png",
    rating: 90,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://havanamob.xyz/processing/click?btag=18033_22261",
    reviewUrl: "/havanabet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Sofort", "Giropay", "Cards", "Crypto"],
    countries: ["DE"],
    summary: "Havanabet brings vibrant sportsbook action and casino entertainment with robust security, multi-currency support, and generous rewards.",
    pros: [
      "Extensive variety of sports and live dealer table games.",
      "Fast deposits with Sofort, Giropay, and major cards.",
      "Weekly reload incentives and cashback promotions.",
      "Clean, modern user interface optimized for high speed."
    ],
    cons: [
      "Telephone support line not available.",
      "Verification required for elevated cashout tiers."
    ],
    fullReview: [
      "Havanabet blends the excitement of sports wagering with an elite casino catalog, creating a well-rounded destination for European players.",
      "Its sportsbook features deep market selections for football, tennis, and basketball, with intuitive accumulator builder tools.",
      "Fast transaction handling ensures effortless deposits and rapid payouts."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 6 Hours",
      minDeposit: "€15",
      sportsAvailable: ["Football", "Basketball", "Tennis", "Boxing", "Esports", "Live Casino"]
    }
  },
  {
    slug: "posido",
    name: "POSIDO",
    logo: "/images/logos/posido.png",
    rating: 94,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://www.traffiqtraq.com/track/ecab5f54-8bd7-45bb-83fd-548011cd98bb?type=ppc&s1=DS_CA119&s4=XXXX",
    reviewUrl: "/posido/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Trustly", "Sofort", "Visa", "Mastercard", "Crypto"],
    countries: ["DE"],
    summary: "Posido is an ocean-themed betting powerhouse offering industry-leading odds, gamified rewards, and lightning-fast withdrawal approvals.",
    pros: [
      "High odds payout ratio across top European football competitions.",
      "Instant Pay N Play style deposit processing with Trustly and Sofort.",
      "Unique gamified VIP loyalty program with exclusive perks.",
      "Enterprise SSL encryption and certified game fairness."
    ],
    cons: [
      "Thematic interface may feel distinctive compared to minimalist sportsbooks.",
      "KYC requirements for high-roller cashouts."
    ],
    fullReview: [
      "Posido stands out with its immersive ocean theme and exceptional sports betting technology.",
      "German bettors enjoy instant banking, high limits, and real-time live betting visualizations with instant cash-out capabilities.",
      "With comprehensive coverage across football, tennis, ice hockey, and esports, Posido delivers a world-class experience."
    ],
    features: {
      license: "MGA / Curaçao Regulated",
      payoutSpeed: "Instant (15 - 30 min)",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Ice Hockey", "Tennis", "Basketball", "MMA", "Esports"]
    }
  },
  {
    slug: "dragonia",
    name: "DRAGONIA",
    logo: "/images/logos/dragonia.png",
    rating: 89,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://www.traffiqtraq.com/track/01bcde1a-c7b5-41e1-a464-37db257fb62a?type=ppc&s1=DA_DE118&s4=XXXX",
    reviewUrl: "/dragonia/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["Giropay", "Sofort", "Bank Transfer", "Cards"],
    countries: ["DE"],
    summary: "Dragonia provides a powerful betting platform featuring extensive sports markets, fantasy leagues, and streamlined German banking options.",
    pros: [
      "Comprehensive football market depth from amateur to professional tiers.",
      "Secure payments via Giropay, Sofort, and instant bank transfer.",
      "Generous welcome package with surprise reward perks.",
      "Smooth mobile layout with one-click betting slip options."
    ],
    cons: [
      "Smaller catalog of niche virtual games.",
      "Support queues may experience peaks during weekend match times."
    ],
    fullReview: [
      "Dragonia delivers an engaging sports betting platform designed to meet the demands of modern sports fans in Germany.",
      "Users can easily navigate between live matches, check statistics, and place single or accumulator bets with complete ease.",
      "Payment transactions are processed securely with trusted German payment gateways."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "€10",
      sportsAvailable: ["Football", "Basketball", "Handball", "Tennis", "Volleyball", "Winter Sports"]
    }
  },

  // Mexico Sites
  {
    slug: "mexjoy",
    name: "MEXJOY",
    logo: "/images/logos/mexjoy.png",
    rating: 94,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://trk.resiliencemedia.tech/c/6a3a6e84002936fb3853?aff=Pookie",
    reviewUrl: "/mexjoy/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["SPEI", "OXXO", "Visa", "Mastercard", "Crypto"],
    countries: ["MX"],
    summary: "Mexjoy is a premier online sportsbook and casino crafted for Mexican players, offering instant SPEI deposits, high Liga MX odds, and fast cashouts.",
    pros: [
      "Instant 24/7 deposits and withdrawals via SPEI and OXXO.",
      "Comprehensive coverage of Liga MX, Concacaf Champions Cup, and Copa América.",
      "Modern, 100% mobile-optimized user interface.",
      "Dedicated Spanish-speaking customer support team."
    ],
    cons: [
      "Standard account verification required before large withdrawals.",
      "Promotional rollover terms apply."
    ],
    fullReview: [
      "Mexjoy delivers an exceptional sports betting experience designed specifically for Mexican sports enthusiasts.",
      "Featuring high odds margins across Liga MX, boxing, and major international leagues, users enjoy comprehensive pre-match and in-play market variety.",
      "Banking is tailored for Mexico, ensuring secure, immediate funding through SPEI and OXXO."
    ],
    features: {
      license: "SEGOB / Curaçao Regulated",
      payoutSpeed: "Instant via SPEI (15 - 30 min)",
      minDeposit: "$100 MXN",
      sportsAvailable: ["Football", "Boxing", "Baseball", "Basketball", "MMA", "Live Casino"]
    }
  },
  {
    slug: "bonos",
    name: "BONOS",
    logo: "/images/logos/bonos.png",
    rating: 91,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://trk.resiliencemedia.tech/c/6a3a6e84002936fb3853?aff=Pookie",
    reviewUrl: "/bonos/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["SPEI", "OXXO", "Cards", "ToditoCash"],
    countries: ["MX"],
    summary: "Bonos offers a vibrant gaming and betting destination with generous promotional incentives, vast slot libraries, and competitive sports lines.",
    pros: [
      "Extensive welcome rewards and weekly reload bonuses.",
      "Fast payment processing through SPEI and local convenience stores.",
      "Wide selection of top-tier sports and casino games.",
      "Clean, user-friendly mobile navigation."
    ],
    cons: [
      "Telephone support line not available 24/7.",
      "Bonus funds released under standard playthrough conditions."
    ],
    fullReview: [
      "Bonos blends the excitement of sports wagering with an elite casino suite, creating a well-rounded platform for Mexican players.",
      "Its sportsbook features deep market selections for football, baseball, and basketball, with intuitive accumulator builder tools.",
      "Fast transaction handling ensures effortless deposits and rapid payouts."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 6 Hours",
      minDeposit: "$150 MXN",
      sportsAvailable: ["Football", "Baseball", "Basketball", "Boxing", "Tennis", "Slots"]
    }
  },
  {
    slug: "stake-mx",
    name: "STAKE",
    logo: "/images/logos/stake.png",
    rating: 96,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://www.nifoe1md.com/7KB1XW/5X8MZTP/",
    reviewUrl: "/stake/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["SPEI", "OXXO", "Crypto", "Cards"],
    countries: ["MX"],
    summary: "Stake is a world-leading sports betting and casino operator, official partner of UFC and Formula 1, offering unrivaled odds and instant payouts.",
    pros: [
      "Global reputation and high-profile sporting sponsorships (UFC, F1).",
      "Instant hassle-free cashouts via SPEI and cryptocurrencies.",
      "Industry-leading odds across Liga MX and international soccer.",
      "Elite VIP club with unmatched cashback and rakeback benefits."
    ],
    cons: [
      "Traditional deposit bonuses substituted with daily races and leaderboards.",
      "Direct phone customer support unavailable."
    ],
    fullReview: [
      "Stake is synonymous with excellence in online sports entertainment, blending cutting-edge technology, robust security, and deep betting liquidity.",
      "For Mexican users, seamless SPEI integration ensures zero-delay deposits and automated payouts processed in minutes.",
      "Whether wagering on Liga MX, MLB, NFL, or combat sports, Stake delivers unrivaled limits and market depth."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "Instant (0 - 15 min)",
      minDeposit: "$100 MXN",
      sportsAvailable: ["Football", "Boxing / MMA", "Baseball", "Basketball", "NFL", "Esports"]
    }
  },
  {
    slug: "1xbet-mx",
    name: "1XBET",
    logo: "/images/logos/1xbet.png",
    rating: 93,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://refpa58144.com/L?tag=d_4758612m_1236c_001&site=4758612&ad=1236&r=registration",
    reviewUrl: "/1xbet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["SPEI", "OXXO", "Paynet", "Cards", "Crypto"],
    countries: ["MX"],
    summary: "1xBet is a global betting powerhouse offering one of the largest sportsbooks in the world with live streaming, high odds, and instant Mexican payment options.",
    pros: [
      "Massive market depth covering over 1,000 daily sporting events.",
      "Live multi-view streaming on mobile and desktop.",
      "Instant local deposits via SPEI, OXXO, and Paynet.",
      "Dedicated mobile apps for iOS and Android."
    ],
    cons: [
      "Dense sportsbook interface can take time for beginners to navigate.",
      "KYC verification required before first major withdrawal."
    ],
    fullReview: [
      "1xBet is an international sports wagering operator renowned for having one of the most comprehensive sportsbooks in the industry.",
      "For sports fans in Mexico, the platform provides deep markets on Liga MX, Champions League, MLB, and international boxing.",
      "The banking system is tailored for Mexico, supporting direct SPEI transfers and cash payments at OXXO for frictionless transactions."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "15 Minutes - 2 Hours",
      minDeposit: "$50 MXN",
      sportsAvailable: ["Football", "Baseball", "Boxing", "Basketball", "Tennis", "Esports"]
    }
  },
  {
    slug: "shakebet",
    name: "SHAKEBET",
    logo: "/images/logos/shakebet.png",
    rating: 89,
    bonusLabel: "Exclusive Welcome Bonus",
    bonusText: "Surprise Bonus",
    claimUrl: "https://clictru.com/2HHX3X",
    reviewUrl: "/shakebet/",
    disclaimer: "Advertising link 18+. Terms & Conditions apply. Please play responsibly.",
    paymentMethods: ["SPEI", "OXXO", "Cards", "Bank Transfer"],
    countries: ["MX"],
    summary: "Shakebet provides a fresh and dynamic sports betting platform with high payout speed, reliable odds, and streamlined Mexican banking options.",
    pros: [
      "Fast account registration and instant SPEI deposit confirmation.",
      "Deep in-play football markets with live visual match statistics.",
      "Full mobile responsiveness across all browsers.",
      "Weekly promotions and reload rewards."
    ],
    cons: [
      "Emerging platform with continuously growing market lines.",
      "Support queues may experience peaks during big match nights."
    ],
    fullReview: [
      "Shakebet delivers an energetic sports betting experience equipped with all necessary features for both casual punters and seasoned bettors.",
      "From standard match outcome bets to intricate player props, Shakebet ensures extensive market depth across major leagues.",
      "Payment handling is fast and secure, providing transparent deposit and cashout policies."
    ],
    features: {
      license: "Curaçao eGaming",
      payoutSpeed: "1 - 12 Hours",
      minDeposit: "$100 MXN",
      sportsAvailable: ["Football", "Baseball", "Basketball", "Boxing", "Tennis"]
    }
  },

];

const countrySiteOrder: Record<string, string[]> = {
  IN: ["khelguru", "12bet", "melbet", "96com", "parimatch"],
  CA: ["dimebit", "tenex", "blaze", "bluffbet"],
  BR: ["borawin", "rainbet", "stake", "spinwitz", "melbet-br"],
  PT: ["coldbet", "7signs", "jokery", "boxbet", "atoz"],
  DE: ["pubs", "havanabet", "posido", "dragonia"],
  MX: ["mexjoy", "bonos", "stake-mx", "1xbet-mx", "shakebet"],
};

export function getBettingSitesByCountry(countryCode: string): BettingSite[] {
  const code = countryCode.toUpperCase();
  if (countrySiteOrder[code]) {
    return countrySiteOrder[code]
      .map(slug => bettingSites.find(s => s.slug === slug))
      .filter((s): s is BettingSite => Boolean(s));
  }
  const sites = bettingSites.filter(site => site.countries.includes(code));
  if (sites.length > 0) return sites;
  return bettingSites.slice(0, 5);
}

export function getBettingSiteBySlug(slug: string): BettingSite | undefined {
  return bettingSites.find(site => site.slug.toLowerCase() === slug.toLowerCase());
}

