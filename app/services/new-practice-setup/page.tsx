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
  MapPin,
  ReceiptText,
  ShieldCheck,
  Stethoscope,
  UserCheck,
  Users,
} from "lucide-react";

import HealthcareProvidersSupported from "@/components/services/HealthcareProvidersSupported";
import CTASection from "@/components/services/cta-section";
import MotionReveal from "@/components/services/motion-reveal";
import ServiceFeaturesGrid from "@/components/services/service-features-grid";
import ServiceHero from "@/components/services/service-hero";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/services/new-practice-setup`;

const practiceSetupServices = [
  {
    title: "NPI Registration",
    description: "End-to-end setup support for individual and organizational NPI registration.",
    icon: ClipboardList,
  },
  {
    title: "Medical Licensing Assistance",
    description: "Guidance through state licensing paperwork, timelines, and documentation readiness.",
    icon: FileText,
  },
  {
    title: "CLIA Certification Support",
    description: "Structured support for clinics that need CLIA registration and compliance planning.",
    icon: ShieldCheck,
  },
  {
    title: "Practice Location Assistance",
    description: "Operational planning support for site selection, setup requirements, and launch readiness.",
    icon: MapPin,
  },
  {
    title: "Office Setup and Infrastructure",
    description: "Workflow design for front office operations, scheduling, intake, and administrative coordination.",
    icon: Building2,
  },
  {
    title: "Medical Equipment and Supplies",
    description: "Planning support for essential operational tools, vendor coordination, and startup procurement.",
    icon: BriefcaseMedical,
  },
  {
    title: "Healthcare Staffing Support",
    description: "Help structuring staffing needs for administrative, billing, and office support functions.",
    icon: Users,
  },
  {
    title: "Policies and Procedures Development",
    description: "Creation of startup-ready operating procedures to keep your practice organized from day one.",
    icon: ClipboardCheck,
  },
  {
    title: "Background Checks and Compliance",
    description: "Support with compliance documentation, onboarding checks, and administrative risk reduction.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Billing System Setup",
    description: "Billing infrastructure planning for clean claims, posting workflows, and reimbursement tracking.",
    icon: ReceiptText,
  },
  {
    title: "Insurance Credentialing",
    description: "Provider enrollment and credentialing support to get your practice billing-ready faster.",
    icon: UserCheck,
  },
  {
    title: "Fee Schedule Development",
    description: "Strategic support for fee schedules, reimbursement alignment, and revenue planning.",
    icon: BarChart3,
  },
] as const;

const whyChooseUs = [
  {
    title: "Industry Expertise",
    description: "We understand how new medical practice setup services connect to billing, credentialing, and operational launch.",
    icon: Stethoscope,
  },
  {
    title: "End-to-End Support",
    description: "Our team helps coordinate the administrative, compliance, and revenue-cycle pieces that new practices need.",
    icon: CheckCircle2,
  },
  {
    title: "Compliance and Regulatory Knowledge",
    description: "We help healthcare providers reduce setup delays by planning for licensing, enrollment, and documentation requirements.",
    icon: ShieldCheck,
  },
  {
    title: "Revenue Optimization",
    description: "Startup planning includes billing workflows, credentialing readiness, and fee schedule structure to support collections.",
    icon: BarChart3,
  },
] as const;

export const metadata: Metadata = {
  title: "New Medical Practice Setup Services | Cure Hub Med Solutions",
  description:
    "Cure Hub Med Solutions provides complete new medical practice setup services including licensing, credentialing, medical billing setup, and healthcare consulting to help physicians launch successful practices.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "New Medical Practice Setup Services | Cure Hub Med Solutions",
    description:
      "Complete practice setup support including licensing, credentialing, billing infrastructure, and operational startup consulting for healthcare providers.",
    url: pageUrl,
    type: "website",
  },
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "New Medical Practice Setup Services",
    provider: {
      "@type": "Organization",
      name: "Cure Hub Med Solutions",
    },
    areaServed: "United States",
    description:
      "Cure Hub Med Solutions provides new medical practice setup services, healthcare practice startup consulting, physician practice setup support, and medical billing and credentialing setup for healthcare providers across the United States.",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      <div className="overflow-hidden bg-background">
        <ServiceHero className="relative border-b border-primary/10 bg-[linear-gradient(135deg,#e9f2f3_0%,#ffffff_46%,#d5e4e6_100%)]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(0,163,165,0.18),transparent_28%),radial-gradient(circle_at_bottom_right,rgba(114,196,189,0.22),transparent_32%)]" />
          <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.02fr_0.98fr] lg:px-8 lg:py-24">
            <div>
              <Badge className="border-primary/15 bg-white/80 text-primary">
                Healthcare Practice Startup Consulting
              </Badge>
              <h1 className="mt-5 max-w-3xl text-4xl font-bold tracking-tight text-heading md:text-5xl">
                New Medical Practice Setup Services
              </h1>
              <p className="mt-4 text-xl font-medium text-primary-dark">
                Complete Practice Setup Solutions for Healthcare Providers
              </p>
              <p className="mt-5 max-w-3xl text-base leading-8 text-muted-text">
                Starting a medical practice requires more than finding office space. Healthcare
                providers need licensing support, credentialing preparation, operational planning,
                billing infrastructure, compliance workflows, and administrative systems that are
                ready from day one. Cure Hub Med Solutions helps physicians launch with confidence
                through structured practice startup support built for the U.S. healthcare market.
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
                <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1">
                  new medical practice setup services
                </span>
                <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1">
                  physician practice setup support
                </span>
                <span className="rounded-full border border-primary/15 bg-white/80 px-3 py-1">
                  medical billing and credentialing setup
                </span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-primary/15 blur-3xl" />
              <div className="absolute -bottom-10 -right-6 h-36 w-36 rounded-full bg-teal/20 blur-3xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-primary/15 bg-white p-3 shadow-[0_24px_80px_rgba(15,23,42,0.12)]">
                <div className="relative h-[320px] overflow-hidden rounded-[1.5rem] sm:h-[420px]">
                  <Image
                    src="/images/digital-patient-intake-and-billing-workflow.jpg"
                    alt="Digital patient intake and administrative setup for a new medical practice"
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
                Practice Launch
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Start Your Medical Practice with Confidence
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-text">
                Launching a healthcare practice requires coordinated planning across licensing,
                payer enrollment, credentialing, staffing, compliance, and revenue cycle setup.
                Missing one step can delay operations, create billing issues, or slow down
                reimbursement after go-live.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text">
                Cure Hub Med Solutions simplifies the startup process for physicians and healthcare
                providers by organizing the administrative, operational, and billing components of
                a successful launch. From healthcare practice startup consulting to medical billing
                and credentialing setup, our team helps build the structure new practices need to
                operate efficiently from the start.
              </p>
            </div>
          </MotionReveal>
        </section>

        <ServiceFeaturesGrid
          label="Setup Services"
          title="Our New Practice Setup Services"
          description="Complete startup support for healthcare providers who need the right infrastructure, documentation, and revenue systems before opening their doors."
          items={practiceSetupServices}
          columns={3}
          tone="soft"
          align="center"
        />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1fr_1fr]">
            <MotionReveal>
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Why Choose Us
              </p>
              <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
                Why Healthcare Providers Choose Cure Hub Med Solutions
              </h2>
              <p className="mt-5 text-base leading-8 text-muted-text">
                Healthcare providers choose Cure Hub Med Solutions because we understand what it
                takes to launch a practice that is operationally sound, compliant, and revenue
                ready. We bring together startup planning, administrative setup, medical billing
                infrastructure, and credentialing workflows in one coordinated service model.
              </p>
              <p className="mt-4 text-base leading-8 text-muted-text">
                Whether you need new medical practice setup services, healthcare practice startup
                consulting, or physician practice setup support, our team helps reduce delays and
                bring structure to every stage of the launch process.
              </p>
            </MotionReveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {whyChooseUs.map((feature) => {
                const Icon = feature.icon;

                return (
                  <Card key={feature.title} className="border-primary/10 bg-white">
                    <CardContent className="p-6">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <h3 className="mt-4 text-lg font-semibold text-heading">{feature.title}</h3>
                      <p className="mt-3 text-sm leading-7 text-muted-text">{feature.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        <HealthcareProvidersSupported tone="soft" />

        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <MotionReveal className="mx-auto max-w-4xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Operations
            </p>
            <h2 className="mt-3 text-3xl font-bold text-heading sm:text-4xl">
              Streamline Your Practice Operations from Day One
            </h2>
            <p className="mt-5 text-base leading-8 text-muted-text">
              Efficient practice operations do not happen by accident. They require thoughtful
              administrative setup, billing workflows, payer readiness, compliance documentation,
              and operational planning that supports the patient experience as well as financial
              performance.
            </p>
            <p className="mt-4 text-base leading-8 text-muted-text">
              Cure Hub Med Solutions helps healthcare providers establish organized front-office
              workflows, billing infrastructure, credentialing readiness, and startup processes so
              the practice begins with structure instead of guesswork.
            </p>
          </MotionReveal>
        </section>

        <CTASection
          label="Launch Support"
          title="Launch Your Medical Practice with Expert Support"
          description="Cure Hub Med Solutions guides healthcare providers through the full startup process with healthcare practice startup consulting, credentialing support, billing setup, and administrative planning designed for a successful launch."
          primaryCta={{ href: "/contact-us", label: "Schedule a Consultation" }}
          secondaryCta={{ href: "/contact-us", label: "Contact Our Experts" }}
        />
      </div>
    </>
  );
}
