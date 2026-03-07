"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import {
  ArrowRight,
  Building,
  Building2,
  House,
  Baby,
  Bone,
  Brain,
  BrainCircuit,
  CircleDot,
  ClipboardCheck,
  Heart,
  Hospital,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  TrendingUp,
  Users,
  FlaskConical,
  Hand,
  Network,
  Scan,
  Droplets,
  Ribbon,
  Microscope,
  Accessibility,
  Ambulance,
  BriefcaseMedical,
  UserRound,
  Pill,
  Activity,
  Orbit,
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
  { title: "Chiropractic Billing", icon: Bone, slug: "/specialties/chiropractic-billing", description: "Spine and musculoskeletal claims." },
  { title: "Mental Health Billing", icon: Brain, slug: "/specialties/mental-health-billing", description: "Behavioral and therapy reimbursement." },
  { title: "Internal Medicine Billing", icon: Stethoscope, slug: "/specialties/internal-medicine-billing" },
  { title: "Nephrology Billing", icon: Droplets, slug: "/specialties/nephrology-billing" },
  { title: "Hospital Billing", icon: Activity, slug: "/specialties/hospital-billing" },
  { title: "Multi-Specialty Billing", icon: Orbit, slug: "/specialties/multi-specialty-billing" },
  { title: "Acupuncture Billing", icon: Sparkles, slug: "/specialties/acupuncture-billing" },
  { title: "Physician Billing", icon: UserRound, slug: "/specialties/physician-billing" },
  { title: "Sleep Medicine Billing", icon: Pill, slug: "/specialties/sleep-medicine-billing" },
  { title: "Physical Medicine Billing", icon: Hand, slug: "/specialties/physical-medicine-billing" },
  { title: "Family Medicine Billing", icon: Users, slug: "/specialties/family-medicine-billing" },
  { title: "Emergency Medicine Billing", icon: Heart, slug: "/specialties/emergency-medicine-billing" },
  { title: "Behavioral Health Billing", icon: Brain, slug: "/specialties/behavioral-health-billing" },
  { title: "Psychiatry Billing", icon: Network, slug: "/specialties/psychiatry-billing" },
  { title: "Neurology Billing", icon: Network, slug: "/specialties/neurology-billing" },
  { title: "Urgent Care Billing", icon: ShieldCheck, slug: "/specialties/urgent-care-billing" },
  { title: "Cardiology Billing", icon: Heart, slug: "/specialties/cardiology-billing" },
  { title: "Orthopedic Billing", icon: Bone, slug: "/specialties/orthopedic-billing" },
  { title: "Physical Therapy Billing", icon: Hand, slug: "/specialties/physical-therapy-billing" },
  { title: "Urology Billing", icon: Droplets, slug: "/specialties/urology-billing" },
  { title: "Gastroenterology Billing", icon: CircleDot, slug: "/specialties/gastroenterology-billing" },
  { title: "Speech Pathology Billing", icon: Users, slug: "/specialties/speech-pathology-billing" },
  { title: "Radiology Billing", icon: Scan, slug: "/specialties/radiology-billing" },
  { title: "Pediatrics Billing", icon: Baby, slug: "/specialties/pediatrics-billing" },
  { title: "Dermatology Billing", icon: Hand, slug: "/specialties/dermatology-billing" },
  { title: "Oncology Billing", icon: Ribbon, slug: "/specialties/oncology-billing" },
  { title: "Ophthalmology Billing", icon: Orbit, slug: "/specialties/ophthalmology-billing" },
  { title: "OB/GYN Billing", icon: Baby, slug: "/specialties/ob-gyn-billing" },
  { title: "Endocrinology Billing", icon: FlaskConical, slug: "/specialties/endocrinology-billing" },
  { title: "Pulmonology Billing", icon: Activity, slug: "/specialties/pulmonology-billing" },
  { title: "Rheumatology Billing", icon: Hand, slug: "/specialties/rheumatology-billing" },
  { title: "Pain Management Billing", icon: ShieldCheck, slug: "/specialties/pain-management-billing" },
  { title: "Podiatry Billing", icon: Bone, slug: "/specialties/podiatry-billing" },
  { title: "ENT Billing", icon: Stethoscope, slug: "/specialties/ent-billing" },
  { title: "Allergy and Immunology Billing", icon: Sparkles, slug: "/specialties/allergy-immunology-billing" },
  { title: "Infectious Disease Billing", icon: ShieldCheck, slug: "/specialties/infectious-disease-billing" },
  { title: "Hematology Billing", icon: Droplets, slug: "/specialties/hematology-billing" },
  { title: "Anesthesiology Billing", icon: Pill, slug: "/specialties/anesthesiology-billing" },
  { title: "Pathology Billing", icon: Microscope, slug: "/specialties/pathology-billing" },
  { title: "Plastic Surgery Billing", icon: Sparkles, slug: "/specialties/plastic-surgery-billing" },
  { title: "General Surgery Billing", icon: ClipboardCheck, slug: "/specialties/general-surgery-billing" },
  { title: "Home Health Billing", icon: House, slug: "/specialties/home-health-billing" },
  { title: "Hospice Billing", icon: Heart, slug: "/specialties/hospice-billing" },
  { title: "Occupational Therapy Billing", icon: Accessibility, slug: "/specialties/occupational-therapy-billing" },
  { title: "Skilled Nursing Facility Billing", icon: Building2, slug: "/specialties/skilled-nursing-facility-billing" },
  { title: "DME Billing", icon: BriefcaseMedical, slug: "/specialties/dme-billing" },
  { title: "Fertility and IVF Billing", icon: Baby, slug: "/specialties/fertility-ivf-billing" },
  { title: "Dental Billing", icon: Scan, slug: "/specialties/dental-billing" },
  { title: "Ambulatory Surgery Center Billing", icon: Hospital, slug: "/specialties/ambulatory-surgery-center-billing" },
  { title: "Telemedicine Billing", icon: Network, slug: "/specialties/telemedicine-billing" },
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
                  src="/images/team-doctors-standing-together-hospital-premises.jpg"
                  alt="Healthcare specialties billing support team"
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
                src="/images/young-male-psysician-with-patient-hospital.jpg"
                alt="Specialty-specific medical billing workflow support"
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

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeader label="Specialties" title="Medical Billing Specialties We Support" />
          <div className="mt-8">
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
                <div className="group relative flex min-h-[170px] items-center justify-center overflow-hidden rounded-3xl border border-primary/15 bg-white p-6 text-center shadow-sm transition-[transform,box-shadow,border-color,background-color] duration-300 hover:border-primary/30 hover:bg-primary/[0.03] hover:shadow-xl hover:shadow-primary/20">
                  <div className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary/70 via-teal/70 to-primary/70 opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-primary/10 blur-2xl transition-colors duration-300 group-hover:bg-primary/20" />
                  <span className="relative mx-auto mb-4 inline-flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary transition-all duration-300 group-hover:scale-105 group-hover:bg-primary group-hover:text-medical-text-white">
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



