import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

export default function RelatedPosts({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Related Posts</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {posts.map((post) => (
          <Link
            key={post.slug}
            href={`/blog/${post.slug}`}
            className="block rounded-2xl border border-primary/10 p-4 transition hover:border-primary/20 hover:bg-primary/5"
          >
            <Badge variant="outline" className="border-primary/20 text-primary">
              {post.category}
            </Badge>
            <h3 className="mt-3 text-sm font-semibold text-heading">{post.title}</h3>
            <p className="mt-2 text-xs text-muted-text">{post.readingTime}</p>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
