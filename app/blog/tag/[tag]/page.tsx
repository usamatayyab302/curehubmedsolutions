import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";
import {
  getAllTagSummaries,
  getCategorySummaries,
  getLatestPosts,
  getPostsByTag,
  getSiteUrl,
  slugifySegment,
} from "@/lib/posts";

type TagPageProps = {
  params: Promise<{
    tag: string;
  }>;
};

export async function generateStaticParams() {
  return getAllTagSummaries().map((tag) => ({ tag: tag.slug }));
}

export async function generateMetadata({ params }: TagPageProps): Promise<Metadata> {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    return {};
  }

  const tagName = posts.flatMap((post) => post.tags).find((item) => slugifySegment(item) === tag) ?? tag;
  const url = `${getSiteUrl()}/blog/tag/${tag}`;

  return {
    title: `${tagName} Articles`,
    description: `Discover posts tagged with ${tagName}.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${tagName} Articles`,
      description: `Discover posts tagged with ${tagName}.`,
      url,
      type: "website",
    },
  };
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);

  if (posts.length === 0) {
    notFound();
  }

  const tagName = posts.flatMap((post) => post.tags).find((item) => slugifySegment(item) === tag) ?? tag;

  return (
    <div className="pb-16">
      <BlogHero
        variant="listing"
        title={`#${tagName}`}
        subtitle={`Browse ${posts.length} article${posts.length === 1 ? "" : "s"} tagged with ${tagName}.`}
      />

      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 lg:px-8 xl:grid-cols-[minmax(0,1fr)_320px]">
        <BlogGrid posts={posts} />
        <aside className="xl:sticky xl:top-24 xl:self-start">
          <BlogSidebar latestPosts={getLatestPosts(4)} categories={getCategorySummaries()} />
        </aside>
      </div>
    </div>
  );
}
