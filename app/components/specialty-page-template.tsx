"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

type SpecialtyPageTemplateProps = {
  title: string;
  summary: string;
  challenges: string[];
  strategies: string[];
};

export default function SpecialtyPageTemplate({
  title,
  summary,
  challenges,
  strategies,
}: SpecialtyPageTemplateProps) {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-medical-very-light-bg to-medical-white">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(16,185,129,0.12),transparent_33%)]" />
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8 lg:py-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Specialty</p>
          <h1 className="font-heading text-4xl font-bold text-heading">{title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-text">{summary}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-heading">Industry Challenges</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {challenges.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full border-primary/15 bg-white/85">
                <CardContent className="p-4">
                  <p className="m-0 text-sm text-heading">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-medical-very-light-bg/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <h2 className="font-heading text-3xl font-bold text-heading">How Billing Works for This Specialty</h2>
              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted-text">
                Our team aligns documentation, coding, and payer rules to reduce denials and speed up
                reimbursement. We maintain ongoing QA across each claim cycle and provide transparent
                reporting for your office.
              </p>
            </div>
            <Card className="border-primary/15 bg-white/85">
              <CardContent className="p-4">
                <p className="m-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                  <ShieldCheck className="h-4 w-4" />
                  Specialty Quality Layer
                </p>
                <p className="m-0 mt-3 text-sm text-muted-text">
                  We tune workflows to specialty requirements, reducing preventable denials and improving
                  payer response predictability.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-heading">Benefits of Outsourcing</h2>
        <div className="mt-6 grid gap-3 sm:grid-cols-2">
          {[
            "Lower denial rates and faster reimbursement turnaround",
            "Less administrative burden for internal staff",
            "Better compliance with specialty-specific payer rules",
            "Consistent AR follow-up and collection improvement",
          ].map((item) => (
            <Card key={item} className="border-primary/15 bg-white/85">
              <CardContent className="flex gap-2 p-4">
                <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                <p className="m-0 text-sm text-heading">{item}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-medical-very-light-bg/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-heading">Revenue Optimization Strategies</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {strategies.map((item) => (
              <Card key={item} className="border-primary/15 bg-white/85">
                <CardContent className="p-4">
                  <p className="m-0 text-sm text-heading">{item}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 pb-14 pt-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-medical-text-white">
              Need expert {title.toLowerCase()} support?
            </h2>
            <p className="mt-2 text-sm text-medical-text-white">
              Talk to our team and get a revenue-focused plan for your specialty.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact-us">
              Schedule Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}



