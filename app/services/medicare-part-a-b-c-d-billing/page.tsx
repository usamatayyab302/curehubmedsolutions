import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  Bone,
  BrainCircuit,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HandCoins,
  Home,
  Hospital,
  Pill,
  RotateCcw,
  Send,
  ShieldCheck,
  Stethoscope,
  Users,
  type LucideIcon,
} from "lucide-react";

import HealthcareProvidersSupported, {
  type HealthcareProviderItem,
} from "@/components/services/HealthcareProvidersSupported";
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
const pageUrl = `${siteUrl}/services/medicare-part-a-b-c-d-billing`;

const keywords = [
  "Medicare billing services",
  "Medicare Part A billing",
  "Medicare Part B billing services",
  "Medicare Advantage billing services",
  "Medicare Part D billing",
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

const medicareParts: TabItem[] = [
  {
    value: "part-a",
    label: "Part A",
    title: "Medicare Part A covers hospital-based and post-acute services",
    description:
      "Medicare Part A focuses on hospital insurance and typically involves inpatient services, skilled nursing facility care, hospice support, and qualifying post-hospital home healthcare. Accurate documentation and facility billing workflows are essential for proper reimbursement.",
    points: [
      "Hospital inpatient services",
      "Skilled nursing facility care",
      "Hospice services",
      "Post-hospital home healthcare",
    ],
    icon: Hospital,
  },
  {
    value: "part-b",
    label: "Part B",
    title: "Medicare Part B supports outpatient and professional medical services",
    description:
      "Medicare Part B billing applies to outpatient care, physician services, diagnostic testing, preventive services, and durable medical equipment. Claim accuracy depends on coding precision, documentation quality, and correct charge capture.",
    points: [
      "Physician consultations",
      "Outpatient procedures",
      "Diagnostic testing and imaging",
      "Preventive services and durable medical equipment",
    ],
    icon: Stethoscope,
  },
  {
    value: "part-c",
    label: "Part C",
    title: "Medicare Part C requires payer-specific workflows for Advantage plans",
    description:
      "Medicare Part C, also known as Medicare Advantage, is administered through private plans approved by Medicare. These claims often require plan-specific billing rules, network awareness, and tighter payer communication.",
    points: [
      "Combined Part A and Part B coverage",
      "Additional benefits such as vision, dental, and hearing",
      "Network-based provider participation requirements",
      "Plan-specific claim submission guidelines",
    ],
    icon: BriefcaseMedical,
  },
  {
    value: "part-d",
    label: "Part D",
    title: "Medicare Part D involves prescription coverage and payer coordination",
    description:
      "Medicare Part D covers prescription drugs through private insurance plans. Successful billing and coordination depend on clean information exchange among providers, pharmacies, and payers plus attention to plan rules and medication-related documentation.",
    points: [
      "Prescription medication coverage",
      "Pharmacy services coordination",
      "Medication therapy management support",
      "Alignment between providers, pharmacies, and insurance plans",
    ],
    icon: Pill,
  },
];

const billingChallenges: IconCard[] = [
  {
    title: "Complex Coding Requirements",
    description:
      "Medicare claims demand precise coding, documentation alignment, and attention to coverage policies across multiple service types.",
    icon: ClipboardCheck,
  },
  {
    title: "Frequent Claim Denials",
    description:
      "Medicare denials can arise from missing documentation, billing edits, plan rules, or preventable submission issues.",
    icon: RotateCcw,
  },
  {
    title: "Compliance with Medicare Regulations",
    description:
      "Providers must stay aligned with changing Medicare billing rules, payer updates, and documentation expectations.",
    icon: ShieldCheck,
  },
  {
    title: "Eligibility Verification Issues",
    description:
      "Coverage details, plan enrollment status, and coordination questions can delay reimbursement when not verified upfront.",
    icon: Users,
  },
  {
    title: "Coordination Between Multiple Medicare Plans",
    description:
      "Managing Part A, Part B, Medicare Advantage, and prescription coverage requires structured payer coordination.",
    icon: Building2,
  },
];

const medicareServices: IconCard[] = [
  {
    title: "Medicare Eligibility Verification",
    description:
      "We verify Medicare coverage, plan details, and billing readiness before services are billed.",
    icon: ShieldCheck,
  },
  {
    title: "Accurate Medical Coding and Charge Entry",
    description:
      "Our team supports correct coding and charge capture to reduce preventable edits and denials.",
    icon: ClipboardCheck,
  },
  {
    title: "Claims Submission for Parts A, B, C, and D",
    description:
      "We manage claim workflows across hospital, professional, Advantage, and medication-related billing environments.",
    icon: Send,
  },
  {
    title: "Denial Management and Appeals",
    description:
      "Denied claims are reviewed, corrected, appealed when appropriate, and followed through to recovery.",
    icon: RotateCcw,
  },
  {
    title: "Payment Posting and Reconciliation",
    description:
      "Payment data is posted accurately and reconciled to support cleaner financial reporting and follow-up.",
    icon: HandCoins,
  },
  {
    title: "Accounts Receivable Follow-Ups",
    description:
      "We track outstanding Medicare balances and follow up on unpaid, delayed, or underpaid claims.",
    icon: Activity,
  },
  {
    title: "Compliance Monitoring",
    description:
      "Ongoing oversight helps reduce billing risk and keeps Medicare workflows aligned with current requirements.",
    icon: FileText,
  },
];

const outsourcingBenefits: IconCard[] = [
  {
    title: "Increased Claim Accuracy",
    description:
      "Structured Medicare workflows reduce billing mistakes and improve the quality of submitted claims.",
    icon: ClipboardCheck,
  },
  {
    title: "Faster Reimbursements",
    description:
      "Cleaner submissions and organized follow-up help shorten payment delays across Medicare payers and plans.",
    icon: HandCoins,
  },
  {
    title: "Reduced Administrative Workload",
    description:
      "Outsourcing Medicare billing frees internal teams from time-intensive payer coordination and claim correction work.",
    icon: Users,
  },
  {
    title: "Compliance with Medicare Regulations",
    description:
      "Processes built around Medicare billing rules help reduce preventable denials and operational exposure.",
    icon: ShieldCheck,
  },
  {
    title: "Improved Revenue Cycle Efficiency",
    description:
      "Better claim accuracy, denial recovery, and aging follow-up strengthen overall reimbursement performance.",
    icon: BriefcaseMedical,
  },
];

const medicareProviders: HealthcareProviderItem[] = [
  { title: "Hospitals", icon: Hospital },
  { title: "Physicians and Specialists", icon: Stethoscope },
  { title: "Multi-Specialty Clinics", icon: Building2 },
  { title: "Chiropractic Practices", icon: Bone },
  { title: "Mental Health Providers", icon: BrainCircuit },
  { title: "Urgent Care Centers", icon: Activity },
  { title: "Home Healthcare Agencies", icon: Home },
];

const whyChooseUs: IconCard[] = [
  {
    title: "Experienced Medicare Billing Experts",
    description:
      "Our team understands Medicare reimbursement workflows, billing edits, and payer-specific requirements across care settings.",
    icon: Stethoscope,
  },
  {
    title: "Comprehensive Revenue Cycle Support",
    description:
      "We connect verification, billing, denial management, AR follow-up, and reporting into one coordinated workflow.",
    icon: BriefcaseMedical,
  },
  {
    title: "Reduced Claim Denials",
    description:
      "Process discipline and documentation awareness help lower avoidable denials and improve first-pass performance.",
    icon: RotateCcw,
  },
  {
    title: "Dedicated Client Support",
    description:
      "Healthcare providers work with a responsive support team focused on communication, visibility, and measurable billing progress.",
    icon: Users,
  },
];

const internalServices: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description: "Explore full-service billing support across commercial and government payers.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "AR Recovery Services",
    description: "Recover aging claims and strengthen follow-up on outstanding reimbursement balances.",
    href: "/services/ar-recovery",
    icon: Activity,
  },
  {
    title: "Denial Management",
    description:
      "Reduce and recover denied claims with structured billing analysis and resubmission support.",
    href: "/services/denial-management",
    icon: RotateCcw,
  },
  {
    title: "Provider Credentialing",
    description:
      "Support payer enrollment and network participation with professional credentialing services.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Front Office Management",
    description:
      "Strengthen registration, verification, and intake workflows that affect Medicare claim accuracy.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Practice Setup Services",
    description: "Build billing-ready operational workflows for new or expanding healthcare practices.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description: "See specialty-focused billing support designed for diverse healthcare provider groups.",
    href: "/specialties",
    icon: Hospital,
  },
];

