import Image from "next/image";
import Link from "next/link";
import {
  ClipboardCheck,
  ReceiptText,
  RotateCcw,
  Send,
  ShieldCheck,
  TrendingUp,
  UserRound,
  Users,
  WalletCards,
} from "lucide-react";
import type { ReactNode } from "react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type GuideImageProps = {
  src: string;
  alt: string;
  caption: string;
};

type IconCardItem = {
  title: string;
  description: string;
  icon: typeof ClipboardCheck;
  eyebrow?: string;
};

const billingSteps: Array<IconCardItem & { step: string }> = [
  {
    step: "01",
    title: "Patient Registration",
    description:
      "Collect complete patient demographics, payer details, and referring provider information before the visit begins.",
    icon: UserRound,
  },
  {
    step: "02",
    title: "Insurance Eligibility Verification",
    description:
      "Confirm active coverage, plan limitations, copays, deductibles, and authorization requirements before services are rendered.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Medical Coding",
    description:
      "Translate clinical documentation into accurate ICD-10, CPT, and HCPCS codes that support reimbursement and compliance.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Charge Entry",
    description:
      "Enter charges, modifiers, units, and provider data correctly so the claim matches documentation and payer rules.",
    icon: ReceiptText,
  },
  {
    step: "05",
    title: "Claim Submission",
    description:
      "Transmit clean claims through the clearinghouse or payer portal with front-end edits to reduce rejections.",
    icon: Send,
  },
  {
    step: "06",
    title: "Payment Processing",
    description:
      "Post ERA or EOB details, reconcile contracted adjustments, and match payments to the appropriate encounters.",
    icon: WalletCards,
  },
  {
    step: "07",
    title: "Denial Management",
    description:
      "Research payer responses, correct claim errors, submit appeals, and monitor trends that affect cash flow.",
    icon: RotateCcw,
  },
  {
    step: "08",
    title: "Patient Billing",
    description:
      "Send accurate statements, explain balances clearly, and support collections without damaging the patient experience.",
    icon: Users,
  },
];

const roleCards: IconCardItem[] = [
  {
    eyebrow: "Medical Coders",
    title: "Medical Coders",
    description:
      "Coders interpret provider documentation and assign standardized diagnosis and procedure codes that justify the services delivered.",
    icon: ClipboardCheck,
  },
  {
    eyebrow: "Medical Billers",
    title: "Medical Billers",
    description:
      "Billers prepare and submit claims, post payments, resolve denials, and coordinate payer and patient follow-up through the revenue cycle.",
    icon: ReceiptText,
  },
];

const challengeCards: IconCardItem[] = [
  {
    title: "Claim Denials",
    description:
      "Incorrect demographics, missing authorizations, modifier errors, and documentation gaps can all delay reimbursement.",
    icon: RotateCcw,
  },
  {
    title: "Complex Insurance Regulations",
    description:
      "Payer rules change frequently, requiring constant attention to policy updates, filing deadlines, and coverage conditions.",
    icon: ShieldCheck,
  },
  {
    title: "Administrative Burden",
    description:
      "Front-desk, coding, billing, and payment posting work can consume large amounts of staff time in already busy practices.",
    icon: Users,
  },
  {
    title: "Revenue Leakage",
    description:
      "Missed charges, aged AR, and unworked denials quietly erode net collections when processes are not standardized.",
    icon: TrendingUp,
  },
];

const benefitCards: IconCardItem[] = [
  {
    title: "Improved Claim Accuracy",
    description:
      "Structured billing workflows and payer-aware review steps reduce preventable errors before submission.",
    icon: ClipboardCheck,
  },
  {
    title: "Faster Reimbursements",
    description:
      "Eligibility checks, clean claim submission, and timely follow-up shorten the gap between service delivery and payment.",
    icon: Send,
  },
  {
    title: "Reduced Administrative Workload",
    description:
      "Providers and office teams can spend less time on billing rework and more time on patient care and operations.",
    icon: Users,
  },
  {
    title: "Enhanced Revenue Cycle Performance",
    description:
      "Better visibility into denials, AR, and payer turnaround times supports stronger collections and forecasting.",
    icon: WalletCards,
  },
];

