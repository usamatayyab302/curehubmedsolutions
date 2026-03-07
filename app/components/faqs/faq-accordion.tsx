"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Accordion, AccordionItem } from "@nextui-org/react";

import type { FaqItem } from "./faq-data";

type FAQAccordionProps = {
  items: FaqItem[];
};

export default function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <section className="border-t border-primary/10 bg-medical-very-light-bg px-4 py-14 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45 }}
        >
          <p className="m-0 text-center text-xs font-semibold uppercase tracking-[0.12em] text-primary">FAQ</p>
          <h2 className="mt-3 text-center font-heading text-3xl font-bold text-heading sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <div className="mt-8 rounded-3xl border border-primary/15 bg-white p-2 sm:p-3">
            <Accordion
              variant="splitted"
              selectionMode="multiple"
              itemClasses={{
                base: "group rounded-xl border border-primary/10 bg-background transition-colors",
                trigger: "px-4 py-4 sm:px-5",
                title: "text-sm sm:text-base font-semibold text-heading",
                content: "px-4 pb-4 text-sm leading-relaxed text-muted-text sm:px-5",
                indicator: "text-primary transition-transform group-data-[open=true]:rotate-180",
              }}
              className="gap-3"
            >
              {items.map((item, index) => (
                <AccordionItem
                  key={item.question}
                  aria-label={item.question}
                  title={item.question}
                  className="hover:bg-primary/5"
                >
                  <p className="m-0">{item.answer}</p>
                  {index < 6 ? (
                    <p className="mt-2 mb-0">
                      <Link href="/services/medical-billing-services" className="font-medium text-primary hover:underline">
                        Medical billing services
                      </Link>{" "}
                      and{" "}
                      <Link href="/services/revenue-cycle-management" className="font-medium text-primary hover:underline">
                        RCM services
                      </Link>{" "}
                      are also available, along with{" "}
                      <Link href="/services/provider-credentialing" className="font-medium text-primary hover:underline">
                        provider credentialing
                      </Link>
                      .
                    </p>
                  ) : null}
                  {index === items.length - 1 ? (
                    <p className="mt-2 mb-0">
                      You can also explore{" "}
                      <Link href="/specialties" className="font-medium text-primary hover:underline">
                        supported specialties
                      </Link>
                      , read our{" "}
                      <Link href="/blogs" className="font-medium text-primary hover:underline">
                        billing blog
                      </Link>
                      , or contact us on{" "}
                      <Link href="/contact-us" className="font-medium text-primary hover:underline">
                        the contact page
                      </Link>
                      .
                    </p>
                  ) : null}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </motion.div>
      </div>
    </section>
  );
}




