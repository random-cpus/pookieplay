"use client";

import React, { useState } from "react";
import { FAQItem } from "@/data/faqs";
import styles from "./FAQ.module.css";

interface FAQProps {
  items: FAQItem[];
  title?: string;
}

export default function FAQ({ items, title = "Quick Help" }: FAQProps) {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>({});

  const toggleItem = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section className={styles.faqSection} aria-label={title}>
      {title && <h2 className={styles.heading}>{title}</h2>}

      <div className={styles.faqList}>
        {items.map((item) => {
          const isOpen = !!openIds[item.id];

          return (
            <div
              key={item.id}
              className={`${styles.faqItem} ${isOpen ? styles.itemOpen : ""}`}
            >
              <button
                type="button"
                className={styles.questionBtn}
                onClick={() => toggleItem(item.id)}
                aria-expanded={isOpen}
              >
                <span className={styles.iconToggle}>{isOpen ? "−" : "+"}</span>
                <span className={styles.questionText}>{item.question}</span>
                <span className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ""}`}>
                  ›
                </span>
              </button>

              {isOpen && (
                <div className={styles.answerWrapper}>
                  <p className={styles.answerText}>{item.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}