const faqs = [
  {
    question: "What do Medicare billing services include?",
    answer:
      "Medicare billing services typically include eligibility verification, coding support, claims submission, denial management, payment posting, AR follow-up, and compliance-focused billing workflows across Parts A, B, C, and D.",
  },
  {
    question: "How is Medicare Advantage billing different from traditional Medicare billing?",
    answer:
      "Medicare Advantage billing follows payer-specific claim rules because Part C plans are administered by private insurers. Those plans often require different submission requirements, network awareness, and follow-up workflows than traditional Medicare.",
  },
  {
    question: "Can Cure Hub Med Solutions help reduce Medicare denials?",
    answer:
      "Yes. We help reduce Medicare denials through eligibility checks, coding review, documentation awareness, clean claim workflows, denial analysis, and structured payer follow-up.",
  },
  {
    question: "Do you support Medicare billing for multiple provider types?",
    answer:
      "Yes. We support hospitals, physician groups, specialty clinics, urgent care centers, home healthcare organizations, chiropractic practices, and other healthcare providers working with Medicare patients.",
  },
] as const;

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

export const metadata: Metadata = {
  title: "Medicare Part A B C D Billing Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides professional Medicare Part A, B, C, and D billing services to help healthcare providers improve claim accuracy and maximize reimbursements.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Medicare Part A B C D Billing Services | Cure Hub Med Solutions",
    description:
      "Professional Medicare billing support for Part A, Part B, Medicare Advantage, and Part D claim workflows.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/provider-revenue-cycle-consultation.jpg`,
        width: 1200,
        height: 630,
        alt: "Revenue cycle team reviewing Medicare billing workflows for healthcare providers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medicare Part A B C D Billing Services | Cure Hub Med Solutions",
    description:
      "Medicare billing support that helps healthcare providers improve claim accuracy and reimbursement performance.",
    images: [`${siteUrl}/images/provider-revenue-cycle-consultation.jpg`],
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Medicare Part A, B, C & D Billing Services",
    serviceType: "Medicare Billing Services",
    description: "Medicare Part A, B, C, and D billing services for healthcare providers.",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(111,189,148,0.18),transparent_34%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_18%,rgba(21,54,95,0.14),transparent_34%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <Badge className="rounded-full px-3 py-1">Medicare Billing Services</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Medicare Part A, B, C &amp; D Billing Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Simplifying Medicare Billing for Healthcare Providers
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Medicare billing is complex because each component of coverage carries different
                billing guidelines, coding expectations, and payer requirements. Part A, Part B,
                Medicare Advantage, and Part D workflows can create reimbursement delays when
                documentation, verification, or submission standards are not handled consistently.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions helps healthcare providers navigate Medicare billing
                regulations, submit accurate claims, reduce denials, and maximize reimbursements
                with structured billing support across Medicare Part A, B, C, and D environments.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us#consultation-form">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to a Medicare Billing Specialist</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Part A Facility Billing", "Part B Professional Claims", "Part C & D Plan Coordination"].map(
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
                    src="/images/provider-revenue-cycle-consultation.jpg"
                    alt="Healthcare revenue cycle team reviewing Medicare billing claims and documentation"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Medicare Billing Workflow
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Support for Medicare eligibility, coding accuracy, payer coordination,
                      denial recovery, and accounts receivable follow-up.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Part A
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Hospital and post-acute billing workflows
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Part B / C
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Physician, outpatient, and Advantage claim management
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Part D
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Prescription coverage and payer coordination support
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ServiceHero>

        <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.98fr]">
            <MotionReveal>
              <SectionHeading
                label="Medicare Education"
                title="Understanding Medicare Parts A, B, C, and D"
                description="Each part of Medicare serves a different billing purpose, and every category requires clean documentation, payer alignment, and claim workflows tailored to the specific coverage model."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Medicare billing is not a single workflow. It spans facility claims, professional
                services, privately administered Medicare Advantage plans, and prescription-related
                coordination. Cure Hub Med Solutions helps providers navigate these differences with
                structured billing processes, documentation management, and payer follow-up.
              </p>
            </MotionReveal>

            <div>
              <Tabs defaultValue={medicareParts[0].value}>
                <TabsList className="grid h-auto w-full grid-cols-2 gap-2 bg-medical-very-light-bg p-2 md:grid-cols-4">
                  {medicareParts.map((item) => {
                    const Icon = item.icon;

                    return (
                      <TabsTrigger key={item.value} value={item.value} className="py-3">
                        <span className="inline-flex items-center gap-2">
                          <Icon className="h-4 w-4" />
                          {item.label}
                        </span>
                      </TabsTrigger>
                    );
                  })}
                </TabsList>

                {medicareParts.map((item) => {
                  const Icon = item.icon;

                  return (
                    <TabsContent key={item.value} value={item.value}>
                      <Card className="border-primary/15 bg-white shadow-sm">
                        <CardHeader>
                          <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                            <Icon className="h-5 w-5" />
                          </span>
                          <CardTitle className="text-xl">{item.title}</CardTitle>
                          <CardDescription className="leading-7">
                            {item.description}
                          </CardDescription>
                        </CardHeader>
                        <CardContent className="grid gap-3">
                          {item.points.map((point) => (
                            <div
                              key={point}
                              className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/60 p-4"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                              <p className="m-0 text-sm font-medium text-heading">{point}</p>
                            </div>
                          ))}
                        </CardContent>
                      </Card>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </section>

        <ServiceFeaturesGrid
          label="Challenges"
          title="Challenges in Medicare Billing"
          description="Cure Hub Med Solutions helps healthcare providers manage the operational, documentation, and payer complexities that often slow Medicare reimbursements."
          items={billingChallenges}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Core Services"
          title="Our Medicare Billing Services"
          description="We support Medicare billing workflows from verification and coding through denial recovery, reconciliation, and ongoing compliance monitoring."
          items={medicareServices}
          columns={3}
          tone="white"
        />

        <BenefitsSection
          label="Benefits"
          title="Benefits of Outsourcing Medicare Billing"
          description="Professional Medicare billing support improves claim quality, reduces administrative friction, and creates stronger reimbursement performance."
          items={outsourcingBenefits}
          columns={5}
          tone="soft"
        />

        <HealthcareProvidersSupported
          tone="soft"
          description="Cure Hub Med Solutions supports hospitals, physicians, specialty clinics, urgent care organizations, home healthcare agencies, and other healthcare providers that depend on accurate Medicare reimbursement workflows."
          providers={medicareProviders}
        />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions"
          description="Our Medicare billing approach combines reimbursement expertise, denial reduction, and revenue cycle visibility tailored to healthcare providers."
          items={whyChooseUs}
          columns={4}
          tone="white"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Cure Hub Med Solutions Services"
          description="Medicare billing performs best when it is connected to a broader support model across revenue cycle, credentialing, and operational workflows."
          items={internalServices}
          columns={4}
          tone="soft"
        />

        <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About Medicare Billing"
              description="These answers address common questions from providers evaluating outsourced Medicare billing support."
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
          label="Medicare Billing Support"
          title="Partner with Cure Hub Med Solutions for Medicare Billing"
          description="Cure Hub Med Solutions helps healthcare providers simplify Medicare billing, improve claim accuracy, reduce denials, and maximize reimbursements across Part A, Part B, Medicare Advantage, and Part D workflows."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Medicare Billing Team" }}
        />
      </div>
    </>
  );
}
