import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import ThemeManager from "@/components/ThemeManager/ThemeManager";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#000000",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://pookieplay.com"),
  title: {
    default: "Online Sports Betting Sites in India | Pookie Play",
    template: "%s | Pookie Play",
  },
  description:
    "Pookie Play guides you to trusted online cricket betting sites with expert reviews, bonus offers, live cricket scores, and smart wagering insights.",
  keywords: [
    "online sports betting",
    "cricket betting sites",
    "IPL betting",
    "betting bonuses",
    "sportsbook reviews",
    "Pookie Play",
  ],
  authors: [{ name: "Pookie Play" }],
  creator: "Pookie Play",
  publisher: "Resilience Esports LLP",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logos/pookieplay-logo.png",
    shortcut: "/images/logos/pookieplay-logo.png",
    apple: "/images/logos/pookieplay-logo.png",
  },
  alternates: {
    canonical: "https://pookieplay.com/",
  },
  openGraph: {
    title: "Pookie Play - Online Sports & Cricket Betting Guide",
    description:
      "Find trusted online cricket betting platforms, exclusive welcome bonuses, live scores, and expert betting tips.",
    url: "https://pookieplay.com/",
    siteName: "Pookie Play",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/blogs/online-betting-india.png",
        width: 1200,
        height: 630,
        alt: "Pookie Play Cricket Betting Guide",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pookie Play - Online Sports & Cricket Betting Guide",
    description:
      "Find trusted online cricket betting platforms, exclusive welcome bonuses, live scores, and expert betting tips.",
    images: ["/images/blogs/online-betting-india.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Pookie Play",
    url: "https://pookieplay.com",
    logo: "https://pookieplay.com/images/logos/pookieplay-logo.svg",
    description:
      "Pookie Play guides you to trusted online sports & cricket betting sites with expert reviews, rankings, bonuses, and live match scores.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+91999999999",
      contactType: "customer support",
      email: "demomail@gmail.com",
    },
  };

  const websiteJsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Pookie Play",
    url: "https://pookieplay.com",
  };

  return (
    <html lang="en" className={poppins.variable} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
      </head>
      <body className={poppins.className} suppressHydrationWarning>
        <ThemeManager />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
