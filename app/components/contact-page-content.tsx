"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import type { Variants } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  Phone,
  Quote,
  ShieldCheck,
  Star,
  Stethoscope,
  TrendingUp,
  Users,
  ChevronDown,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import ConsultationForm from "@/components/forms/ConsultationForm";
import IntegrationLogoCarousel from "@/components/integration-logo-carousel";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

function AnimatedCounter({
  value,
  suffix,
  start,
}: {
  value: number;
  suffix: string;
  start: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    let t0 = 0;
    const run = (t: number) => {
      if (!t0) t0 = t;
      const p = Math.min((t - t0) / 1200, 1);
      setCount(Math.round(value * p));
      if (p < 1) raf = window.requestAnimationFrame(run);
    };
    raf = window.requestAnimationFrame(run);
    return () => window.cancelAnimationFrame(raf);
  }, [start, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

const trustStats = [
  { label: "Clean Claim Rate", value: 98, suffix: "%", icon: ShieldCheck },
  { label: "Average Revenue Improvement", value: 30, suffix: "%", icon: TrendingUp },
  { label: "Day Claim Turnaround", value: 14, suffix: "", icon: Clock3, prefix: "7-14" },
  { label: "Providers Supported", value: 1000, suffix: "+", icon: Users },
] as const;

const specialties = [
  "Chiropractic",
  "Mental Health",
  "Cardiology",
  "Dermatology",
  "Orthopedics",
  "Gastroenterology",
  "Family Medicine",
  "Internal Medicine",
];

const faqs = [
  {
    q: "How do I get started with medical billing services?",
    a: "Submit the consultation form and our team will review your billing needs, then schedule a discovery call.",
  },
  {
    q: "How long does it take to receive reimbursements?",
    a: "Timelines vary by payer, but our optimized submission and follow-up workflows help reduce reimbursement delays.",
  },
  {
    q: "Do you support multiple medical specialties?",
    a: "Yes, we support a broad range of specialties and tailor workflows based on coding and payer requirements.",
  },
  {
    q: "Is your billing process HIPAA compliant?",
    a: "Yes, our processes are designed to align with HIPAA requirements and secure handling of patient information.",
  },
];

export default function ContactPageContent() {
  const statsRef = useRef<HTMLElement | null>(null);
  const statsInView = useInView(statsRef, { once: true, amount: 0.25 });
  const [openFaq, setOpenFaq] = useState(faqs[0].q);

  return (
    <section className="overflow-x-hidden bg-background">
      <section className="relative overflow-hidden border-b border-primary/15 bg-gradient-to-br from-primary to-primary-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="absolute inset-0 bg-primary-dark/20" />
        <motion.div
          aria-hidden
          className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
          animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
          <motion.div variants={containerVariants} initial="hidden" animate="show" className="rounded-3xl bg-black/10 p-5 backdrop-blur-[1px] sm:p-6">
            <motion.h1 variants={itemVariants} className="font-heading text-4xl font-bold leading-tight text-medical-text-white sm:text-5xl">
              Let&apos;s Improve Your Medical Billing Performance
            </motion.h1>
            <motion.p variants={itemVariants} className="mt-4 text-base font-medium text-medical-text-on-dark">
              Partner with Cure Hub Med Solutions to streamline your revenue cycle, reduce claim denials, and accelerate reimbursements for your healthcare practice.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Healthcare providers face increasing administrative burdens when managing medical billing internally. At Cure Hub Med Solutions, we provide expert billing support that allows physicians and healthcare teams to focus on patient care while we manage the complexities of billing and revenue cycle management.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-3 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Our experienced billing professionals work with healthcare practices across the United States to improve financial performance through accurate claims processing, denial management, and efficient reimbursement strategies.
            </motion.p>
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <a href="#consultation-form">
                  Schedule a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/45 bg-white/10 text-medical-text-white hover:bg-white/20 hover:text-medical-text-white">
                <a href="#consultation-form">Request Billing Assessment</a>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
            <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-3 shadow-xl backdrop-blur-sm">
              <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[430px]">
                <Image
                  src="/images/healthcare-billing-support-team.jpg"
                  alt="Healthcare billing support team ready to assist provider organizations"
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

      <section ref={statsRef} className="border-t border-primary/10 bg-white px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Trust</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Trusted by Healthcare Providers Nationwide</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {trustStats.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.label} variants={itemVariants} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-4 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-teal/15 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="mt-3 text-2xl font-bold text-heading">
                    {"prefix" in item && item.prefix
                      ? item.prefix
                      : <AnimatedCounter value={item.value} suffix={item.suffix} start={statsInView} />}
                  </p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.08em] text-muted-text">{item.label}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section id="consultation-form" className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-start gap-8 lg:grid-cols-[1.08fr_0.92fr]">
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.p variants={itemVariants} className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Consultation</motion.p>
            <motion.h2 variants={itemVariants} className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
              Request Your Free Medical Billing Consultation
            </motion.h2>
            <motion.p variants={itemVariants} className="mt-4 text-sm leading-relaxed text-muted-text sm:text-base">
              Tell us about your practice and billing needs. Our team will review your information and contact you to discuss how our billing solutions can improve your practice revenue.
            </motion.p>
            <motion.p variants={itemVariants} className="mt-3 text-sm leading-relaxed text-muted-text">
              Learn more about our{" "}
              <Link href="/services/medical-billing-services" className="font-medium text-primary hover:underline">medical billing services</Link>
              {" "}and{" "}
              <Link href="/services/revenue-cycle-management" className="font-medium text-primary hover:underline">revenue cycle management solutions</Link>
              {" "}designed for healthcare providers.
            </motion.p>
          </motion.div>

          <motion.div variants={itemVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="rounded-3xl border border-primary/15 bg-white p-4 shadow-lg shadow-primary/10 sm:p-5">
            <ConsultationForm variant="contact" submitLabel="Request Consultation" />
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Contact</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Contact Our Billing Experts</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Some healthcare providers prefer direct contact. You can reach our billing specialists using the following contact details.
            </p>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Phone", value: "+1 (XXX) XXX-XXXX", icon: Phone },
              { title: "Email", value: "info@curehubmedsolutions.com", icon: Mail },
              { title: "Business Hours", value: "Monday - Friday, 9:00 AM - 5:00 PM (EST)", icon: Clock3 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} variants={itemVariants} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-3 font-heading text-lg font-semibold text-heading">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-text">{item.value}</p>
                </motion.article>
              );
            })}
          </motion.div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Location</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Visit Our Office</h2>
          </div>
          <div className="mt-8 overflow-hidden rounded-3xl border border-primary/15 bg-white p-3 shadow-lg">
            <div className="mb-3 rounded-xl bg-background p-4 text-sm text-muted-text">
              <p className="m-0 font-semibold text-heading">Cure Hub Med Solutions</p>
              <p className="m-0">Medical Billing Services</p>
              <p className="m-0">[Office Address Here], United States</p>
            </div>
            <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[420px]">
              <iframe
                title="Cure Hub Med Solutions Office Location"
                src="https://maps.google.com/maps?q=United%20States&t=&z=4&ie=UTF8&iwloc=&output=embed"
                className="h-full w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Revenue Impact</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">How Our Billing Services Improve Practice Revenue</h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-text">
              Healthcare practices often lose revenue due to coding errors, delayed claim submissions, and unresolved insurance denials. Cure Hub Med Solutions helps eliminate these issues by managing the entire billing process with accuracy and efficiency.
            </p>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl items-center gap-6 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="overflow-hidden rounded-3xl border border-primary/15 bg-background p-3 shadow-lg">
              <div className="relative h-[280px] overflow-hidden rounded-2xl sm:h-[360px]">
                <Image
                  src="/images/healthcare-revenue-cycle-reporting-analysis.jpg"
                  alt="Revenue cycle reporting review for improved practice performance"
                  fill
                  sizes="(max-width: 1024px) 100vw, 520px"
                  className="object-cover object-center"
                />
              </div>
            </div>
            <div className="space-y-3">
              {[
                "Faster reimbursements",
                "Reduced claim denials",
                "Improved billing accuracy",
                "Better revenue cycle transparency",
              ].map((item) => (
                <div key={item} className="rounded-xl border border-primary/15 bg-background p-4">
                  <CheckCircle2 className="mr-2 inline h-4 w-4 text-accent" />
                  <span className="text-sm text-heading">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Specialties</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Medical Specialties We Serve</h2>
          </div>
          <motion.div variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }} className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {specialties.map((item) => (
              <motion.article key={item} variants={itemVariants} whileHover={{ y: -4 }} className="rounded-2xl border border-primary/15 bg-white p-4 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                <Stethoscope className="h-5 w-5 text-primary" />
                <p className="mt-2 text-sm font-medium text-heading">{item}</p>
              </motion.article>
            ))}
          </motion.div>
          <div className="mt-6 text-center">
            <Button asChild variant="outline">
              <Link href="/specialties">Explore All Specialties</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Testimonials</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">What Healthcare Providers Say About Our Services</h2>
          </div>
          <div className="mx-auto mt-8 grid max-w-6xl grid-cols-1 gap-4 lg:grid-cols-3">
            {[
              "Cure Hub Med Solutions significantly improved our billing efficiency. Their team helped reduce claim denials and improved our reimbursement timelines.",
              "Their billing team is proactive, transparent, and deeply knowledgeable about payer requirements.",
              "Our staff now focuses on patient care while Cure Hub Med Solutions handles our revenue cycle with consistency.",
            ].map((quote, i) => (
              <motion.article key={i} whileHover={{ y: -5 }} className="rounded-2xl border border-primary/15 bg-background p-5 shadow-sm transition-[transform,box-shadow] hover:shadow-lg hover:shadow-primary/10">
                <div className="mb-3 flex items-center gap-1 text-accent">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <span className="mb-3 inline-flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Quote className="h-4 w-4" />
                </span>
                <p className="text-sm leading-relaxed text-muted-text">&ldquo;{quote}&rdquo;</p>
                <div className="mt-4 flex items-center gap-3 border-t border-primary/10 pt-4">
                  <Image src={`/avatar/avatar-${(i % 3) + 1}.png`} alt="Provider avatar" width={42} height={42} className="rounded-full object-cover" />
                  <p className="m-0 text-sm font-semibold text-heading">Medical Practice Administrator</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto max-w-3xl text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Integrations</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Compatible with Leading Healthcare Systems</h2>
          </div>
          <div className="mt-8">
            <IntegrationLogoCarousel />
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">FAQ</p>
            <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">Frequently Asked Questions</h2>
          </div>
          <div className="mt-8 space-y-3">
            {faqs.map((item) => {
              const isOpen = openFaq === item.q;
              return (
                <motion.article key={item.q} initial={false} className="overflow-hidden rounded-2xl border border-primary/15 bg-background shadow-sm">
                  <button type="button" onClick={() => setOpenFaq(isOpen ? "" : item.q)} className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left">
                    <span className="text-base font-semibold text-heading">{item.q}</span>
                    <ChevronDown className={`h-5 w-5 text-primary transition-transform ${isOpen ? "rotate-180" : ""}`} />
                  </button>
                  <motion.div initial={false} animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-muted-text">{item.a}</p>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="border-t border-primary/10 bg-gradient-to-br from-primary-dark to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
        <div className="mx-auto grid max-w-5xl items-center gap-6 rounded-3xl bg-black/10 p-6 backdrop-blur-[1px] lg:grid-cols-[1.1fr_0.9fr] sm:p-8">
          <div>
            <h2 className="font-heading text-3xl font-bold text-medical-text-white sm:text-4xl">Ready to Optimize Your Revenue Cycle?</h2>
            <p className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
              Speak with our medical billing experts today and discover how Cure Hub Med Solutions can help optimize your revenue cycle and reduce billing challenges.
            </p>
            <p className="mt-3 text-xs text-medical-text-on-dark">
              Also explore{" "}
              <Link href="/services/provider-credentialing" className="font-medium text-medical-text-white underline-offset-2 hover:underline">provider credentialing</Link>
              {" "}and insights from our{" "}
              <Link href="/blogs" className="font-medium text-medical-text-white underline-offset-2 hover:underline">blog resources</Link>.
            </p>
          </div>
          <div className="flex justify-start lg:justify-center">
            <Button asChild size="lg">
              <a href="#consultation-form">
                Schedule Your Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </section>
  );
}



