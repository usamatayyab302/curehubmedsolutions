import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HandCoins,
  RotateCcw,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
  type LucideIcon,
} from "lucide-react";

import HealthcareProvidersSupported from "@/components/services/HealthcareProvidersSupported";
import BenefitsSection from "@/components/services/benefits-section";
import CTASection from "@/components/services/cta-section";
import MotionReveal from "@/components/services/motion-reveal";
import ProcessTimeline from "@/components/services/process-timeline";
import ServiceFeaturesGrid from "@/components/services/service-features-grid";
import ServiceHero from "@/components/services/service-hero";
import ServiceSectionHeading from "@/components/services/service-section-heading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/provider-credentialing`;

const keywords = [
  "provider credentialing services",
  "physician credentialing services",
  "medical credentialing company",
  "payer enrollment services",
  "insurance credentialing services",
];

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type TabItem = {
  value: string;
  label: string;
  title: string;
  description: string;
  points: string[];
  icon: LucideIcon;
};

type LinkCard = {
  title: string;
  description: string;
  href: string;
  icon: LucideIcon;
};

type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type NetworkItem = {
  title: string;
  badge: string;
  description: string;
};

const credentialingTabs: TabItem[] = [
  {
    value: "verification",
    label: "Verification",
    title: "Credentialing verifies provider licenses, qualifications, and eligibility",
    description:
      "Provider credentialing is the formal process used to verify a healthcare professional's license status, education, training, work history, certifications, and other qualifications before insurance participation is approved.",
    points: [
      "Validates licenses, certifications, and provider credentials",
      "Confirms information required by payers and healthcare organizations",
      "Reduces risk tied to incomplete or inconsistent enrollment records",
    ],
    icon: ShieldCheck,
  },
  {
    value: "enrollment",
    label: "Enrollment",
    title: "Credentialing enables insurance billing and payer participation",
    description:
      "Once credentialing requirements are completed, providers can join insurance networks, participate in payer panels, and bill insurance companies for covered services with fewer enrollment delays.",
    points: [
      "Supports network participation and payer panel access",
      "Creates the path to submit claims and receive reimbursement",
      "Helps expand patient access through insurance acceptance",
    ],
    icon: Building2,
  },
  {
    value: "management",
    label: "Management",
    title: "Cure Hub Med Solutions manages documentation, applications, and follow-up",
    description:
      "Our team simplifies credentialing by organizing provider documents, handling CAQH workflows, preparing payer enrollment applications, and following up until approval and enrollment status are confirmed.",
    points: [
      "CAQH setup and application coordination",
      "Payer enrollment submission and follow-up support",
      "Ongoing tracking for re-credentialing and maintenance needs",
    ],
    icon: ClipboardList,
  },
];

const credentialingImportance: IconCard[] = [
  {
    title: "Join Insurance Networks and Payer Panels",
    description:
      "Insurance credentialing services help providers access payer networks and participate in health plans that matter to their patient base.",
    icon: Building2,
  },
  {
    title: "Receive Reimbursements from Insurance Companies",
    description:
      "Without completed enrollment, healthcare providers can face claim delays, payment disruption, or an inability to bill payers correctly.",
    icon: HandCoins,
  },
  {
    title: "Expand Patient Access Through Insurance Coverage",
    description:
      "Network participation allows more patients to see in-network providers and use existing insurance benefits for care.",
    icon: Users,
  },
  {
    title: "Build Trust with Patients and Healthcare Organizations",
    description:
      "Verified enrollment and up-to-date credentialing demonstrate professionalism, readiness, and operational reliability.",
    icon: Stethoscope,
  },
  {
    title: "Maintain Compliance with Healthcare Regulations",
    description:
      "Credentialing supports documentation accuracy, compliance expectations, and timely upkeep of provider information across payers.",
    icon: ClipboardCheck,
  },
];

const credentialingServices: IconCard[] = [
  {
    title: "Provider Enrollment with Insurance Payers",
    description:
      "We manage payer enrollment services that help providers complete insurer applications and move toward active participation faster.",
    icon: ShieldCheck,
  },
  {
    title: "CAQH Registration and Management",
    description:
      "Our team supports CAQH profile setup, updates, attestation, and documentation coordination to keep applications complete.",
    icon: ClipboardList,
  },
  {
    title: "Insurance Panel Enrollment",
    description:
      "We help providers enroll in payer panels and insurance networks aligned with their specialty, geography, and practice goals.",
    icon: Building2,
  },
  {
    title: "Contract Negotiation Support",
    description:
      "Credentialing support can include contract coordination and payer communication that helps practices understand enrollment terms.",
    icon: BriefcaseMedical,
  },
  {
    title: "Re-Credentialing Services",
    description:
      "Ongoing re-credentialing support helps providers stay enrolled, avoid disruptions, and manage renewal requirements on time.",
    icon: RotateCcw,
  },
  {
    title: "Credentialing Documentation Management",
    description:
      "We organize licenses, certifications, identification documents, and enrollment files to reduce delays caused by incomplete records.",
    icon: FileText,
  },
];

const credentialingProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Provider Information Collection",
    description:
      "We gather provider details, required documents, licensing data, and practice information needed for accurate enrollment workflows.",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "CAQH Profile Setup",
    description:
      "Our team prepares or updates CAQH records so payer applications are supported by complete and current provider information.",
    icon: ClipboardList,
  },
  {
    step: "03",
    title: "Payer Enrollment Applications",
    description:
      "We complete and submit payer enrollment applications based on each insurance network's requirements and process expectations.",
    icon: Building2,
  },
  {
    step: "04",
    title: "Insurance Company Follow-Ups",
    description:
      "We follow up with insurers to monitor status, resolve missing information, and keep applications moving toward approval.",
    icon: Users,
  },
  {
    step: "05",
    title: "Approval and Enrollment Confirmation",
    description:
      "Once approved, we help confirm participation status so the provider is positioned for payer billing readiness.",
    icon: CheckCircle2,
  },
  {
    step: "06",
    title: "Ongoing Credentialing Maintenance",
    description:
      "We support profile updates, re-credentialing cycles, and payer record maintenance to reduce future enrollment disruption.",
    icon: RotateCcw,
  },
];

const outsourcingBenefits: IconCard[] = [
  {
    title: "Faster Enrollment with Insurance Companies",
    description:
      "A structured process and dedicated follow-up help reduce avoidable delays in payer onboarding and insurance enrollment.",
    icon: Building2,
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Outsourcing provider credentialing services allows internal teams to focus on patient care and daily operations instead of paperwork.",
    icon: BriefcaseMedical,
  },
  {
    title: "Improved Revenue Opportunities",
    description:
      "Faster enrollment supports earlier billing readiness, more payer participation, and stronger reimbursement opportunities.",
    icon: HandCoins,
  },
  {
    title: "Accurate Documentation Management",
    description:
      "Professional documentation handling reduces application errors, missing records, and repeated payer requests for information.",
    icon: FileText,
  },
  {
    title: "Dedicated Credentialing Support",
    description:
      "A specialized credentialing workflow improves visibility, accountability, and consistency across payer enrollment tasks.",
    icon: Users,
  },
];

const insuranceNetworks: NetworkItem[] = [
  {
    title: "Blue Cross Blue Shield",
    badge: "BCBS",
    description: "Commercial and regional payer enrollment workflows for participating provider networks.",
  },
  {
    title: "UnitedHealthcare",
    badge: "UHC",
    description: "Enrollment coordination and follow-up support for commercial payer participation.",
  },
  {
    title: "Aetna",
    badge: "Aetna",
    description: "Application handling and payer communication for network participation requests.",
  },
  {
    title: "Cigna",
    badge: "Cigna",
    description: "Credentialing support aligned with insurer-specific panel enrollment workflows.",
  },
  {
    title: "Humana",
    badge: "Humana",
    description: "Payer enrollment and documentation workflows to support participation readiness.",
  },
  {
    title: "Medicare",
    badge: "CMS",
    description: "Federal enrollment coordination and documentation management for provider participation.",
  },
  {
    title: "Medicaid",
    badge: "State",
    description: "State-specific enrollment support and follow-up for Medicaid participation needs.",
  },
  {
    title: "Commercial Insurance Providers",
    badge: "Commercial",
    description: "Multi-payer enrollment support across regional, national, and specialty-focused insurance plans.",
  },
];

const strengths: IconCard[] = [
  {
    title: "Experienced Credentialing Specialists",
    description:
      "Our team understands payer enrollment services, application workflows, and the details required to keep credentialing organized.",
    icon: Users,
  },
  {
    title: "Accurate Documentation Handling",
    description:
      "We coordinate provider records carefully so applications, CAQH profiles, and supporting files are complete and consistent.",
    icon: FileText,
  },
  {
    title: "Faster Enrollment Process",
    description:
      "Structured follow-up, workflow tracking, and payer communication help providers move through enrollment with less avoidable delay.",
    icon: CheckCircle2,
  },
  {
    title: "Seamless Integration with Billing Services",
    description:
      "Credentialing support aligns with medical billing readiness so providers can move toward reimbursement without unnecessary disruption.",
    icon: HandCoins,
  },
];

