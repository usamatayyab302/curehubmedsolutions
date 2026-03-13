import Image from "next/image";
import Link from "next/link";
import {
  BriefcaseMedical,
  CircleDollarSign,
  ClipboardCheck,
  FileText,
  ReceiptText,
  RotateCcw,
  Search,
  Send,
  ShieldCheck,
  Stethoscope,
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

const medicalBillingServiceLinks = [
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/ar-recovery", label: "AR Recovery Services" },
  { href: "/services/denial-management", label: "Denial Management" },
  { href: "/services/provider-credentialing", label: "Provider Credentialing" },
  { href: "/services/front-office-management", label: "Front Office Management" },
];

const claimDenialReasonCards: IconCardItem[] = [
  {
    title: "Incorrect Medical Coding",
    description:
      "Diagnosis, procedure, modifier, or unit errors can cause claims to fail payer edits and medical necessity review.",
    icon: ClipboardCheck,
  },
  {
    title: "Incomplete Patient Information",
    description:
      "Missing demographics, subscriber details, or coordination of benefits data often leads to preventable denials.",
    icon: UserRound,
  },
  {
    title: "Insurance Eligibility Issues",
    description:
      "Inactive coverage, plan changes, and benefit limitations can stop reimbursement before the claim reaches payment.",
    icon: ShieldCheck,
  },
  {
    title: "Lack of Preauthorization",
    description:
      "Services that require payer approval may be denied when authorization is missing, expired, or mismatched to the visit.",
    icon: FileText,
  },
  {
    title: "Duplicate Claims",
    description:
      "Submitting the same encounter twice or resubmitting too early can trigger duplicate claim denials and payment delays.",
    icon: ReceiptText,
  },
  {
    title: "Missing Documentation",
    description:
      "Insufficient clinical notes, signatures, or supporting records weaken payer review and limit appeal success.",
    icon: Search,
  },
];

const claimDenialStrategies: Array<IconCardItem & { step: string }> = [
  {
    step: "01",
    title: "Verify Patient Eligibility",
    description:
      "Confirm active coverage, payer rules, benefit limits, and referral requirements before services are delivered.",
    icon: ShieldCheck,
  },
  {
    step: "02",
    title: "Improve Medical Coding Accuracy",
    description:
      "Review diagnosis and procedure coding carefully so claims align with documentation and payer policy expectations.",
    icon: ClipboardCheck,
  },
  {
    step: "03",
    title: "Obtain Required Authorizations",
    description:
      "Track authorizations and ensure the approved service, provider, and date range match what is billed.",
    icon: FileText,
  },
  {
    step: "04",
    title: "Ensure Complete Documentation",
    description:
      "Maintain clear, complete clinical records that support medical necessity, modifiers, and billed services.",
    icon: ReceiptText,
  },
  {
    step: "05",
    title: "Use Claim Scrubbing Technology",
    description:
      "Apply front-end edits and claim validation checks before submission to catch avoidable errors early.",
    icon: Search,
  },
];

const claimDenialBenefitCards: IconCardItem[] = [
  {
    title: "Faster Claim Resolution",
    description:
      "Structured follow-up and appeal workflows shorten the time between payer response and corrected reimbursement action.",
    icon: RotateCcw,
  },
  {
    title: "Higher Claim Acceptance Rates",
    description:
      "Root-cause analysis and clean-claim controls reduce repeat denials and improve first-pass payment performance.",
    icon: ShieldCheck,
  },
  {
    title: "Improved Revenue Recovery",
    description:
      "Denied and underpaid claims are worked more consistently so providers recover revenue that might otherwise be lost.",
    icon: TrendingUp,
  },
  {
    title: "Reduced Administrative Workload",
    description:
      "Internal teams spend less time chasing payer issues and more time supporting patient care and operations.",
    icon: Users,
  },
  {
    title: "Better Compliance with Payer Guidelines",
    description:
      "Ongoing review of payer edits, documentation requirements, and appeal standards supports more compliant billing.",
    icon: FileText,
  },
];

const claimDenialServiceLinks = [
  { href: "/services/denial-management", label: "Denial Management Services" },
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/ar-recovery", label: "AR Recovery Services" },
  { href: "/services/provider-credentialing", label: "Provider Credentialing" },
  { href: "/services/front-office-management", label: "Front Office Management" },
];

const rcmProcessSteps: Array<IconCardItem & { step: string }> = [
  {
    step: "01",
    title: "Patient Registration and Scheduling",
    description:
      "Capture accurate patient demographics, coverage details, and appointment information before services begin.",
    icon: UserRound,
  },
  {
    step: "02",
    title: "Insurance Eligibility Verification",
    description:
      "Validate active benefits, payer rules, referral requirements, and authorization needs before the encounter.",
    icon: ShieldCheck,
  },
  {
    step: "03",
    title: "Medical Coding and Documentation",
    description:
      "Translate clinical documentation into compliant diagnosis and procedure codes supported by complete records.",
    icon: ClipboardCheck,
  },
  {
    step: "04",
    title: "Claim Submission",
    description:
      "Submit clean claims through payer and clearinghouse channels with edits designed to reduce preventable denials.",
    icon: Send,
  },
  {
    step: "05",
    title: "Payment Processing",
    description:
      "Post reimbursements accurately, reconcile adjustments, and confirm payer payments match contractual expectations.",
    icon: WalletCards,
  },
  {
    step: "06",
    title: "Denial Management",
    description:
      "Work denied or underpaid claims through correction, appeal, escalation, and root-cause review workflows.",
    icon: RotateCcw,
  },
  {
    step: "07",
    title: "Patient Billing and Collection",
    description:
      "Issue accurate statements, support patient balance resolution, and manage collection activity without disrupting the patient experience.",
    icon: ReceiptText,
  },
];

const rcmProfitabilityBenefits: IconCardItem[] = [
  {
    title: "Faster Reimbursements",
    description:
      "Clean claims, stronger payer follow-up, and timely posting shorten the time between care delivery and payment.",
    icon: Send,
  },
  {
    title: "Reduced Claim Denials",
    description:
      "Eligibility checks, coding review, and workflow controls lower the volume of avoidable denials entering AR.",
    icon: RotateCcw,
  },
  {
    title: "Improved Billing Accuracy",
    description:
      "Disciplined coding, charge review, and documentation alignment reduce errors that compromise reimbursement.",
    icon: ClipboardCheck,
  },
  {
    title: "Better Financial Visibility",
    description:
      "Clear reporting on collections, AR aging, and payer performance helps leadership make stronger operational decisions.",
    icon: TrendingUp,
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Standardized workflows cut rework and allow internal teams to focus more effectively on patient care and operations.",
    icon: Users,
  },
];

const rcmChallengeCards: IconCardItem[] = [
  {
    title: "Complex Insurance Regulations",
    description:
      "Frequent payer policy updates and specialty-specific billing rules increase the risk of compliance gaps and rework.",
    icon: ShieldCheck,
  },
  {
    title: "Frequent Claim Denials",
    description:
      "Denials slow collections, consume staff time, and can quietly increase aging receivables when follow-up is inconsistent.",
    icon: RotateCcw,
  },
  {
    title: "Billing Errors and Coding Issues",
    description:
      "Incorrect codes, modifiers, or charge details weaken claim quality and directly affect reimbursement accuracy.",
    icon: ClipboardCheck,
  },
  {
    title: "Delayed Reimbursements",
    description:
      "Payment lag disrupts cash flow and limits the financial flexibility providers need for staffing and growth planning.",
    icon: WalletCards,
  },
  {
    title: "High Administrative Workload",
    description:
      "Disconnected front-end and back-end processes push staff into repetitive correction work instead of proactive management.",
    icon: Users,
  },
];

const rcmSupportBenefitCards: IconCardItem[] = [
  {
    title: "Improved Claim Accuracy",
    description:
      "Experienced billing teams tighten pre-submission controls so cleaner claims reach the payer on the first pass.",
    icon: ClipboardCheck,
  },
  {
    title: "Faster Reimbursement Cycles",
    description:
      "Structured follow-up and payment posting workflows reduce delays across claim submission, adjudication, and collections.",
    icon: Send,
  },
  {
    title: "Reduced Administrative Costs",
    description:
      "Outsourced RCM reduces internal rework, staffing pressure, and the hidden cost of manual billing correction cycles.",
    icon: Users,
  },
  {
    title: "Efficient Denial Management",
    description:
      "Claims are corrected, appealed, and analyzed consistently so denials do not continue draining revenue performance.",
    icon: RotateCcw,
  },
  {
    title: "Advanced Reporting and Analytics",
    description:
      "Operational dashboards and payer trend reporting give providers clearer insight into cash flow and collection opportunities.",
    icon: TrendingUp,
  },
];

const cureHubRcmStrengthCards: IconCardItem[] = [
  {
    title: "Medical Billing and Coding Expertise",
    description:
      "Practical billing and coding oversight helps providers improve clean claim performance and reduce reimbursement risk.",
    icon: ClipboardCheck,
  },
  {
    title: "Claims Submission and Processing",
    description:
      "Claims move through disciplined submission, edit review, payment posting, and reconciliation workflows.",
    icon: Send,
  },
  {
    title: "Denial Management and Appeals",
    description:
      "Denied claims are tracked, corrected, appealed, and escalated with a focus on reducing repeat denial patterns.",
    icon: RotateCcw,
  },
  {
    title: "Accounts Receivable Recovery",
    description:
      "Aging claims and underpayments receive focused follow-up to improve collections and recover delayed revenue.",
    icon: WalletCards,
  },
  {
    title: "Revenue Cycle Analytics and Reporting",
    description:
      "Leadership teams gain clearer reporting on denial trends, reimbursement performance, and collection health across the cycle.",
    icon: TrendingUp,
  },
];

const rcmServiceLinks = [
  { href: "/services/revenue-cycle-management", label: "Revenue Cycle Management Services" },
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/denial-management", label: "Denial Management Services" },
  { href: "/services/ar-recovery", label: "AR Recovery Services" },
  { href: "/services/provider-credentialing", label: "Provider Credentialing" },
  { href: "/services/medicare-part-a-b-c-d-billing", label: "Medicare Billing Services" },
];

const outsourcedBillingServices: IconCardItem[] = [
  {
    title: "Insurance Eligibility Verification",
    description:
      "Confirm active coverage, plan rules, and authorization requirements before claims are prepared.",
    icon: ShieldCheck,
  },
  {
    title: "Medical Coding and Documentation Review",
    description:
      "Review coding accuracy and supporting documentation to improve claim quality and reduce payer disputes.",
    icon: ClipboardCheck,
  },
  {
    title: "Claim Submission",
    description:
      "Prepare and transmit claims through payer and clearinghouse workflows with cleaner front-end controls.",
    icon: Send,
  },
  {
    title: "Payment Posting and Reconciliation",
    description:
      "Post payer and patient payments accurately while validating adjustments and reimbursement details.",
    icon: WalletCards,
  },
  {
    title: "Denial Management and Appeals",
    description:
      "Investigate denials, correct claim issues, submit appeals, and monitor repeat denial trends.",
    icon: RotateCcw,
  },
  {
    title: "Accounts Receivable Follow-Ups",
    description:
      "Track unpaid balances, follow up with payers, and recover delayed or underpaid revenue more consistently.",
    icon: ReceiptText,
  },
];

const outsourcingReasons: IconCardItem[] = [
  {
    title: "Reduced Administrative Workload",
    description:
      "Office teams spend less time on repetitive billing tasks and more time supporting patients and clinic operations.",
    icon: Users,
  },
  {
    title: "Improved Billing Efficiency",
    description:
      "Specialized workflows and dedicated billing staff keep claims moving faster and more consistently through the cycle.",
    icon: TrendingUp,
  },
  {
    title: "Lower Claim Denial Rates",
    description:
      "Cleaner claim preparation and payer-specific review help reduce preventable denials before submission.",
    icon: RotateCcw,
  },
  {
    title: "Regulatory Compliance Support",
    description:
      "Experienced billing partners stay aligned with documentation standards, payer edits, and billing requirements.",
    icon: FileText,
  },
  {
    title: "Better Revenue Cycle Performance",
    description:
      "Stronger follow-up, payment tracking, and reporting help providers improve collections and financial visibility.",
    icon: CircleDollarSign,
  },
];

const outsourcingCostBenefits: IconCardItem[] = [
  {
    title: "Reduced Staffing Costs",
    description:
      "Practices avoid the ongoing expense of recruiting, hiring, and retaining a full internal billing team.",
    icon: Users,
  },
  {
    title: "Lower Software and Technology Expenses",
    description:
      "Billing partners often bring established systems and workflows, reducing the burden of internal technology investment.",
    icon: BriefcaseMedical,
  },
  {
    title: "Minimal Employee Training Requirements",
    description:
      "Providers spend less time training internal staff on payer changes, coding updates, and billing procedures.",
    icon: Stethoscope,
  },
  {
    title: "Flexible Billing Service Pricing Models",
    description:
      "Outsourced billing structures can scale more efficiently with practice growth, claim volume, and operational needs.",
    icon: CircleDollarSign,
  },
];

const outsourcingAccuracyBenefits: IconCardItem[] = [
  {
    title: "More Accurate Medical Coding",
    description:
      "Specialized coding review supports cleaner documentation alignment and reduces reimbursement risk.",
    icon: ClipboardCheck,
  },
  {
    title: "Reduced Claim Rejection Rates",
    description:
      "Better eligibility validation and cleaner claim edits help prevent front-end rejections and payer rework.",
    icon: ShieldCheck,
  },
  {
    title: "Faster Claim Processing",
    description:
      "Disciplined submission workflows and active follow-up keep claims moving through adjudication more efficiently.",
    icon: Send,
  },
  {
    title: "Improved Reimbursement Timelines",
    description:
      "Timely corrections, payer communication, and payment tracking shorten the path from service to reimbursement.",
    icon: WalletCards,
  },
  {
    title: "Better Tracking of Outstanding Claims",
    description:
      "Aging claims are monitored more closely so unresolved balances can be escalated before revenue stalls.",
    icon: Search,
  },
];

const professionalBillingCompanyBenefits: IconCardItem[] = [
  {
    title: "Comprehensive Claim Management",
    description:
      "Claims are handled across the full cycle, from preparation and submission to posting, correction, and follow-up.",
    icon: Send,
  },
  {
    title: "Denial Analysis and Recovery",
    description:
      "Experienced teams identify root causes, recover delayed revenue, and reduce repeat denial patterns.",
    icon: RotateCcw,
  },
  {
    title: "Insurance Follow-Ups and AR Management",
    description:
      "Outstanding claims and payer balances receive more consistent follow-up and escalation support.",
    icon: ReceiptText,
  },
  {
    title: "Billing Performance Reporting",
    description:
      "Providers gain clearer visibility into claim status, collections, denial trends, and reimbursement performance.",
    icon: TrendingUp,
  },
  {
    title: "Healthcare Regulatory Compliance",
    description:
      "Billing operations stay better aligned with payer policies, documentation expectations, and regulatory requirements.",
    icon: FileText,
  },
];

const outsourcingServiceLinks = [
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/ar-recovery", label: "AR Recovery Services" },
  { href: "/services/denial-management", label: "Denial Management Services" },
  { href: "/services/provider-credentialing", label: "Provider Credentialing" },
  { href: "/services/front-office-management", label: "Front Office Management" },
  { href: "/services/medicare-part-a-b-c-d-billing", label: "Medicare Billing Services" },
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

function LinkChipList({ items }: { items: Array<{ href: string; label: string }> }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className="inline-flex items-center rounded-full border border-primary/15 bg-primary/5 px-4 py-2 text-sm font-medium text-primary transition hover:border-primary/30 hover:bg-primary/10"
        >
          {item.label}
        </Link>
      ))}
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
      <LinkChipList items={medicalBillingServiceLinks} />
    </div>
  );
}

