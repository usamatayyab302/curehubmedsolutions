"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { ServiceItem } from "@/lib/site-content";

type ServicePageTemplateProps = {
  service: ServiceItem;
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  return (
    <div className="overflow-hidden">
      <section className="relative bg-gradient-to-br from-medical-very-light-bg via-medical-white to-accent-soft/25">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_20%,rgba(37,99,235,0.13),transparent_32%)]" />
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Service</p>
          <h1 className="font-heading text-4xl font-bold text-heading">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-text">{service.summary}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/contact-us">
                Get Free Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="/services">All Services</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold text-heading">Key Benefits</h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {service.benefits.map((item, index) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ delay: index * 0.08 }}
            >
              <Card className="h-full border-primary/15 bg-white/80 shadow-sm">
                <CardContent className="flex gap-2 p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-accent" />
                  <p className="m-0 text-sm text-heading">{item}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-medical-very-light-bg/60">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold text-heading">Service Execution Model</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-text">
            Every engagement is built around accountability metrics, turnaround expectations, and
            payer-specific workflows.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, index) => (
              <Card key={step} className="border-primary/15 bg-white/85">
                <CardContent className="p-4">
                  <p className="m-0 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                    Step {index + 1}
                  </p>
                  <p className="m-0 mt-2 text-sm font-medium text-heading">{step}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <h2 className="font-heading text-3xl font-bold text-heading">Frequently Asked Questions</h2>
            <div className="mt-6 space-y-3">
              {service.faqs.map((item) => (
                <details key={item.q} className="rounded-2xl border border-primary/15 bg-white p-4">
                  <summary className="cursor-pointer font-semibold text-heading">{item.q}</summary>
                  <p className="mt-2 text-sm leading-relaxed text-muted-text">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
          <Card className="h-fit border-primary/20 bg-gradient-to-br from-white to-medical-very-light-bg">
            <CardContent className="p-6">
              <p className="m-0 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-primary">
                <ShieldCheck className="h-4 w-4" />
                Quality Focus
              </p>
              <h3 className="mt-3 font-heading text-2xl font-bold text-heading">
                Built for Predictable Revenue
              </h3>
              <p className="mt-2 text-sm text-muted-text">
                We monitor clean claim performance, payer response time, and AR movement to keep
                billing operations aligned with revenue targets.
              </p>
              <p className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.1em] text-accent">
                <Sparkles className="h-4 w-4" />
                Monthly KPI reviews included
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 pb-14 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 rounded-3xl bg-gradient-to-r from-primary to-primary-dark p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="font-heading text-3xl font-bold text-medical-text-white">
              Looking for reliable {service.title.toLowerCase()} support?
            </h2>
            <p className="mt-2 text-sm text-medical-text-white">
              Talk to our team about a custom plan for your practice.
            </p>
          </div>
          <Button asChild variant="secondary" size="lg">
            <Link href="/contact-us">
              Get Free Consultation
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}