const internalServices: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description:
      "Connect credentialing with billing workflows that support cleaner claims and consistent reimbursement operations.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "Accounts Receivable Recovery",
    description:
      "Pair payer readiness with AR follow-up services that help recover delayed and aging healthcare balances.",
    href: "/services/accounts-receivable-collection",
    icon: HandCoins,
  },
  {
    title: "Front Office Management",
    description:
      "Strengthen intake, verification, and patient-facing workflows that support better billing and enrollment readiness.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Practice Setup Services",
    description:
      "Build new practice infrastructure with credentialing, operational planning, and billing readiness support.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-focused billing and support services tailored to different provider and payer requirements.",
    href: "/specialties",
    icon: Stethoscope,
  },
] as const;

const faqs = [
  {
    question: "How long do provider credentialing services usually take?",
    answer:
      "Credentialing timelines vary by payer, provider type, and application completeness. Many enrollments take several weeks to a few months, depending on the insurer's review process and documentation requirements.",
  },
  {
    question: "Do you manage CAQH registration and ongoing updates?",
    answer:
      "Yes. Cure Hub Med Solutions supports CAQH profile setup, updates, document coordination, and re-attestation as part of physician credentialing services.",
  },
  {
    question: "Can you help with re-credentialing and payer maintenance?",
    answer:
      "Yes. We support re-credentialing deadlines, record updates, and ongoing payer maintenance so providers can reduce the risk of enrollment disruption.",
  },
  {
    question: "Do credentialing and billing services work together?",
    answer:
      "Yes. Credentialing and billing are closely connected. Providers need completed payer enrollment before claims can be processed correctly, so integrating these workflows supports faster billing readiness.",
  },
] as const;

