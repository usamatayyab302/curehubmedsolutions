import fs from "node:fs";
import path from "node:path";
import { cache } from "react";
import matter from "gray-matter";

import { renderMarkdown, type TableOfContentsItem } from "@/lib/markdown";
import { getReadingTime } from "@/lib/readingTime";

export type PostFrontmatter = {
  title: string;
  description: string;
  seoTitle?: string;
  seoDescription?: string;
  date: string;
  author: string;
  authorRole?: string;
  authorBio?: string;
  category: string;
  tags: string[];
  image: string;
  imageAlt?: string;
  slug: string;
  featured: boolean;
};

export type PostSummary = PostFrontmatter & {
  readingTime: string;
};

export type Post = PostSummary & {
  content: string;
  html: string;
  headings: TableOfContentsItem[];
};

type CategorySummary = {
  name: string;
  slug: string;
  count: number;
};

const POSTS_DIRECTORY = path.join(process.cwd(), "content", "blog");

export function getSiteUrl() {
  return (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/$/, "");
}

export function slugifySegment(value: string) {
  return value
    .toLowerCase()
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

function parsePostFile(filePath: string): PostSummary & { content: string } {
  const source = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = data as PostFrontmatter;
  const readingContent = content.replace(/\[\[[^\]]+\]\]/g, "");

  return {
    ...frontmatter,
    readingTime: getReadingTime(readingContent),
    content,
  };
}

export const getAllPosts = cache(() => {
  if (!fs.existsSync(POSTS_DIRECTORY)) {
    return [] as PostSummary[];
  }

  return fs
    .readdirSync(POSTS_DIRECTORY)
    .filter((fileName) => fileName.endsWith(".md"))
    .map((fileName) => {
      const { content, ...parsed } = parsePostFile(path.join(POSTS_DIRECTORY, fileName));
      void content;

      return {
        ...parsed,
      } satisfies PostSummary;
    })
    .sort((left, right) => new Date(right.date).getTime() - new Date(left.date).getTime())
    ;
});

export const getPostSlugs = cache(() => getAllPosts().map((post) => post.slug));

export const getPostBySlug = cache(async (slug: string) => {
  const filePath = path.join(POSTS_DIRECTORY, `${slug}.md`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const post = parsePostFile(filePath);
  const rendered = await renderMarkdown(post.content);

  return {
    ...post,
    html: rendered.html,
    headings: rendered.headings,
  } satisfies Post;
});

export function getFeaturedPosts(posts = getAllPosts(), limit = 3) {
  return posts.filter((post) => post.featured).slice(0, limit);
}

export function getLatestPosts(limit = 4, excludeSlug?: string) {
  return getAllPosts()
    .filter((post) => post.slug !== excludeSlug)
    .slice(0, limit);
}

export function getCategorySummaries(posts = getAllPosts()): CategorySummary[] {
  const counts = new Map<string, number>();

  for (const post of posts) {
    counts.set(post.category, (counts.get(post.category) ?? 0) + 1);
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({
      name,
      slug: slugifySegment(name),
      count,
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function getAllTagSummaries(posts = getAllPosts()) {
  const counts = new Map<string, number>();

  for (const post of posts) {
    for (const tag of post.tags) {
      counts.set(tag, (counts.get(tag) ?? 0) + 1);
    }
  }

  return Array.from(counts.entries())
    .map(([name, count]) => ({
      name,
      slug: slugifySegment(name),
      count,
    }))
    .sort((left, right) => left.name.localeCompare(right.name));
}

export function getPostsByCategory(categorySlug: string) {
  return getAllPosts().filter((post) => slugifySegment(post.category) === categorySlug);
}

export function getPostsByTag(tagSlug: string) {
  return getAllPosts().filter((post) => post.tags.some((tag) => slugifySegment(tag) === tagSlug));
}

export function getRelatedPosts(post: PostSummary, limit = 3) {
  return getAllPosts()
    .filter((candidate) => candidate.slug !== post.slug)
    .filter(
      (candidate) =>
        candidate.category === post.category ||
        candidate.tags.some((tag) => post.tags.includes(tag))
    )
    .slice(0, limit);
}

export function filterPosts({
  query,
  category,
  tag,
}: {
  query?: string;
  category?: string;
  tag?: string;
}) {
  const normalizedQuery = query?.trim().toLowerCase() ?? "";

  return getAllPosts().filter((post) => {
    const queryMatch =
      !normalizedQuery ||
      [post.title, post.description, post.author, post.category, ...post.tags]
        .join(" ")
        .toLowerCase()
        .includes(normalizedQuery);
    const categoryMatch = !category || slugifySegment(post.category) === category;
    const tagMatch = !tag || post.tags.some((item) => slugifySegment(item) === tag);

    return queryMatch && categoryMatch && tagMatch;
  });
}

export function paginatePosts(posts: PostSummary[], page: number, pageSize = 6) {
  const totalPages = Math.max(1, Math.ceil(posts.length / pageSize));
  const currentPage = Math.min(Math.max(1, page), totalPages);
  const startIndex = (currentPage - 1) * pageSize;

  return {
    posts: posts.slice(startIndex, startIndex + pageSize),
    currentPage,
    totalPages,
  };
}
