"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  CheckCircle2,
  ClipboardCheck,
  Handshake,
  HeartPulse,
  LockKeyhole,
  ShieldCheck,
  Sparkles,
  Star,
  Stethoscope,
  Target,
  TrendingUp,
  UserCheck,
  Users,
  WalletCards,
  Linkedin,
  Quote,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AnimatedCounter({
  target,
  suffix = "",
  startAnimation,
}: {
  target: number;
  suffix?: string;
  startAnimation: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!startAnimation) return;
    let raf = 0;
    let start = 0;

    const run = (time: number) => {
      if (!start) start = time;
      const progress = Math.min((time - start) / 1300, 1);
      setCount(Math.round(target * progress));
      if (progress < 1) raf = window.requestAnimationFrame(run);
    };

    raf = window.requestAnimationFrame(run);
    return () => window.cancelAnimationFrame(raf);
  }, [startAnimation, target]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

type StatItem = {
  title: string;
  value: number;
  suffix: string;
  icon: typeof ClipboardCheck;
  prefix?: string;
};

const stats: StatItem[] = [
  { title: "Clean Claim Rate", value: 98, suffix: "%", icon: ClipboardCheck },
  { title: "Average Revenue Increase", value: 30, suffix: "%", icon: TrendingUp },
  { title: "Claim Turnaround", value: 14, suffix: " Days", icon: Activity, prefix: "7-14" },
  { title: "Healthcare Providers Served", value: 500, suffix: "+", icon: Users },
  { title: "Years Combined Experience", value: 20, suffix: "+", icon: Award },
];

const whyChoose = [
  {
    title: "Certified Medical Billing Experts",
    description:
      "Our specialists deliver accurate billing workflows tailored to U.S. healthcare payer requirements.",
    icon: UserCheck,
  },
  {
    title: "HIPAA-Compliant Billing Processes",
    description:
      "We protect sensitive patient information through secure and compliant medical billing operations.",
    icon: ShieldCheck,
  },
  {
    title: "Dedicated Account Management",
    description:
      "Every practice receives consistent support from a dedicated manager focused on performance outcomes.",
    icon: Users,
  },
  {
    title: "Transparent Reporting and Analytics",
    description:
      "Detailed reports and KPI visibility help healthcare practices make better revenue cycle decisions.",
    icon: BarChart3,
  },
] as const;

const coreValues = [
  { title: "Integrity", icon: ShieldCheck, text: "We operate with honesty, accountability, and ethical billing standards." },
  { title: "Innovation", icon: Sparkles, text: "We use modern tools and automation to improve billing efficiency." },
  { title: "Collaboration", icon: Handshake, text: "We work as an extension of your team with clear communication." },
  { title: "Excellence", icon: Award, text: "We maintain quality in coding, claims, follow-up, and reporting." },
  { title: "Commitment to Healthcare", icon: HeartPulse, text: "We help providers focus on care while we manage billing complexity." },
] as const;

const expertise = [
  { title: "Medical Billing Services", href: "/services/medical-billing-services", icon: ClipboardCheck },
  { title: "Revenue Cycle Management", href: "/services/revenue-cycle-management", icon: TrendingUp },
  { title: "Accounts Receivable Management", href: "/services/ar-collection-services", icon: WalletCards },
  { title: "Medical Coding Services", href: "/services", icon: BrainCircuit },
  { title: "Provider Credentialing", href: "/services/provider-credentialing", icon: LockKeyhole },
] as const;

const team = [
  { name: "Sarah Mitchell", role: "Senior Billing Manager", image: "/avatar/avatar-1.png" },
  { name: "David Romero", role: "Revenue Cycle Consultant", image: "/avatar/avatar-2.png" },
  { name: "Priya Nadeem", role: "Coding & Compliance Lead", image: "/avatar/avatar-3.png" },
] as const;

const impact = [
  "Reduce billing errors and claim rejections with compliant coding and submission workflows.",
  "Accelerate reimbursements with proactive payer follow-up and denial resolution strategies.",
  "Improve revenue cycle performance through transparent reporting and KPI-driven optimization.",
  "Allow clinical teams to focus more on patient care while we handle billing complexity.",
];

const testimonials = [
  {
    quote:
      "Cure Hub Med Solutions helped us reduce denials and significantly improve monthly collections in a short period.",
    name: "Dr. Emily Carter",
    role: "Physician",
  },
  {
    quote:
      "Their account management and reporting transparency gave our leadership team full confidence in billing operations.",
    name: "Mark Alvarez",
    role: "Practice Administrator",
  },
  {
    quote:
      "Our reimbursement cycle is faster and far more stable since partnering with Cure Hub Med Solutions.",
    name: "Nina George",
    role: "Clinic Manager",
  },
];

const heroTrust = [
  "Trusted by healthcare providers nationwide",
  "HIPAA-compliant billing processes",
  "Certified billing professionals",
];

