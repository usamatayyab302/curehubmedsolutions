import type { PostSummary } from "@/lib/posts";

import BlogCard from "@/components/BlogCard";

export default function BlogGrid({ posts }: { posts: PostSummary[] }) {
  if (posts.length === 0) {
    return (
      <div className="rounded-[2rem] border border-dashed border-primary/20 bg-white/70 px-6 py-12 text-center">
        <h2 className="text-2xl font-semibold text-heading">No articles found</h2>
        <p className="mt-3 text-muted-text">
          Adjust the search query or browse another category.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {posts.map((post) => (
        <BlogCard key={post.slug} post={post} />
      ))}
    </div>
  );
}
