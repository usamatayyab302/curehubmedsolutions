import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BriefcaseMedical,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  FileText,
  HandCoins,
  RotateCcw,
  Search,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
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
const pageUrl = `${siteUrl}/services/denial-management`;

const keywords = [
  "denial management services",
  "medical billing denial management",
  "claim denial management services",
  "insurance claim denial recovery",
  "healthcare denial management",
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

const denialTabs: TabItem[] = [
  {
    value: "definition",
    label: "Definition",
    title: "Denial management recovers and resolves denied insurance claims",
    description:
      "Denial management is the process of identifying, analyzing, correcting, and resubmitting denied insurance claims so healthcare providers can recover reimbursement that would otherwise remain unpaid.",
    points: [
      "Recovers denied claims through structured review and correction",
      "Targets the operational causes behind nonpayment",
      "Supports stronger reimbursement outcomes across the revenue cycle",
    ],
    icon: RotateCcw,
  },
  {
    value: "causes",
    label: "Causes",
    title: "Claims may be denied for coding, documentation, eligibility, and payer reasons",
    description:
      "Insurance claims are commonly denied because of coding errors, incomplete documentation, eligibility problems, authorization issues, or payer-specific filing and submission requirements.",
    points: [
      "Coding and modifier issues",
      "Documentation and medical necessity gaps",
      "Eligibility, authorization, and payer rule mismatches",
    ],
    icon: ClipboardCheck,
  },
  {
    value: "impact",
    label: "Impact",
    title: "A structured denial management system improves recovery and prevention",
    description:
      "Cure Hub Med Solutions uses a structured denial management system to recover denied claims, prevent recurring billing errors, improve claim acceptance rates, and strengthen revenue cycle efficiency over time.",
    points: [
      "Recover denied claims",
      "Prevent recurring billing errors",
      "Improve claim acceptance rates and workflow efficiency",
    ],
    icon: TrendingUp,
  },
];

const denialCauses: IconCard[] = [
  {
    title: "Incorrect Medical Coding",
    description:
      "Incorrect CPT, ICD-10, or modifier selection can trigger avoidable denials and payment delays.",
    icon: ClipboardCheck,
  },
  {
    title: "Missing or Incomplete Patient Information",
    description:
      "Incomplete demographics, policy details, or patient records can prevent claims from processing correctly.",
    icon: FileText,
  },
  {
    title: "Insurance Eligibility Issues",
    description:
      "Coverage errors and eligibility mismatches often lead to denials that could have been prevented upstream.",
    icon: ShieldCheck,
  },
  {
    title: "Authorization Errors",
    description:
      "Missing or incorrect pre-authorization details can stop claims from receiving proper reimbursement.",
    icon: BriefcaseMedical,
  },
  {
    title: "Duplicate Claims Submission",
    description:
      "Duplicate claim activity can cause payer rejection or denial when submission workflows are not controlled carefully.",
    icon: RotateCcw,
  },
  {
    title: "Timely Filing Issues",
    description:
      "Late submissions can push otherwise valid claims beyond payer filing windows and reduce recoverability.",
    icon: Clock3,
  },
  {
    title: "Lack of Medical Necessity Documentation",
    description:
      "Missing or weak supporting documentation can lead payers to deny claims based on medical necessity criteria.",
    icon: FileText,
  },
  {
    title: "Coordination of Benefits Errors",
    description:
      "Incorrect primary or secondary payer coordination can create rejections, delays, and denial exposure.",
    icon: Users,
  },
];

const denialProcess: ProcessStep[] = [
  {
    step: "01",
    title: "Denial Identification and Analysis",
    description:
      "We identify denied claims quickly and review denial codes, payer responses, and claim history to determine the issue.",
    icon: Search,
  },
  {
    step: "02",
    title: "Root Cause Investigation",
    description:
      "Our team isolates the reason for each denial to understand whether coding, documentation, eligibility, or payer rules caused the problem.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Claim Correction",
    description:
      "We correct claim details, supporting information, and billing errors based on payer-specific denial requirements.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Claim Resubmission",
    description:
      "Corrected claims are resubmitted within payer timelines to maximize recovery potential and reduce avoidable write-offs.",
    icon: RotateCcw,
  },
  {
    step: "05",
    title: "Insurance Follow-Up",
    description:
      "We follow up with insurers to confirm status, resolve outstanding questions, and push denied claims toward payment.",
    icon: ShieldCheck,
  },
  {
    step: "06",
    title: "Reporting and Denial Trend Analysis",
    description:
      "Denial reporting highlights recurring payer patterns and workflow issues so practices can improve future claim performance.",
    icon: BarChart3,
  },
];

const preventionStrategies: IconCard[] = [
  {
    title: "Accurate Medical Coding Review",
    description:
      "Coding review reduces denial risk by validating claim accuracy before submission.",
    icon: ClipboardCheck,
  },
  {
    title: "Insurance Eligibility Verification",
    description:
      "Verifying coverage before service helps prevent avoidable eligibility-related denials.",
    icon: ShieldCheck,
  },
  {
    title: "Pre-Authorization Checks",
    description:
      "Authorization workflows help confirm payer requirements before treatment and billing.",
    icon: BriefcaseMedical,
  },
  {
    title: "Charge Entry Validation",
    description:
      "Charge review reduces submission errors that can lead to rejections or underpayments.",
    icon: FileText,
  },
  {
    title: "Claim Scrubbing Before Submission",
    description:
      "Pre-submission edits catch common billing issues before claims reach the payer.",
    icon: Search,
  },
  {
    title: "Documentation Compliance Monitoring",
    description:
      "Ongoing review supports stronger documentation quality and fewer medical necessity denials.",
    icon: CheckCircle2,
  },
];

const outsourcingBenefits: IconCard[] = [
  {
    title: "Increased Claim Recovery",
    description:
      "Focused claim denial management services help recover balances that might otherwise stay denied or unpaid.",
    icon: HandCoins,
  },
  {
    title: "Faster Reimbursement",
    description:
      "Structured denial workflows shorten the path from payer denial to corrected claim resolution.",
    icon: TrendingUp,
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Your staff can focus on patient care while denial specialists manage research, correction, and follow-up.",
    icon: Users,
  },
  {
    title: "Improved First-Pass Claim Acceptance",
    description:
      "Root-cause analysis and denial prevention strategies strengthen claim quality before submission.",
    icon: CheckCircle2,
  },
  {
    title: "Data-Driven Revenue Cycle Improvements",
    description:
      "Analytics reveal payer patterns and workflow gaps that help improve long-term revenue cycle performance.",
    icon: BarChart3,
  },
];

const reportingFeatures = [
  "Denial rate tracking",
  "Payer-specific denial analysis",
  "Claim rejection trends",
  "Revenue recovery performance",
  "Billing workflow improvements",
];

const differentiators: IconCard[] = [
  {
    title: "Experienced Denial Specialists",
    description:
      "Our team understands payer denial logic, correction workflows, and practical recovery execution.",
    icon: Users,
  },
  {
    title: "Efficient Claim Recovery Process",
    description:
      "Structured investigation, correction, resubmission, and follow-up improve denial turnaround and collection speed.",
    icon: RotateCcw,
  },
  {
    title: "Revenue-Focused Approach",
    description:
      "We prioritize denials based on reimbursement impact, recovery potential, and payer behavior.",
    icon: HandCoins,
  },
  {
    title: "Integrated Revenue Cycle Management",
    description:
      "Denial management is aligned with billing, AR recovery, and front-end workflow improvement to reduce repeat issues.",
    icon: ClipboardList,
  },
];

const internalLinks: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description:
      "Strengthen denial prevention with end-to-end billing support and cleaner claim submission workflows.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "AR Recovery Services",
    description:
      "Pair denial recovery with broader aging AR follow-up and unpaid claim resolution support.",
    href: "/services/ar-recovery",
    icon: HandCoins,
  },
  {
    title: "Provider Credentialing",
    description:
      "Support payer readiness and reduce enrollment-related reimbursement interruptions.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Front Office Management",
    description:
      "Improve eligibility, authorization, and intake accuracy to reduce avoidable denials upstream.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Practice Setup Services",
    description:
      "Build stronger revenue workflows early with billing, credentialing, and operations support.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-focused billing and revenue support tailored to different payer and documentation demands.",
    href: "/specialties",
    icon: Stethoscope,
  },
] as const;

