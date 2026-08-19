import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { blogPosts } from "@/data/blogs";
import styles from "./BlogsIndex.module.css";

export const metadata: Metadata = {
  title: "Betting Insights, Guides & Cricket News | Pookie Play Blog",
  description:
    "Stay ahead with the latest cricket betting strategies, match prediction guides, bonus breakdowns, and industry legal updates.",
  alternates: {
    canonical: "https://pookieplay.com/blogs/",
  },
};

export default function BlogsPage() {
  const breadcrumbs = [
    { name: "Home", url: "/" },
    { name: "Blogs", url: "/blogs/" },
  ];

  const bannerMap: Record<string, string> = {
    "sports-betting-vs-casino-gambling": "/images/blogs/sports-betting-vs-casino.png",
    "top-5-mistakes-new-bettors-make": "/images/blogs/top-5-mistakes.png",
    "ultimate-guide-online-betting-india": "/images/blogs/online-betting-india.png",
  };

  return (
    <div className="container">
      <div className={styles.wrapper}>
        <Breadcrumbs items={breadcrumbs} />

        <header className={styles.header}>
          <h1 className={styles.title}>
            <span>POOKIE PLAY </span>
            <span className="text-gradient">BLOG & GUIDES</span>
          </h1>
          <p className={styles.subtitle}>
            Expert analysis, beginner wagering tutorials, IPL tournament breakdowns, and responsible
            betting strategies curated by professional sports handicappers.
          </p>
        </header>

        <div className={styles.grid}>
          {blogPosts.map((post) => {
            const bannerSrc = bannerMap[post.slug] || post.featuredImage;

            return (
              <article key={post.slug} className={styles.card}>
                <Link href={`/blogs/${post.slug}/`} className={styles.cardLink}>
                  <div className={styles.bannerWrapper}>
                    <Image
                      src={bannerSrc}
                      alt={post.title}
                      width={360}
                      height={180}
                      className={styles.bannerImg}
                    />
                  </div>

                  <div className={styles.cardBody}>
                    <div className={styles.metaRow}>
                      <span className={styles.author}>{post.author}</span>
                      <span className={styles.readTime}>{post.readTime}</span>
                    </div>

                    <h2 className={styles.cardTitle}>
                      {post.title}: {post.subtitle}
                    </h2>

                    <p className={styles.cardExcerpt}>{post.excerpt}</p>

                    <div className={styles.btnWrapper}>
                      <span className="btn-pink">Read Full Guide</span>
                    </div>
                  </div>
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
}
