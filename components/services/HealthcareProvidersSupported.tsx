import {
  Activity,
  Bone,
  BrainCircuit,
  Building2,
  HeartPulse,
  Hospital,
  Stethoscope,
  type LucideIcon,
} from "lucide-react";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import MotionReveal from "./motion-reveal";
import ServiceSectionHeading from "./service-section-heading";

const defaultProviderTypes = [
  { title: "Physicians", icon: Stethoscope },
  { title: "Multi-Specialty", icon: Building2 },
  { title: "Hospitals", icon: Hospital },
  { title: "Mental Health", icon: BrainCircuit },
  { title: "Chiropractic", icon: Bone },
  { title: "Urgent Care", icon: Activity },
  { title: "Physical Therapy", icon: HeartPulse },
] as const;

export type HealthcareProviderItem = {
  title: string;
  icon: LucideIcon;
};

type HealthcareProvidersSupportedProps = {
  tone?: "white" | "soft";
  label?: string;
  title?: string;
  description?: string;
  providers?: readonly HealthcareProviderItem[];
};

export default function HealthcareProvidersSupported({
  tone = "white",
  label = "Provider Types",
  title = "Healthcare Providers We Support",
  description = "Cure Hub Med Solutions supports multiple healthcare organizations and specialties with billing, credentialing, revenue cycle, and administrative workflows tailored to their operational and reimbursement needs.",
  providers = defaultProviderTypes,
}: HealthcareProvidersSupportedProps) {
  return (
    <section
      className={cn(
        "border-t border-primary/10 px-4 py-16 sm:px-6 lg:px-8",
        tone === "soft" ? "bg-medical-very-light-bg" : "bg-white"
      )}
    >
      <div className="mx-auto max-w-7xl">
        <ServiceSectionHeading label={label} title={title} description={description} />

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {providers.map((item, index) => {
            const Icon = item.icon;

            return (
              <MotionReveal key={item.title} delay={0.05 + index * 0.04}>
                <Card className="h-full border-primary/15 bg-white shadow-[0_18px_40px_-30px_rgba(21,54,95,0.28)] transition-[transform,box-shadow,border-color] hover:-translate-y-1.5 hover:border-primary/30 hover:shadow-[0_28px_60px_-30px_rgba(21,54,95,0.32)]">
                  <div className="h-1 w-full bg-[var(--gradient-primary)] opacity-80" />
                  <CardHeader className="flex-row items-center gap-4 space-y-0">
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                      <Icon className="h-5 w-5" />
                    </span>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                  </CardHeader>
                </Card>
              </MotionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
