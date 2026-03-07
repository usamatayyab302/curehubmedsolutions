"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function CTASection() {
  return (
    <section className="border-t border-primary/10 bg-gradient-to-br from-primary-dark to-teal px-4 py-14 sm:px-6 lg:px-8 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.45 }}
        className="mx-auto max-w-5xl rounded-3xl bg-black/10 p-6 text-center backdrop-blur-[1px] sm:p-8"
      >
        <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-medical-text-on-dark">Get Help</p>
        <h2 className="mt-3 font-heading text-3xl font-bold text-medical-text-white sm:text-4xl">
          Didn&apos;t Find the Answer You Were Looking For?
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-medical-text-on-dark sm:text-base">
          Our medical billing specialists are ready to answer your questions and help your practice improve its revenue cycle performance.
        </p>
        <div className="mt-6">
          <Button asChild size="lg">
            <Link href="/contact-us">
              Contact Our Billing Experts
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </motion.div>
    </section>
  );
}




