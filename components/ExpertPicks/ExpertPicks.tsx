import React from "react";
import Link from "next/link";
import Image from "next/image";
import { blogPosts } from "@/data/blogs";
import styles from "./ExpertPicks.module.css";

export default function ExpertPicks({ countryCode }: { countryCode?: string } = {}) {
  const featuredPosts = blogPosts.slice(0, 3);

  const bannerMap: Record<string, string> = {
    "sports-betting-vs-casino-gambling": "/images/blogs/sports-betting-vs-casino.png",
    "top-5-mistakes-new-bettors-make": "/images/blogs/top-5-mistakes.png",
    "ultimate-guide-online-betting-india": "/images/blogs/online-betting-india.png",
  };

  return (
    <section className={styles.section} aria-label="Expert Picks">
      <h2 className={styles.heading}>Expert Picks</h2>

      <div className={styles.grid}>
        {featuredPosts.map((post) => {
          const bannerSrc = bannerMap[post.slug] || post.featuredImage;
          const blogHref = `/blogs/${post.slug}/${countryCode ? `?country=${countryCode.toLowerCase()}` : ""}`;

          return (
            <article key={post.slug} className={styles.card}>
              <Link href={blogHref} className={styles.cardLink}>
                {/* Top Art Banner */}
                <div className={styles.bannerWrapper}>
                  <Image
                    src={bannerSrc}
                    alt={post.title}
                    width={360}
                    height={180}
                    unoptimized
                    className={styles.bannerImg}
                  />
                </div>

                {/* Bottom White Card Body */}
                <div className={styles.cardBody}>
                  <h3 className={styles.cardTitle}>
                    {post.title}: {post.subtitle}
                  </h3>
                  <p className={styles.cardExcerpt}>{post.excerpt}</p>
                  <div className={styles.btnWrapper}>
                    <span className="btn-pink">Read More</span>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </section>
  );
}
