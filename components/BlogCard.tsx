import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, User2 } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

export default function BlogCard({ post }: { post: PostSummary }) {
  return (
    <Card className="group h-full overflow-hidden border-primary/10 shadow-[0_20px_60px_rgba(15,23,42,0.06)] transition-transform duration-300 hover:-translate-y-1">
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
            sizes="(min-width: 1280px) 25vw, (min-width: 768px) 40vw, 100vw"
          />
          <div className="absolute left-4 top-4">
            <Badge className="bg-white text-primary hover:bg-white">{post.category}</Badge>
          </div>
        </div>
      </Link>

      <CardContent className="flex h-[calc(100%-1px)] flex-col p-6">
        <Link href={`/blog/${post.slug}`} className="block">
          <h3 className="text-2xl font-semibold tracking-tight text-heading transition-colors group-hover:text-primary">
            {post.title}
          </h3>
        </Link>
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-text">{post.description}</p>
        <div className="mt-5 flex flex-wrap gap-3 text-xs text-muted-text">
          <span className="inline-flex items-center gap-1.5">
            <User2 className="h-3.5 w-3.5" />
            {post.author}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <CalendarDays className="h-3.5 w-3.5" />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-3.5 w-3.5" />
            {post.readingTime}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
