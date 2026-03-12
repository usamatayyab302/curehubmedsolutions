import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Activity,
  ArrowRight,
  BarChart3,
  Bone,
  BrainCircuit,
  BriefcaseMedical,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  Clock3,
  FileText,
  HandCoins,
  HeartPulse,
  Hospital,
  ReceiptText,
  RotateCcw,
  Search,
  ShieldCheck,
  Stethoscope,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  type LucideIcon,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import BenefitsSection from "@/components/services/benefits-section";
import CTASection from "@/components/services/cta-section";
import MotionReveal from "@/components/services/motion-reveal";
import ProcessTimeline from "@/components/services/process-timeline";
import ServiceFeaturesGrid from "@/components/services/service-features-grid";
import ServiceHero from "@/components/services/service-hero";
import ServiceSectionHeading from "@/components/services/service-section-heading";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/accounts-receivable-collection`;

const keywords = [
  "accounts receivable medical billing",
  "medical AR recovery services",
  "accounts receivable healthcare services",
  "medical billing AR management",
  "revenue cycle AR follow up services",
];

type IconCard = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const importanceItems: IconCard[] = [
  {
    title: "Improve Revenue Collection",
    description:
      "Focused AR follow-up helps recover outstanding insurance and patient balances before they become harder to collect.",
    icon: HandCoins,
  },
  {
    title: "Reduce Claim Aging",
    description:
      "Structured prioritization across 30, 60, 90, and 120+ day aging buckets supports faster cash recovery.",
    icon: Clock3,
  },
  {
    title: "Identify Billing Inefficiencies",
    description:
      "AR trends reveal process gaps in registration, coding, documentation, and payer workflow execution.",
    icon: Search,
  },
  {
    title: "Resolve Insurance Claim Issues",
    description:
      "Proactive payer follow-up and claim correction reduce unresolved denials, rejections, and underpayments.",
    icon: ClipboardCheck,
  },
  {
    title: "Maintain Stable Financial Performance",
    description:
      "Consistent collections performance supports healthier cash flow and stronger revenue cycle visibility.",
    icon: TrendingUp,
  },
];

const challenges: IconCard[] = [
  {
    title: "Claim Denials and Rejections",
    description:
      "Denied and rejected claims slow down reimbursement and often require payer-specific correction and resubmission.",
    icon: RotateCcw,
  },
  {
    title: "Coding Errors",
    description:
      "Incorrect CPT, ICD-10, or modifier usage creates preventable AR delays and increases payer scrutiny.",
    icon: ClipboardCheck,
  },
  {
    title: "Insurance Eligibility Issues",
    description:
      "Eligibility mismatches and coverage gaps can cause avoidable payment delays after services are delivered.",
    icon: ShieldCheck,
  },
  {
    title: "Delayed Payer Responses",
    description:
      "Slow insurer processing and inconsistent follow-up cycles keep balances in aging buckets longer than necessary.",
    icon: Clock3,
  },
  {
    title: "Incomplete Claim Submissions",
    description:
      "Missing documentation, authorization details, or charge data can stop claims from moving forward quickly.",
    icon: FileText,
  },
  {
    title: "Lack of Claim Follow-Up",
    description:
      "Without disciplined AR follow-up, unpaid and underpaid claims often remain unresolved for months.",
    icon: Activity,
  },
];

const arProcess = [
  {
    step: "01",
    title: "Claim Monitoring",
    description:
      "We segment and monitor AR by payer, age, balance type, and denial category to focus effort where recovery potential is highest.",
    icon: Activity,
  },
  {
    step: "02",
    title: "Insurance Follow-Up",
    description:
      "Our AR specialists contact payers, verify claim status, identify roadblocks, and escalate unresolved issues when required.",
    icon: HandCoins,
  },
  {
    step: "03",
    title: "Claim Correction and Resubmission",
    description:
      "We correct claim errors, attach missing details, and resubmit claims based on payer-specific requirements.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Patient Balance Follow-Up",
    description:
      "When appropriate, we support patient balance workflows to improve collections and reduce aged patient AR.",
    icon: Users,
  },
  {
    step: "05",
    title: "Detailed AR Reporting",
    description:
      "You receive visibility into aging movement, collections progress, payer delays, and unresolved claims requiring action.",
    icon: BarChart3,
  },
];

const outsourcingBenefits: IconCard[] = [
  {
    title: "Faster Claim Recovery",
    description:
      "Dedicated AR workflows shorten follow-up cycles and move unresolved balances toward faster reimbursement.",
    icon: HandCoins,
  },
  {
    title: "Reduced Claim Aging",
    description:
      "A disciplined collection strategy improves resolution rates across older AR buckets before balances stagnate.",
    icon: Clock3,
  },
  {
    title: "Improved Revenue Collection",
    description:
      "More consistent payer and patient follow-up supports stronger net collections and healthier monthly cash flow.",
    icon: TrendingUp,
  },
  {
    title: "Reduced Administrative Workload",
    description:
      "Your in-house team spends less time chasing aging claims and more time on patient-facing and core operations.",
    icon: BriefcaseMedical,
  },
  {
    title: "Advanced Reporting and Transparency",
    description:
      "Performance reporting helps leadership understand payer behavior, collection trends, and unresolved AR exposure.",
    icon: ReceiptText,
  },
];

const performanceChecklist = [
  "Identifying outstanding claims quickly",
  "Reducing payer response delays",
  "Correcting claim errors efficiently",
  "Accelerating reimbursements",
  "Improving revenue cycle performance",
];

const specialties = [
  { title: "Chiropractic", href: "/specialties/chiropractic-billing-services", icon: Bone },
  { title: "Mental Health", href: "/specialties/mental-health-billing-services", icon: BrainCircuit },
  { title: "Cardiology", href: "/specialties/cardiology-billing", icon: HeartPulse },
  { title: "Orthopedics", href: "/specialties/orthopedics-billing", icon: Bone },
  { title: "Dermatology", href: "/specialties/dermatology-billing", icon: Stethoscope },
  { title: "Pediatrics", href: "/specialties/pediatrics-billing", icon: Users },
  { title: "Urgent Care", href: "/specialties/urgent-care-billing", icon: Hospital },
  { title: "Family Medicine", href: "/specialties/family-medicine-billing", icon: UserCheck },
  { title: "Pain Management", href: "/specialties/pain-management-billing", icon: Activity },
  { title: "Physical Therapy", href: "/specialties/physical-therapy-billing", icon: BriefcaseMedical },
] as const;

const differentiators: IconCard[] = [
  {
    title: "Experienced AR Specialists",
    description:
      "Our team understands payer follow-up, claim recovery strategy, and the operational details behind aging AR balances.",
    icon: Users,
  },
  {
    title: "Advanced Billing Technology",
    description:
      "We organize AR workflows with reporting visibility, claim tracking discipline, and structured follow-up execution.",
    icon: BriefcaseMedical,
  },
  {
    title: "Revenue Recovery Expertise",
    description:
      "We focus on underpaid, denied, and aging claims to improve reimbursement outcomes and recover lost revenue.",
    icon: WalletCards,
  },
  {
    title: "Transparent Financial Reporting",
    description:
      "Your team gets clear reporting on AR movement, payer performance, and collection progress across balance categories.",
    icon: BarChart3,
  },
  {
    title: "HIPAA-Compliant Processes",
    description:
      "Security, privacy, and disciplined operational controls are built into every AR management workflow.",
    icon: ShieldCheck,
  },
];

const internalLinks = [
  {
    title: "Medical Billing Services",
    description:
      "Connect AR collection with end-to-end billing support, denial prevention, and cleaner claim submission workflows.",
    href: "/services/medical-billing-services",
    icon: ClipboardList,
  },
  {
    title: "Provider Credentialing",
    description:
      "Reduce payer enrollment issues and support uninterrupted billing readiness with credentialing services.",
    href: "/services/provider-credentialing",
    icon: ShieldCheck,
  },
  {
    title: "Front Office Support",
    description:
      "Strengthen registration, eligibility, and intake accuracy to prevent front-end AR problems before claims go out.",
    href: "/services/front-office-management",
    icon: Users,
  },
  {
    title: "Specialties",
    description:
      "Explore specialty-focused billing services tailored to different documentation, payer, and reimbursement needs.",
    href: "/specialties",
    icon: Hospital,
  },
] as const;

const faqs = [
  {
    question: "What is accounts receivable in medical billing?",
    answer:
      "In medical billing, accounts receivable refers to unpaid insurance claims and patient balances that a healthcare provider is still owed for services already delivered. AR management keeps those balances moving toward payment instead of staying unresolved in aging buckets.",
  },
  {
    question: "How do medical AR recovery services improve cash flow?",
    answer:
      "Medical AR recovery services improve cash flow by identifying unpaid claims quickly, following up with payers consistently, correcting claim issues, and helping practices recover balances that might otherwise stay delayed or uncollected.",
  },
  {
    question: "Can Cure Hub Med Solutions work on aged AR only?",
    answer:
      "Yes. We can support focused legacy AR projects, ongoing accounts receivable healthcare services, or a blended model that combines aged AR recovery with current payer follow-up workflows.",
  },
  {
    question: "Do you support specialty-specific AR workflows?",
    answer:
      "Yes. We tailor medical billing AR management workflows by specialty, payer mix, claim complexity, and reimbursement trends so follow-up strategies fit the realities of each practice.",
  },
] as const;

export const metadata: Metadata = {
  title: "Accounts Receivable Collection Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides professional accounts receivable collection services to help healthcare providers recover unpaid claims, reduce AR aging, and improve revenue cycle performance.",
  keywords,
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Accounts Receivable Collection Services | Cure Hub Med Solutions",
    description:
      "Professional accounts receivable medical billing support for unpaid claims, AR follow-up, and healthcare revenue recovery.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/medical-billing-specialist-reviewing-claims.jpg`,
        width: 1200,
        height: 630,
        alt: "Accounts receivable collection specialist reviewing medical claims",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accounts Receivable Collection Services | Cure Hub Med Solutions",
    description:
      "AR recovery and claim follow-up services that help healthcare providers reduce aging balances and improve cash flow.",
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
    name: "Accounts Receivable Collection Services",
    serviceType: "Accounts Receivable Collection",
    description: "AR recovery and claim follow-up services for healthcare providers.",
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
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(111,189,148,0.16),transparent_34%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_88%_18%,rgba(21,54,95,0.12),transparent_30%)]" />

          <div className="relative mx-auto grid max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-3xl">
              <Badge className="rounded-full px-3 py-1">Revenue Cycle AR Follow-Up Services</Badge>
              <h1 className="mt-5 font-heading text-4xl font-bold leading-tight text-heading sm:text-5xl lg:text-6xl">
                Accounts Receivable Collection Services
              </h1>
              <p className="mt-5 text-xl font-medium text-primary-dark">
                Improve Cash Flow and Recover Outstanding Claims with Professional AR Management
              </p>
              <p className="mt-5 text-base leading-8 text-muted-text sm:text-lg">
                Delayed payments, claim denials, underpayments, and unpaid balances can weaken
                healthcare practice revenue and disrupt financial stability. Cure Hub Med Solutions
                provides professional accounts receivable medical billing support to track unpaid
                claims, follow up with insurance companies, and recover revenue that should not stay
                stuck in aging AR.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text sm:text-lg">
                Our medical AR recovery services combine disciplined claim monitoring, payer
                communication, correction workflows, and reporting visibility so providers can
                strengthen collections without overloading internal teams.
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
                {keywords.map((keyword) => (
                  <Badge key={keyword} variant="secondary" className="rounded-full px-3 py-1">
                    {keyword}
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
                    alt="Accounts receivable specialist reviewing unpaid medical claims and revenue reports"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#15365fe0] via-[#15365f88] to-transparent p-6">
                    <Badge className="border border-white/20 bg-white/15 text-medical-text-white">
                      AR Recovery Services
                    </Badge>
                    <p className="mt-3 max-w-md text-sm leading-6 text-medical-text-white">
                      Focused payer follow-up, claim correction, and collection visibility for
                      outstanding healthcare balances.
                    </p>
                  </div>
                </div>

                <div className="mt-4 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Aging Review
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      30/60/90/120+ AR prioritization
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Payer Follow-Up
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Insurance response tracking and escalation
                    </p>
                  </div>
                  <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg/70 p-4">
                    <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                      Reporting
                    </p>
                    <p className="mt-2 text-sm font-medium text-heading">
                      Actionable AR movement and recovery visibility
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </ServiceHero>

        <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="AR Education"
                title="What is Accounts Receivable in Medical Billing?"
                description="Accounts receivable in healthcare billing represents the unpaid claims and balances that providers are still owed for services already delivered."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                In practical terms, AR includes claims waiting on payer adjudication, denied claims
                requiring correction, underpaid claims needing follow-up, and patient balances still
                awaiting resolution. When AR management is weak, reimbursements slow down and cash
                flow becomes less predictable.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                Strong medical billing AR management keeps outstanding claims moving. It helps
                practices resolve payer issues faster, reduce claim aging, and prevent avoidable
                revenue delays that can affect staffing, operations, and long-term financial
                stability.
              </p>
            </MotionReveal>

            <Card className="border-primary/15 bg-gradient-to-br from-white to-medical-very-light-bg/80">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  AR Snapshot
                </Badge>
                <CardTitle>What AR teams monitor every day</CardTitle>
                <CardDescription>
                  Accounts receivable healthcare services focus on the balances and workflows most
                  likely to impact reimbursement speed.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {[
                  "Unpaid insurance claims",
                  "Patient balances requiring follow-up",
                  "Denied or rejected claims",
                  "Underpaid payer reimbursements",
                  "Aging balances across AR buckets",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-white/80 p-4"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <p className="m-0 text-sm text-heading">{item}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>

        <BenefitsSection
          label="Why It Matters"
          title="Why Accounts Receivable Collection is Important"
          description="A structured AR strategy helps healthcare organizations collect revenue sooner, correct workflow problems, and keep reimbursement performance stable."
          items={importanceItems}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Common Challenges"
          title="Common Accounts Receivable Challenges in Medical Billing"
          description="AR problems usually come from a combination of claim quality issues, payer delays, and inconsistent follow-up discipline."
          items={challenges}
          columns={3}
          tone="white"
        />

        <ProcessTimeline
          label="AR Workflow"
          title="Our Accounts Receivable Collection Process"
          description="Our AR recovery process is built to move unpaid claims forward with clear ownership, consistent payer follow-up, and actionable reporting."
          items={arProcess}
          tone="soft"
        />

        <BenefitsSection
          label="Outsourcing Benefits"
          title="Benefits of Outsourcing Accounts Receivable Collection"
          description="Outsourcing AR follow-up gives practices specialized collection support without increasing internal administrative burden."
          items={outsourcingBenefits}
          columns={5}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
            <MotionReveal>
              <SectionHeading
                label="Performance Strategy"
                title="How We Improve Accounts Receivable Performance"
                description="Cure Hub Med Solutions uses a structured AR strategy designed to reduce payment delays, recover more balances, and improve visibility across the revenue cycle."
              />
              <p className="mt-5 text-sm leading-8 text-muted-text sm:text-base">
                We start by organizing AR by age, payer, denial type, and reimbursement risk so the
                highest-value balances receive the right attention first. From there, our team
                applies consistent revenue cycle AR follow up services to resolve claim issues before
                they continue aging.
              </p>
              <p className="mt-4 text-sm leading-8 text-muted-text sm:text-base">
                That includes insurer communication, claim correction, documentation review, and
                reporting support that helps practices understand where money is getting delayed and
                how AR performance can improve over time.
              </p>
            </MotionReveal>

            <Card className="border-primary/15 bg-white shadow-lg shadow-primary/10">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  AR Improvement Checklist
                </Badge>
                <CardTitle>Execution areas that move AR faster</CardTitle>
                <CardDescription>
                  We focus on the claim, payer, and reporting actions that improve collection speed
                  and reimbursement consistency.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                {performanceChecklist.map((item) => (
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

        <ServiceFeaturesGrid
          label="Specialty Support"
          title="Accounts Receivable Services for Multiple Specialties"
          description="Our AR collection workflows adapt to different billing patterns, documentation needs, and payer rules across specialty-specific healthcare services."
          items={specialties.map((item) => ({
            title: item.title,
            description: "Explore specialty billing support",
            icon: item.icon,
            href: item.href,
          }))}
          columns={5}
          tone="white"
        />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions"
          description="Healthcare providers choose us for experienced AR follow-up, reliable communication, and revenue recovery workflows built for long-term performance."
          items={differentiators}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Explore Related Revenue Cycle Services"
          description="Strengthen AR performance further by connecting collection workflows with broader revenue cycle support."
          items={internalLinks}
          columns={4}
          tone="white"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <SectionHeading
              label="AR FAQ"
              title="Frequently Asked Questions About AR Collection Services"
              description="These answers support providers evaluating accounts receivable healthcare services and AR recovery support."
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
          title="Partner with Cure Hub Med Solutions for AR Recovery"
          description="Healthcare providers struggling with delayed payments, aged claims, and unpaid balances can improve financial performance with professional AR management. Our team helps practices recover revenue faster, reduce aging exposure, and strengthen overall revenue cycle performance."
          primaryCta={{
            href: "/contact-us#consultation-form",
            label: "Schedule a Consultation",
          }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Billing Experts" }}
        />
      </div>
    </>
  );
}
