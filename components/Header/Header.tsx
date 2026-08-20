"use client";

import React, { useState, useEffect, Suspense } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";
import CountrySelector from "@/components/CountrySelector/CountrySelector";
import { getThemeByPath } from "@/data/themes";
import styles from "./Header.module.css";

function HeaderContent() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const countryParam = searchParams?.get("country") || searchParams?.get("c");
  const theme = getThemeByPath(pathname || "", countryParam);

  const navLinks = [
    { label: "About Us", href: "/about-us/" },
    { label: "Blogs", href: "/blogs/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "FAQ's", href: "/faqs/" },
  ];

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileOpen]);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.headerContainer}`}>
        <Link href={theme.homePath || "/"} className={styles.logoLink} onClick={() => setIsMobileOpen(false)}>
          <Image
            src={theme.logo}
            alt={theme.logoAlt}
            width={120}
            height={48}
            priority
            unoptimized
            className={styles.logoImg}
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className={styles.desktopNav} aria-label="Main Navigation">
          <ul className={styles.navList}>
            {navLinks.map((link) => {
              const isActive = pathname === link.href || pathname.startsWith(link.href);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`${styles.navLink} ${isActive ? styles.activeLink : ""}`}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Section: Country Selector & Mobile Hamburger */}
        <div className={styles.rightSection}>
          <CountrySelector />
          <button
            type="button"
            className={styles.hamburgerBtn}
            onClick={() => setIsMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={isMobileOpen}
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Right-Slide Drawer & Backdrop Overlay (Only mounted when open) */}
      {isMobileOpen && (
        <>
          <div
            className={styles.drawerBackdrop}
            onClick={() => setIsMobileOpen(false)}
            aria-hidden="true"
          />
          <aside
            className={`${styles.sideDrawer} ${styles.sideDrawerOpen}`}
            aria-label="Mobile Navigation Drawer"
          >
            <div className={styles.drawerHeader}>
              <Link href={theme.homePath || "/"} className={styles.drawerLogoLink} onClick={() => setIsMobileOpen(false)}>
                <Image
                  src={theme.logo}
                  alt={theme.logoAlt}
                  width={105}
                  height={40}
                  unoptimized
                  className={styles.drawerLogoImg}
                />
              </Link>
              <button
                type="button"
                className={styles.drawerCloseBtn}
                onClick={() => setIsMobileOpen(false)}
                aria-label="Close navigation menu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18"></line>
                  <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
              </button>
            </div>

            <nav className={styles.drawerNav}>
              <ul className={styles.drawerNavList}>
                {navLinks.map((link) => {
                  const isActive = pathname === link.href || pathname.startsWith(link.href);
                  return (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`${styles.drawerNavLink} ${isActive ? styles.drawerActiveLink : ""}`}
                        onClick={() => setIsMobileOpen(false)}
                      >
                        <span>{link.label}</span>
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className={styles.navArrow}
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>

            <div className={styles.drawerFooter}>
              <p className={styles.drawerFooterText}>PookiePlay © 2026</p>
              <p className={styles.drawerFooterSub}>18+ | Play Responsibly</p>
            </div>
          </aside>
        </>
      )}
    </header>
  );
}

export default function Header() {
  return (
    <Suspense fallback={null}>
      <HeaderContent />
    </Suspense>
  );
}
