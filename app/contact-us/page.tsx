import type { Metadata } from "next";
import ContactPageContent from "@/app/components/contact-page-content";

const siteUrl = "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/contact-us`;
const title = "Contact Cure Hub Med Solutions | Medical Billing & Revenue Cycle Experts";
const description =
  "Get in touch with Cure Hub Med Solutions for professional medical billing and revenue cycle management services. Schedule a consultation and discover how we can help improve your practice revenue.";

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
    logo: `${siteUrl}/next.svg`,
    description:
      "Cure Hub Med Solutions provides medical billing services, revenue cycle management consultation, and outsourced billing support for healthcare providers in the USA.",
    email: "info@curehubmedsolutions.com",
    areaServed: "United States",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ContactPageContent />
    </>
  );
}
