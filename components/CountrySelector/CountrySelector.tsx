"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { countries } from "@/data/countries";
import styles from "./CountrySelector.module.css";

export default function CountrySelector() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  // Find currently active country
  const currentCountry = countries.find(c => {
    if (c.path === "/") {
      return pathname === "/" || pathname === "";
    }
    return pathname.startsWith(c.path);
  }) || countries[0];

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={dropdownRef}>
      <button
        type="button"
        className={styles.selectorBtn}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Select Country"
      >
        <span className={styles.globeIcon}>
          {currentCountry.code === "IN" ? "🌐" : currentCountry.flag}
        </span>
        <span className={styles.btnText}>
          {currentCountry.code === "IN" ? "Select Country" : currentCountry.name}
        </span>
        <span className={styles.btnTextMobile}>
          {currentCountry.code === "IN" ? "Region" : currentCountry.name}
        </span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}
          width="10"
          height="10"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          <div className={styles.dropdownHeader}>Select Region</div>
          <ul className={styles.countryList}>
            {countries.map((country) => {
              const isActive = (country.path === "/" && (pathname === "/" || pathname === "")) ||
                (country.path !== "/" && pathname.startsWith(country.path));

              return (
                <li key={country.code}>
                  <Link
                    href={country.path}
                    className={`${styles.countryItem} ${isActive ? styles.activeItem : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span className={styles.flag}>{country.flag}</span>
                    <span className={styles.countryName}>{country.name}</span>
                    {isActive && <span className={styles.activeCheck}>✓</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}
