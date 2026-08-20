import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs/Breadcrumbs";
import { blogPosts, getBlogPostBySlug } from "@/data/blogs";
import { getThemeByPath } from "@/data/themes";
import styles from "./BlogPost.module.css";

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
  searchParams?: Promise<{
    country?: string;
    c?: string;
  }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params, searchParams }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: "Article Not Found | Pookie Play Blog",
    };
  }

  return {
    title: `${post.title} | Pookie Play Guide`,
    description: post.excerpt,
    alternates: {
      canonical: `https://pookieplay.com/blogs/${post.slug}/`,
    },
    openGraph: {
      title: `${post.title}: ${post.subtitle}`,
      description: post.excerpt,
      url: `https://pookieplay.com/blogs/${post.slug}/`,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updatedDate || post.date,
      authors: [post.author],
      images: [
        {
          url: post.featuredImage,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params, searchParams }: BlogPostPageProps) {
  const { slug } = await params;
  const resolvedSearchParams = searchParams ? await searchParams : {};
  const countryParam = resolvedSearchParams.country || resolvedSearchParams.c || null;

  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const theme = getThemeByPath(`/blogs/${slug}/`, countryParam || post.country);

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: `${post.title}: ${post.subtitle}`,
    description: post.excerpt,
    image: `https://pookieplay.com${post.featuredImage}`,
    datePublished: post.date,
    dateModified: post.updatedDate || post.date,
    author: {
      "@type": "Organization",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Pookie Play",
      logo: {
        "@type": "ImageObject",
        url: "https://pookieplay.com/images/logos/pookieplay-logo.svg",
      },
    },
    mainEntityOfPage: `https://pookieplay.com/blogs/${post.slug}/`,
  };

  const breadcrumbs = [
    { name: "Home", url: theme.homePath || "/" },
    { name: "Blogs", url: "/blogs/" },
    { name: post.title, url: `/blogs/${post.slug}/` },
  ];

  const otherPosts = blogPosts.filter((p) => p.slug !== post.slug).slice(0, 2);

  const bannerMap: Record<string, string> = {
    "sports-betting-vs-casino-gambling": "/images/blogs/sports-betting-vs-casino.png",
    "top-5-mistakes-new-bettors-make": "/images/blogs/top-5-mistakes.png",
    "ultimate-guide-online-betting-india": "/images/blogs/online-betting-india.png",
  };
  const bannerSrc = bannerMap[post.slug] || post.featuredImage;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="container" data-theme={theme.themeId}>
        <div className={styles.wrapper}>
          <Breadcrumbs items={breadcrumbs} />

          <article className={styles.article}>
            <header className={styles.header}>
              {post.badge && <span className={styles.badge}>{post.badge}</span>}
              <h1 className={styles.title}>
                <span>{post.title}</span>
                <span className={styles.subtitle}>{post.subtitle}</span>
              </h1>

              <div className={styles.metaInfo}>
                <span>By {post.author}</span>
                <span>•</span>
                <time dateTime={post.date}>Published on {post.date}</time>
                <span>•</span>
                <span>{post.readTime}</span>
              </div>
            </header>

            <div className={styles.featuredImageWrapper}>
              <Image
                src={bannerSrc}
                alt={post.title}
                width={800}
                height={400}
                priority
                unoptimized
                className={styles.featuredImage}
              />
            </div>

            <div className={styles.content}>
              {post.content.map((section, idx) => (
                <section key={idx} className={styles.section}>
                  <h2 className={styles.sectionHeading}>{section.heading}</h2>
                  {section.body.map((p, pIdx) => (
                    <p key={pIdx} className={styles.paragraph}>
                      {p}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            {/* Tags */}
            <div className={styles.tagsContainer}>
              <span className={styles.tagsLabel}>Tags:</span>
              <div className={styles.tagsList}>
                {post.tags.map((tag) => (
                  <span key={tag} className={styles.tag}>
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </article>

          {/* Related Articles */}
          {otherPosts.length > 0 && (
            <aside className={styles.relatedSection} aria-label="Related Articles">
              <h3 className={styles.relatedTitle}>Related Guides & Articles</h3>
              <div className={styles.relatedGrid}>
                {otherPosts.map((rel) => {
                  const relHref = `/blogs/${rel.slug}/${countryParam ? `?country=${countryParam}` : ""}`;
                  return (
                    <Link key={rel.slug} href={relHref} className={styles.relatedCard}>
                      <h4 className={styles.relatedCardTitle}>
                        {rel.title}: {rel.subtitle}
                      </h4>
                      <p className={styles.relatedCardExcerpt}>{rel.excerpt}</p>
                    </Link>
                  );
                })}
              </div>
            </aside>
          )}
        </div>
      </div>
    </>
  );
}
