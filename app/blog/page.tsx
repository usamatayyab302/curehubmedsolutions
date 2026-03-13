import Link from "next/link";
import type { Metadata } from "next";

import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";
import FeaturedPosts from "@/components/FeaturedPosts";
import { Button } from "@/components/ui/button";
import {
  filterPosts,
  getCategorySummaries,
  getFeaturedPosts,
  getLatestPosts,
  getSiteUrl,
  paginatePosts,
} from "@/lib/posts";

type BlogPageProps = {
  searchParams: Promise<{
    page?: string;
    q?: string;
  }>;
};

export const metadata: Metadata = {
  title: "Latest Insights & Tutorials",
  description:
    "Expert insights about medical billing, revenue cycle management, and healthcare operations.",
  alternates: {
    canonical: `${getSiteUrl()}/blog`,
  },
  openGraph: {
    title: "Latest Insights & Tutorials",
    description:
      "Expert insights about medical billing, revenue cycle management, and healthcare operations.",
    url: `${getSiteUrl()}/blog`,
    type: "website",
  },
};

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { page: rawPage, q } = await searchParams;
  const page = Number(rawPage ?? "1");
  const filteredPosts = filterPosts({ query: q });
  const articleCount = filteredPosts.length;
  const featuredPosts = getFeaturedPosts(filteredPosts, 2);
  const { posts, currentPage, totalPages } = paginatePosts(
    filteredPosts,
    Number.isNaN(page) ? 1 : page
  );

  return (
    <div className="pb-16">
      <BlogHero
        variant="listing"
        title="Latest Insights & Tutorials"
        subtitle="Expert insights about medical billing, revenue cycle management, and healthcare operations."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <FeaturedPosts posts={featuredPosts} />

        <div className="mt-10 grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px]">
          <div className="space-y-8">
            <div className="flex items-end justify-between gap-4">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
                  {articleCount === 1 ? "Published Article" : "All Articles"}
                </p>
                <h2 className="mt-2 text-3xl font-semibold text-heading">
                  {articleCount === 1
                    ? "Current healthcare revenue cycle guide"
                    : "Practical guidance for healthcare growth"}
                </h2>
              </div>
              <p className="text-sm text-muted-text">
                {articleCount} article{articleCount === 1 ? "" : "s"}
              </p>
            </div>

            <BlogGrid posts={posts} />

            {totalPages > 1 ? (
              <div className="flex flex-wrap items-center gap-3">
                {Array.from({ length: totalPages }, (_, index) => {
                  const targetPage = index + 1;
                  const params = new URLSearchParams();

                  if (q) {
                    params.set("q", q);
                  }

                  if (targetPage > 1) {
                    params.set("page", String(targetPage));
                  }

                  return (
                    <Button
                      key={targetPage}
                      variant={targetPage === currentPage ? "default" : "outline"}
                      asChild
                    >
                      <Link href={params.size > 0 ? `/blog?${params.toString()}` : "/blog"}>
                        {targetPage}
                      </Link>
                    </Button>
                  );
                })}
              </div>
            ) : null}
          </div>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <BlogSidebar
              latestPosts={getLatestPosts(4)}
              categories={getCategorySummaries()}
              query={q}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}
