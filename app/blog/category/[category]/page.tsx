import type { Metadata } from "next";
import { notFound } from "next/navigation";

import BlogGrid from "@/components/BlogGrid";
import BlogHero from "@/components/BlogHero";
import BlogSidebar from "@/components/BlogSidebar";
import {
  getCategorySummaries,
  getLatestPosts,
  getPostsByCategory,
  getSiteUrl,
} from "@/lib/posts";

type CategoryPageProps = {
  params: Promise<{
    category: string;
  }>;
};

export async function generateStaticParams() {
  return getCategorySummaries().map((category) => ({
    category: category.slug,
  }));
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    return {};
  }

  const categoryName = posts[0].category;
  const url = `${getSiteUrl()}/blog/category/${category}`;

  return {
    title: `${categoryName} Articles`,
    description: `Explore ${categoryName.toLowerCase()} insights and best practices.`,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${categoryName} Articles`,
      description: `Explore ${categoryName.toLowerCase()} insights and best practices.`,
      url,
      type: "website",
    },
  };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { category } = await params;
  const posts = getPostsByCategory(category);

  if (posts.length === 0) {
    notFound();
  }

  return (
    <div className="pb-16">
      <BlogHero
        variant="listing"
        title={posts[0].category}
        subtitle={`Browse ${posts.length} article${posts.length === 1 ? "" : "s"} in ${posts[0].category}.`}
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
