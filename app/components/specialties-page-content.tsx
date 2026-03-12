"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  Activity,
  Ambulance,
  Baby,
  Bone,
  Brain,
  BrainCircuit,
  Building,
  Building2,
  ClipboardCheck,
  Droplets,
  Eye,
  FlaskConical,
  Hand,
  Heart,
  HeartPulse,
  Hospital,
  Microscope,
  Monitor,
  Moon,
  Pill,
  Ribbon,
  Scan,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  UserRound,
  Users,
  Accessibility,
  BriefcaseMedical,
} from "lucide-react";
import {
  Accordion,
  AccordionItem,
  Card as NextCard,
  CardBody,
  Chip,
} from "@nextui-org/react";

import { Button } from "@/components/ui/button";
import SectionHeader from "@/components/SectionHeader";
import FeatureList from "@/components/FeatureList";
import SpecialtyGrid, { type SpecialtyItem } from "@/components/SpecialtyGrid";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const specialties: SpecialtyItem[] = [
  {
    title: "Family Medicine",
    icon: Users,
    slug: "/specialties/family-medicine-billing",
    description: "Primary care billing support for preventive visits, chronic care, and payer follow-up.",
  },
  {
    title: "Internal Medicine",
    icon: Stethoscope,
    slug: "/specialties/internal-medicine-billing",
    description: "Billing workflows for complex adult medicine encounters and documentation-heavy claims.",
  },
  {
    title: "Cardiology",
    icon: HeartPulse,
    slug: "/specialties/cardiology-billing",
    description: "Cardiology billing services tailored to diagnostics, procedures, and contract-based reimbursement.",
  },
  {
    title: "Orthopedics",
    icon: Bone,
    slug: "/specialties/orthopedics-billing",
    description: "Orthopedic claims management for procedures, therapy coordination, and denial reduction.",
  },
  {
    title: "Neurology",
    icon: Brain,
    slug: "/specialties/neurology-billing",
    description: "Neurology billing support for diagnostic studies, follow-up visits, and specialty coding accuracy.",
  },
  {
    title: "Dermatology",
    icon: Sparkles,
    slug: "/specialties/dermatology-billing",
    description: "Dermatology billing built for office procedures, skin treatments, and payer-specific edits.",
  },
  {
    title: "Gastroenterology",
    icon: Pill,
    slug: "/specialties/gastroenterology-billing",
    description: "Specialty billing for GI consults, endoscopy workflows, and documentation-driven reimbursement.",
  },
  {
    title: "Urology",
    icon: Droplets,
    slug: "/specialties/urology-billing",
    description: "Urology billing services for in-office procedures, diagnostics, and surgical claims.",
  },
  {
    title: "Pulmonology",
    icon: Activity,
    slug: "/specialties/pulmonology-billing",
    description: "Pulmonology revenue cycle support for respiratory testing, chronic care, and payer compliance.",
  },
  {
    title: "Endocrinology",
    icon: FlaskConical,
    slug: "/specialties/endocrinology-billing",
    description: "Focused billing services for endocrine evaluations, monitoring visits, and recurring treatment plans.",
  },
  {
    title: "Pediatrics",
    icon: Baby,
    slug: "/specialties/pediatrics-billing",
    description: "Pediatric billing designed for wellness visits, immunizations, and age-based coding requirements.",
  },
  {
    title: "Urgent Care",
    icon: Ambulance,
    slug: "/specialties/urgent-care-billing",
    description: "High-volume urgent care billing that keeps fast-turnaround claims clean and reimbursement moving.",
  },
  {
    title: "Chiropractic",
    icon: Bone,
    slug: "/specialties/chiropractic-billing-services",
    description: "Chiropractic billing support for spinal adjustments, modifiers, and medical necessity compliance.",
  },
  {
    title: "Mental Health",
    icon: BrainCircuit,
    slug: "/specialties/mental-health-billing-services",
    description: "Behavioral health billing workflows built around authorizations, compliance, and session accuracy.",
  },
  {
    title: "Psychiatry",
    icon: Brain,
    slug: "/specialties/psychiatry-billing",
    description: "Psychiatry billing services for evaluations, medication management, and telepsychiatry encounters.",
  },
  {
    title: "Psychology",
    icon: BrainCircuit,
    slug: "/specialties/psychology-billing",
    description: "Psychology billing aligned to therapy sessions, testing, and documentation-sensitive reimbursement.",
  },
  {
    title: "Pain Management",
    icon: ShieldCheck,
    slug: "/specialties/pain-management-billing",
    description: "Pain management billing support for injections, procedures, and prior-authorization-heavy claims.",
  },
  {
    title: "Radiology",
    icon: Scan,
    slug: "/specialties/radiology-billing",
    description: "Radiology billing built for imaging studies, interpretation services, and multi-provider workflows.",
  },
  {
    title: "Oncology",
    icon: Ribbon,
    slug: "/specialties/oncology-billing",
    description: "Oncology billing expertise for infusion services, treatment plans, and complex payer protocols.",
  },
  {
    title: "Ophthalmology",
    icon: Eye,
    slug: "/specialties/ophthalmology-billing",
    description: "Ophthalmology billing services for exams, procedures, diagnostics, and post-op care coordination.",
  },
  {
    title: "ENT",
    icon: Stethoscope,
    slug: "/specialties/ent-billing",
    description: "ENT billing support for office procedures, diagnostics, and payer-specific coding nuances.",
  },
  {
    title: "Podiatry",
    icon: Bone,
    slug: "/specialties/podiatry-billing",
    description: "Podiatry billing workflows built for foot and ankle care, procedures, and documentation accuracy.",
  },
  {
    title: "Nephrology",
    icon: Droplets,
    slug: "/specialties/nephrology-billing",
    description: "Nephrology billing for chronic kidney care, dialysis-related services, and complex follow-up visits.",
  },
  {
    title: "Hematology",
    icon: Microscope,
    slug: "/specialties/hematology-billing",
    description: "Hematology billing services for lab-intensive workflows, infusions, and specialty treatment coding.",
  },
  {
    title: "Rheumatology",
    icon: Hand,
    slug: "/specialties/rheumatology-billing",
    description: "Rheumatology billing support for chronic disease management, infusions, and ongoing payer edits.",
  },
  {
    title: "Plastic Surgery",
    icon: Sparkles,
    slug: "/specialties/plastic-surgery-billing",
    description: "Plastic surgery billing workflows for reconstructive procedures, documentation, and reimbursement review.",
  },
  {
    title: "General Surgery",
    icon: ClipboardCheck,
    slug: "/specialties/general-surgery-billing",
    description: "General surgery billing services for pre-op, operative, and post-op claim accuracy.",
  },
  {
    title: "Physical Therapy",
    icon: Accessibility,
    slug: "/specialties/physical-therapy-billing",
    description: "Physical therapy billing designed for therapy units, progress tracking, and payer compliance.",
  },
  {
    title: "Occupational Therapy",
    icon: Hand,
    slug: "/specialties/occupational-therapy-billing",
    description: "Occupational therapy billing services for treatment plans, functional assessments, and authorization support.",
  },
  {
    title: "Sports Medicine",
    icon: Activity,
    slug: "/specialties/sports-medicine-billing",
    description: "Sports medicine billing tailored to injury care, rehab coordination, and procedure-heavy claims.",
  },
  {
    title: "Allergy & Immunology",
    icon: Sparkles,
    slug: "/specialties/allergy-immunology-billing",
    description: "Specialty billing for allergy testing, immunotherapy, and ongoing treatment reimbursement.",
  },
  {
    title: "Infectious Disease",
    icon: ShieldCheck,
    slug: "/specialties/infectious-disease-billing",
    description: "Infectious disease billing support for consultations, complex care plans, and payer documentation rules.",
  },
  {
    title: "Geriatrics",
    icon: UserRound,
    slug: "/specialties/geriatrics-billing",
    description: "Geriatric billing services focused on chronic care, care coordination, and Medicare-heavy payer mix.",
  },
  {
    title: "Sleep Medicine",
    icon: Moon,
    slug: "/specialties/sleep-medicine-billing",
    description: "Sleep medicine billing for diagnostics, follow-ups, device management, and specialty coding.",
  },
  {
    title: "Obstetrics",
    icon: Baby,
    slug: "/specialties/obstetrics-billing",
    description: "Obstetrics billing support for prenatal care, delivery claims, and bundled payer reimbursement.",
  },
  {
    title: "Gynecology",
    icon: Heart,
    slug: "/specialties/gynecology-billing",
    description: "Gynecology billing services for office procedures, preventive care, and surgical claim workflows.",
  },
  {
    title: "Maternal Fetal Medicine",
    icon: Baby,
    slug: "/specialties/maternal-fetal-medicine-billing",
    description: "Billing support for high-risk pregnancy care, advanced imaging, and specialty maternal services.",
  },
  {
    title: "Bariatric Medicine",
    icon: Activity,
    slug: "/specialties/bariatric-medicine-billing",
    description: "Bariatric billing workflows for medically supervised weight care, procedures, and payer authorization rules.",
  },
  {
    title: "Vascular Surgery",
    icon: HeartPulse,
    slug: "/specialties/vascular-surgery-billing",
    description: "Vascular surgery billing for procedures, diagnostics, and specialty reimbursement management.",
  },
  {
    title: "Colorectal Surgery",
    icon: ClipboardCheck,
    slug: "/specialties/colorectal-surgery-billing",
    description: "Colorectal surgery billing designed for complex surgical workflows and documentation accuracy.",
  },
  {
    title: "Emergency Medicine",
    icon: Ambulance,
    slug: "/specialties/emergency-medicine-billing",
    description: "Emergency medicine billing support for fast-paced claims, acuity-based coding, and payer edits.",
  },
  {
    title: "Hospital Medicine",
    icon: Hospital,
    slug: "/specialties/hospital-medicine-billing",
    description: "Hospital medicine billing services for inpatient rounds, care transitions, and revenue integrity.",
  },
  {
    title: "Anesthesiology",
    icon: Pill,
    slug: "/specialties/anesthesiology-billing",
    description: "Anesthesiology billing support for time-based units, modifiers, and surgical coordination.",
  },
  {
    title: "Critical Care",
    icon: HeartPulse,
    slug: "/specialties/critical-care-billing",
    description: "Critical care billing workflows for intensive services, time tracking, and high-complexity documentation.",
  },
  {
    title: "Preventive Medicine",
    icon: ShieldCheck,
    slug: "/specialties/preventive-medicine-billing",
    description: "Preventive medicine billing designed for screenings, wellness visits, and payer policy compliance.",
  },
  {
    title: "Addiction Medicine",
    icon: BrainCircuit,
    slug: "/specialties/addiction-medicine-billing",
    description: "Addiction medicine billing services for treatment programs, counseling, and recurring authorization needs.",
  },
  {
    title: "Telemedicine",
    icon: Monitor,
    slug: "/specialties/telemedicine-billing",
    description: "Telemedicine billing built for virtual care rules, place-of-service requirements, and payer updates.",
  },
  {
    title: "Rehabilitation Medicine",
    icon: Accessibility,
    slug: "/specialties/rehabilitation-medicine-billing",
    description: "Rehabilitation medicine billing support for therapy-centered care plans and long-term treatment cycles.",
  },
  {
    title: "Clinical Psychology",
    icon: Brain,
    slug: "/specialties/clinical-psychology-billing",
    description: "Clinical psychology billing workflows for therapy, assessments, and behavioral health reimbursement accuracy.",
  },
  {
    title: "Hospital Billing",
    icon: Building2,
    slug: "/specialties/hospital-billing-services",
    description: "Hospital billing support for high-volume claims, departmental complexity, and contract-aware collections.",
  },
  {
    title: "Home Health",
    icon: Building,
    slug: "/specialties/home-health-billing",
    description: "Home health billing services for recurring visits, compliance documentation, and payer coordination.",
  },
  {
    title: "DME Billing",
    icon: BriefcaseMedical,
    slug: "/specialties/dme-billing",
    description: "Durable medical equipment billing support for documentation, authorizations, and recurring supply claims.",
  },
  {
    title: "Behavioral Health",
    icon: BrainCircuit,
    slug: "/specialties/behavioral-health-billing",
    description: "Behavioral health billing expertise for therapy programs, compliance, and session-based reimbursement.",
  },
  {
    title: "Clinical Laboratory",
    icon: Microscope,
    slug: "/specialties/clinical-laboratory-billing",
    description: "Laboratory billing services built for test-volume accuracy, coding precision, and payer reporting rules.",
  },
];

