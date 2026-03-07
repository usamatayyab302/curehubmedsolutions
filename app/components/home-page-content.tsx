"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  BarChart3,
  BrainCircuit,
  Bone,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  HandCoins,
  ReceiptText,
  RotateCcw,
  Send,
  ShieldCheck,
  ChevronDown,
  Star,
  Stethoscope,
  TrendingUp,
  UserCheck,
  UserRound,
  Users,
  WalletCards,
  Quote,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import ConsultationForm from "@/components/forms/ConsultationForm";
import IntegrationLogoCarousel from "@/components/integration-logo-carousel";

const trustIndicators = [
  "Faster Reimbursements",
  "Accurate Claim Submissions",
  "HIPAA-Compliant Processes",
];

const services = [
  {
    title: "Medical Billing Services",
    description:
      "Our medical billing services manage the entire billing process from patient registration to final payment collection. We ensure claims are submitted accurately and efficiently to insurance companies, reducing delays and improving reimbursement timelines.",
    icon: ReceiptText,
  },
  {
    title: "Revenue Cycle Management",
    description:
      "Our revenue cycle management services oversee every stage of the billing process including eligibility verification, coding review, claims submission, payment posting, and denial management to improve cash flow and reduce billing inefficiencies.",
    icon: TrendingUp,
  },
  {
    title: "Medical Coding Services",
    description:
      "Our certified coding professionals ensure that every claim follows current ICD-10, CPT, and HCPCS coding standards. Accurate coding reduces claim denials and ensures healthcare providers receive proper reimbursement.",
    icon: ClipboardCheck,
  },
  {
    title: "Accounts Receivable Management",
    description:
      "Our accounts receivable specialists track unpaid claims and follow up with insurance companies to resolve payment delays, helping healthcare practices recover outstanding revenue.",
    icon: HandCoins,
  },
  {
    title: "Provider Credentialing",
    description:
      "Our credentialing services help healthcare professionals enroll with insurance networks quickly and efficiently so practices can begin billing payers without unnecessary delays.",
    icon: UserCheck,
  },
  {
    title: "Front Office Management",
    description:
      "Our front office management support improves patient intake, insurance verification, and appointment workflow accuracy, helping healthcare practices reduce billing errors and strengthen overall revenue cycle performance.",
    icon: Users,
  },
];

const serviceCardBackgrounds = [
  "from-medical-white via-background to-medical-very-light-bg",
  "from-background via-medical-white to-medical-very-light-bg",
  "from-medical-very-light-bg via-medical-white to-background",
  "from-medical-white via-medical-very-light-bg to-background",
  "from-background via-medical-very-light-bg to-medical-white",
];

const specialties = [
  { title: "Chiropractic", icon: Bone, tone: "primary" },
  { title: "Mental Health", icon: BrainCircuit, tone: "teal" },
  { title: "Nephrology", icon: Activity, tone: "accent" },
  { title: "Personal Injury", icon: ShieldCheck, tone: "primary" },
  { title: "Pediatric", icon: UserRound, tone: "teal" },
  { title: "Multi-Specialty", icon: Stethoscope, tone: "accent" },
  { title: "Hospital", icon: Building2, tone: "primary" },
  { title: "Family Practice", icon: Users, tone: "teal" },
] as const;

const performanceMetrics = [
  {
    title: "98 Percent Clean Claim Rate",
    description:
      "Accurate coding and billing processes ensure that the majority of claims are accepted by insurance providers on the first submission.",
    value: 98,
    suffix: "%",
    icon: ClipboardCheck,
  },
  {
    title: "Up to 30 Percent Revenue Improvement",
    description:
      "Optimized billing workflows help practices identify revenue opportunities and reduce lost income caused by billing errors.",
    value: 30,
    suffix: "%",
    icon: TrendingUp,
  },
  {
    title: "Faster Claim Processing",
    description:
      "Our billing team submits claims promptly and monitors payer responses to ensure faster reimbursements.",
    value: 24,
    suffix: "h",
    icon: ReceiptText,
  },
  {
    title: "Reduced Accounts Receivable",
    description:
      "Active follow-up on unpaid claims helps reduce AR days and improve overall cash flow for healthcare practices.",
    value: 35,
    suffix: "%",
    icon: WalletCards,
  },
] as const;

const aboutValues = [
  {
    title: "Accuracy",
    description:
      "Every claim is carefully reviewed to ensure compliance with coding standards and payer requirements.",
    icon: ClipboardCheck,
  },
  {
    title: "Efficiency",
    description:
      "Our streamlined workflows reduce administrative workload and improve billing performance.",
    icon: TrendingUp,
  },
  {
    title: "Transparency",
    description:
      "Healthcare providers receive clear billing reports and insights into revenue cycle performance.",
    icon: BarChart3,
  },
] as const;

