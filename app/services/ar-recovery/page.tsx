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
  WalletCards,
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
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/ar-recovery`;

const keywords = [
  "AR recovery services",
  "medical AR recovery",
  "aging AR recovery healthcare",
  "accounts receivable recovery medical billing",
  "denied claims recovery services",
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

type AgingBucket = {
  title: string;
  description: string;
  emphasis: string;
  icon: LucideIcon;
};

const arRecoveryTabs: TabItem[] = [
  {
    value: "unpaid",
    label: "Unpaid Claims",
    title: "AR recovery focuses on unpaid claims left unresolved in the revenue cycle",
    description:
      "AR recovery services identify claims that remain unpaid after submission and intervene before those balances become permanent write-offs or long-term aging exposure.",
    points: [
      "Claims that remain unresolved after normal payer processing windows",
      "Balances requiring investigation, correction, or escalation",
      "Outstanding insurance and patient receivables needing disciplined follow-up",
    ],
    icon: Search,
  },
  {
    value: "problem-claims",
    label: "Problem Claims",
    title: "Recovery workflows target denied, underpaid, rejected, and delayed claims",
    description:
      "Medical AR recovery often centers on the claims most likely to stall cash flow: denied claims, underpaid balances, rejected submissions, and delayed insurer payments that need structured resolution.",
    points: [
      "Denied claims requiring appeals or payer-specific correction",
      "Underpaid claims needing reimbursement review",
      "Rejected or delayed claims that require resubmission and follow-up",
    ],
    icon: RotateCcw,
  },
  {
    value: "resolution",
    label: "Resolution",
    title: "Cure Hub Med Solutions applies structured recovery processes to resolve AR",
    description:
      "We analyze claim history, isolate the cause of nonpayment, prioritize recovery opportunities, and apply targeted payer and patient follow-up workflows to recover revenue more effectively.",
    points: [
      "Root-cause review of denials, edits, and reimbursement gaps",
      "Claim correction and resubmission where timely filing allows",
      "Reporting and tracking that show recovery progress over time",
    ],
    icon: ClipboardCheck,
  },
];

const importanceItems: IconCard[] = [
  {
    title: "Recover Payments from Aging Claims",
    description:
      "Focused follow-up helps providers recover balances that have moved deeper into AR aging buckets before they are written off.",
    icon: HandCoins,
  },
  {
    title: "Reduce Claim Write-Offs",
    description:
      "Proactive recovery work can prevent unresolved denied or underpaid claims from turning into avoidable revenue loss.",
    icon: WalletCards,
  },
  {
    title: "Improve Cash Flow and Revenue Collection",
    description:
      "Recovering older balances improves cash flow and increases revenue realization across the medical billing cycle.",
    icon: TrendingUp,
  },
  {
    title: "Identify Billing Errors and Claim Issues",
    description:
      "AR recovery analysis reveals recurring problems in coding, documentation, payer rules, and submission quality.",
    icon: Search,
  },
  {
    title: "Strengthen Overall Revenue Cycle Management",
    description:
      "Recovery workflows produce insight that helps practices tighten front-end and back-end revenue cycle performance.",
    icon: BarChart3,
  },
];

const arRecoveryProcess: ProcessStep[] = [
  {
    step: "01",
    title: "AR Analysis and Evaluation",
    description:
      "We review unpaid and aged claims to identify recovery opportunities, payer trends, and claim categories with the highest financial impact.",
    icon: Search,
  },
  {
    step: "02",
    title: "Claim Prioritization",
    description:
      "Claims are prioritized by age, balance, denial reason, payer behavior, and filing urgency so effort is focused where recovery potential is strongest.",
    icon: Activity,
  },
  {
    step: "03",
    title: "Claim Correction and Resubmission",
    description:
      "We correct coding, documentation, eligibility, or submission issues and resubmit claims based on payer requirements and claim status.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Insurance Follow-Up",
    description:
      "Our team follows up with insurance companies to verify status, resolve denials, and escalate delayed claims when necessary.",
    icon: ShieldCheck,
  },
  {
    step: "05",
    title: "Patient Balance Follow-Up",
    description:
      "Where appropriate, we support patient balance follow-up to improve collection opportunities for unresolved patient responsibility.",
    icon: Users,
  },
  {
    step: "06",
    title: "AR Reporting and Monitoring",
    description:
      "Performance reporting shows aging movement, recovery activity, payer delays, and outstanding balances that still require action.",
    icon: BarChart3,
  },
];

const agingBuckets: AgingBucket[] = [
  {
    title: "0–30 Days AR",
    description:
      "Early-stage claims are monitored closely to prevent missed follow-up windows and resolve payment delays before they deepen.",
    emphasis: "Early intervention reduces downstream aging.",
    icon: Clock3,
  },
  {
    title: "30–60 Days AR",
    description:
      "Claims in this range often require targeted payer contact, correction, or status verification to keep reimbursement moving.",
    emphasis: "Focused follow-up keeps mid-cycle AR from slipping.",
    icon: Activity,
  },
  {
    title: "60–90 Days AR",
    description:
      "Balances in this range demand stronger prioritization because unresolved issues begin to affect overall collection performance.",
    emphasis: "Escalation becomes more important as claims age.",
    icon: ClipboardCheck,
  },
  {
    title: "90–120 Days AR",
    description:
      "Older claims usually require deeper claim investigation, payer escalation, and careful review of timely filing and appeal options.",
    emphasis: "Aged AR needs disciplined investigation and recovery strategy.",
    icon: Search,
  },
  {
    title: "120+ Days AR Recovery",
    description:
      "Cure Hub Med Solutions specializes in recovering highly aged claims through strategic follow-up, claim investigation, and denial resolution tactics.",
    emphasis: "High-age balances still hold recoverable revenue when handled strategically.",
    icon: RotateCcw,
  },
];

const commonIssues: IconCard[] = [
  {
    title: "Incorrect Medical Coding",
    description:
      "Coding inaccuracies can trigger denials, underpayments, or rejections that leave claims unresolved in AR.",
    icon: ClipboardCheck,
  },
  {
    title: "Missing Claim Information",
    description:
      "Incomplete demographic, payer, or service details can stop claims from processing correctly and delay recovery.",
    icon: FileText,
  },
  {
    title: "Insurance Eligibility Errors",
    description:
      "Coverage mismatches and eligibility mistakes can create preventable payment delays and denied claims.",
    icon: ShieldCheck,
  },
  {
    title: "Payer Claim Processing Delays",
    description:
      "Slow payer review cycles and inconsistent adjudication timelines can keep valid claims aging longer than necessary.",
    icon: Clock3,
  },
  {
    title: "Denied or Rejected Claims",
    description:
      "Denied claims recovery services are often needed when claims require correction, appeal support, or payer-specific documentation.",
    icon: RotateCcw,
  },
  {
    title: "Incomplete Documentation",
    description:
      "Missing notes, authorizations, or supporting records can interrupt reimbursement and increase recovery complexity.",
    icon: FileText,
  },
  {
    title: "Coordination of Benefits Issues",
    description:
      "COB errors can result in claims being delayed, rejected, or incorrectly routed between multiple insurers.",
    icon: Users,
  },
];

const outsourcingBenefits: IconCard[] = [
  {
    title: "Increased Revenue Recovery",
    description:
      "Dedicated AR recovery services help providers reclaim balances that might otherwise remain uncollected.",
    icon: HandCoins,
  },
  {
    title: "Faster Claim Resolution",
    description:
      "Structured recovery workflows move unresolved claims through investigation, correction, and follow-up more efficiently.",
    icon: CheckCircle2,
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Your in-house team can focus on daily operations while specialists manage older and more complex AR balances.",
    icon: BriefcaseMedical,
  },
  {
    title: "Improved Cash Flow",
    description:
      "Recovering aged and denied claims supports more predictable collections and healthier revenue cycle performance.",
    icon: TrendingUp,
  },
  {
    title: "Data-Driven AR Management",
    description:
      "Reporting and claim analytics help practices understand recovery progress and the operational causes behind unpaid AR.",
    icon: BarChart3,
  },
];

const differentiators: IconCard[] = [
  {
    title: "Dedicated AR Recovery Team",
    description:
      "Our recovery specialists focus on unresolved claims, aging balances, and denial-related payment obstacles.",
    icon: Users,
  },
  {
    title: "Advanced Claim Tracking",
    description:
      "We use structured tracking and reporting to monitor recovery progress across payers, aging buckets, and denial categories.",
    icon: Search,
  },
  {
    title: "Comprehensive Revenue Cycle Support",
    description:
      "AR recovery is aligned with broader billing, credentialing, and operational workflows to improve long-term outcomes.",
    icon: ClipboardList,
  },
  {
    title: "High Recovery Success Rate",
    description:
      "Consistent follow-up, analysis, and payer-specific recovery tactics help improve resolution of difficult AR balances.",
    icon: TrendingUp,
  },
];

const internalLinks: LinkCard[] = [
  {
    title: "Medical Billing Services",
    description:
      "Connect AR recovery with end-to-end billing services that improve claim quality and reimbursement performance.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "Provider Credentialing",
    description:
      "Reduce enrollment-related billing interruptions with credentialing support that keeps providers payer-ready.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Front Office Management",
    description:
      "Improve intake, verification, and patient communication workflows that influence AR performance from the start.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Practice Setup Services",
    description:
      "Launch or expand with billing, credentialing, and operational workflows designed to reduce future AR problems.",
    href: "/services/new-practice-setup",
    icon: Building2,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-specific billing and support services tailored to different payer and documentation requirements.",
    href: "/specialties",
    icon: Stethoscope,
  },
] as const;

const faqs = [
  {
    question: "What is AR recovery in medical billing?",
    answer:
      "AR recovery in medical billing is the process of identifying and resolving unpaid, denied, underpaid, rejected, or delayed claims that remain unresolved in accounts receivable. It focuses on recovering revenue that has not been collected through normal billing workflows.",
  },
  {
    question: "Can aging AR recovery healthcare services help with older claims?",
    answer:
      "Yes. Aging AR recovery healthcare services are designed to work across older AR buckets, including 90-day and 120+ day claims, using structured follow-up, investigation, and correction strategies wherever recovery remains possible.",
  },
  {
    question: "Do you recover denied claims as part of AR recovery?",
    answer:
      "Yes. Denied claims recovery services are a key part of our AR recovery work. We review denial causes, correct claim issues, manage payer follow-up, and pursue resolution through resubmission or appeal when appropriate.",
  },
  {
    question: "How does AR recovery improve cash flow?",
    answer:
      "AR recovery improves cash flow by converting aged and unresolved balances into collected revenue, reducing write-offs, and giving providers more control over the claims that are slowing reimbursement.",
  },
] as const;

export const metadata: Metadata = {
  title: "AR Recovery Services | Medical Billing AR Recovery | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions offers professional AR Recovery services to recover aging claims, reduce denials, and improve revenue cycle management for healthcare providers.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "AR Recovery Services | Medical Billing AR Recovery | Cure Hub Med Solutions",
    description:
      "Professional medical AR recovery and denied claims recovery services for healthcare providers across the United States.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/healthcare-revenue-cycle-reporting-analysis.jpg`,
        width: 1200,
        height: 630,
        alt: "AR recovery specialist reviewing healthcare revenue cycle and aging claims data",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AR Recovery Services | Medical Billing AR Recovery | Cure Hub Med Solutions",
    description:
      "Recover aging claims, reduce denials, and improve revenue cycle performance with professional AR recovery support.",
    images: [`${siteUrl}/images/healthcare-revenue-cycle-reporting-analysis.jpg`],
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
    name: "AR Recovery Services",
    serviceType: "AR Recovery Services",
    description: "Medical accounts receivable recovery and denied claim resolution services.",
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
              <Badge className="rounded-full px-3 py-1">Denied Claims Recovery Services</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                AR Recovery Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Recover Outstanding Medical Claims and Improve Practice Revenue
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Healthcare providers often lose revenue because unpaid, denied, or aging claims
                remain unresolved in accounts receivable. When those balances are not addressed
                quickly, they turn into write-offs, delayed cash flow, and avoidable revenue loss.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Cure Hub Med Solutions provides professional AR recovery services that identify,
                analyze, and recover outstanding claims from insurance companies and patients
                through structured follow-up, correction, and recovery workflows.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us#consultation-form">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to an AR Specialist</Link>
                </Button>
              </div>

              <div className="mt-7 flex flex-wrap gap-2">
                {["Aging Claims", "Denied Claims", "Revenue Recovery"].map((item) => (
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
                    src="/images/healthcare-revenue-cycle-reporting-analysis.jpg"
                    alt="Revenue cycle analyst reviewing aging claims and AR recovery performance"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe6] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      Accounts Receivable Recovery Medical Billing
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Data-driven recovery support for denied, delayed, underpaid, and aging
                      healthcare claims.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Analysis
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Claim review by age, payer, and issue type
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Recovery
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Denial correction, follow-up, and resubmission
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Monitoring
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Reporting visibility across aging AR buckets
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
                label="AR Education"
                title="What is AR Recovery in Medical Billing?"
                description="AR recovery refers to identifying and collecting unpaid claims that remain unresolved in the medical billing revenue cycle."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                In practice, AR recovery covers claims that have not been resolved through normal
                billing workflows and now require targeted intervention. This often includes denied
                claims, underpaid claims, rejected claims, and delayed insurance payments that keep
                revenue trapped in accounts receivable longer than it should be.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Cure Hub Med Solutions analyzes these unresolved claims, determines why payment has
                stalled, and applies structured recovery processes such as claim correction,
                resubmission, insurance follow-up, and reporting to improve collection outcomes.
              </p>
            </MotionReveal>

            <div>
              <Tabs defaultValue={arRecoveryTabs[0].value}>
                <TabsList>
                  {arRecoveryTabs.map((tab) => {
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

                {arRecoveryTabs.map((tab) => {
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
          title="Why AR Recovery is Important for Healthcare Practices"
          description="A disciplined recovery program helps providers reclaim missed revenue and improve overall revenue cycle performance."
          items={importanceItems}
          columns={5}
          tone="soft"
        />

        <ProcessTimeline
          label="Workflow"
          title="Our AR Recovery Process"
          description="We use a structured recovery workflow to investigate unpaid claims, prioritize effort, and improve the likelihood of collection."
          items={arRecoveryProcess}
          tone="white"
        />

        <ServiceFeaturesGrid
          label="Aging Expertise"
          title="Our Expertise in Aging AR Recovery"
          description="Cure Hub Med Solutions specializes in recovering claims across the AR aging spectrum, including highly aged balances that require deeper investigation."
          items={agingBuckets.map(({ title, description, emphasis, icon }) => ({
            title,
            description: `${description} ${emphasis}`,
            icon,
          }))}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Common Issues"
          title="Common Causes of Unpaid Medical Claims"
          description="Recovery performance improves when the operational reasons behind unpaid claims are clearly identified and addressed."
          items={commonIssues}
          columns={4}
          tone="white"
        />

        <BenefitsSection
          label="Outsourcing Benefits"
          title="Benefits of Outsourcing AR Recovery Services"
          description="Outsourcing AR recovery gives healthcare providers focused expertise for older, denied, and difficult-to-resolve claims."
          items={outsourcingBenefits}
          columns={5}
          tone="soft"
        />

        <HealthcareProvidersSupported />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions for AR Recovery"
          description="Healthcare providers rely on us for disciplined recovery execution, strong reporting visibility, and broader revenue cycle alignment."
          items={differentiators}
          columns={4}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Other Core Services"
          description="Support AR recovery further by connecting it with the billing, operational, and specialty workflows that influence reimbursement performance."
          items={internalLinks}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="FAQ"
              title="Frequently Asked Questions About AR Recovery Services"
              description="These answers help providers understand how medical AR recovery works and why it matters for long-term revenue performance."
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
          title="Recover Your Lost Revenue Today"
          description="Unresolved claims can lead to significant revenue loss, especially when aging accounts receivable are left without structured follow-up. Cure Hub Med Solutions provides expert AR recovery support to resolve denied, delayed, and aging claims before more revenue slips away."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our AR Recovery Team" }}
        />
      </div>
    </>
  );
}
