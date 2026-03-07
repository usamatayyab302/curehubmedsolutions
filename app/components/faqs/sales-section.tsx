"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Improved cash flow",
  "Reduced accounts receivable days",
  "Fewer claim rejections",
  "Better revenue transparency",
];

export default function SalesSection() {
  return (
    <section className="border-t border-primary/10 bg-white px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
          className="rounded-3xl border border-primary/15 bg-medical-very-light-bg p-6 sm:p-8"
        >
          <p className="m-0 text-xs font-semibold uppercase tracking-[0.12em] text-primary">Trust</p>
          <h2 className="mt-3 font-heading text-3xl font-bold text-heading sm:text-4xl">
            Trusted Medical Billing Partner for Healthcare Providers
          </h2>
          <p className="mt-4 max-w-4xl text-sm leading-relaxed text-muted-text sm:text-base">
            Cure Hub Med Solutions supports healthcare providers across the United States with professional medical billing and revenue cycle management services.
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-muted-text sm:text-base">
            Healthcare organizations partner with our team to reduce claim denials, improve reimbursement timelines, and simplify billing operations.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            {benefits.map((item) => (
              <div key={item} className="rounded-xl border border-primary/15 bg-white p-4">
                <CheckCircle2 className="mr-2 inline h-4 w-4 text-accent" />
                <span className="text-sm font-medium text-heading">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}




