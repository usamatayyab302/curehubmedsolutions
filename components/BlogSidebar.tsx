import Link from "next/link";

import BlogSearch from "@/components/BlogSearch";
import LatestArticles from "@/components/LatestArticles";
import RelatedPosts from "@/components/RelatedPosts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

type CategorySummary = {
  name: string;
  slug: string;
  count: number;
};

type BlogSidebarProps = {
  latestPosts: PostSummary[];
  categories: CategorySummary[];
  relatedPosts?: PostSummary[];
  query?: string;
};

export default function BlogSidebar({
  latestPosts,
  categories,
  relatedPosts,
  query,
}: BlogSidebarProps) {
  return (
    <div className="space-y-6">
      <BlogSearch defaultValue={query} />
      {latestPosts.length > 0 ? <LatestArticles posts={latestPosts} /> : null}
      {relatedPosts ? <RelatedPosts posts={relatedPosts} /> : null}
      {categories.length > 0 ? (
        <Card>
          <CardHeader>
            <CardTitle>Categories</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {categories.map((category) => (
              <Link
                key={category.slug}
                href={`/blog/category/${category.slug}`}
                className="flex items-center justify-between rounded-xl px-3 py-2 text-sm text-heading transition hover:bg-primary/5 hover:text-primary"
              >
                <span>{category.name}</span>
                <span className="text-xs text-muted-text">{category.count}</span>
              </Link>
            ))}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}