const supportFeatures = [
  "Accurate claim submission and processing",
  "Medical coding compliance and verification",
  "Denial management and claim resubmission",
  "Accounts receivable follow-up",
  "Insurance verification and eligibility checks",
  "Payment posting and reconciliation",
  "Detailed reporting and revenue analytics",
];

const benefits = [
  "Improved claim approval rates",
  "Reduced billing errors",
  "Faster reimbursement timelines",
  "Better revenue cycle transparency",
  "Reduced administrative workload",
  "Improved compliance with healthcare regulations",
];

const providerTypes = [
  { title: "Private medical practices", icon: Building2 },
  { title: "Multi-specialty clinics", icon: Building },
  { title: "Hospitals", icon: Hospital },
  { title: "Urgent care centers", icon: Ambulance },
  { title: "Diagnostic laboratories", icon: Microscope },
  { title: "Behavioral health clinics", icon: BrainCircuit },
  { title: "Physical therapy centers", icon: Accessibility },
  { title: "Specialty clinics", icon: BriefcaseMedical },
];

export default function SpecialtiesPageContent() {
  return (
    <section className="overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-primary/15 bg-gradient-to-br from-primary to-primary-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-primary-dark/20" />
        <motion.div
          aria-hidden
          className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="rounded-3xl bg-black/10 p-6 backdrop-blur-[1px]">
            <motion.h1 variants={itemVariants} className="font-heading text-4xl font-bold leading-tight text-medical-text-white sm:text-5xl">
              Medical Billing Services for 50+ Healthcare Specialties
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 text-base font-medium text-medical-text-on-dark">
              Specialty-Focused Medical Billing Solutions for Modern Healthcare Practices
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Cure Hub Med Solutions provides expert medical billing services designed specifically for healthcare providers across a wide range of medical specialties.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-3 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Each medical practice operates differently, and billing requirements vary depending on the type of care provided.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-3 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Our specialty-focused billing approach ensures accurate claim processing, optimized reimbursements, and efficient revenue cycle management.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6">
              <Button asChild size="lg">
                <Link href="/contact-us">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-3 shadow-xl backdrop-blur-sm">
              <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[440px]">
                <Image
                  src="/images/healthcare-billing-support-team.jpg"
                  alt="Specialty billing support team for diverse healthcare practices"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <div>
            <SectionHeader
              label="Introduction"
              title="Comprehensive Medical Billing Support Across Multiple Specialties"
            />
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Healthcare billing is complex, and every specialty follows unique coding standards, documentation rules, and payer requirements. A one-size billing workflow can cause delays, denials, and missed revenue opportunities.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              Cure Hub Med Solutions delivers specialty-focused medical billing services that improve claim accuracy, reduce administrative burden, and optimize reimbursement outcomes for healthcare providers across the United States.
            </p>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg p-4">
                <ClipboardCheck className="h-5 w-5 text-primary" />
                <p className="mt-2 mb-0 text-sm font-semibold text-heading">Accurate Claims</p>
              </div>
              <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg p-4">
                <ShieldCheck className="h-5 w-5 text-primary" />
                <p className="mt-2 mb-0 text-sm font-semibold text-heading">Compliance First</p>
              </div>
              <div className="rounded-2xl border border-primary/15 bg-medical-very-light-bg p-4">
                <TrendingUp className="h-5 w-5 text-primary" />
                <p className="mt-2 mb-0 text-sm font-semibold text-heading">Revenue Focused</p>
              </div>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Learn more about our{" "}
              <Link href="/services/medical-billing-services" className="font-medium text-primary hover:underline">
                medical billing services
              </Link>{" "}
              and{" "}
              <Link href="/services/revenue-cycle-management" className="font-medium text-primary hover:underline">
                revenue cycle management solutions
              </Link>
              . You can also explore{" "}
              <Link href="/services/provider-credentialing" className="font-medium text-primary hover:underline">
                provider credentialing support
              </Link>{" "}
              for faster payer enrollment workflows.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl border border-primary/15 bg-background p-3 shadow-lg"
          >
            <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[380px]">
              <Image
                src="/images/physician-patient-specialty-billing-consultation.jpg"
                alt="Physician and patient consultation reflecting specialty-specific billing workflows"
                fill
                sizes="(max-width: 1024px) 100vw, 480px"
                className="object-cover object-center"
              />
              <div className="absolute inset-x-3 bottom-3 rounded-xl border border-white/40 bg-white/90 p-3 shadow-md backdrop-blur">
                <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                  Specialty-Aligned Billing
                </p>
                <p className="m-0 mt-1 text-sm text-heading">
                  Built for coding precision, faster reimbursements, and predictable cash flow.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader
            label="Specialties"
            title="Our Medical Billing Specialties"
            description="We provide expert medical billing and revenue cycle management services for a wide range of healthcare specialties."
            align="center"
          />
          <div className="mt-12">
            <SpecialtyGrid items={specialties} />
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Why It Matters</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Why Specialty-Focused Medical Billing Is Important
          </h2>
          <div className="mt-5 grid gap-4 lg:grid-cols-2">
            <div className="rounded-2xl border border-primary/15 bg-background p-5">
              <p className="m-0 text-sm leading-relaxed text-muted-text">
                Each healthcare specialty follows unique billing protocols that directly impact claim approval rates and reimbursement timelines.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-background p-5">
              <p className="m-0 text-sm leading-relaxed text-muted-text">
                Specialty-specific coding requirements and payer rules can create billing challenges for healthcare providers.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-background p-5">
              <p className="m-0 text-sm leading-relaxed text-muted-text">
                Cure Hub Med Solutions implements specialty-focused billing strategies to ensure claims are submitted accurately and processed efficiently.
              </p>
            </div>
            <div className="rounded-2xl border border-primary/15 bg-background p-5">
              <p className="m-0 text-sm leading-relaxed text-muted-text">
                Our billing specialists stay updated with coding changes, insurance policies, and healthcare regulations to maximize reimbursement opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Support</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            How Cure Hub Med Solutions Supports Your Practice
          </h2>
          <div className="mt-6">
            <FeatureList items={supportFeatures} />
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Benefits</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Benefits of Partnering with Cure Hub Med Solutions
          </h2>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((item) => (
              <motion.div key={item} variants={itemVariants}>
                <NextCard className="border border-primary/15 bg-background">
                  <CardBody className="flex items-start gap-3 p-5">
                    <Sparkles className="h-5 w-5 text-primary" />
                    <p className="m-0 text-sm text-heading">{item}</p>
                  </CardBody>
                </NextCard>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-8 h-56 w-56 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute -right-16 bottom-10 h-56 w-56 rounded-full bg-teal/10 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Industry</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Healthcare Providers We Work With
          </h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-text sm:text-base">
            We support provider organizations of different sizes with specialty-focused billing workflows, compliance support, and revenue cycle optimization.
          </p>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4"
          >
            {providerTypes.map(({ title, icon: Icon }) => (
              <motion.div key={title} variants={itemVariants} whileHover={{ y: -6 }}>
                <div className="group relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-3xl border border-primary/15 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-300 md:hover:border-primary/30 md:hover:bg-primary/[0.03] md:hover:shadow-xl md:hover:shadow-primary/20">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-teal/70 to-primary/70 opacity-70 transition-opacity duration-300 md:group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-colors duration-300 md:group-hover:bg-primary/20" />
                  <span className="relative mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 md:group-hover:scale-105 md:group-hover:bg-primary md:group-hover:text-medical-text-white">
                    <Icon className="h-7 w-7" />
                  </span>
                  <p className="relative m-0 text-base font-semibold leading-snug text-heading">{title}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.12em] text-primary">FAQ</p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
            Frequently Asked Questions
          </h2>

          <div className="mt-8 rounded-2xl border border-primary/15 bg-background p-2">
            <Accordion
              variant="splitted"
              selectionMode="multiple"
              itemClasses={{
                base: "px-1",
                title: "text-sm sm:text-base font-semibold text-heading",
                content: "text-sm leading-relaxed text-muted-text",
                trigger: "py-3 sm:py-4",
                indicator: "text-primary",
              }}
            >
              <AccordionItem key="1" aria-label="What specialties do you support?" title="What specialties do you support?">
                We support a wide range of healthcare specialties including chiropractic, mental health, internal medicine, cardiology, pediatrics, dermatology, and many more.
              </AccordionItem>
              <AccordionItem key="2" aria-label="How do specialty billing services improve reimbursement rates?" title="How do specialty billing services improve reimbursement rates?">
                Specialty-focused billing improves claim accuracy and payer alignment, which helps reduce denials and accelerates reimbursements.
              </AccordionItem>
              <AccordionItem key="3" aria-label="Can you support multi-specialty healthcare organizations?" title="Can you support multi-specialty healthcare organizations?">
                Yes, we build billing workflows for both single-specialty and multi-specialty healthcare organizations.
              </AccordionItem>
              <AccordionItem key="4" aria-label="Is your billing process HIPAA compliant?" title="Is your billing process HIPAA compliant?">
                Yes, our billing operations are designed to support HIPAA-compliant handling of patient and practice information.
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-gradient-to-br from-primary-dark to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto max-w-5xl rounded-3xl bg-black/10 p-6 text-center backdrop-blur-[1px] sm:p-8">
          <h2 className="font-heading text-3xl font-bold text-medical-text-white sm:text-4xl">
            Ready to Improve Your Medical Billing Performance?
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
            Partner with Cure Hub Med Solutions and let our billing specialists manage your revenue cycle while you focus on patient care.
          </p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            <Chip startContent={<ShieldCheck className="h-3.5 w-3.5" />} className="border border-white/25 bg-white/10 text-medical-text-white">
              HIPAA-Compliant Processes
            </Chip>
            <Chip startContent={<ClipboardCheck className="h-3.5 w-3.5" />} className="border border-white/25 bg-white/10 text-medical-text-white">
              Accurate Claims
            </Chip>
            <Chip startContent={<TrendingUp className="h-3.5 w-3.5" />} className="border border-white/25 bg-white/10 text-medical-text-white">
              Revenue-Focused Strategy
            </Chip>
          </div>
          <div className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact-us">
                Schedule a Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <p className="mt-4 text-xs text-medical-text-on-dark">
            Also explore{" "}
            <Link href="/services/provider-credentialing" className="font-medium text-medical-text-white underline-offset-2 hover:underline">
              provider credentialing
            </Link>{" "}
            and insights on our{" "}
            <Link href="/blogs" className="font-medium text-medical-text-white underline-offset-2 hover:underline">
              healthcare billing blog
            </Link>
            .
          </p>
        </div>
      </section>
    </section>
  );
}