const faqs = [
  {
    question: "What is denial management in medical billing?",
    answer:
      "Denial management is the process of identifying, analyzing, correcting, and resubmitting denied insurance claims so healthcare providers can recover reimbursement and reduce repeat claim issues.",
  },
  {
    question: "Why are medical claims commonly denied?",
    answer:
      "Claims are often denied because of coding errors, incomplete patient information, eligibility mismatches, authorization issues, timely filing problems, and documentation gaps.",
  },
  {
    question: "How does outsourcing denial management help healthcare practices?",
    answer:
      "Outsourcing gives providers access to dedicated specialists who recover denied claims, reduce internal workload, and produce denial analytics that improve first-pass acceptance rates.",
  },
  {
    question: "Can denial management improve future billing performance?",
    answer:
      "Yes. Denial trend analysis helps practices identify recurring workflow problems and implement prevention strategies that reduce future denials and improve revenue cycle efficiency.",
  },
] as const;

export const metadata: Metadata = {
  title: "Denial Management Services | Medical Billing Claim Denial Recovery | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions offers professional denial management services to recover denied claims, reduce billing errors, and improve healthcare revenue cycle performance.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title:
      "Denial Management Services | Medical Billing Claim Denial Recovery | Cure Hub Med Solutions",
    description:
      "Professional medical billing denial management and insurance claim denial recovery services for healthcare providers.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/medical-billing-specialist-reviewing-claims.jpg`,
        width: 1200,
        height: 630,
        alt: "Medical billing specialist analyzing denied claims and recovery workflows",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Denial Management Services | Medical Billing Claim Denial Recovery | Cure Hub Med Solutions",
    description:
      "Recover denied claims, reduce billing errors, and improve reimbursement performance with expert denial management support.",
    images: [`${siteUrl}/images/medical-billing-specialist-reviewing-claims.jpg`],
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
    name: "Denial Management Services",
    serviceType: "Denial Management Services",
    description: "Medical claim denial recovery and billing error resolution services for healthcare providers.",
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
              <Badge className="rounded-full px-3 py-1">Medical Billing Denial Management</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Denial Management Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Recover Denied Claims and Improve Healthcare Revenue Cycle Performance
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Claim denials are one of the biggest challenges healthcare providers face in the
                revenue cycle. Denied claims create delayed payments, increase administrative
                burden, and reduce practice revenue when they are not resolved quickly and
                consistently.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions provides professional denial management services to analyze,
                correct, and recover denied medical claims while helping practices reduce recurring
                denial patterns and strengthen reimbursement performance.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us#consultation-form">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to a Billing Expert</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Denied Claims", "Claim Recovery", "Revenue Cycle Improvement"].map((item) => (
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
                    src="/images/medical-billing-specialist-reviewing-claims.jpg"
                    alt="Billing specialist reviewing denied claims and revenue recovery workflows"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Insurance Claim Denial Recovery
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Analysis, correction, and resubmission workflows that help healthcare
                      providers recover denied medical claims.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Analysis
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Denial codes and payer response review
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Correction
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Coding, documentation, and claim fixes
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Prevention
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Denial trend analysis and workflow improvement
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
                label="Denial Education"
                title="What is Denial Management in Medical Billing?"
                description="Denial management is the process of identifying, analyzing, correcting, and resubmitting denied insurance claims to ensure providers receive proper reimbursement."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Insurance claims may be denied for many reasons, including coding errors,
                documentation issues, eligibility problems, authorization failures, or
                payer-specific submission requirements. Without a structured response, denials can
                repeat and weaken overall revenue cycle performance.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions uses a disciplined denial management system to recover denied
                claims, prevent recurring billing errors, improve claim acceptance rates, and help
                practices strengthen revenue cycle efficiency over time.
              </p>
            </MotionReveal>

            <div>
              <Tabs defaultValue={denialTabs[0].value}>
                <TabsList>
                  {denialTabs.map((tab) => {
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

                {denialTabs.map((tab) => {
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
          label="Denial Causes"
          title="Common Reasons for Medical Claim Denials"
          description="Understanding denial causes is essential for both recovering denied claims and preventing repeat billing errors."
          items={denialCauses}
          columns={4}
          tone="soft"
        />

        <ProcessTimeline
          label="Workflow"
          title="Our Denial Management Process"
          description="We follow a structured claim denial management workflow designed to recover reimbursement and reveal the causes behind repeated denials."
          items={denialProcess}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="Prevention"
                title="Denial Prevention Strategies"
                description="Proactive prevention reduces denial rates, improves first-pass claim acceptance, and strengthens the health of the entire revenue cycle."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Strong denial management is not only about recovering denied claims. It also
                requires prevention strategies that improve billing quality before claims ever reach
                the payer. Cure Hub Med Solutions helps practices reduce repeat denial patterns by
                tightening front-end and back-end billing controls.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                These methods reduce denial exposure, improve claim accuracy, and help practices
                achieve stronger first-pass acceptance rates over time.
              </p>
            </MotionReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {preventionStrategies.map((item) => {
                const Icon = item.icon;

                return (
                  <Card key={item.title} className="h-full border-primary/15 bg-white">
                    <CardHeader>
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-7">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <BenefitsSection
          label="Benefits"
          title="Benefits of Outsourcing Denial Management"
          description="Outsourcing denial management gives healthcare providers focused expertise in claim recovery, prevention, and revenue cycle improvement."
          items={outsourcingBenefits}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="Analytics"
                title="Advanced Denial Analytics and Reporting"
                description="Detailed denial analytics help practices see where claims break down, which payers create the most friction, and how recovery performance changes over time."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions provides detailed denial analytics that move beyond basic
                denial counts. We analyze payer-specific behavior, rejection categories, recovery
                results, and recurring workflow weaknesses so healthcare providers can act on
                measurable trends instead of isolated denials.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                This reporting supports better decision-making, smarter operational adjustments, and
                stronger revenue cycle performance across both recovery and prevention workflows.
              </p>
            </MotionReveal>

            <Card className="border-primary/15 bg-white shadow-lg shadow-primary/10">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Reporting Focus
                </Badge>
                <CardTitle>Visibility into denial performance</CardTitle>
                <CardDescription>
                  These are the reporting views we use to improve denial recovery and billing
                  workflow decisions.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {reportingFeatures.map((item) => (
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
          title="Why Choose Cure Hub Med Solutions for Denial Management"
          description="Providers choose us for experienced denial recovery execution, revenue-focused priorities, and closer alignment with the broader billing cycle."
          items={differentiators}
          columns={4}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Core Services"
          description="Denial recovery works best when it is connected to broader billing, AR, credentialing, and front-office workflows."
          items={internalLinks}
          columns={3}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About Denial Management Services"
              description="These answers help providers understand how denial recovery and denial prevention support stronger reimbursement outcomes."
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
          title="Improve Your Revenue Cycle with Expert Denial Management"
          description="Denied claims can significantly affect healthcare practice revenue when recovery is inconsistent or delayed. Cure Hub Med Solutions provides expert claim recovery and denial prevention services that help providers reduce losses and improve reimbursement performance."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Billing Team" }}
        />
      </div>
    </>
  );
}
