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
  Clock3,
  FileText,
  Hospital,
  Phone,
  ReceiptText,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
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
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/front-office-management`;

const keywords = [
  "front office support services",
  "medical front desk outsourcing",
  "healthcare front office management",
  "patient scheduling services",
  "medical administrative support services",
];

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const frontOfficeServices: IconCard[] = [
  {
    title: "Patient Appointment Scheduling",
    description:
      "Reliable patient scheduling services that keep calendars organized, reduce missed opportunities, and support smoother daily operations.",
    icon: Clock3,
  },
  {
    title: "Patient Registration and Intake",
    description:
      "Structured registration and intake workflows that capture accurate demographic, insurance, and visit information from the start.",
    icon: ClipboardList,
  },
  {
    title: "Insurance Eligibility Verification",
    description:
      "Coverage checks before visits help practices reduce billing delays, front-end denials, and reimbursement disruption.",
    icon: ShieldCheck,
  },
  {
    title: "Patient Communication Support",
    description:
      "Professional communication support for appointment reminders, intake follow-up, and patient-facing administrative questions.",
    icon: Phone,
  },
  {
    title: "Medical Records Coordination",
    description:
      "Organized records coordination supports continuity of care, documentation readiness, and smoother administrative workflows.",
    icon: FileText,
  },
  {
    title: "Billing and Administrative Coordination",
    description:
      "Front-desk and billing coordination improves handoffs between scheduling, intake, verification, and reimbursement workflows.",
    icon: ReceiptText,
  },
  {
    title: "Referral Management",
    description:
      "Referral tracking and coordination help practices reduce delays and keep incoming and outgoing patient workflows organized.",
    icon: Send,
  },
];

const benefits: IconCard[] = [
  {
    title: "Improved Patient Experience",
    description:
      "Patients benefit from faster responses, clearer scheduling workflows, and more organized communication across the visit cycle.",
    icon: Users,
  },
  {
    title: "Reduced Administrative Workload",
    description:
      "Outsourcing medical front desk outsourcing tasks allows in-house staff to focus on higher-value operational priorities.",
    icon: BriefcaseMedical,
  },
  {
    title: "Increased Operational Efficiency",
    description:
      "Structured front office processes reduce bottlenecks in scheduling, registration, and patient-facing administrative work.",
    icon: BarChart3,
  },
  {
    title: "Better Insurance Verification",
    description:
      "Accurate insurance checks before visits reduce downstream claim issues and support stronger reimbursement performance.",
    icon: ShieldCheck,
  },
  {
    title: "Cost-Effective Administrative Support",
    description:
      "Healthcare providers gain flexible administrative support without the overhead of expanding internal staffing too quickly.",
    icon: Sparkles,
  },
];

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

const operationalTabs: TabItem[] = [
  {
    value: "scheduling",
    label: "Scheduling",
    title: "Patient scheduling workflows that keep the day organized",
    description:
      "Front office support services help practices manage calendars, appointment confirmations, rescheduling requests, and no-show prevention with more consistency.",
    points: [
      "Appointment booking and rescheduling support",
      "Reminder workflows that improve attendance",
      "Better daily visibility into provider schedules",
    ],
    icon: Clock3,
  },
  {
    value: "verification",
    label: "Verification",
    title: "Insurance and intake accuracy before the visit begins",
    description:
      "Healthcare front office management improves eligibility checks, demographic validation, and intake quality so downstream billing and patient communication stay cleaner.",
    points: [
      "Eligibility verification before appointments",
      "Accurate patient registration details",
      "Fewer front-end errors that impact reimbursement",
    ],
    icon: ShieldCheck,
  },
  {
    value: "communication",
    label: "Communication",
    title: "Responsive patient communication across the visit cycle",
    description:
      "Medical administrative support services help practices maintain timely communication for reminders, intake coordination, referrals, and administrative follow-up.",
    points: [
      "Faster responses to patient administrative questions",
      "Clearer follow-up around forms and visit preparation",
      "More consistent front-desk communication processes",
    ],
    icon: Phone,
  },
];

const rcmChecklist = [
  "Accurate patient data collection",
  "Insurance verification before visits",
  "Billing coordination",
  "Reduced claim errors",
  "Faster reimbursement processing",
];

const strengths: IconCard[] = [
  {
    title: "Experienced Administrative Professionals",
    description:
      "Our team understands patient-facing workflows, scheduling discipline, eligibility checks, and administrative coordination in healthcare environments.",
    icon: Users,
  },
  {
    title: "Seamless Integration with Billing Systems",
    description:
      "We align front-desk operations with medical billing processes so the information collected up front supports cleaner claims and stronger reimbursement outcomes.",
    icon: ReceiptText,
  },
  {
    title: "HIPAA-Compliant Processes",
    description:
      "Administrative workflows are handled with privacy, security, and operational controls that support healthcare compliance expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Customized Operational Support",
    description:
      "Support models are adapted to your scheduling volume, specialty mix, patient communication needs, and internal workflow structure.",
    icon: ClipboardCheck,
  },
];

const internalServices: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description:
      "Connect front office workflows with end-to-end billing support to improve claim quality and reimbursement performance.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "AR Recovery Services",
    description:
      "Pair stronger intake and verification processes with AR follow-up support that helps recover delayed and unpaid claims.",
    href: "/services/accounts-receivable-collection",
    icon: RotateCcw,
  },
  {
    title: "Provider Credentialing",
    description:
      "Support payer readiness and enrollment accuracy with credentialing services built for healthcare practices.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Practice Setup Services",
    description:
      "Launch or expand operations with administrative, billing, and workflow support for new healthcare practices.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-specific billing and support services designed for different provider workflows and payer requirements.",
    href: "/specialties",
    icon: Hospital,
  },
] as const;

const faqs = [
  {
    question: "What do front office management services include for healthcare providers?",
    answer:
      "Front office management services typically include patient scheduling, registration and intake support, insurance eligibility verification, communication workflows, referral coordination, and administrative handoffs that keep the practice organized.",
  },
  {
    question: "How does medical front desk outsourcing help billing performance?",
    answer:
      "Medical front desk outsourcing improves billing performance by collecting accurate patient data, verifying insurance before visits, coordinating front-end workflows, and reducing the intake mistakes that often lead to claim delays or denials.",
  },
  {
    question: "Can Cure Hub Med Solutions support specialty and multi-provider practices?",
    answer:
      "Yes. We support independent providers, specialty clinics, family medicine groups, urgent care centers, and multi-specialty practices with front office workflows adapted to each operational environment.",
  },
  {
    question: "Are your front office workflows HIPAA-compliant?",
    answer:
      "Yes. Cure Hub Med Solutions uses HIPAA-conscious processes and secure administrative workflows to support patient communication, data handling, and healthcare operational coordination.",
  },
] as const;

export const metadata: Metadata = {
  title: "Front Office Management Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides professional front office management services including patient scheduling, insurance verification, and administrative support to help healthcare practices improve operational efficiency.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Front Office Management Services | Cure Hub Med Solutions",
    description:
      "Professional healthcare front office management, patient scheduling services, and administrative support for medical practices.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/healthcare-provider-reception-team.webp`,
        width: 1200,
        height: 630,
        alt: "Healthcare front office team managing patient scheduling and reception workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Front Office Management Services | Cure Hub Med Solutions",
    description:
      "Medical front desk outsourcing and administrative support services for healthcare practices across the United States.",
    images: [`${siteUrl}/images/healthcare-provider-reception-team.webp`],
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
    name: "Front Office Management Services",
    serviceType: "Front Office Management",
    description: "Healthcare front office management and administrative support services.",
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
              <Badge className="rounded-full px-3 py-1">Healthcare Front Office Management</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Front Office Management Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Professional Front Desk and Administrative Support for Healthcare Practices
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Efficient front office operations are essential for creating a seamless patient
                experience and maintaining organized healthcare workflows. When scheduling,
                registration, communication, and verification processes break down, practices feel
                the impact in patient satisfaction, staff workload, and reimbursement performance.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions provides front office support services that help healthcare
                organizations streamline patient scheduling services, insurance verification, intake
                coordination, and communication management with professional administrative support.
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
                {["Patient Scheduling", "Insurance Verification", "Administrative Coordination"].map(
                  (item) => (
                    <Badge key={item} variant="secondary" className="rounded-full px-3 py-1">
                      {item}
                    </Badge>
                  )
                )}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-8 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-teal/20 blur-3xl" />

              <Card className="overflow-hidden rounded-[2rem] border-primary/15 bg-white/90 p-3 shadow-[0_24px_80px_rgba(21,54,95,0.14)]">
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                  <Image
                    src="/images/healthcare-provider-reception-team.webp"
                    alt="Healthcare front desk team coordinating patient scheduling and reception workflows"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Medical Front Desk Outsourcing
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Organized support for front-desk communication, scheduling workflows, and
                      insurance verification in modern healthcare practices.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Scheduling
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Calendar coordination and reminder support
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Verification
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Eligibility checks before patient visits
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Coordination
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Administrative handoffs aligned with billing
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
                label="Operations"
                title="Efficient Front Office Operations for Modern Healthcare Practices"
                description="The front office is often the first point of contact for patients and one of the most important operational functions in the healthcare experience."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Healthcare providers regularly face challenges with patient scheduling, insurance
                verification, medical records coordination, referral workflows, and day-to-day
                communication. When those processes are inconsistent, the result is more
                administrative friction, longer wait times, and preventable disruptions across the
                care journey.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions delivers healthcare front office management support designed
                to streamline these workflows, improve data accuracy, and help practices provide a
                more organized patient experience without overloading internal staff.
              </p>
            </div>

            <div>
              <Tabs defaultValue={operationalTabs[0].value}>
                <TabsList>
                  {operationalTabs.map((tab) => {
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

                {operationalTabs.map((tab) => {
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
          title="Our Front Office Management Services"
          description="Our medical administrative support services are built to strengthen the workflows that shape patient access, communication, and front-end billing readiness."
          items={frontOfficeServices}
          columns={3}
          tone="soft"
        />

        <BenefitsSection
          label="Benefits"
          title="Benefits of Outsourcing Front Office Management"
          description="Professional front office support helps practices improve consistency, patient communication, and overall operational efficiency."
          items={benefits}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="Revenue Cycle Alignment"
                title="Front Office Support Integrated with Revenue Cycle Management"
                description="Front office operations directly influence medical billing accuracy, claim quality, and the speed of reimbursement across the revenue cycle."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Strong front-desk processes create cleaner billing outcomes by improving the quality
                of patient demographics, insurance details, appointment documentation, and
                administrative coordination before claims are ever submitted. That reduces avoidable
                rework and helps medical billing teams move faster.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions aligns healthcare front office management with revenue cycle
                performance so practices can reduce claim issues, improve reimbursement accuracy,
                and strengthen the connection between operations and financial results.
              </p>
            </MotionReveal>

            <Card className="border-primary/15 bg-white shadow-lg shadow-primary/10">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  RCM Checklist
                </Badge>
                <CardTitle>How front office support protects billing performance</CardTitle>
                <CardDescription>
                  These are the operational checkpoints that help reduce claim friction and improve
                  reimbursement speed.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {rcmChecklist.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="m-0 text-sm font-medium text-heading">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <HealthcareProvidersSupported />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions for Front Office Management"
          description="We combine healthcare administrative expertise with process discipline that supports patient experience, operational consistency, and billing readiness."
          items={strengths}
          columns={4}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Cure Hub Med Solutions Services"
          description="Internal service connections help healthcare practices build a more complete administrative and revenue cycle support model."
          items={internalServices}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About Front Office Management"
              description="These answers help providers evaluate medical front desk outsourcing and healthcare administrative support services."
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
          description="Healthcare practices can improve patient communication, front-desk consistency, and administrative efficiency by outsourcing core front office operations. Cure Hub Med Solutions helps providers build cleaner workflows that support both patient experience and financial performance."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Support Team" }}
        />
      </div>
    </>
  );
}
