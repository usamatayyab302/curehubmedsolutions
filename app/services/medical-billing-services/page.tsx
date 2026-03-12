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
  Building2,
  CheckCircle2,
  ClipboardCheck,
  ClipboardList,
  FileText,
  HeartPulse,
  Hospital,
  ReceiptText,
  RotateCcw,
  Send,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";

import HealthcareProvidersSupported from "@/components/services/HealthcareProvidersSupported";
import BenefitsSection from "@/components/services/benefits-section";
import CTASection from "@/components/services/cta-section";
import MotionReveal from "@/components/services/motion-reveal";
import ServiceFeaturesGrid from "@/components/services/service-features-grid";
import ServiceHero from "@/components/services/service-hero";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/medical-billing-services`;

const billingServices = [
  {
    title: "Insurance Eligibility Verification",
    description:
      "Confirm payer coverage, benefits, and authorization requirements before services are rendered.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Coding Review",
    description:
      "Support coding accuracy with structured documentation review to reduce edits and billing risk.",
    icon: ClipboardCheck,
  },
  {
    title: "Claims Submission and Processing",
    description:
      "Submit clean claims efficiently and track them through payer workflows for faster reimbursement.",
    icon: Send,
  },
  {
    title: "Denial Management",
    description:
      "Analyze denials, correct root causes, and resubmit claims with a focused recovery strategy.",
    icon: RotateCcw,
  },
  {
    title: "Accounts Receivable Follow-Up",
    description:
      "Prioritize aging balances, payer follow-up, and unresolved claims to improve collections.",
    icon: Activity,
  },
  {
    title: "Payment Posting",
    description:
      "Accurate posting and reconciliation workflows that keep financial records organized and up to date.",
    icon: ReceiptText,
  },
  {
    title: "Patient Billing Support",
    description:
      "Patient statement coordination and billing support designed to improve communication and collections.",
    icon: Users,
  },
  {
    title: "Financial Reporting and Analytics",
    description:
      "Clear reporting dashboards and billing insights that help practices monitor performance and trends.",
    icon: BarChart3,
  },
] as const;

const rcmSteps = [
  { title: "Patient Pre-Authorization", icon: ClipboardList },
  { title: "Insurance Eligibility Verification", icon: ShieldCheck },
  { title: "Patient Registration Review", icon: UserCheck },
  { title: "Charge Entry and Claim Submission", icon: Send },
  { title: "Payment Posting and Reconciliation", icon: ReceiptText },
  { title: "Accounts Receivable Management", icon: Activity },
  { title: "Denial Analysis and Resubmission", icon: RotateCcw },
  { title: "Financial Performance Reporting", icon: BarChart3 },
] as const;

const benefits = [
  {
    title: "Increased Revenue Collection",
    description:
      "Improve capture rates and follow-up performance across the full reimbursement cycle.",
    icon: BarChart3,
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Free up internal staff from time-intensive billing tasks and repetitive payer follow-up.",
    icon: Users,
  },
  {
    title: "Faster Insurance Reimbursements",
    description:
      "Cleaner claims and tighter workflows help shorten payment turnaround time.",
    icon: Activity,
  },
  {
    title: "Improved Compliance",
    description:
      "Structured processes support documentation accuracy, HIPAA awareness, and payer alignment.",
    icon: ShieldCheck,
  },
  {
    title: "Advanced Reporting and Insights",
    description:
      "Track denials, collections, aging, and reimbursement trends with actionable reporting.",
    icon: ClipboardCheck,
  },
] as const;

const specialties = [
  { title: "Chiropractic", href: "/specialties/chiropractic-billing-services", icon: Bone },
  { title: "Mental Health", href: "/specialties/mental-health-billing-services", icon: BrainCircuit },
  { title: "Dermatology", href: "/specialties/dermatology-billing", icon: Stethoscope },
  { title: "Orthopedics", href: "/specialties/orthopedics-billing", icon: Bone },
  { title: "Cardiology", href: "/specialties/cardiology-billing", icon: HeartPulse },
  { title: "Gastroenterology", href: "/specialties/gastroenterology-billing", icon: Activity },
  { title: "Urology", href: "/specialties/urology-billing", icon: ClipboardCheck },
  { title: "Neurology", href: "/specialties/neurology-billing", icon: BrainCircuit },
  { title: "Pediatrics", href: "/specialties/pediatrics-billing", icon: Users },
  { title: "Family Medicine", href: "/specialties/family-medicine-billing", icon: UserCheck },
  { title: "Radiology", href: "/specialties/radiology-billing", icon: FileText },
  { title: "Pain Management", href: "/specialties/pain-management-billing", icon: Activity },
  { title: "Urgent Care", href: "/specialties/urgent-care-billing", icon: Hospital },
  { title: "Physical Therapy", href: "/specialties/physical-therapy-billing", icon: BriefcaseMedical },
] as const;

const technologyFeatures = [
  "Accurate Data Processing",
  "HIPAA-Compliant Security",
  "Secure Patient Information Handling",
  "Real-Time Financial Reporting",
  "Efficient Claims Tracking",
] as const;

const whyChooseUs = [
  {
    title: "Experienced Billing Professionals",
    description:
      "Our team understands payer workflows, medical billing operations, and specialty-specific billing challenges.",
    icon: Stethoscope,
  },
  {
    title: "Customized Billing Solutions",
    description:
      "We align workflows around your specialty mix, payer panel, documentation needs, and growth goals.",
    icon: BriefcaseMedical,
  },
  {
    title: "Compliance and Security",
    description:
      "Billing processes are designed with documentation discipline, privacy expectations, and operational consistency in mind.",
    icon: ShieldCheck,
  },
  {
    title: "Revenue Growth Focus",
    description:
      "We prioritize claim accuracy, collections visibility, and recovery workflows that support stronger revenue performance.",
    icon: BarChart3,
  },
] as const;

const relatedServices = [
  {
    title: "Provider Credentialing",
    description: "Support provider enrollment, payer applications, and credentialing readiness.",
    href: "/services/provider-credentialing",
    icon: UserCheck,
  },
  {
    title: "AR Recovery Services",
    description: "Recover aging balances and improve collections with focused follow-up strategies.",
    href: "/services/ar-recovery",
    icon: RotateCcw,
  },
  {
    title: "Front Office Support",
    description: "Strengthen intake, registration, and front-desk workflows that affect claim quality.",
    href: "/services/front-office-management",
    icon: Building2,
  },
  {
    title: "Specialties",
    description: "Explore specialty-specific billing support for diverse provider types and practice models.",
    href: "/specialties",
    icon: Hospital,
  },
] as const;

const faqs = [
  {
    question: "What do medical billing services include?",
    answer:
      "Medical billing services typically cover eligibility verification, charge review, claim submission, payment posting, denial management, accounts receivable follow-up, patient billing support, and financial reporting across the revenue cycle.",
  },
  {
    question: "How does outsourced medical billing help healthcare providers?",
    answer:
      "Outsourced medical billing helps reduce administrative burden, improve clean claim rates, accelerate reimbursement workflows, and give healthcare practices more visibility into denial trends and financial performance.",
  },
  {
    question: "Can Cure Hub Med Solutions support multiple specialties?",
    answer:
      "Yes. We support a wide range of specialties including chiropractic, mental health, cardiology, orthopedics, radiology, family medicine, physical therapy, and more through specialty-aware billing workflows.",
  },
  {
    question: "Do you provide revenue cycle management services beyond claim submission?",
    answer:
      "Yes. Our approach covers the broader revenue cycle, including eligibility workflows, claim follow-up, accounts receivable management, reporting, denial analysis, and operational support that improves reimbursement performance.",
  },
] as const;

export const metadata: Metadata = {
  title: "Medical Billing Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides professional medical billing services and revenue cycle management solutions to help healthcare providers improve reimbursements, reduce claim denials, and optimize practice revenue.",
  keywords: [
    "medical billing services",
    "revenue cycle management services",
    "outsourced medical billing",
    "healthcare billing services",
    "medical billing company USA",
  ],
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Medical Billing Services | Cure Hub Med Solutions",
    description:
      "Professional medical billing services and revenue cycle management solutions for healthcare providers across the United States.",
    url: pageUrl,
    type: "website",
    images: [
      {
        url: `${siteUrl}/images/medical-billing-specialist-reviewing-claims.jpg`,
        width: 1200,
        height: 630,
        alt: "Medical billing specialist reviewing claims for Cure Hub Med Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Medical Billing Services | Cure Hub Med Solutions",
    description:
      "Reliable medical billing and revenue cycle management for healthcare providers.",
    images: [
      `${siteUrl}/images/medical-billing-specialist-reviewing-claims.jpg`,
    ],
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Medical Billing Services",
    provider: {
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
      url: siteUrl,
    },
    areaServed: "United States",
    description:
      "Medical billing and revenue cycle management services for healthcare providers, including eligibility verification, claims submission, denial management, accounts receivable follow-up, and reporting.",
    url: pageUrl,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="overflow-hidden bg-background">
        <ServiceHero className="relative border-b border-primary/10 bg-[linear-gradient(135deg,#eaf4f4_0%,#ffffff_46%,#d8e8ea_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,163,165,0.16),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(114,196,189,0.22),transparent_34%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:py-24">
            <div>
              <Badge className="border-primary/15 bg-white/85 text-primary">
                medical billing company USA
              </Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-heading md:text-5xl">
                Medical Billing Services
              </h1>
              <p className="mt-4 text-xl font-medium text-primary-dark">
                Reliable Medical Billing and Revenue Cycle Management for Healthcare Providers
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-text">
                Healthcare providers face growing billing complexity, from insurance claims and
                coding accuracy to payer regulations, denial recovery, and patient billing. Cure
                Hub Med Solutions delivers outsourced medical billing and revenue cycle management
                services that simplify operations, improve reimbursement workflows, and support
                stronger financial performance.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <Link href="/contact-us">
                    Schedule a Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact-us">Talk to a Billing Expert</Link>
                </Button>
              </div>
              <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-muted-text">
                <span className="rounded-full border border-primary/15 bg-white/85 px-3 py-1">
                  revenue cycle management services
                </span>
                <span className="rounded-full border border-primary/15 bg-white/85 px-3 py-1">
                  outsourced medical billing
                </span>
                <span className="rounded-full border border-primary/15 bg-white/85 px-3 py-1">
                  healthcare billing services
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-6 -top-6 h-28 w-28 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-8 -right-4 h-36 w-36 rounded-full bg-teal/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                  <Image
                    src="/images/medical-billing-specialist-reviewing-claims.jpg"
                    alt="Medical billing specialist managing claim records and reimbursement paperwork"
                    fill
                    priority
                    sizes="(max-width: 1024px) 100vw, 540px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>
        </ServiceHero>

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <MotionReveal className="mx-auto max-w-7xl">
            <div className="max-w-4xl">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                End-to-End Support
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Comprehensive Medical Billing Solutions for Healthcare Practices
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-text">
                Cure Hub Med Solutions provides end-to-end medical billing services across the
                entire revenue cycle. From front-end eligibility workflows to claim submission,
                payment posting, denial recovery, and reporting, we help practices manage billing
                operations with more consistency and less internal strain.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text">
                Our team works alongside healthcare providers to reduce claim friction, strengthen
                reimbursement processes, and improve billing visibility. Practices looking for
                broader{" "}
                <Link
                  href="/services/revenue-cycle-management"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4"
                >
                  revenue cycle management services
                </Link>{" "}
                or tighter payer readiness through{" "}
                <Link
                  href="/services/provider-credentialing"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4"
                >
                  provider credentialing
                </Link>{" "}
                can use this page as a foundation for a connected billing strategy.
              </p>
            </div>
          </MotionReveal>
        </section>

        <ServiceFeaturesGrid
          label="Core Services"
          title="Our Medical Billing Services Include"
          description="Scalable healthcare billing services designed to support cleaner claims, stronger follow-up, and better financial visibility."
          items={billingServices}
          columns={3}
          tone="soft"
          align="center"
        />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="max-w-3xl">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Revenue Cycle Workflow
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Revenue Cycle Management Process
              </h2>
              <p className="mt-4 text-base leading-8 text-muted-text">
                A disciplined revenue cycle process creates fewer delays, stronger claim quality,
                and better financial reporting from the start of the patient journey through final
                reimbursement.
              </p>
            </div>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {rcmSteps.map((step, index) => {
                const Icon = step.icon;

                return (
                  <Card
                    key={step.title}
                    className="relative h-full border-primary/10 bg-white transition-shadow duration-300 hover:shadow-lg hover:shadow-primary/10"
                  >
                    <CardContent className="flex h-full flex-col p-6">
                      <div className="flex items-start justify-between gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="text-sm font-semibold text-primary/70">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3 className="mt-5 text-lg font-semibold text-heading">{step.title}</h3>
                      <div className="mt-6 h-px w-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent" />
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <BenefitsSection
          label="Outsourcing Benefits"
          title="Benefits of Outsourcing Medical Billing"
          items={benefits}
          columns={5}
          tone="soft"
        />

        <ServiceFeaturesGrid
          label="Specialty Support"
          title="Medical Billing Expertise Across Multiple Specialties"
          description="Explore specialty-specific billing support built around documentation demands, payer rules, and reimbursement patterns for diverse provider types."
          items={specialties.map((specialty) => ({
            title: specialty.title,
            description: "View specialty billing support",
            icon: specialty.icon,
            href: specialty.href,
          }))}
          columns={4}
          tone="white"
          align="center"
        />

        <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <MotionReveal>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Technology Integration
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Medical Billing Technology and Software Integration
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-text">
                Cure Hub Med Solutions helps healthcare providers align billing workflows with EHR,
                PM, and reporting systems so information moves more accurately across the practice.
                That means fewer manual gaps, better visibility into claim status, and stronger
                financial control from day one.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text">
                We support practices that need cleaner data flow between front-office processes,
                billing operations, and reimbursement reporting. Teams also looking to strengthen
                operational readiness can pair this service with{" "}
                <Link
                  href="/services/front-office-management"
                  className="font-semibold text-primary underline decoration-primary/30 underline-offset-4"
                >
                  front office support
                </Link>{" "}
                for a more complete workflow.
              </p>

              <Tabs defaultValue="ehr" className="mt-8">
                <TabsList>
                  <TabsTrigger value="ehr">EHR Integration</TabsTrigger>
                  <TabsTrigger value="claims">Claims Tracking</TabsTrigger>
                  <TabsTrigger value="reporting">Reporting</TabsTrigger>
                </TabsList>
                <TabsContent value="ehr">
                  Billing workflows are coordinated with practice management and EHR systems to
                  reduce missing data, improve claim readiness, and support consistent documentation
                  handoff between teams.
                </TabsContent>
                <TabsContent value="claims">
                  Claims tracking workflows give practices better visibility into submission status,
                  payer responses, denials, and follow-up priorities across the revenue cycle.
                </TabsContent>
                <TabsContent value="reporting">
                  Financial reporting structures highlight collections performance, reimbursement
                  lag, denial patterns, and operational opportunities that affect overall revenue.
                </TabsContent>
              </Tabs>
            </MotionReveal>

            <Card className="border-primary/10 bg-white shadow-sm">
              <CardContent className="p-6 sm:p-8">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Building2 className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-2xl font-semibold text-heading">
                  Secure, Connected Billing Infrastructure
                </h3>
                <div className="mt-6 space-y-4">
                  {technologyFeatures.map((feature) => (
                    <div key={feature} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                      <p className="m-0 text-sm leading-7 text-muted-text">{feature}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <HealthcareProvidersSupported />

        <ServiceFeaturesGrid
          label="Why Cure Hub"
          title="Why Choose Cure Hub Med Solutions for Medical Billing"
          description="Healthcare organizations need a billing partner that can balance claim accuracy, payer follow-up, operational discipline, and reporting clarity. Our team supports billing performance with structured processes that fit real-world practice needs."
          items={whyChooseUs}
          columns={4}
          tone="white"
        />

        <ServiceFeaturesGrid
          label="Related Services"
          title="Internal Service Links"
          description="Build a broader support model by connecting medical billing services with credentialing, accounts receivable recovery, operational support, and specialty billing pages."
          items={relatedServices}
          columns={4}
          tone="soft"
        />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="text-center">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Common Questions
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Medical Billing FAQ
              </h2>
            </div>

            <Accordion type="single" collapsible className="mt-10 space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.question} value={`item-${index + 1}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        <CTASection
          label="Billing Partnership"
          title="Partner with Cure Hub Med Solutions"
          description="Improve billing efficiency, reduce claim denials, and increase practice revenue with a medical billing partner that understands reimbursement pressure, reporting needs, and operational consistency across healthcare organizations."
          primaryCta={{ href: "/contact-us", label: "Schedule a Consultation" }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Billing Experts" }}
        />
      </div>
    </>
  );
}
