import type { MetadataRoute } from "next";

import { getAllPosts, getAllTagSummaries, getCategorySummaries, getSiteUrl } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const posts = getAllPosts();
  const categories = getCategorySummaries(posts);
  const tags = getAllTagSummaries(posts);

  return [
    {
      url: siteUrl,
      lastModified: new Date(),
    },
    {
      url: `${siteUrl}/blog`,
      lastModified: new Date(),
    },
    ...posts.map((post) => ({
      url: `${siteUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
    })),
    ...categories.map((category) => ({
      url: `${siteUrl}/blog/category/${category.slug}`,
      lastModified: new Date(),
    })),
    ...tags.map((tag) => ({
      url: `${siteUrl}/blog/tag/${tag.slug}`,
      lastModified: new Date(),
    })),
  ];
}
