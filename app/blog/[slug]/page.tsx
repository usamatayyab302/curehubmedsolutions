import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";
import ReadingProgress from "@/components/ReadingProgress";
import ShareButtons from "@/components/ShareButtons";
import TableOfContents from "@/components/TableOfContents";
import {
  getCategorySummaries,
  getLatestPosts,
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  getSiteUrl,
} from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `${getSiteUrl()}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      url,
      type: "article",
      images: [
        {
          url: post.image,
          alt: post.title,
        },
      ],
    },
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${getSiteUrl()}/blog/${post.slug}`;
  const relatedPosts = getRelatedPosts(post, 3);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    image: [post.image],
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
    },
    description: post.description,
    mainEntityOfPage: postUrl,
  };

  return (
    <div className="pb-16">
      <ReadingProgress />
      <BlogHero
        variant="post"
        title={post.title}
        subtitle={post.description}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        category={post.category}
      >
        <ShareButtons title={post.title} url={postUrl} />
      </BlogHero>

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="relative aspect-[16/7] overflow-hidden rounded-[2rem] shadow-[0_24px_80px_rgba(15,23,42,0.15)]">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_2fr_1fr]">
          <aside className="order-2 lg:order-1">
            <TableOfContents items={post.headings} />
          </aside>

          <article className="order-1 lg:order-2">
            <div
              className="blog-prose mx-auto max-w-[720px]"
              dangerouslySetInnerHTML={{ __html: post.html }}
            />
          </article>

          <aside className="order-3 lg:order-3">
            <BlogSidebar
              latestPosts={getLatestPosts(4, post.slug)}
              categories={getCategorySummaries()}
              relatedPosts={relatedPosts}
            />
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
