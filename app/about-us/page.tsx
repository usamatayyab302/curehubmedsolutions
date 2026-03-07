import type { Metadata } from "next";
import AboutPageContent from "@/app/components/about-page-content";

const siteUrl = "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/about-us`;
const title = "About Cure Hub Med Solutions | Medical Billing Experts in the USA";
const description =
  "Learn how Cure Hub Med Solutions helps healthcare providers improve revenue cycle performance with expert medical billing and coding services.";

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
    "@type": "Organization",
    name: "Cure Hub Med Solutions",
    url: siteUrl,
    logo: `${siteUrl}/next.svg`,
    description:
      "Cure Hub Med Solutions provides expert medical billing services and revenue cycle management support for healthcare providers across the United States.",
    sameAs: [
      "https://www.linkedin.com",
      "https://www.facebook.com",
      "https://x.com",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      email: "contact@curehubmedsolutions.com",
      telephone: "+1-555-210-8900",
      areaServed: "US",
      availableLanguage: ["en"],
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <AboutPageContent />
    </>
  );
}
