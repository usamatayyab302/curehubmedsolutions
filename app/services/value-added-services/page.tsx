import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  Files,
  HandCoins,
  Laptop,
  Mail,
  Phone,
  ReceiptText,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

import HealthcareProvidersSupported from "@/components/services/HealthcareProvidersSupported";
import BenefitsSection from "@/components/services/benefits-section";
import CTASection from "@/components/services/cta-section";
import MotionReveal from "@/components/services/motion-reveal";
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
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/value-added-services`;

const keywords = [
  "value added healthcare services",
  "medical billing support services",
  "healthcare administrative support",
  "patient communication services",
  "healthcare documentation services",
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

const valueAddedServices: IconCard[] = [
  {
    title: "Insurance Eligibility Verification",
    description:
      "Pre-visit eligibility checks help practices confirm coverage, reduce front-end claim issues, and improve reimbursement readiness.",
    icon: ShieldCheck,
  },
  {
    title: "Authorization Services",
    description:
      "We support authorization workflows to help providers secure approvals, reduce delays, and keep treatment and billing timelines moving.",
    icon: ClipboardCheck,
  },
  {
    title: "Patient Statement Mailing and Processing",
    description:
      "Structured statement workflows improve patient billing communication and keep mailed balance notifications organized and trackable.",
    icon: Mail,
  },
  {
    title: "Patient Collection Follow-Up",
    description:
      "Professional follow-up support helps practices improve patient balance recovery while maintaining clear and timely communication.",
    icon: HandCoins,
  },
  {
    title: "Medical Transcription Services",
    description:
      "Accurate transcription support helps providers maintain complete documentation and reduces delays in records readiness.",
    icon: FileText,
  },
  {
    title: "Medical Practice Digital Support",
    description:
      "Digital healthcare administrative support strengthens online workflows, administrative coordination, and practice communication systems.",
    icon: Laptop,
  },
  {
    title: "Document Handling and Records Management",
    description:
      "Organized document workflows support chart accuracy, records accessibility, and smoother handoffs across practice operations.",
    icon: Files,
  },
  {
    title: "Healthcare Data Reporting",
    description:
      "Reporting support gives practices visibility into administrative trends, workflow performance, and operational improvement opportunities.",
    icon: BarChart3,
  },
  {
    title: "Quality and Compliance Assistance",
    description:
      "Process support helps healthcare organizations maintain cleaner documentation, operational consistency, and compliance awareness.",
    icon: BriefcaseMedical,
  },
  {
    title: "Electronic Funds Transfer (EFT) and ERA Setup",
    description:
      "We help practices establish EFT and ERA workflows that support faster payment posting and more efficient remittance handling.",
    icon: ReceiptText,
  },
];

const benefits: IconCard[] = [
  {
    title: "Improved Administrative Efficiency",
    description:
      "Additional operational support reduces manual bottlenecks and helps teams complete administrative tasks with more consistency.",
    icon: BriefcaseMedical,
  },
  {
    title: "Better Patient Communication",
    description:
      "Patient communication services keep reminders, statements, and administrative follow-up clearer and more organized.",
    icon: Phone,
  },
  {
    title: "Enhanced Revenue Collection",
    description:
      "Eligibility, statement, and collection workflows work together to support healthier reimbursements and patient balance recovery.",
    icon: HandCoins,
  },
  {
    title: "Organized Documentation Management",
    description:
      "Healthcare documentation services improve records handling, reduce missing information, and support smoother operational coordination.",
    icon: Files,
  },
  {
    title: "Integrated Healthcare Support",
    description:
      "Value added healthcare services complement billing, front office, and revenue cycle workflows to create stronger operational alignment.",
    icon: Sparkles,
  },
];

const supportTabs: TabItem[] = [
  {
    value: "verification",
    label: "Verification",
    title: "Eligibility and authorization workflows that protect reimbursement",
    description:
      "Administrative tasks such as eligibility verification and authorization support are essential for reducing claim delays, improving visit readiness, and keeping billing workflows cleaner from the start.",
    points: [
      "Coverage verification before services are delivered",
      "Authorization tracking that reduces avoidable delays",
      "Cleaner payer-facing information before claims are submitted",
    ],
    icon: ShieldCheck,
  },
  {
    value: "communication",
    label: "Communication",
    title: "Patient communication workflows that stay organized and timely",
    description:
      "Healthcare practices rely on consistent patient communication for statements, follow-up, administrative reminders, and balance coordination. Structured support improves responsiveness and patient experience.",
    points: [
      "Statement mailing and billing communication support",
      "More reliable administrative follow-up touchpoints",
      "Clearer handoffs between patient support and billing teams",
    ],
    icon: Phone,
  },
  {
    value: "documentation",
    label: "Documentation",
    title: "Documentation and reporting that support operational visibility",
    description:
      "Healthcare documentation services and reporting workflows help practices maintain cleaner records, stronger internal coordination, and better visibility into administrative performance.",
    points: [
      "Document handling with better records organization",
      "Reporting insights for workflow improvement",
      "Transcription and documentation readiness support",
    ],
    icon: Files,
  },
];

const strengths: IconCard[] = [
  {
    title: "Comprehensive Healthcare Support",
    description:
      "We provide operational services that complement medical billing, front office workflows, and broader revenue cycle management.",
    icon: Sparkles,
  },
  {
    title: "Experienced Healthcare Professionals",
    description:
      "Our team understands administrative coordination, healthcare documentation, payer workflows, and patient-facing support operations.",
    icon: Users,
  },
  {
    title: "Compliance and Security",
    description:
      "Processes are handled with privacy awareness, disciplined workflow controls, and healthcare compliance expectations in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Solutions",
    description:
      "Support is tailored to practice size, provider specialty, patient volume, documentation needs, and operational priorities.",
    icon: ClipboardList,
  },
];

const internalServices: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description:
      "Connect administrative support with end-to-end medical billing services built to improve claim quality and reimbursement flow.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "Accounts Receivable Recovery",
    description:
      "Strengthen collections performance with AR follow-up services focused on aging claims and delayed reimbursements.",
    href: "/services/accounts-receivable-collection",
    icon: HandCoins,
  },
  {
    title: "Front Office Management",
    description:
      "Align patient scheduling, registration, communication, and front-desk workflows with your broader support model.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Provider Credentialing",
    description:
      "Support payer readiness and enrollment accuracy with credentialing services for healthcare providers.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Practice Setup Services",
    description:
      "Build strong administrative and revenue cycle foundations for new or expanding healthcare practices.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-specific billing and operational support services for different provider workflows.",
    href: "/specialties",
    icon: Stethoscope,
  },
] as const;

const faqs = [
  {
    question: "What are value added healthcare services?",
    answer:
      "Value added healthcare services are operational and administrative support services that complement core medical billing and revenue cycle work. They often include eligibility verification, patient communication support, documentation management, reporting, and administrative coordination.",
  },
  {
    question: "How do value added services support medical billing performance?",
    answer:
      "These services improve front-end accuracy, patient communication, documentation quality, and payer readiness. That reduces workflow friction and supports cleaner claims, faster payment cycles, and stronger operational control.",
  },
  {
    question: "Can Cure Hub Med Solutions customize support by specialty or practice size?",
    answer:
      "Yes. We tailor healthcare administrative support around each practice's provider mix, patient volume, documentation needs, communication workflows, and billing priorities.",
  },
  {
    question: "Do your services include documentation and reporting assistance?",
    answer:
      "Yes. We provide healthcare documentation services, records coordination, transcription support, and operational reporting assistance to help practices maintain accurate information and stronger workflow visibility.",
  },
] as const;

export const metadata: Metadata = {
  title: "Value Added Healthcare Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides value added healthcare services including eligibility verification, patient communication, documentation management, and administrative support to improve practice efficiency.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Value Added Healthcare Services | Cure Hub Med Solutions",
    description:
      "Professional healthcare administrative support, patient communication services, and documentation management for medical practices.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/healthcare-operations-strategy-meeting.jpg`,
        width: 1200,
        height: 630,
        alt: "Healthcare operations team reviewing administrative support workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Value Added Healthcare Services | Cure Hub Med Solutions",
    description:
      "Value added healthcare services that support administrative efficiency, documentation, and patient communication.",
    images: [`${siteUrl}/images/healthcare-operations-strategy-meeting.jpg`],
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
    name: "Value Added Services",
    serviceType: "Value Added Healthcare Services",
    description: "Healthcare administrative and operational support services.",
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
              <Badge className="rounded-full px-3 py-1">Healthcare Administrative Support</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Value Added Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Enhancing Healthcare Operations with Additional Support Services
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions provides additional healthcare administrative and
                operational support services that complement medical billing and revenue cycle
                management. These services help practices keep workflows organized, reduce
                operational friction, and improve day-to-day support across clinical and
                administrative teams.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                From eligibility verification and patient communication services to reporting and
                healthcare documentation services, we help providers streamline workflows, improve
                patient engagement, and maintain accurate operational records.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us#consultation-form">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to Our Support Team</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {[
                  "Eligibility Verification",
                  "Patient Communication",
                  "Documentation Support",
                ].map((item) => (
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
                    src="/images/healthcare-operations-strategy-meeting.jpg"
                    alt="Healthcare operations team reviewing administrative support and workflow strategy"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Value Added Healthcare Services
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Integrated support for documentation, communication, reporting, and
                      administrative coordination in healthcare practices.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Communication
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Patient-facing administrative follow-up
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Documentation
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Records, transcription, and file coordination
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Reporting
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Operational visibility and workflow support
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ServiceHero>

        <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <div>
              <SectionHeading
                label="Operational Support"
                title="Supporting Healthcare Practices Beyond Medical Billing"
                description="Successful healthcare practices rely on more than billing and coding. Strong administrative support keeps the operation stable, responsive, and easier to scale."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Eligibility verification, patient communication, documentation management,
                authorization coordination, and operational reporting are all essential parts of
                maintaining a well-run practice. When these tasks are inconsistent, patient
                experience declines and administrative pressure rises across the organization.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions helps healthcare providers simplify administrative tasks with
                healthcare administrative support designed to improve workflow efficiency, reduce
                avoidable errors, and strengthen the connection between operations and financial
                performance.
              </p>
            </div>

            <div>
              <Tabs defaultValue={supportTabs[0].value}>
                <TabsList>
                  {supportTabs.map((tab) => {
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

                {supportTabs.map((tab) => {
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

        <ServiceFeaturesGrid
          label="Core Services"
          title="Our Value Added Services"
          description="These service lines are designed to support practice efficiency, strengthen workflow consistency, and complement core medical billing support services."
          items={valueAddedServices}
          columns={3}
          tone="soft"
        />

        <BenefitsSection
          label="Benefits"
          title="Benefits of Our Value Added Services"
          description="Integrated support services help healthcare organizations improve administrative consistency, patient engagement, and practice-wide coordination."
          items={benefits}
          columns={5}
          tone="white"
        />

        <HealthcareProvidersSupported tone="soft" />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions"
          description="Healthcare providers choose us for integrated support services that connect operations, documentation, patient communication, and revenue cycle workflows."
          items={strengths}
          columns={4}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <MotionReveal className="mx-auto max-w-4xl rounded-[2rem] border border-primary/15 bg-white p-8 text-center shadow-lg shadow-primary/10 lg:p-10">
            <Badge variant="secondary" className="rounded-full px-3 py-1">
              Practice Operations Support
            </Badge>
            <h2 className="mt-5 font-heading text-3xl font-bold tracking-tight text-heading sm:text-4xl">
              Enhance Your Practice Operations with Cure Hub Med Solutions
            </h2>
            <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
              Administrative support, documentation management, and patient communication are
              essential for efficient healthcare operations. When these workflows stay organized,
              practices improve responsiveness, reduce avoidable delays, and maintain stronger
              coordination across clinical and financial processes.
            </p>
            <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
              Cure Hub Med Solutions provides integrated support services that improve practice
              workflows, support operational performance, and create a more stable foundation for
              medical billing, patient engagement, and daily administrative execution.
            </p>
          </MotionReveal>
        </section>

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Core Services"
          description="Connect value added services with other Cure Hub Med Solutions offerings to build a more complete healthcare support model."
          items={internalServices}
          columns={3}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About Value Added Healthcare Services"
              description="These answers help providers understand how additional administrative and operational support services fit into a modern healthcare practice."
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
          title="Enhance Your Practice Operations with Cure Hub Med Solutions"
          description="Improve efficiency, patient communication, and documentation management with professional value added services from Cure Hub Med Solutions. Our team helps healthcare providers build cleaner workflows and stronger operational support across the practice."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Team" }}
        />
      </div>
    </>
  );
}