const whyChooseUsFeatures = [
  {
    title: "Experienced Billing Professionals",
    description:
      "Our billing specialists have extensive experience managing medical billing operations for healthcare practices across multiple specialties.",
    icon: UserCheck,
  },
  {
    title: "HIPAA Compliant Processes",
    description:
      "We follow strict HIPAA compliance standards to ensure that patient data remains secure and protected at all times.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Account Management",
    description:
      "Each client is assigned a dedicated account manager who oversees billing operations and ensures clear communication between your practice and our billing team.",
    icon: Users,
  },
  {
    title: "Advanced Billing Technology",
    description:
      "We utilize modern billing platforms and analytics tools that allow healthcare providers to track claims, monitor revenue performance, and identify areas for improvement.",
    icon: Activity,
  },
  {
    title: "Transparent Reporting",
    description:
      "Our reporting system provides detailed insights into billing performance, including claim acceptance rates, revenue trends, and reimbursement timelines.",
    icon: BarChart3,
  },
  {
    title: "Scalable Billing Solutions",
    description:
      "Our billing services are designed to support practices of all sizes, from small clinics to large healthcare organizations.",
    icon: WalletCards,
  },
] as const;

const processSteps = [
  {
    step: "01",
    title: "Patient Registration and Insurance Verification",
    description:
      "The billing process begins with accurate patient information and insurance verification. Our team ensures that all necessary details are collected before services are provided.",
    icon: UserRound,
  },
  {
    step: "02",
    title: "Medical Coding",
    description:
      "Certified coding specialists assign the correct ICD-10, CPT, and HCPCS codes based on clinical documentation.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Claim Submission",
    description:
      "Claims are submitted electronically to insurance providers for faster processing.",
    icon: Send,
  },
  {
    step: "04",
    title: "Payment Posting",
    description:
      "Payments received from insurance companies are recorded and reconciled to ensure accurate financial reporting.",
    icon: WalletCards,
  },
  {
    step: "05",
    title: "Denial Management",
    description:
      "Denied claims are reviewed, corrected, and resubmitted to ensure that practices receive proper reimbursement.",
    icon: RotateCcw,
  },
  {
    step: "06",
    title: "Reporting and Analytics",
    description:
      "Healthcare providers receive regular billing reports that provide insights into revenue performance and billing trends.",
    icon: BarChart3,
  },
] as const;

const outsourcingBenefits = [
  {
    title: "Reduced Administrative Workload",
    description:
      "Outsourcing billing eliminates the need for internal billing teams, allowing staff to focus on patient care and practice management.",
    icon: Users,
  },
  {
    title: "Improved Cash Flow",
    description:
      "Accurate billing processes help ensure faster reimbursements from insurance providers.",
    icon: TrendingUp,
  },
  {
    title: "Lower Operational Costs",
    description:
      "Outsourcing billing reduces overhead costs associated with hiring and training billing staff.",
    icon: WalletCards,
  },
  {
    title: "Fewer Claim Denials",
    description:
      "Experienced billing professionals ensure that claims are submitted correctly, reducing the risk of denials.",
    icon: ClipboardCheck,
  },
  {
    title: "Increased Efficiency",
    description:
      "Advanced billing systems and dedicated billing teams streamline the entire revenue cycle process.",
    icon: Activity,
  },
] as const;

const testimonials = [
  {
    quote:
      "Cure Hub Med Solutions significantly improved our billing efficiency. Our claim acceptance rate increased and reimbursements are processed much faster.",
    name: "Dr. Michael Carter",
    role: "Physician",
    image: "/avatar/avatar-1.png",
    rating: 5,
  },
  {
    quote:
      "Their billing team handles the entire revenue cycle smoothly. Our staff can now focus more on patient care instead of administrative tasks.",
    name: "Sofia Ramirez",
    role: "Practice Manager",
    image: "/avatar/avatar-2.png",
    rating: 5,
  },
  {
    quote:
      "Since working with Cure Hub Med Solutions, we have seen fewer claim denials and better revenue tracking for our practice.",
    name: "James Holloway",
    role: "Healthcare Administrator",
    image: "/avatar/avatar-3.png",
    rating: 5,
  },
] as const;

const faqItems = [
  {
    question: "What is medical billing?",
    answer:
      "Medical billing is the process of submitting claims to insurance companies and managing reimbursements for healthcare services provided by physicians and healthcare organizations.",
  },
  {
    question: "Why should healthcare providers outsource medical billing?",
    answer:
      "Outsourcing medical billing allows providers to reduce administrative workload, improve claim accuracy, and increase revenue cycle efficiency.",
  },
  {
    question: "How long does it take to receive reimbursements?",
    answer:
      "Reimbursement timelines depend on insurance providers, but efficient claim submission and follow-up can significantly reduce payment delays.",
  },
  {
    question: "Is medical billing secure?",
    answer:
      "Professional billing companies follow strict HIPAA compliance standards to protect patient information and maintain data security.",
  },
  {
    question: "How can medical billing improve practice revenue?",
    answer:
      "Accurate coding, efficient claim submission, and proactive denial management help ensure that practices receive the full reimbursement they deserve.",
  },
] as const;

