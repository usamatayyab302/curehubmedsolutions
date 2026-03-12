import type { LucideIcon } from "lucide-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import MotionReveal from "./motion-reveal";
import ServiceSectionHeading from "./service-section-heading";

export type ProcessTimelineItem = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

type ProcessTimelineProps = {
  label: string;
  title: string;
  description?: string;
  items: readonly ProcessTimelineItem[];
  tone?: "white" | "soft";
  className?: string;
};

const timelineGridByCount: Record<number, string> = {
  4: "xl:grid-cols-4",
  5: "xl:grid-cols-5",
  6: "xl:grid-cols-6",
};

export default function ProcessTimeline({
  label,
  title,
  description,
  items,
  tone = "soft",
  className,
}: ProcessTimelineProps) {
  const xlGrid = timelineGridByCount[items.length] ?? "xl:grid-cols-5";

  return (
    <section
      className={cn(
        "border-t border-primary/10 px-4 py-16 sm:px-6 lg:px-8",
        tone === "soft" ? "bg-medical-very-light-bg" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeading label={label} title={title} description={description} />

        <div className={cn("relative mt-10 grid gap-4 md:grid-cols-2", xlGrid)}>
          <div className="pointer-events-none absolute left-10 right-10 top-12 hidden h-px bg-gradient-to-r from-primary/0 via-primary/25 to-primary/0 xl:block" />
          {items.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionReveal key={item.title} delay={0.05 + index * 0.04} className="relative z-10">
                <div className="h-full transition-transform duration-200 ease-out hover:-translate-y-1.5">
                  <Card className="h-full border-primary/15 bg-white shadow-[0_18px_40px_-30px_rgba(21,54,95,0.28)]">
                    <CardHeader>
                      <div className="flex items-center justify-between gap-4">
                        <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                          <Icon className="h-5 w-5" />
                        </span>
                        <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                          Step {item.step}
                        </span>
                      </div>
                      <CardTitle className="text-lg">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm leading-7 text-muted-text">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
