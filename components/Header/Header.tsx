"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import CountrySelector from "@/components/CountrySelector/CountrySelector";
import { getThemeByPath } from "@/data/themes";
import styles from "./Header.module.css";

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = getThemeByPath(pathname || "");

  const navLinks = [
    { label: "About Us", href: "/about-us/" },
    { label: "Blogs", href: "/blogs/" },
    { label: "Contact Us", href: "/contact-us/" },
    { label: "FAQ's", href: "/faqs/" },
  ];

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
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileOpen}
          >
            <span className={`${styles.bar} ${isMobileOpen ? styles.barOpen1 : ""}`}></span>
            <span className={`${styles.bar} ${isMobileOpen ? styles.barOpen2 : ""}`}></span>
            <span className={`${styles.bar} ${isMobileOpen ? styles.barOpen3 : ""}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => {
                const isActive = pathname === link.href || pathname.startsWith(link.href);
                return (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className={`${styles.mobileNavLink} ${isActive ? styles.mobileActiveLink : ""}`}
                      onClick={() => setIsMobileOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
