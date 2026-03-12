import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

import MotionReveal from "./motion-reveal";

type ServiceSectionHeadingProps = {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function ServiceSectionHeading({
  label,
  title,
  description,
  align = "left",
  className,
}: ServiceSectionHeadingProps) {
  const centered = align === "center";

  return (
    <MotionReveal
      className={cn("max-w-3xl", centered ? "mx-auto text-center" : "", className)}
      delay={0.05}
    >
      <Badge variant="outline" className="border-primary/20 bg-white/80 text-primary">
        {label}
      </Badge>
      <h2 className="mt-4 font-heading text-3xl font-bold tracking-tight text-heading sm:text-4xl">
        {title}
      </h2>
      <div
        className={cn(
          "mt-4 h-1.5 w-20 rounded-full bg-[var(--gradient-primary)]",
          centered ? "mx-auto" : ""
        )}
      />
      {description ? (
        <p className="mt-5 text-sm leading-7 text-muted-text sm:text-base">{description}</p>
      ) : null}
    </MotionReveal>
  );
}