export const metadata: Metadata = {
  title: "Provider Credentialing Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions offers professional provider credentialing services including insurance enrollment, CAQH management, and payer network contracting for healthcare providers.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Provider Credentialing Services | Cure Hub Med Solutions",
    description:
      "Physician credentialing services, CAQH management, and payer enrollment services for healthcare providers across the United States.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/provider-revenue-cycle-consultation.jpg`,
        width: 1200,
        height: 630,
        alt: "Credentialing specialist reviewing payer enrollment requirements with a healthcare provider",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Provider Credentialing Services | Cure Hub Med Solutions",
    description:
      "Reliable physician credentialing and insurance enrollment support for healthcare providers and medical practices.",
    images: [`${siteUrl}/images/provider-revenue-cycle-consultation.jpg`],
  },
};

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: string;
  description?: string;
}) {
  return <ServiceSectionHeading label={label} title={title} description={description} />;
}

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Provider Credentialing Services",
    serviceType: "Provider Credentialing Services",
    description: "Physician credentialing and payer enrollment services for healthcare providers.",
    url: pageUrl,
    provider: {
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
      url: siteUrl,
    },
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    serviceArea: "United States",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="overflow-hidden bg-background">
        <ServiceHero className="relative border-b border-primary/15 bg-gradient-to-br from-medical-very-light-bg via-background to-medical-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(111,189,148,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(21,54,95,0.12),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <Badge className="rounded-full px-3 py-1">Payer Enrollment Services</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Provider Credentialing Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Reliable Physician Credentialing and Insurance Enrollment for Healthcare Providers
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Healthcare providers must complete credentialing before joining insurance networks
                and receiving reimbursements from participating payers. Without completed
                enrollment, even strong clinical operations can face delays in billing readiness
                and payer participation.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions helps physicians and healthcare practices complete provider
                credentialing services efficiently by managing documentation, CAQH workflows, payer
                applications, and follow-up through approval and enrollment confirmation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us#consultation-form">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to a Credentialing Specialist</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["CAQH Management", "Payer Enrollment", "Network Participation"].map((item) => (
                  <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                    {item}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-teal/20 blur-3xl" />

              <Card className="overflow-hidden rounded-[2rem] border-primary/15 bg-white/90 p-3 shadow-[0_24px_80px_rgba(21,54,95,0.14)]">
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                  <Image
                    src="/images/provider-revenue-cycle-consultation.jpg"
                    alt="Credentialing specialist reviewing provider enrollment requirements and documentation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Medical Credentialing Company
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Structured support for physician credentialing services, payer applications,
                      and insurance enrollment workflows.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Verification
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Provider credentials and documentation review
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Enrollment
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Payer applications and network participation
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Maintenance
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Re-credentialing and ongoing payer updates
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ServiceHero>

        <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="Credentialing Basics"
                title="What is Provider Credentialing?"
                description="Provider credentialing is the process used to verify healthcare providers before they can participate in insurance networks and bill payers for covered services."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Insurance companies and healthcare organizations review provider licenses,
                certifications, qualifications, work history, and supporting documentation to
                confirm that a provider is eligible for network participation. This process is
                central to physician credentialing services and payer enrollment services across the
                United States.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Credentialing allows healthcare providers to bill insurance companies and receive
                reimbursements once enrollment is complete. Cure Hub Med Solutions simplifies the
                process by coordinating documents, managing payer applications, and handling
                follow-up so providers can move through enrollment with less administrative strain.
              </p>
            </MotionReveal>

            <div>
              <Tabs defaultValue={credentialingTabs[0].value}>
                <TabsList>
                  {credentialingTabs.map((tab) => {
                    const Icon = tab.icon;

                    return (
                      <TabsTrigger key={tab.value} value={tab.value}>
                        <span className="inline-flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {tab.label}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {credentialingTabs.map((tab) => {
                  const Icon = tab.icon;

                  return (
                    <TabsContent key={tab.value} value={tab.value}>
                      <div className="flex items-start gap-4">
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold text-heading">{tab.title}</h3>
                          <p className="mt-3 text-sm leading-7 text-muted-text sm:text-base">
                            {tab.description}
                          </p>
                          <div className="mt-5 grid gap-3">
                            {tab.points.map((point) => (
                              <div key={point} className="flex items-start gap-3">
                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                                <p className="m-0 text-sm font-medium text-heading">{point}</p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </section>

        <BenefitsSection
          label="Why It Matters"
          title="Importance of Insurance Credentialing for Healthcare Providers"
          description="Credentialing is essential for revenue access, payer participation, compliance, and the broader credibility of a healthcare practice."
          items={credentialingImportance}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Core Services"
          title="Our Provider Credentialing Services"
          description="Our credentialing workflow covers the main tasks providers need to complete enrollment, maintain payer participation, and stay billing-ready."
          items={credentialingServices}
          columns={3}
          tone="white"
        />

        <ProcessTimeline
          label="Workflow"
          title="Our Credentialing Process"
          description="We use a structured enrollment process that improves visibility, keeps documents organized, and pushes payer applications toward approval."
          items={credentialingProcess}
          tone="soft"
        />

        <BenefitsSection
          label="Outsourcing Benefits"
          title="Benefits of Outsourcing Provider Credentialing"
          description="Outsourcing credentialing gives practices focused enrollment support without overloading internal administrative teams."
          items={outsourcingBenefits}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <SectionHeading
              label="Payer Networks"
              title="Insurance Networks We Work With"
              description="We support enrollment coordination across a range of major payer networks and commercial insurance providers."
            />

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {insuranceNetworks.map((item) => (
                <Card key={item.title} className="h-full border-primary/15 bg-white">
                  <CardHeader>
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <ShieldCheck className="h-5 w-5" />
                      </span>
                      <Badge variant="secondary">{item.badge}</Badge>
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="leading-7">{item.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <HealthcareProvidersSupported />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions"
          description="Healthcare providers choose us for credentialing support that is organized, accountable, and aligned with reimbursement readiness."
          items={strengths}
          columns={4}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Core Services"
          description="Connect credentialing with broader billing, operational, and specialty support from Cure Hub Med Solutions."
          items={internalServices}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About Provider Credentialing"
              description="These answers help healthcare providers understand timelines, CAQH management, and the operational value of professional credentialing support."
            />

            <Accordion type="single" collapsible className="mt-8 space-y-3">
              {faqs.map((item, index) => (
                <AccordionItem key={item.question} value={`item-${index}`}>
                  <AccordionTrigger>{item.question}</AccordionTrigger>
                  <AccordionContent>{item.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CTASection
          label="Final CTA"
          title="Partner with Cure Hub Med Solutions"
          description="Healthcare providers can complete credentialing faster and expand payer network participation with professional credentialing support from Cure Hub Med Solutions. We help practices move through enrollment with stronger documentation control and reliable follow-up."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Credentialing Team" }}
        />
      </div>
    </>
  );
}
