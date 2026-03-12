"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

const container: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-primary/15 bg-gradient-to-br from-primary to-primary-dark px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 bg-primary-dark/20" />
      <motion.div
        aria-hidden
        className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-white/10 blur-3xl"
        animate={{ x: [0, 16, 0], y: [0, -10, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2">
        <motion.div variants={container} initial="hidden" animate="show" className="rounded-3xl bg-black/10 p-6 backdrop-blur-[1px]">
          <motion.p variants={item} className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-text-on-dark">
            FAQ
          </motion.p>
          <motion.h1 variants={item} className="mt-3 font-heading text-4xl font-bold leading-tight text-medical-text-white sm:text-5xl">
            Frequently Asked Questions
          </motion.h1>
          <motion.p variants={item} className="mt-4 text-base font-medium text-medical-text-on-dark">
            Answers to Common Questions About Medical Billing Services
          </motion.p>
          <motion.p variants={item} className="mt-4 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
            At Cure Hub Med Solutions, we understand that healthcare providers often have important questions when considering outsourced medical billing and revenue cycle management services.
          </motion.p>
          <motion.p variants={item} className="mt-3 text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
            Our goal is to provide complete transparency about how our billing process works, how we improve practice revenue, and how we support healthcare providers across multiple specialties.
          </motion.p>
          <motion.div variants={item} className="mt-6">
            <Button asChild size="lg">
              <Link href="/contact-us">
                Contact Our Billing Experts
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.55 }}>
          <div className="overflow-hidden rounded-3xl border border-white/30 bg-white/10 p-3 shadow-xl backdrop-blur-sm">
            <div className="relative h-[320px] overflow-hidden rounded-2xl sm:h-[430px]">
              <Image
                src="/images/healthcare-support-team-consultation.jpg"
                alt="Healthcare support team available to answer billing and revenue cycle questions"
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
  );
}




