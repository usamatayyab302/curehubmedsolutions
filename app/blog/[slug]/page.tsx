import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import AuthorBox from "@/components/AuthorBox";
import BlogHero from "@/components/BlogHero";
import BlogPostSidebar from "@/components/BlogPostSidebar";
import {
  createClaimDenialsGuideSlots,
  createMedicalBillingGuideSlots,
  createOutsourcingBillingGuideSlots,
  createRcmGuideSlots,
} from "@/components/MedicalBillingGuideBlocks";
import ReadingProgress from "@/components/ReadingProgress";
import RelatedArticlesSection from "@/components/RelatedArticlesSection";
import RichArticleContent from "@/components/RichArticleContent";
import MotionReveal from "@/components/services/motion-reveal";
import TableOfContents from "@/components/TableOfContents";
import {
  getLatestPosts,
  getPostBySlug,
  getPostSlugs,
  getRelatedPosts,
  getSiteUrl,
} from "@/lib/posts";

type BlogPostPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return {};
  }

  const url = `${getSiteUrl()}/blog/${post.slug}`;
  const ogImage = post.image.startsWith("http") ? post.image : `${getSiteUrl()}${post.image}`;
  const metaTitle = post.seoTitle ?? post.title;
  const metaDescription = post.seoDescription ?? post.description;

  return {
    title: metaTitle,
    description: metaDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: metaTitle,
      description: metaDescription,
      url,
      type: "article",
      images: [
        {
          url: ogImage,
          alt: post.imageAlt ?? post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: metaDescription,
      images: [ogImage],
    },
  };
}

function getArticleBody(markdown: string) {
  return markdown
    .replace(/\[\[[^\]]+\]\]/g, "")
    .replace(/!\[[^\]]*]\([^)]+\)/g, "")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^#{1,6}\s+/gm, "")
    .replace(/[*_`>|-]/g, " ")
    .replace(/\n+/g, " ")
    .replace(/\s{2,}/g, " ")
    .trim();
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const postUrl = `${getSiteUrl()}/blog/${post.slug}`;
  const postImage = post.image.startsWith("http") ? post.image : `${getSiteUrl()}${post.image}`;
  const metaDescription = post.seoDescription ?? post.description;
  const latestPosts = getLatestPosts(4, post.slug);
  const sidebarLatestPosts = latestPosts.length < 4 ? getLatestPosts(4) : latestPosts;
  const relatedPosts = getRelatedPosts(post, 3);
  const articleSlots =
    post.slug === "complete-guide-to-medical-billing"
      ? createMedicalBillingGuideSlots()
      : post.slug === "top-reasons-for-medical-claim-denials"
        ? createClaimDenialsGuideSlots()
        : post.slug === "how-revenue-cycle-management-improves-healthcare-profitability"
          ? createRcmGuideSlots()
        : post.slug === "benefits-of-outsourcing-medical-billing"
          ? createOutsourcingBillingGuideSlots()
        : {};
  const sidebarCta =
    post.slug === "top-reasons-for-medical-claim-denials"
      ? {
          title: "Reduce Claim Denials in Your Practice",
          description:
            "Connect with Cure Hub Med Solutions to improve denial prevention, streamline appeals, and recover revenue with focused denial management support.",
          primaryHref: "/contact-us",
          primaryLabel: "Schedule Consultation",
          secondaryHref: "/services/denial-management",
          secondaryLabel: "View Denial Management Services",
        }
      : post.slug === "how-revenue-cycle-management-improves-healthcare-profitability"
        ? {
            title: "Optimize Your Revenue Cycle",
            description:
              "Work with Cure Hub Med Solutions to improve billing operations, speed reimbursements, and strengthen financial performance across the revenue cycle.",
            primaryHref: "/contact-us",
            primaryLabel: "Schedule Consultation",
            secondaryHref: "/services/revenue-cycle-management",
            secondaryLabel: "Explore RCM Services",
          }
      : post.slug === "benefits-of-outsourcing-medical-billing"
        ? {
            title: "Outsource Your Medical Billing Today",
            description:
              "Partner with Cure Hub Med Solutions to improve billing accuracy, speed reimbursements, and strengthen revenue cycle performance with professional medical billing support.",
            primaryHref: "/contact-us",
            primaryLabel: "Schedule Consultation",
            secondaryHref: "/services/medical-billing-services",
            secondaryLabel: "Explore Medical Billing Services",
          }
      : undefined;
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    image: [postImage],
    author: {
      "@type": "Person",
      name: post.author,
    },
    datePublished: post.date,
    dateModified: post.date,
    publisher: {
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
      url: getSiteUrl(),
    },
    description: metaDescription,
    articleBody: getArticleBody(post.content),
    mainEntityOfPage: postUrl,
  };

  return (
    <div className="overflow-hidden bg-[radial-gradient(circle_at_top,rgba(114,196,189,0.14),transparent_28%),linear-gradient(180deg,#f8fbfb_0%,#ffffff_35%,#f6fbfb_100%)] pb-20">
      <ReadingProgress />
      <BlogHero
        variant="post"
        title={post.title}
        subtitle={post.description}
        author={post.author}
        date={post.date}
        readingTime={post.readingTime}
        category={post.category}
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <MotionReveal className="overflow-hidden rounded-[2rem] border border-primary/10 bg-white shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
          <div className="relative aspect-[16/9] md:aspect-[16/7]">
            <Image
              src={post.image}
              alt={post.imageAlt ?? post.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/18 via-transparent to-transparent" />
          </div>
        </MotionReveal>

        <div className="mt-10 grid gap-10 xl:grid-cols-[minmax(0,1fr)_320px]">
          <main className="min-w-0">
            <MotionReveal>
              <TableOfContents items={post.headings} sticky />
            </MotionReveal>

            <div className="mt-8 rounded-[2rem] border border-primary/10 bg-white/96 p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] sm:p-8 lg:p-10">
              <article>
                <RichArticleContent html={post.html} slots={articleSlots} />
              </article>
            </div>

            <MotionReveal className="mt-8">
              <AuthorBox
                author={post.author}
                authorRole={post.authorRole}
                authorBio={post.authorBio}
              />
            </MotionReveal>

            <MotionReveal className="mt-10">
              <RelatedArticlesSection posts={relatedPosts} />
            </MotionReveal>
          </main>

          <aside className="xl:sticky xl:top-24 xl:self-start">
            <BlogPostSidebar
              latestPosts={sidebarLatestPosts}
              title={post.title}
              url={postUrl}
              cta={sidebarCta}
            />
          </aside>
        </div>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
    </div>
  );
}