const serviceLinks = [
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/ar-recovery", label: "AR Recovery Services" },
  { href: "/services/denial-management", label: "Denial Management" },
  { href: "/services/provider-credentialing", label: "Provider Credentialing" },
  { href: "/services/front-office-management", label: "Front Office Management" },
];

function GuideImage({ src, alt, caption }: GuideImageProps) {
  return (
    <figure className="overflow-hidden rounded-[1.75rem] border border-primary/10 bg-medical-white shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 900px, 100vw"
          className="object-cover transition duration-500 hover:scale-[1.02]"
        />
      </div>
      <figcaption className="px-5 py-4 text-sm leading-6 text-muted-text">
        {caption}
      </figcaption>
    </figure>
  );
}

function CardGrid({
  items,
  columnsClassName,
  numbered = false,
}: {
  items: Array<IconCardItem & { step?: string }>;
  columnsClassName: string;
  numbered?: boolean;
}) {
  return (
    <div className={columnsClassName}>
      {items.map((item) => {
        const Icon = item.icon;

        return (
          <Card
            key={item.title}
            className="group h-full border-primary/10 bg-white/95 shadow-[0_18px_48px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_60px_rgba(15,23,42,0.09)]"
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-105">
                  <Icon className="h-5 w-5" />
                </span>
                {numbered && item.step ? (
                  <Badge className="border-primary/10 bg-primary/8 font-semibold text-primary hover:bg-primary/8">
                    Step {item.step}
                  </Badge>
                ) : null}
              </div>
              {item.eyebrow ? (
                <p className="mt-5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
                  {item.eyebrow}
                </p>
              ) : null}
              <h3 className="mt-3 text-xl font-semibold text-heading">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-text">{item.description}</p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

function BenefitsGrid() {
  return (
    <div className="space-y-6">
      <CardGrid
        items={benefitCards}
        columnsClassName="grid gap-4 md:grid-cols-2"
      />
      <div className="flex flex-wrap gap-2">
        {serviceLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/30 hover:bg-primary/10"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function createMedicalBillingGuideSlots(): Record<string, ReactNode> {
  return {
    "section-image:overview": (
      <GuideImage
        src="/blog-images/complete-guide-medical-billing-hero.png"
        alt="Healthcare providers reviewing a complete medical billing process workflow for reimbursement accuracy"
        caption="A strong medical billing process connects front-office intake, coding accuracy, clean claim submission, and timely follow-up across the full revenue cycle."
      />
    ),
    "medical-billing-steps": (
      <CardGrid
        items={billingSteps}
        columnsClassName="grid gap-4 md:grid-cols-2"
        numbered
      />
    ),
    "section-image:steps": (
      <GuideImage
        src="/blog-images/medical-billing-process-workflow.png"
        alt="Medical billing specialists managing patient registration, coding, charge entry, and claim submission steps"
        caption="Each stage of the medical billing workflow affects downstream collections, making process control essential for healthcare providers."
      />
    ),
    "medical-coders-vs-billers": (
      <CardGrid
        items={roleCards}
        columnsClassName="grid gap-4 md:grid-cols-2"
      />
    ),
    "section-image:roles": (
      <GuideImage
        src="/blog-images/medical-coders-and-billers-collaboration.png"
        alt="Medical coders and billers collaborating on claim documentation and payer submission tasks"
        caption="Coders and billers play distinct roles, but their coordination determines how cleanly claims move from documentation to payment."
      />
    ),
    "medical-billing-challenges": (
      <CardGrid
        items={challengeCards}
        columnsClassName="grid gap-4 md:grid-cols-2"
      />
    ),
    "billing-services-benefits": <BenefitsGrid />,
    "section-image:benefits": (
      <GuideImage
        src="/blog-images/healthcare-revenue-cycle-management-support.png"
        alt="Healthcare revenue cycle management team supporting reimbursement, denial prevention, and AR performance"
        caption="Professional billing support helps providers reduce administrative pressure while improving clean claim rates, reimbursement speed, and revenue cycle visibility."
      />
    ),
  };
}
