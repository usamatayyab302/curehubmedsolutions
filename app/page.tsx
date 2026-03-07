import type { Metadata } from "next";
import HomePageContent from "./components/home-page-content";

const siteUrl = "https://www.curehubmedsolutions.com";
const seoTitle = "Medical Billing Services USA | Revenue Cycle Management";
const seoDescription =
  "Medical billing services for U.S. practices. Improve revenue cycle management, reduce denials, and accelerate reimbursements with Cure Hub Med Solutions.";

export const metadata: Metadata = {
  title: seoTitle,
  description: seoDescription,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Cure Hub Med Solutions",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
  },
};

export default function Page() {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
      url: siteUrl,
      logo: `${siteUrl}/next.svg`,
      sameAs: ["https://www.linkedin.com", "https://www.facebook.com", "https://x.com"],
    },
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "Cure Hub Med Solutions",
      url: siteUrl,
      areaServed: "United States",
      serviceType: [
        "Medical Billing Services",
        "Revenue Cycle Management",
        "Healthcare Billing Solutions",
        "Medical Billing Outsourcing",
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: "Cure Hub Med Solutions",
      url: siteUrl,
      telephone: "+1-555-210-8900",
      email: "contact@curehubmedsolutions.com",
      areaServed: "United States",
      openingHours: "Mo-Fr 09:00-18:00",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [
        {
          "@type": "Question",
          name: "What is medical billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Medical billing is the process of submitting claims to insurance companies and managing reimbursements for healthcare services provided by physicians and healthcare organizations.",
          },
        },
        {
          "@type": "Question",
          name: "Why should healthcare providers outsource medical billing?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Outsourcing medical billing allows providers to reduce administrative workload, improve claim accuracy, and increase revenue cycle efficiency.",
          },
        },
        {
          "@type": "Question",
          name: "How long does it take to receive reimbursements?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Reimbursement timelines depend on insurance providers, but efficient claim submission and follow-up can significantly reduce payment delays.",
          },
        },
        {
          "@type": "Question",
          name: "Is medical billing secure?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Professional billing companies follow strict HIPAA compliance standards to protect patient information and maintain data security.",
          },
        },
        {
          "@type": "Question",
          name: "How can medical billing improve practice revenue?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Accurate coding, efficient claim submission, and proactive denial management help ensure that practices receive the full reimbursement they deserve.",
          },
        },
      ],
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <HomePageContent />
    </>
  );
}
