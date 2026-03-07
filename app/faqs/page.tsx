import type { Metadata } from "next";
import FaqsPageContent from "@/app/components/faqs-page-content";
import { faqItems } from "@/app/components/faqs/faq-data";

const siteUrl = "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/faqs`;
const title = "Medical Billing FAQ | Cure Hub Med Solutions";
const description =
  "Find answers to common questions about medical billing services, revenue cycle management, HIPAA compliance, and outsourcing billing with Cure Hub Med Solutions.";

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
    "@type": "FAQPage",
    mainEntity: faqItems.slice(0, 12).map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <FaqsPageContent />
    </>
  );
}