const heroBackgroundImages = [
  "/images/team-doctors-standing-row.jpg",
  "/images/smiling-medical-team-standing-together-hospital-corridor.jpg",
  "/images/multicultural-doctors-on-reception.webp",
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

const serviceContainerVariants: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const serviceItemVariants: Variants = {
  hidden: { opacity: 1, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

function getSpecialtyToneClasses(tone: "primary" | "teal" | "accent") {
  if (tone === "teal") {
    return {
      iconWrap: "bg-teal/10 text-teal",
      hoverCard: "hover:bg-teal active:bg-teal",
      hoverIcon:
        "group-hover:bg-medical-white group-hover:text-teal group-active:bg-medical-white group-active:text-teal",
    };
  }

  if (tone === "accent") {
    return {
      iconWrap: "bg-accent/12 text-accent",
      hoverCard: "hover:bg-accent active:bg-accent",
      hoverIcon:
        "group-hover:bg-medical-white group-hover:text-accent group-active:bg-medical-white group-active:text-accent",
    };
  }

  return {
    iconWrap: "bg-primary/10 text-primary",
    hoverCard: "hover:bg-primary active:bg-primary",
    hoverIcon:
      "group-hover:bg-medical-white group-hover:text-primary group-active:bg-medical-white group-active:text-primary",
  };
}

type AnimatedCounterProps = {
  end: number;
  startAnimation: boolean;
  durationMs?: number;
  prefix?: string;
  suffix?: string;
};

function AnimatedCounter({
  end,
  startAnimation,
  durationMs = 1500,
  prefix = "",
  suffix = "",
}: AnimatedCounterProps) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;

    let rafId = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / durationMs, 1);
      setValue(end * progress);

      if (progress < 1) {
        rafId = window.requestAnimationFrame(step);
      }
    };

    rafId = window.requestAnimationFrame(step);
    return () => window.cancelAnimationFrame(rafId);
  }, [durationMs, end, startAnimation]);

  return (
    <span>
      {prefix}
      {Math.round(value)}
      {suffix}
    </span>
  );
}