function ImpactHighlight() {
  const impacts = [
    "Delayed reimbursements",
    "Increased administrative workload",
    "Higher operational costs",
    "Loss of potential revenue",
    "Reduced billing efficiency",
  ];

  return (
    <Card className="border-primary/10 bg-white/96 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <CardContent className="grid gap-6 p-6 md:grid-cols-[minmax(0,1fr)_220px] md:p-8">
        <div>
          <Badge className="border-primary/10 bg-primary/8 text-primary hover:bg-primary/8">
            Revenue Impact
          </Badge>
          <h3 className="mt-4 text-2xl font-semibold text-heading">
            Why denials create pressure across the revenue cycle
          </h3>
          <ul className="mt-5 space-y-3">
            {impacts.map((impact) => (
              <li key={impact} className="flex items-start gap-3 text-sm leading-6 text-muted-text">
                <span className="mt-1 inline-flex h-2.5 w-2.5 shrink-0 rounded-full bg-primary" />
                <span>{impact}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="rounded-[1.5rem] border border-primary/10 bg-[linear-gradient(145deg,#edf7f3_0%,#ffffff_46%,#e7f1f8_100%)] p-6 shadow-inner">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">
            Industry Snapshot
          </p>
          <p className="mt-4 text-4xl font-semibold text-heading">5-10%</p>
          <p className="mt-3 text-sm leading-6 text-muted-text">
            Claim denial rates in healthcare can reach 5-10% of total claims,
            making prevention and recovery a priority for provider revenue teams.
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function ClaimDenialBenefitsGrid() {
  return (
    <div className="space-y-6">
      <CardGrid
        items={claimDenialBenefitCards}
        columnsClassName="grid gap-4 md:grid-cols-2"
      />
      <LinkChipList items={claimDenialServiceLinks} />
    </div>
  );
}

function RcmSupportBenefitsGrid() {
  return (
    <div className="space-y-6">
      <CardGrid
        items={rcmSupportBenefitCards}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
      <LinkChipList items={rcmServiceLinks} />
    </div>
  );
}

function OutsourcingCostBenefitsGrid() {
  return (
    <div className="space-y-6">
      <CardGrid
        items={outsourcingCostBenefits}
        columnsClassName="grid gap-4 md:grid-cols-2"
      />
      <div className="rounded-[1.5rem] border border-primary/10 bg-[linear-gradient(145deg,#edf7f3_0%,#ffffff_42%,#f4f8fb_100%)] p-6 shadow-inner">
        <p className="text-sm leading-7 text-muted-text">
          Outsourcing gives healthcare providers access to advanced billing expertise,
          structured payer follow-up, and revenue cycle knowledge without maintaining a
          full in-house billing department.
        </p>
      </div>
    </div>
  );
}

function OutsourcingAccuracyBenefitsGrid() {
  return (
    <div className="space-y-6">
      <CardGrid
        items={outsourcingAccuracyBenefits}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
      <LinkChipList items={outsourcingServiceLinks} />
    </div>
  );
}

export function createMedicalBillingGuideSlots(): Record<string, ReactNode> {
  return {
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

export function createClaimDenialsGuideSlots(): Record<string, ReactNode> {
  return {
    "section-image:denials-overview": (
      <GuideImage
        src="/images/digital-patient-intake-and-billing-workflow.jpg"
        alt="Healthcare front office and billing workflow supporting cleaner claims and stronger denial prevention"
        caption="Clean patient intake, accurate insurance validation, and complete claim preparation reduce the number of preventable denials that reach the payer."
      />
    ),
    "claim-denial-reasons": (
      <CardGrid
        items={claimDenialReasonCards}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
    "denial-revenue-impact": <ImpactHighlight />,
    "section-image:claim-prevention": (
      <GuideImage
        src="/images/healthcare-revenue-cycle-reporting-analysis.jpg"
        alt="Healthcare revenue cycle team reviewing denial trends, payer performance, and claim quality reporting"
        caption="Denial prevention improves when providers track payer trends, validate documentation, and catch claim issues before submission."
      />
    ),
    "claim-denial-strategies": (
      <CardGrid
        items={claimDenialStrategies}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        numbered
      />
    ),
    "section-image:denial-management": (
      <GuideImage
        src="/images/provider-revenue-cycle-consultation.jpg"
        alt="Healthcare revenue cycle consultation focused on denial management, appeals, and reimbursement improvement"
        caption="Professional denial management combines payer follow-up, appeals, and root-cause analysis to improve reimbursement recovery and reduce repeat denials."
      />
    ),
    "denial-management-benefits": <ClaimDenialBenefitsGrid />,
  };
}

export function createRcmGuideSlots(): Record<string, ReactNode> {
  return {
    "section-image:rcm-overview": (
      <GuideImage
        src="/images/healthcare-provider-reception-team.webp"
        alt="Healthcare front office and billing team coordinating registration, verification, and claim readiness"
        caption="Revenue cycle management begins before the claim is submitted, with clean scheduling, accurate registration, and disciplined eligibility review."
      />
    ),
    "rcm-process-steps": (
      <CardGrid
        items={rcmProcessSteps}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        numbered
      />
    ),
    "rcm-profitability-benefits": (
      <CardGrid
        items={rcmProfitabilityBenefits}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
    "rcm-challenges": (
      <CardGrid
        items={rcmChallengeCards}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
    "section-image:rcm-support": (
      <GuideImage
        src="/images/healthcare-revenue-cycle-reporting-analysis.jpg"
        alt="Revenue cycle management team analyzing reimbursements, claim trends, and financial reporting data"
        caption="Professional RCM support gives providers stronger oversight into claim accuracy, denial patterns, payment timelines, and financial performance."
      />
    ),
    "rcm-support-benefits": <RcmSupportBenefitsGrid />,
    "cure-hub-rcm-strengths": (
      <CardGrid
        items={cureHubRcmStrengthCards}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
  };
}

export function createOutsourcingBillingGuideSlots(): Record<string, ReactNode> {
  return {
    "section-image:outsourcing-overview": (
      <GuideImage
        src="/images/healthcare-billing-support-team.jpg"
        alt="Medical billing operations team managing outsourced claims, payer communication, and revenue cycle workflows"
        caption="Outsourced billing brings structured claim management, payer follow-up, and revenue cycle expertise to healthcare practices without expanding in-house administrative pressure."
      />
    ),
    "outsourced-billing-services": (
      <CardGrid
        items={outsourcedBillingServices}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
    "outsourcing-reasons": (
      <CardGrid
        items={outsourcingReasons}
        columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
      />
    ),
    "outsourcing-cost-benefits": <OutsourcingCostBenefitsGrid />,
    "section-image:billing-accuracy": (
      <GuideImage
        src="/images/medical-billing-specialist-reviewing-claims.jpg"
        alt="Medical billing specialist reviewing claims, coding accuracy, and reimbursement timelines"
        caption="Professional billing teams improve claim accuracy by reviewing coding, tracking submission status, and following up quickly when payer issues appear."
      />
    ),
    "outsourcing-accuracy-benefits": <OutsourcingAccuracyBenefitsGrid />,
    "professional-billing-company-benefits": (
      <div className="space-y-6">
        <CardGrid
          items={professionalBillingCompanyBenefits}
          columnsClassName="grid gap-4 md:grid-cols-2 xl:grid-cols-3"
        />
        <LinkChipList items={outsourcingServiceLinks} />
      </div>
    ),
  };
}
