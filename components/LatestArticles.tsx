import Image from "next/image";
import Link from "next/link";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

export default function LatestArticles({ posts }: { posts: PostSummary[] }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <CardTitle>Latest Articles</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {posts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex gap-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-2xl">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover transition duration-300 group-hover:scale-105"
                sizes="64px"
              />
            </div>
            <div className="min-w-0">
              <h3 className="line-clamp-2 text-sm font-semibold text-heading transition-colors group-hover:text-primary">
                {post.title}
              </h3>
              <p className="mt-1 text-xs text-muted-text">
                {new Date(post.date).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </p>
            </div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}
