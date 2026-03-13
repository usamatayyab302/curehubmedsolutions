import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

import MotionReveal from "./motion-reveal";

type CTASectionProps = {
  label: string;
  title: string;
  description: string;
  primaryCta: {
    href: string;
    label: string;
  };
  secondaryCta: {
    href: string;
    label: string;
  };
};

export default function CTASection({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
}: CTASectionProps) {
  return (
    <section className="border-t border-primary/10 bg-[linear-gradient(135deg,#15365f_0%,#1d4d7e_46%,#6fbd94_100%)] px-4 py-16 sm:px-6 lg:px-8">
      <MotionReveal className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/10 p-8 text-medical-text-white shadow-[0_24px_60px_rgba(10,35,60,0.28)] backdrop-blur md:p-12">
        <Badge className="border border-white/15 bg-white/10 text-medical-text-white">
          {label}
        </Badge>
        <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-sm leading-8 text-medical-text-white sm:text-base">
          {description}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button asChild size="lg" variant="secondary">
            <Link href={primaryCta.href}>
              {primaryCta.label}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white/20 bg-transparent text-medical-text-white hover:bg-white/10 hover:text-medical-text-white"
          >
            <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
          </Button>
        </div>
      </MotionReveal>
    </section>
  );
}
