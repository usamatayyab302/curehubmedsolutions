import BlogCard from "@/components/BlogCard";
import MotionReveal from "@/components/services/motion-reveal";
import type { PostSummary } from "@/lib/posts";

type RelatedArticlesSectionProps = {
  posts: PostSummary[];
};

export default function RelatedArticlesSection({
  posts,
}: RelatedArticlesSectionProps) {
  if (posts.length === 0) {
    return null;
  }

  return (
    <section className="space-y-6">
      <div className="flex flex-col gap-2">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-primary">
          Related Articles
        </p>
        <h2 className="text-3xl font-semibold text-heading">
          More insights for healthcare revenue teams
        </h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => (
          <MotionReveal
            key={post.slug}
            delay={Math.min(index * 0.05, 0.15)}
          >
            <BlogCard post={post} />
          </MotionReveal>
        ))}
      </div>
    </section>
  );
}
