import type { Metadata } from "next";
import SpecialtiesPageContent from "@/app/components/specialties-page-content";

const siteUrl = "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/specialties`;
const title = "Medical Billing Specialties | Cure Hub Med Solutions";
const description =
  "Explore medical billing services for 50+ healthcare specialties at Cure Hub Med Solutions. Improve claim accuracy, reduce denials, and optimize revenue cycle performance.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: pageUrl },
  openGraph: {
    title,
    description,
    url: pageUrl,
    siteName: "Cure Hub Med Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
};

export default function Page() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Cure Hub Med Solutions",
    url: siteUrl,
    serviceType: "Medical Billing Specialties",
    areaServed: "United States",
    description:
      "Specialty-focused medical billing and revenue cycle management services for healthcare providers across multiple specialties.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <SpecialtiesPageContent />
    </>
  );
}
