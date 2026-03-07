import type { Metadata } from "next";
import SpecialtyPageTemplate from "@/app/components/specialty-page-template";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function toTitleFromSlug(slug: string) {
  return slug
    .split("-")
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const titleBase = toTitleFromSlug(slug);

  return {
    title: `${titleBase} | Cure Hub Med Solutions`,
    description: `Explore ${titleBase.toLowerCase()} with specialty-focused medical billing and revenue cycle support from Cure Hub Med Solutions.`,
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const title = toTitleFromSlug(slug);

  return (
    <SpecialtyPageTemplate
      title={title}
      summary={`Cure Hub Med Solutions delivers ${title.toLowerCase()} with claim accuracy, payer compliance, and revenue-focused workflows tailored to U.S. healthcare practices.`}
      challenges={[
        "Specialty-specific coding and documentation variations",
        "Payer-specific edits and authorization requirements",
        "Denials caused by missing or incomplete claim details",
      ]}
      strategies={[
        "Specialty coding QA before claim submission",
        "Proactive denial prevention and resubmission workflows",
        "Transparent performance reporting and AR follow-up",
      ]}
    />
  );
}