export default function AboutPageContent() {
  const statsRef = useRef<HTMLElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.25 });

  return (
    <section className="overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-primary/15 bg-gradient-to-br from-primary to-primary-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-primary-dark/25" />
        <motion.div
          aria-hidden
          className="absolute -left-24 top-8 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 18, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          aria-hidden
          className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-teal/25 blur-3xl"
          animate={{ x: [0, -12, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="rounded-3xl bg-black/10 p-5 backdrop-blur-[1px]">
            <motion.p variants={itemVariants} className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-text-on-dark">
              About
            </motion.p>
            <motion.h1 variants={itemVariants} className="mt-3 font-heading text-4xl font-bold leading-tight text-medical-text-white sm:text-5xl">
              About Cure Hub Med Solutions
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 text-base font-medium text-medical-text-on-dark">
              Trusted Medical Billing and Revenue Cycle Management Partner for Healthcare Providers
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Cure Hub Med Solutions is dedicated to helping healthcare providers across the United States streamline billing operations, reduce claim denials, and improve revenue cycle performance.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6">
              <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }} className="inline-block">
                <Button asChild size="lg">
                  <Link href="/contact">
                    Schedule a Free Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
            <motion.ul variants={itemVariants} className="mt-6 grid gap-2 sm:grid-cols-3">
              {heroTrust.map((item) => (
                <li
                  key={item}
                  className="rounded-lg border border-white/25 bg-white/10 px-3 py-2 text-xs font-medium text-medical-text-on-dark"
                >
                  <CheckCircle2 className="mr-1 inline h-3.5 w-3.5" />
                  {item}
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="will-change-transform"
          >
            <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-3 shadow-xl backdrop-blur-sm">
              <motion.div
                className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[420px]"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              >
                <Image
                  src="/images/team-doctors-standing-row.jpg"
                  alt="Healthcare professionals team portrait"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="object-cover object-center"
                />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <motion.section
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8"
      >
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <motion.div variants={itemVariants} className="order-2 lg:order-1">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Company</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Who We Are</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Cure Hub Med Solutions is a healthcare support company specializing in medical billing and revenue cycle management services.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              We partner with healthcare providers to simplify billing operations, ensure accurate claim submissions, and optimize reimbursement processes.
            </p>
            <p className="mt-3 text-sm leading-relaxed text-muted-text sm:text-base">
              With extensive industry knowledge and modern billing technologies, our team provides reliable billing solutions that help healthcare practices improve efficiency while maintaining compliance with healthcare regulations.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Learn more about our{" "}
              <Link href="/services/medical-billing-services" className="font-medium text-primary hover:underline">
                medical billing services
              </Link>{" "}
              and{" "}
              <Link href="/services/revenue-cycle-management" className="font-medium text-primary hover:underline">
                revenue cycle management solutions
              </Link>
              .
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="order-1 lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-primary/15 bg-background p-3 shadow-lg">
              <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[420px]">
                <Image
                  src="/images/young-woman-doctor-gp-white-medical-uniform-consult-male-patient-private-hospital-female-therapist-speak-talk-with-man-client-consultation-clinic.jpg"
                  alt="Healthcare consultation and billing support"
                  fill
                  sizes="(max-width: 1024px) 100vw, 460px"
                  className="object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      <section ref={statsRef} className="relative border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Performance</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Our Performance in Numbers</h2>
          </div>

          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={itemVariants} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-4 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-teal/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-2xl font-bold text-heading">
                    {item.prefix ? item.prefix : <AnimatedCounter target={item.value} suffix={item.suffix} startAnimation={statsInView} />}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted-text">{item.title}</p>
                  <div className="mt-3 h-1.5 rounded-full bg-primary/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.min(100, (item.value / 5) * 10)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-1.5 rounded-full bg-gradient-to-r from-primary to-teal"
                    />
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Why Choose Us</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Why Healthcare Providers Choose Cure Hub Med Solutions</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {whyChoose.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={itemVariants} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                  <motion.span whileHover={{ scale: 1.06 }} className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </motion.span>
                  <h3 className="mt-4 font-heading text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.description}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Vision & Mission</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Vision and Mission</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 lg:grid-cols-2">
            <motion.article variants={itemVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-primary/15 bg-gradient-to-br from-white to-medical-very-light-bg/80 p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/15 text-primary">
                <Target className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-heading">Vision</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                To become a trusted healthcare revenue cycle partner that empowers medical practices to grow financially while delivering quality patient care.
              </p>
            </motion.article>
            <motion.article variants={itemVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-primary/15 bg-gradient-to-br from-white to-medical-very-light-bg/80 p-6 shadow-sm">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-teal/15 text-teal">
                <Stethoscope className="h-5 w-5" />
              </span>
              <h3 className="mt-4 font-heading text-xl font-semibold text-heading">Mission</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-text">
                Our mission is to simplify the medical billing process for healthcare providers by delivering reliable, compliant, and efficient billing solutions.
              </p>
            </motion.article>
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Values</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Our Core Values</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {coreValues.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article key={value.title} variants={itemVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-primary/15 bg-gradient-to-br from-background to-medical-very-light-bg/60 p-5 shadow-sm transition-[transform,box-shadow,border-color] hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-heading text-base font-semibold text-heading">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">{value.text}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="order-2 lg:order-1">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Expertise</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Medical Billing Expertise You Can Trust</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Our specialists deliver high-performance billing support across specialties and practice sizes. Explore our expertise in medical billing, revenue cycle operations, and payer communication workflows.
            </p>
            <ul className="mt-5 space-y-2">
              {expertise.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.title} className="flex items-center gap-2 text-sm text-heading">
                    <Icon className="h-4 w-4 text-primary" />
                    <Link href={item.href} className="font-medium hover:text-primary hover:underline">
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              We also support diverse{" "}
              <Link href="/specialties" className="font-medium text-primary hover:underline">
                healthcare specialties
              </Link>
              , provide industry insights through our{" "}
              <Link href="/blogs" className="font-medium text-primary hover:underline">
                medical billing blog
              </Link>
              , and offer tailored consulting via our{" "}
              <Link href="/contact" className="font-medium text-primary hover:underline">
                contact team
              </Link>
              .
            </p>
          </div>
          <div className="order-1 overflow-hidden rounded-3xl border border-primary/15 bg-white p-3 shadow-lg lg:order-2 lg:sticky lg:top-24 lg:self-start">
            <div className="relative h-[300px] overflow-hidden rounded-2xl sm:h-[420px]">
              <Image
                src="/images/looking-women-asian-stethoscope-medical-people.jpg"
                alt="Medical billing and healthcare operations expertise"
                fill
                sizes="(max-width: 1024px) 100vw, 520px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Team</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Meet the Professionals Behind Cure Hub Med Solutions</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Our team consists of billing specialists, healthcare consultants, and coding experts who work together to support healthcare practices nationwide.
            </p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <motion.article key={member.name} variants={itemVariants} whileHover={{ y: -5 }} className="group rounded-2xl border border-primary/15 bg-background p-5 text-center shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                <div className="mx-auto w-fit overflow-hidden rounded-full border-4 border-white shadow-md shadow-primary/10">
                  <Image src={member.image} alt={`${member.name} profile`} width={90} height={90} className="h-[90px] w-[90px] object-cover transition-transform duration-300 group-hover:scale-105" />
                </div>
                <h3 className="mt-4 font-heading text-lg font-semibold text-heading">{member.name}</h3>
                <p className="text-sm text-muted-text">{member.role}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-text">
                  Focused on medical billing accuracy, payer communication, and revenue cycle improvement.
                </p>
                <motion.a
                  whileHover={{ scale: 1.08 }}
                  href="#"
                  aria-label={`${member.name} LinkedIn`}
                  className="mt-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary"
                >
                  <Linkedin className="h-4 w-4" />
                </motion.a>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Impact</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Helping Healthcare Practices Thrive</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-3xl border border-primary/15 bg-white p-3 shadow-lg">
              <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[360px]">
                <Image
                  src="/images/serious-man-consulting-with-young-female-physician-doctor-checkup-meeting-hospital-skilled-general-practitioner-giving-healthcare-medical-advices-patient.jpg"
                  alt="Healthcare impact through better billing operations"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-3">
              {impact.map((item) => (
                <Card key={item} className="border-primary/15 bg-white">
                  <div className="flex items-start gap-3 p-4">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                    <p className="m-0 text-sm leading-relaxed text-muted-text">{item}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent" />
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Testimonials</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">What Healthcare Providers Say About Us</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
            {testimonials.map((item, index) => (
              <motion.article key={item.name} variants={itemVariants} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-3 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={`${item.name}-${i}`} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-text">&ldquo;{item.quote}&rdquo;</p>
                <div className="mt-5 flex items-center gap-3 border-t border-primary/10 pt-4">
                  <Image src={team[index]?.image ?? "/avatar/avatar-1.png"} alt={`${item.name} avatar`} width={44} height={44} className="rounded-full object-cover" />
                  <div>
                    <p className="m-0 text-sm font-semibold text-heading">{item.name}</p>
                    <p className="m-0 text-xs text-muted-text">{item.role}</p>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="relative border-t border-primary/10 bg-gradient-to-br from-primary-dark to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-6 rounded-3xl bg-black/10 p-6 backdrop-blur-[1px] lg:grid-cols-[1.1fr_0.9fr] sm:p-8">
          <div>
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-text-on-dark">Get Started</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-medical-text-white sm:text-4xl">Let&apos;s Improve Your Revenue Cycle Together</h2>
            <p className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Contact Cure Hub Med Solutions today to discover how our medical billing services can help your healthcare practice improve revenue cycle performance and operational efficiency.
            </p>
            <ul className="mt-4 space-y-2 text-sm text-medical-text-on-dark">
              <li><CheckCircle2 className="mr-2 inline h-4 w-4" />Reduce claim denials</li>
              <li><CheckCircle2 className="mr-2 inline h-4 w-4" />Improve reimbursements</li>
              <li><CheckCircle2 className="mr-2 inline h-4 w-4" />HIPAA-compliant billing</li>
            </ul>
          </div>
          <div className="flex justify-start lg:justify-center">
            <Button asChild size="lg" className="shadow-lg shadow-primary-dark/20">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}



