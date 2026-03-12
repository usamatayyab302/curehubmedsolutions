import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

import MotionReveal from "./motion-reveal";

type ServiceHeroProps = {
  children: ReactNode;
  className?: string;
};

export default function ServiceHero({ children, className }: ServiceHeroProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-primary/10 bg-[linear-gradient(135deg,#edf7f3_0%,#ffffff_44%,#ddebf3_100%)]",
        className
      )}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_18%,rgba(111,189,148,0.18),transparent_28%),radial-gradient(circle_at_86%_16%,rgba(21,54,95,0.14),transparent_34%),radial-gradient(circle_at_76%_82%,rgba(170,216,191,0.24),transparent_30%)]" />
      <div className="absolute left-12 top-10 h-24 w-24 rounded-full border border-white/50 bg-white/30 blur-2xl" />
      <div className="absolute bottom-10 right-12 h-36 w-36 rounded-full bg-primary/12 blur-3xl" />
      <div className="absolute left-1/2 top-16 h-px w-40 -translate-x-1/2 bg-gradient-to-r from-transparent via-primary/35 to-transparent" />

      <MotionReveal className="relative mx-auto max-w-7xl">{children}</MotionReveal>
    </section>
  );
}
