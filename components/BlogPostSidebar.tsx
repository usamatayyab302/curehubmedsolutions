import ShareButtons from "@/components/ShareButtons";
import LatestArticles from "@/components/LatestArticles";
import BlogCtaCard, { type BlogCtaCardProps } from "@/components/BlogCtaCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { PostSummary } from "@/lib/posts";

type BlogPostSidebarProps = {
  latestPosts: PostSummary[];
  title: string;
  url: string;
  cta?: BlogCtaCardProps;
};

export default function BlogPostSidebar({
  latestPosts,
  title,
  url,
  cta,
}: BlogPostSidebarProps) {
  return (
    <div className="space-y-6">
      <LatestArticles posts={latestPosts} />
      <Card>
        <CardHeader>
          <CardTitle>Share Article</CardTitle>
        </CardHeader>
        <CardContent>
          <ShareButtons title={title} url={url} />
        </CardContent>
      </Card>
      <BlogCtaCard {...cta} />
    </div>
  );
}
