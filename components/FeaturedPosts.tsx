import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

export default function FeaturedPosts({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
            Featured Posts
          </p>
          <h2 className="mt-2 text-3xl font-semibold text-heading">Editor’s picks for revenue teams</h2>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {posts.map((post) => (
          <Card
            key={post.slug}
            className="group relative overflow-hidden border-0 shadow-[0_24px_80px_rgba(15,23,42,0.14)]"
          >
            <Link href={`/blog/${post.slug}`} className="block">
              <div className="relative aspect-[16/10]">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 40vw, 100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <Badge className="mb-3 bg-white text-primary hover:bg-white">{post.category}</Badge>
                  <h3 className="max-w-xl text-2xl font-semibold text-white">{post.title}</h3>
                  <p className="mt-2 max-w-xl text-sm text-white/80">{post.description}</p>
                </div>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
}
