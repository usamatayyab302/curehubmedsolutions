import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type BlogCtaCardProps = {
  title?: string;
  description?: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export default function BlogCtaCard({
  title = "Need Help with Medical Billing?",
  description = "Cure Hub Med Solutions helps healthcare providers strengthen claim accuracy, reimbursement speed, and revenue cycle visibility with hands-on billing support.",
  primaryHref = "/contact-us",
  primaryLabel = "Schedule Consultation",
  secondaryHref = "/services/medical-billing-services",
  secondaryLabel = "View Medical Billing Services",
}: BlogCtaCardProps) {
  return (
    <Card className="overflow-hidden border-0 bg-[linear-gradient(145deg,#015d67_0%,#0b8793_52%,#72c4bd_100%)] text-white shadow-[0_24px_70px_rgba(1,93,103,0.28)]">
      <CardHeader className="pb-3">
        <CardTitle className="text-2xl text-white">{title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-5">
        <p className="text-sm leading-6 text-white">{description}</p>
        <div className="flex flex-col gap-3">
          <Button
            asChild
            className="justify-between bg-white text-primary shadow-sm hover:bg-white/95"
          >
            <Link href={primaryHref}>
              {primaryLabel}
              <CalendarDays className="h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            className="justify-between border-white/30 bg-white/10 text-white hover:bg-white/16 hover:text-white"
          >
            <Link href={secondaryHref}>
              {secondaryLabel}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
