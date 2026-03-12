import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";

import MotionReveal from "./motion-reveal";
import ServiceSectionHeading from "./service-section-heading";

export type ServiceFeatureItem = {
  title: string;
  description?: string;
  icon?: LucideIcon;
  href?: string;
  badge?: string;
};

type ServiceFeaturesGridProps = {
  label: string;
  title: string;
  description?: string;
  items: readonly ServiceFeatureItem[];
  columns?: 2 | 3 | 4 | 5;
  tone?: "white" | "soft";
  align?: "left" | "center";
  className?: string;
};

const gridClasses: Record<NonNullable<ServiceFeaturesGridProps["columns"]>, string> = {
  2: "md:grid-cols-2",
  3: "md:grid-cols-2 xl:grid-cols-3",
  4: "md:grid-cols-2 xl:grid-cols-4",
  5: "md:grid-cols-2 xl:grid-cols-5",
};

export default function ServiceFeaturesGrid({
  label,
  title,
  description,
  items,
  columns = 3,
  tone = "white",
  align = "left",
  className,
}: ServiceFeaturesGridProps) {
  return (
    <section
      className={cn(
        "border-t border-primary/10 px-4 py-16 sm:px-6 lg:px-8",
        tone === "soft" ? "bg-medical-very-light-bg" : "bg-white",
        className
      )}
    >
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeading
          label={label}
          title={title}
          description={description}
          align={align}
        />

        <div className={cn("mt-8 grid gap-4", gridClasses[columns])}>
          {items.map((item, index) => {
            const Icon = item.icon;
            const content = (
              <div className="h-full transition-transform duration-200 ease-out hover:-translate-y-1.5">
                <Card className="group h-full overflow-hidden border-primary/15 bg-white shadow-[0_18px_40px_-30px_rgba(21,54,95,0.28)] transition-[border-color,box-shadow] hover:border-primary/30 hover:shadow-[0_28px_60px_-30px_rgba(21,54,95,0.3)]">
                  <div className="h-1 w-full bg-[var(--gradient-primary)] opacity-80 transition-opacity group-hover:opacity-100" />
                  <CardHeader>
                    <div className="flex items-start justify-between gap-4">
                      {Icon ? (
                        <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.65)]">
                          <Icon className="h-5 w-5" />
                        </span>
                      ) : (
                        <span className="inline-flex h-12 w-12 shrink-0 rounded-2xl bg-primary/8" />
                      )}
                      {item.badge ? (
                        <span className="rounded-full border border-primary/15 bg-primary/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                          {item.badge}
                        </span>
                      ) : null}
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                  {item.description ? (
                    <CardContent>
                      <CardDescription className="leading-7">{item.description}</CardDescription>
                      {item.href ? (
                        <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                          Explore more
                          <ArrowRight className="h-4 w-4" />
                        </div>
                      ) : null}
                    </CardContent>
                  ) : item.href ? (
                    <CardContent>
                      <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
                        Explore more
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </CardContent>
                  ) : null}
                </Card>
              </div>
            );

            return (
              <MotionReveal key={item.title} delay={0.05 + index * 0.04}>
                {item.href ? (
                  <Link href={item.href} className="block h-full">
                    {content}
                  </Link>
                ) : (
                  content
                )}
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