export default function HomePageContent() {
  const [activeHeroBg, setActiveHeroBg] = useState(0);
  const [isMobileHero, setIsMobileHero] = useState(false);
  const performanceRef = useRef<HTMLElement | null>(null);
  const processRef = useRef<HTMLElement | null>(null);
  const performanceInView = useInView(performanceRef, { once: true, amount: 0.25 });
  const [metricsReady, setMetricsReady] = useState(false);
  const [openFaq, setOpenFaq] = useState<string>(faqItems[0].question);

  useEffect(() => {
    const media = window.matchMedia("(max-width: 767px)");
    const onChange = () => setIsMobileHero(media.matches);
    onChange();

    if (media.addEventListener) {
      media.addEventListener("change", onChange);
      return () => media.removeEventListener("change", onChange);
    }

    media.addListener(onChange);
    return () => media.removeListener(onChange);
  }, []);

  useEffect(() => {
    if (isMobileHero) return;

    const intervalId = window.setInterval(() => {
      setActiveHeroBg((prev) => (prev + 1) % heroBackgroundImages.length);
    }, 5200);

    return () => window.clearInterval(intervalId);
  }, [isMobileHero]);

  useEffect(() => {
    const timer = window.setTimeout(() => setMetricsReady(true), 220);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <section className="relative overflow-x-hidden bg-background">
      <section
        id="hero"
        className="relative overflow-hidden border-b border-primary/20 bg-gradient-to-br from-primary to-primary-dark"
      >
        <div className="pointer-events-none absolute inset-0">
          {isMobileHero ? (
            <div className="absolute inset-0">
              <Image
                src={heroBackgroundImages[0]}
                alt="Healthcare medical billing background visual"
                fill
                priority
                sizes="100vw"
                className="object-cover object-center"
              />
            </div>
          ) : (
            <AnimatePresence mode="wait">
              <motion.div
                key={heroBackgroundImages[activeHeroBg]}
                className="absolute inset-0"
                initial={{ opacity: 0, scale: 1.02, x: "5%" }}
                animate={{ opacity: 1, scale: 1.12, x: "-5%" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 5.1, ease: "easeInOut" }}
              >
                <Image
                  src={heroBackgroundImages[activeHeroBg]}
                  alt="Healthcare medical billing background visual"
                  fill
                  priority
                  sizes="100vw"
                  className="object-cover object-center"
                />
              </motion.div>
            </AnimatePresence>
          )}

          <div className="absolute inset-0 bg-primary-dark/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-dark/46 via-primary-dark/38 to-primary/28" />

          <motion.div
            aria-hidden
            className="absolute -left-28 top-8 hidden h-72 w-72 rounded-full bg-primary/18 blur-3xl md:block"
            animate={{ x: [0, 22, 0], y: [0, -12, 0] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            aria-hidden
            className="absolute -right-24 bottom-0 hidden h-80 w-80 rounded-full bg-teal/18 blur-3xl md:block"
            animate={{ x: [0, -18, 0], y: [0, 12, 0] }}
            transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>

        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 md:py-20 lg:grid-cols-2 lg:gap-14 lg:px-8 lg:py-24">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="max-w-xl rounded-3xl bg-black/15 p-4 backdrop-blur-[1px] sm:p-5 lg:p-6"
        >
          <motion.div variants={itemVariants}>
            <Badge className="rounded-full border border-medical-white/30 bg-medical-white/15 px-3.5 py-1 text-[10px] uppercase tracking-[0.12em] text-medical-text-white sm:px-4 sm:text-[11px]">
              U.S. Healthcare Revenue Cycle Experts
            </Badge>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-5 font-heading text-[1.9rem] font-bold leading-[1.1] tracking-tight text-[#F9FAFB] sm:text-[2.25rem] md:text-[2.55rem] lg:text-[2.9rem]"
          >
            <span className="block">Medical Billing Services</span>
            <span className="block">That Help U.S.</span>
            <span className="block">Healthcare Practices</span>
            <span className="block">
              <span className="hero-heading-type">Grow Revenue</span>
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="mt-5 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
            Cure Hub Med Solutions delivers Medical Billing Services and Revenue Cycle Management
            for U.S. healthcare providers who want cleaner claims, faster reimbursements, and less
            administrative burden.
          </motion.p>

          <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
            Our billing specialists align coding, claim submission, and payer follow-up workflows
            so your team can focus on patient care while we optimize collections and financial
            performance.
          </motion.p>

          <motion.div variants={itemVariants} className="mt-7 flex flex-wrap gap-3">
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button asChild size="lg" className="h-11 text-sm shadow-lg shadow-primary/20 sm:h-12 sm:text-base">
                <Link href="/contact-us">
                  Schedule a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-11 border-medical-white/45 bg-medical-white/12 text-medical-text-white hover:bg-medical-white/22 hover:text-medical-text-white sm:h-12 sm:text-base"
              >
                <Link href="/about-us">Learn More</Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.ul variants={itemVariants} className="mt-7 grid gap-2 sm:grid-cols-3">
            {trustIndicators.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-2 rounded-lg border border-medical-white/25 bg-medical-white/12 px-3 py-2 text-sm text-medical-text-white shadow-sm backdrop-blur-sm"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-medical-text-white" />
                  {item}
                </li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Card className="relative overflow-hidden rounded-3xl border-medical-white/30 bg-medical-white/12 p-6 shadow-xl shadow-primary-dark/25 backdrop-blur-md sm:p-7">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-medical-light-blue to-teal" />

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-medical-white/25 bg-medical-white/14 p-4">
                  <p className="m-0 text-xs uppercase tracking-[0.1em] text-medical-text-on-dark">Clean Claim Rate</p>
                  <p className="m-0 mt-2 text-2xl font-bold text-medical-text-white">98.2%</p>
                  <p className="m-0 mt-1 text-xs text-medical-text-on-dark">+4.1% last 90 days</p>
                </div>
                <div className="rounded-xl border border-medical-white/25 bg-medical-white/14 p-4">
                  <p className="m-0 text-xs uppercase tracking-[0.1em] text-medical-text-on-dark">Days in A/R</p>
                  <p className="m-0 mt-2 text-2xl font-bold text-medical-text-white">33</p>
                  <p className="m-0 mt-1 text-xs text-medical-text-on-dark">-9 day improvement</p>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-medical-white/20 bg-medical-white/12 p-4">
                <p className="m-0 text-xs uppercase tracking-[0.1em] text-medical-text-on-dark">Revenue Trend</p>
                <div className="mt-3 flex items-end gap-2">
                  {[42, 55, 48, 62, 70, 76].map((height, idx) => (
                    <div
                      key={idx}
                      className="w-7 rounded-t-md bg-gradient-to-t from-primary to-teal"
                      style={{ height }}
                    />
                  ))}
                </div>
                <p className="m-0 mt-3 flex items-center gap-1 text-xs font-medium text-medical-text-white">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Faster reimbursements with stronger claim quality.
                </p>
              </div>

              <div className="mt-4 flex items-center gap-3 rounded-xl border border-medical-white/20 bg-medical-white/10 p-3">
                <ShieldCheck className="h-5 w-5 text-medical-text-white" />
                <p className="m-0 text-sm font-medium text-medical-text-white">
                  HIPAA-aligned workflows and payer-compliant billing operations.
                </p>
              </div>
            </Card>
          </motion.div>
        </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 py-8 sm:py-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="m-0 mb-4 text-center text-xs font-semibold uppercase tracking-[0.12em] text-primary">
            Compatible with Leading Healthcare Systems
          </p>
          <IntegrationLogoCarousel />
        </div>
      </section>

      <section
        id="services"
        className="relative border-t border-primary/10 bg-medical-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-3xl">
              <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                Services
              </p>
              <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
                Comprehensive Medical Billing and Revenue Cycle Management Services
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
                Cure Hub Med Solutions provides end-to-end medical billing services designed to
                support healthcare practices of all sizes. Our solutions improve claim accuracy,
                reduce claim denials, and optimize revenue cycle management so healthcare providers
                can focus on delivering quality patient care.
              </p>
              <div className="mt-5">
                <Button asChild size="sm">
                  <Link href="/services">Learn More About Our Services</Link>
                </Button>
              </div>
            </div>
            <div className="w-full justify-self-stretch lg:justify-self-end">
              <div className="mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-primary/20 bg-medical-white p-2 shadow-lg shadow-primary/10 sm:p-3">
                <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-medical-very-light-bg">
                  <Image
                    src="/images/experienced-doctor-discussing-with-patient-his-private-medical-file-young-man-checking-up-with-his-md-consulting-about-way-his-health-treatment-health-insurance.jpg"
                    alt="Healthcare team consultation for medical billing workflow"
                    fill
                    sizes="(max-width: 1024px) 100vw, 560px"
                    className="object-cover object-center"
                  />
                </div>
              </div>
            </div>
          </div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="relative mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-6"
          >
            {services.map((service, index) => {
              const Icon = service.icon;
              const desktopSpan =
                services.length % 3 === 0
                  ? "lg:col-span-2"
                  : index < 3
                    ? "lg:col-span-2"
                    : "lg:col-span-3";
              const cardBg = serviceCardBackgrounds[index % serviceCardBackgrounds.length];

              return (
                <motion.article
                  key={service.title}
                  variants={serviceItemVariants}
                  whileHover={{ y: -6 }}
                  className={`group flex h-full min-h-[280px] flex-col rounded-2xl border border-primary/15 bg-gradient-to-br ${cardBg} p-5 shadow-sm backdrop-blur-sm transition-[transform,box-shadow,background-color,border-color] hover:border-primary/35 hover:bg-medical-white/65 hover:shadow-xl hover:shadow-primary/15 sm:min-h-[300px] ${desktopSpan}`}
                >
                  <motion.div
                    animate={{ y: [0, -3, 0] }}
                    transition={{ duration: 3.2, repeat: Infinity, delay: index * 0.14 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/15 bg-medical-white/80 text-primary"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.div>

                  <h3 className="mt-4 font-heading text-xl font-semibold text-heading">{service.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-text">{service.description}</p>

                  <div className="mt-4 h-[2px] w-14 bg-gradient-to-r from-primary to-teal transition-all duration-300 group-hover:w-20" />
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="specialties"
        className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Specialties
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
              Medical Billing Solutions for Multiple Healthcare Specialties
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Healthcare billing requirements vary depending on the specialty. Cure Hub Med
              Solutions provides specialized billing services tailored to the unique needs of
              different medical fields.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              Our billing experts understand the specific coding guidelines, payer requirements,
              and billing workflows associated with each specialty.
            </p>
          </div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {specialties.map((item) => {
              const Icon = item.icon;
              const toneClasses = getSpecialtyToneClasses(item.tone);

              return (
                <motion.article
                  key={item.title}
                  variants={serviceItemVariants}
                  whileHover={{ y: -6 }}
                  whileTap={{ y: -2, scale: 0.99 }}
                  className={`group flex min-h-[190px] flex-col items-center justify-center rounded-2xl border border-medical-white/25 bg-medical-white/95 p-5 text-center shadow-sm transition-[transform,background-color,color,box-shadow,border-color] duration-300 hover:border-transparent hover:shadow-xl hover:shadow-primary/25 active:border-transparent active:shadow-lg active:shadow-primary/25 ${toneClasses.hoverCard}`}
                >
                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    whileTap={{ scale: 1.04 }}
                    className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${toneClasses.iconWrap} transition-colors duration-300 ${toneClasses.hoverIcon}`}
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-heading transition-colors duration-300 group-hover:text-medical-text-white group-active:text-medical-text-white">
                    {item.title}
                  </h3>
                </motion.article>
              );
            })}
          </motion.div>

          <div className="mt-8 flex justify-center">
            <Button asChild size="lg">
              <Link href="/specialties">View All Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="performance-metrics"
        ref={performanceRef}
        className="overflow-x-hidden border-t border-primary/10 bg-medical-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="min-w-0">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Performance Metrics
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
              Delivering Measurable Results for Healthcare Practices
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Cure Hub Med Solutions focuses on delivering measurable improvements in medical
              billing performance. Our proven billing strategies help healthcare providers reduce
              claim denials, accelerate reimbursements, and improve revenue cycle efficiency.
            </p>
            <div className="mt-5">
              <Button asChild size="sm">
                <Link href="/contact-us">Improve Your Billing Performance</Link>
              </Button>
            </div>

            <motion.div
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
            >
              {performanceMetrics.map((item) => {
                const Icon = item.icon;

                return (
                  <motion.article
                    key={item.title}
                    variants={serviceItemVariants}
                    whileHover={{ y: -5 }}
                    className="rounded-2xl border border-primary/15 bg-background p-4 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </span>
                      <p className="m-0 text-lg font-bold text-primary">
                        <AnimatedCounter
                          end={item.value}
                          suffix={item.suffix}
                          startAnimation={performanceInView || metricsReady}
                        />
                      </p>
                    </div>
                    <h3 className="mt-3 font-heading text-base font-semibold text-heading">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>

            <motion.div
              variants={serviceItemVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
              className="mt-6 rounded-2xl border border-primary/15 bg-medical-very-light-bg/60 p-5 shadow-sm"
            >
              <div className="grid gap-5 sm:grid-cols-[0.7fr_1.3fr]">
                <div className="flex flex-col items-center justify-center gap-3">
                    <div
                      className="relative flex h-28 w-28 items-center justify-center rounded-full"
                      style={{
                        background:
                          "conic-gradient(var(--medical-primary-blue) 352.8deg, var(--medical-light-gray) 0deg)",
                      }}
                    >
                      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background text-xl font-bold text-heading">
                        98%
                      </div>
                    </div>
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.08em] text-muted-text">
                    Clean Claim Rate
                  </p>
                </div>

                <div>
                  <p className="m-0 text-sm font-semibold text-heading">Revenue Cycle Improvement</p>
                  <div className="mt-3 space-y-3">
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-muted-text">
                        <span>Revenue Improvement</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-surface">
                        <motion.div
                          className="h-2 rounded-full bg-primary"
                          initial={{ width: 0 }}
                          animate={{ width: performanceInView || metricsReady ? "30%" : 0 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-muted-text">
                        <span>AR Reduction</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-surface">
                        <motion.div
                          className="h-2 rounded-full bg-teal"
                          initial={{ width: 0 }}
                          animate={{ width: performanceInView || metricsReady ? "35%" : 0 }}
                          transition={{ duration: 1.2, delay: 0.15, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="mb-1 flex items-center justify-between text-xs text-muted-text">
                        <span>Claim Processing Speed</span>
                      </div>
                      <div className="h-2 rounded-full bg-muted-surface">
                        <motion.div
                          className="h-2 rounded-full bg-accent"
                          initial={{ width: 0 }}
                          animate={{ width: performanceInView || metricsReady ? "75%" : 0 }}
                          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-2 text-xs">
                    <span className="rounded-full bg-primary/10 px-3 py-1 font-medium text-primary">
                      Medical Billing Performance
                    </span>
                    <span className="rounded-full bg-teal/10 px-3 py-1 font-medium text-teal">
                      Revenue Cycle Improvement
                    </span>
                    <span className="rounded-full bg-accent/10 px-3 py-1 font-medium text-accent">
                      Healthcare Billing Efficiency
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="min-w-0 w-full lg:h-fit lg:sticky lg:top-28 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-primary/15 bg-medical-white p-3 shadow-lg shadow-primary/10">
              <div className="relative h-[420px] w-full overflow-hidden rounded-2xl bg-medical-very-light-bg sm:h-[500px] lg:h-[560px]">
                <Image
                  src="/images/pexels-tima-miroshnichenko-5452189.jpg"
                  alt="Healthcare revenue performance analytics dashboard"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="about"
        className="border-t border-primary/10 bg-background px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.div
            variants={serviceItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0 lg:order-1 lg:sticky lg:top-24 lg:self-start"
          >
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 6.2, repeat: Infinity, ease: "easeInOut" }}
              className="mx-auto w-full max-w-[560px] overflow-hidden rounded-3xl border border-primary/15 bg-medical-white p-3 shadow-lg shadow-primary/10"
            >
              <div className="relative h-[320px] w-full overflow-hidden rounded-2xl bg-medical-very-light-bg sm:h-[380px] lg:h-[460px]">
                <Image
                  src="/images/smiling-medical-team-standing-together-hospital-corridor.jpg"
                  alt="Medical billing professionals supporting healthcare practice operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0 lg:order-2"
          >
            <motion.p
              variants={serviceItemVariants}
              className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-light-blue"
            >
              About
            </motion.p>
            <motion.h2
              variants={serviceItemVariants}
              className="mt-3 max-w-3xl font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl"
            >
              Your Trusted Partner for Medical Billing Services
            </motion.h2>

            <motion.div variants={serviceItemVariants} className="mt-4 space-y-3">
              <p className="m-0 text-sm leading-relaxed text-muted-text sm:text-base">
                Cure Hub Med Solutions was founded with the mission of helping healthcare providers
                overcome the challenges of medical billing and revenue cycle management.
              </p>
              <p className="m-0 text-sm leading-relaxed text-muted-text sm:text-base">
                Healthcare providers face increasing administrative demands while also focusing on
                delivering quality patient care. Managing billing internally can place a
                significant burden on staff and lead to billing errors that impact revenue.
              </p>
              <p className="m-0 text-sm leading-relaxed text-muted-text sm:text-base">
                Our team of billing professionals works as an extension of your practice, providing
                reliable billing support while ensuring compliance with healthcare regulations and
                payer guidelines.
              </p>
              <p className="m-0 text-sm leading-relaxed text-muted-text sm:text-base">
                We combine industry expertise with advanced billing technology to deliver efficient
                and accurate billing solutions.
              </p>
            </motion.div>
            <motion.div variants={serviceItemVariants} className="mt-5">
              <Button asChild size="sm" variant="outline">
                <Link href="/about-us">Learn More About Our Team</Link>
              </Button>
            </motion.div>

            <motion.div
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3"
            >
              {aboutValues.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={serviceItemVariants}
                    whileHover={{ y: -5 }}
                    className="flex h-full min-h-[186px] flex-col rounded-2xl border border-primary/15 bg-medical-very-light-bg/60 p-4 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10"
                  >
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-3 font-heading text-base font-semibold text-heading">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.description}</p>
                  </motion.article>
                );
              })}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section
        id="why-choose-us"
        className="border-t border-primary/10 bg-medical-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-start gap-7 lg:grid-cols-[0.88fr_1.12fr]">
            <motion.div
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="min-w-0 lg:sticky lg:top-24 lg:self-start"
            >
              <motion.div
                variants={serviceItemVariants}
                className="overflow-hidden rounded-3xl border border-primary/15 bg-medical-white p-3 shadow-lg shadow-primary/10"
              >
                <div className="relative h-[290px] overflow-hidden rounded-2xl sm:h-[340px]">
                  <Image
                    src="/images/adult-beard-smiling-staff-main-professional.jpg"
                    alt="Healthcare office team supporting billing operations"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.15 }}
              className="min-w-0"
            >
              <motion.p
                variants={serviceItemVariants}
                className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary"
              >
                Why Choose Us
              </motion.p>
              <motion.h2
                variants={serviceItemVariants}
                className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl"
              >
                Why Healthcare Providers Choose Cure Hub Med Solutions
              </motion.h2>
              <motion.p
                variants={serviceItemVariants}
                className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base"
              >
                Healthcare organizations trust Cure Hub Med Solutions because we provide reliable
                medical billing services backed by industry expertise and modern technology.
              </motion.p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              {whyChooseUsFeatures.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article
                    key={item.title}
                    variants={serviceItemVariants}
                    whileHover={{ y: -6 }}
                    className="group flex h-full min-h-[210px] flex-col rounded-2xl border border-primary/15 bg-background p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-xl hover:shadow-primary/12"
                  >
                    <motion.span
                      whileHover={{ scale: 1.06 }}
                      className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform"
                    >
                      <Icon className="h-5 w-5" />
                    </motion.span>
                    <h3 className="mt-4 font-heading text-lg font-semibold text-heading">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.description}</p>
                  </motion.article>
                );
              })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="process"
        ref={processRef}
        className="border-t border-primary/10 bg-muted-surface px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Process
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
              Our Medical Billing Process
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Cure Hub Med Solutions follows a structured billing process designed to ensure
              accurate claim submission and efficient revenue cycle management.
            </p>
          </div>

          <div className="mt-8 grid items-start gap-7 lg:grid-cols-[1.05fr_0.95fr]">
            <motion.div
              variants={serviceContainerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
              className="relative order-2 min-w-0 lg:order-1"
            >
              <div className="pointer-events-none absolute left-[19px] top-5 h-[calc(100%-36px)] w-px bg-gradient-to-b from-primary/45 via-primary/25 to-transparent" />
              <div className="space-y-4">
                {processSteps.map((item) => {
                  const Icon = item.icon;
                  return (
                    <motion.article
                      key={item.step}
                      variants={serviceItemVariants}
                      whileHover={{ y: -4 }}
                      className="relative ml-11 rounded-2xl border border-primary/15 bg-medical-white p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/12"
                    >
                      <span className="absolute -left-11 top-6 inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary/20 bg-primary text-xs font-semibold text-medical-text-white shadow-md shadow-primary/20">
                        {item.step}
                      </span>
                      <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="text-base font-semibold leading-snug text-heading">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.description}</p>
                    </motion.article>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: "easeOut" }}
              className="order-1 min-w-0 lg:order-2 lg:sticky lg:top-24"
            >
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 6.4, repeat: Infinity, ease: "easeInOut" }}
                className="overflow-hidden rounded-3xl border border-primary/15 bg-medical-white p-3 shadow-lg shadow-primary/10"
              >
                <div className="relative h-[330px] overflow-hidden rounded-2xl sm:h-[420px] lg:h-[560px]">
                  <Image
                    src="/images/pexels-tima-miroshnichenko-5452209.jpg"
                    alt="Healthcare billing process workflow discussion"
                    fill
                    sizes="(max-width: 1024px) 100vw, 520px"
                    className="object-cover object-center"
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <section
        id="benefits"
        className="border-t border-primary/10 bg-gradient-to-br from-primary to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl rounded-2xl bg-black/10 p-4 text-center sm:p-5">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-text-on-dark">
              Benefits
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-medical-text-white sm:text-4xl">
              Benefits of Outsourcing Medical Billing
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Outsourcing medical billing allows healthcare providers to focus on delivering
              quality patient care while experienced billing professionals handle administrative
              tasks.
            </p>
          </div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {outsourcingBenefits.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article
                  key={item.title}
                  variants={serviceItemVariants}
                  whileHover={{ y: -6 }}
                  className="flex h-full min-h-[190px] flex-col rounded-2xl border border-medical-white/30 bg-medical-white/14 p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-xl hover:shadow-primary/25"
                >
                  <motion.span
                    whileHover={{ scale: 1.06 }}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-medical-white/18 text-medical-text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-medical-text-white">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#F3F4F6]">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>

          <p className="mx-auto mt-7 max-w-3xl rounded-xl bg-black/10 px-4 py-3 text-center text-sm leading-relaxed text-[#F9FAFB] sm:text-base">
            Healthcare providers who outsource billing often experience improved financial
            stability and operational efficiency.
          </p>
        </div>
      </section>

      <section
        id="testimonials"
        className="border-t border-primary/10 bg-medical-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
              Testimonials
            </p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
              What Healthcare Providers Say About Our Services
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Healthcare providers across the United States trust Cure Hub Med Solutions to manage
              their billing operations and improve revenue cycle performance.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              Our clients consistently report improvements in billing efficiency, reduced claim
              denials, and faster reimbursements after partnering with our team.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              Practices benefit from our proactive billing management and dedicated support,
              allowing them to focus on patient care while we handle the complexities of medical
              billing.
            </p>
          </div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
          >
            {testimonials.map((item) => (
              <motion.article
                key={item.name}
                variants={serviceItemVariants}
                whileHover={{ y: -6 }}
                className="group relative mt-10 rounded-2xl border border-primary/15 bg-background px-5 pb-5 pt-12 text-center shadow-sm transition-[transform,box-shadow] hover:shadow-xl hover:shadow-primary/20"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full border-4 border-medical-white bg-medical-very-light-bg shadow-md shadow-primary/10"
                >
                  <Image
                    src={item.image}
                    alt={`${item.name} profile`}
                    width={74}
                    height={74}
                    className="h-[74px] w-[74px] object-cover object-center"
                  />
                </motion.div>

                <div className="mb-3 flex items-center justify-center gap-1 text-accent">
                  {Array.from({ length: item.rating }).map((_, starIndex) => (
                    <Star key={`${item.name}-star-${starIndex}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>

                <motion.span
                  whileHover={{ scale: 1.08 }}
                  className="mx-auto mb-3 inline-flex h-9 w-9 items-center justify-center rounded-xl bg-primary/10 text-primary"
                >
                  <Quote className="h-4 w-4" />
                </motion.span>

                <p className="text-sm leading-relaxed text-muted-text">&ldquo;{item.quote}&rdquo;</p>

                <div className="mt-5 border-t border-primary/10 pt-4">
                  <p className="m-0 text-sm font-semibold text-heading">{item.name}</p>
                  <p className="m-0 text-xs text-muted-text">{item.role}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-8 flex justify-center">
            <Button asChild size="sm" variant="outline">
              <Link href="/contact-us">See How We Help Practices</Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        id="faq"
        className="border-t border-primary/10 bg-medical-white px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold leading-tight text-heading sm:text-4xl">
              Frequently Asked Questions
            </h2>
          </div>

          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="mt-8 space-y-3"
          >
            {faqItems.map((item) => {
              const isOpen = openFaq === item.question;

              return (
                <motion.article
                  key={item.question}
                  variants={serviceItemVariants}
                  className="overflow-hidden rounded-2xl border border-primary/15 bg-medical-white shadow-sm transition-[box-shadow,border-color] hover:border-primary/30 hover:shadow-md hover:shadow-primary/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? "" : item.question)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                    aria-expanded={isOpen}
                  >
                    <span className="text-base font-semibold text-heading">{item.question}</span>
                    <ChevronDown
                      className={`h-5 w-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    />
                  </button>

                  <motion.div
                    initial={false}
                    animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.28, ease: "easeOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-text">{item.answer}</p>
                  </motion.div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section
        id="final-cta"
        className="border-t border-primary/10 bg-gradient-to-br from-primary-dark to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          <motion.div
            variants={serviceContainerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            className="min-w-0 rounded-3xl bg-black/10 p-4 backdrop-blur-[1px] sm:p-5"
          >
            <motion.p
              variants={serviceItemVariants}
              className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-[rgba(255,255,255,0.85)]"
            >
              Get Started
            </motion.p>
            <motion.h2
              variants={serviceItemVariants}
              className="mt-3 font-heading text-3xl font-bold leading-tight text-medical-text-white sm:text-4xl"
            >
              Ready to Improve Your Medical Billing Performance?
            </motion.h2>

            <motion.p variants={serviceItemVariants} className="mt-4 text-sm leading-relaxed text-[#F9FAFB] sm:text-base">
              Cure Hub Med Solutions is committed to helping healthcare providers optimize their
              revenue cycle and reduce billing challenges.
            </motion.p>
            <motion.p variants={serviceItemVariants} className="mt-3 text-sm leading-relaxed text-[#F9FAFB] sm:text-base">
              Our expert billing team works closely with healthcare practices to deliver accurate,
              efficient, and compliant medical billing services.
            </motion.p>
            <motion.p variants={serviceItemVariants} className="mt-3 text-sm leading-relaxed text-[#F3F4F6] sm:text-base">
              If your practice is looking for a reliable billing partner, our team is ready to
              help.
            </motion.p>

            <motion.p
              variants={serviceItemVariants}
              className="mt-5 rounded-xl border border-medical-white/35 bg-medical-white/15 px-4 py-3 text-base font-semibold text-medical-text-white"
            >
              Schedule Your Free Consultation Today
            </motion.p>

            <motion.div
              variants={serviceItemVariants}
              className="mt-6 overflow-hidden rounded-3xl border border-medical-white/25 bg-medical-white/10 p-2 backdrop-blur-sm"
            >
              <div className="relative h-[210px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/young-woman-doctor-gp-white-medical-uniform-consult-male-patient-private-hospital-female-therapist-speak-talk-with-man-client-consultation-clinic.jpg"
                  alt="Healthcare consultation support for medical billing"
                  fill
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={serviceItemVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ y: -2 }}
            className="min-w-0 rounded-3xl border border-primary/15 bg-medical-white p-4 shadow-lg shadow-primary/10 transition-[box-shadow,transform] hover:shadow-xl hover:shadow-primary/15 sm:p-5"
          >
            <ConsultationForm />
          </motion.div>
        </div>
      </section>
    </section>
  );
}



