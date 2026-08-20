import { bettingSites } from '@/data/betting-sites';
import { blogPosts } from '@/data/blogs';

export interface CountryTheme {
  code: string;
  themeId: string;
  name: string;
  logo: string;
  logoAlt: string;
  homePath: string;
  primaryAccent: string;
  primaryGlow: string;
  primaryLight: string;
  primaryDark: string;
  primaryGradient: string;
  headlineGradient: string;
  borderCard: string;
  borderCardHover: string;
  cardGlow: string;
}

export const countryThemes: Record<string, CountryTheme> = {
  CA: {
    code: 'CA',
    themeId: 'canada',
    name: 'Canada',
    logo: '/images/logos/pookieplay-logo-ca.png',
    logoAlt: 'Pookie Play Canada',
    homePath: '/canada/',
    primaryAccent: '#fb8d00',
    primaryGlow: 'rgba(251, 141, 0, 0.35)',
    primaryLight: '#fdba74',
    primaryDark: '#ea580c',
    primaryGradient: 'linear-gradient(135deg, #fb8d00 0%, #ea580c 100%)',
    headlineGradient: 'linear-gradient(90deg, #fb8d00 0%, #f97316 100%)',
    borderCard: '#fb8d00',
    borderCardHover: '#fdba74',
    cardGlow: '0 0 20px rgba(251, 141, 0, 0.3)',
  },
  IN: {
    code: 'IN',
    themeId: 'india',
    name: 'India',
    logo: '/images/logos/pookieplay-logo.png',
    logoAlt: 'Pookie Play',
    homePath: '/',
    primaryAccent: '#c026d3',
    primaryGlow: 'rgba(192, 38, 211, 0.35)',
    primaryLight: '#e879f9',
    primaryDark: '#a21caf',
    primaryGradient: 'linear-gradient(135deg, #c026d3 0%, #ec4899 100%)',
    headlineGradient: 'linear-gradient(90deg, #d946ef 0%, #ec4899 100%)',
    borderCard: '#d946ef',
    borderCardHover: '#e879f9',
    cardGlow: '0 0 20px rgba(217, 70, 239, 0.3)',
  },
  BR: {
    code: 'BR',
    themeId: 'brazil',
    name: 'Brazil',
    logo: '/images/logos/pookieplay-logo-br.png',
    logoAlt: 'Pookie Play Brazil',
    homePath: '/brazil/',
    primaryAccent: '#eaff00',
    primaryGlow: 'rgba(234, 255, 0, 0.35)',
    primaryLight: '#f5ff66',
    primaryDark: '#b8c700',
    primaryGradient: 'linear-gradient(135deg, #eaff00 0%, #a3e635 100%)',
    headlineGradient: 'linear-gradient(90deg, #eaff00 0%, #84cc16 100%)',
    borderCard: '#eaff00',
    borderCardHover: '#f5ff66',
    cardGlow: '0 0 20px rgba(234, 255, 0, 0.35)',
  },
  PT: {
    code: 'PT',
    themeId: 'portugal',
    name: 'Portugal',
    logo: '/images/logos/pookieplay-logo-pt.png',
    logoAlt: 'Pookie Play Portugal',
    homePath: '/portugal/',
    primaryAccent: '#00e636',
    primaryGlow: 'rgba(0, 230, 54, 0.35)',
    primaryLight: '#4ade80',
    primaryDark: '#059669',
    primaryGradient: 'linear-gradient(135deg, #00e636 0%, #10b981 100%)',
    headlineGradient: 'linear-gradient(90deg, #00e636 0%, #10b981 100%)',
    borderCard: '#00e636',
    borderCardHover: '#4ade80',
    cardGlow: '0 0 20px rgba(0, 230, 54, 0.35)',
  },
  DE: {
    code: 'DE',
    themeId: 'germany',
    name: 'Germany',
    logo: '/images/logos/pookieplay-logo-de.png',
    logoAlt: 'Pookie Play Germany',
    homePath: '/germany/',
    primaryAccent: '#4dbcff',
    primaryGlow: 'rgba(77, 188, 255, 0.35)',
    primaryLight: '#93c5fd',
    primaryDark: '#0284c7',
    primaryGradient: 'linear-gradient(135deg, #4dbcff 0%, #0284c7 100%)',
    headlineGradient: 'linear-gradient(90deg, #4dbcff 0%, #38bdf8 100%)',
    borderCard: '#4dbcff',
    borderCardHover: '#93c5fd',
    cardGlow: '0 0 20px rgba(77, 188, 255, 0.35)',
  },
  MX: {
    code: 'MX',
    themeId: 'mexico',
    name: 'Mexico',
    logo: '/images/logos/pookieplay-logo-mx.png',
    logoAlt: 'Pookie Play Mexico',
    homePath: '/mexico/',
    primaryAccent: '#ff2e2e',
    primaryGlow: 'rgba(255, 46, 46, 0.35)',
    primaryLight: '#f87171',
    primaryDark: '#b91c1c',
    primaryGradient: 'linear-gradient(135deg, #ff2e2e 0%, #dc2626 100%)',
    headlineGradient: 'linear-gradient(90deg, #ff2e2e 0%, #f87171 100%)',
    borderCard: '#ff2e2e',
    borderCardHover: '#f87171',
    cardGlow: '0 0 20px rgba(255, 46, 46, 0.35)',
  },
};

export function getThemeByPath(pathname: string, countryQuery?: string | null): CountryTheme {
  if (countryQuery) {
    const q = countryQuery.toUpperCase();
    if (countryThemes[q]) return countryThemes[q];
    if (q === 'CANADA') return countryThemes.CA;
    if (q === 'BRAZIL') return countryThemes.BR;
    if (q === 'PORTUGAL') return countryThemes.PT;
    if (q === 'GERMANY') return countryThemes.DE;
    if (q === 'MEXICO') return countryThemes.MX;
    if (q === 'INDIA') return countryThemes.IN;
  }

  const clean = pathname ? pathname.toLowerCase().replace(/^\/+|\/+$/g, '') : '';
  
  if (clean === 'canada') return countryThemes.CA;
  if (clean === 'brazil') return countryThemes.BR;
  if (clean === 'portugal') return countryThemes.PT;
  if (clean === 'germany') return countryThemes.DE;
  if (clean === 'mexico') return countryThemes.MX;
  if (clean === '' || clean === 'india') return countryThemes.IN;

  if (clean.startsWith('blogs/')) {
    const blogSlug = clean.replace(/^blogs\//, '');
    const post = blogPosts.find(p => p.slug.toLowerCase() === blogSlug);
    if (post && post.country && countryThemes[post.country.toUpperCase()]) {
      return countryThemes[post.country.toUpperCase()];
    }
  }

  const site = bettingSites.find(s => s.slug.toLowerCase() === clean);
  if (site && site.countries && site.countries.length > 0) {
    const code = site.countries[0].toUpperCase();
    if (countryThemes[code]) {
      return countryThemes[code];
    }
  }

  return countryThemes.IN;
}
