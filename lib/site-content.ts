export const siteUrl = "https://curehubmedsolutions.com";

export const seoKeywords = [
  "medical billing services USA",
  "revenue cycle management",
  "medical billing company USA",
  "credentialing services",
  "AR recovery services",
];

export type ServiceItem = {
  title: string;
  href: string;
  summary: string;
  benefits: string[];
  process: string[];
  faqs: { q: string; a: string }[];
};

export const services: ServiceItem[] = [
  {
    title: "New Practice Setup",
    href: "/services/new-practice-setup",
    summary:
      "We help new providers launch with payer enrollment, billing workflows, and compliant front-office systems from day one.",
    benefits: [
      "Faster go-live with fewer operational delays",
      "Payer setup and enrollment support",
      "Workflow configuration built for clean claims",
    ],
    process: ["Discovery and specialty audit", "Payer setup", "Workflow implementation", "Launch support"],
    faqs: [
      {
        q: "How long does setup usually take?",
        a: "Most practice launches are completed in 30 to 60 days depending on payer timelines and specialty requirements.",
      },
      {
        q: "Do you support solo and group practices?",
        a: "Yes, we support independent providers, small groups, and multi-location organizations.",
      },
    ],
  },
  {
    title: "Medical Billing Services",
    href: "/services/medical-billing-services",
    summary:
      "Comprehensive medical billing services covering charge entry, coding checks, claim submission, and payment posting.",
    benefits: [
      "Lower denial rates with payer-specific billing rules",
      "Improved cash flow and predictable collections",
      "Detailed monthly reporting for actionable decisions",
    ],
    process: ["Charge capture review", "Coding quality checks", "Clean claim submission", "Posting and reconciliation"],
    faqs: [
      {
        q: "Do you work with all specialties?",
        a: "We support multiple specialties and align workflows to your coding and payer mix.",
      },
      {
        q: "How do you reduce denials?",
        a: "We use front-end edits, eligibility verification, and denial trend analysis to prevent and correct rejections.",
      },
    ],
  },
  {
    title: "AR Collection Services",
    href: "/services/ar-collection-services",
    summary:
      "Dedicated AR teams to pursue unpaid and underpaid claims and reduce aging receivables across payer classes.",
    benefits: [
      "Reduced AR aging in 60/90/120+ day buckets",
      "Targeted follow-up by payer priority",
      "Higher net collections from historical balances",
    ],
    process: ["AR segmentation", "Payer follow-up cycles", "Escalations and appeals", "Performance reporting"],
    faqs: [
      {
        q: "Can you work on old AR only?",
        a: "Yes, we offer legacy AR projects as well as ongoing collections support.",
      },
      {
        q: "How quickly can AR performance improve?",
        a: "Many practices see measurable lift in 30 to 90 days based on claim age and payer behavior.",
      },
    ],
  },
  {
    title: "Front Office Support",
    href: "/services/front-office-management",
    summary:
      "Front-office support focused on patient registration, insurance verification, authorizations, and appointment readiness.",
    benefits: [
      "Fewer front-end claim rejections",
      "Stronger patient experience at intake",
      "Better scheduling and authorization compliance",
    ],
    process: ["Eligibility workflows", "Authorization protocols", "Intake QA", "Operational handoff"],
    faqs: [
      {
        q: "Do you provide training for staff?",
        a: "Yes, we provide SOPs and practical front-office training tailored to your clinic operations.",
      },
      {
        q: "Can this integrate with our EHR?",
        a: "Our workflows are adaptable to major EHR and PM systems used by US practices.",
      },
    ],
  },
  {
    title: "Value-Added Services",
    href: "/services/value-added-services",
    summary:
      "Additional support including analytics, custom reporting, revenue audits, and process optimization initiatives.",
    benefits: [
      "More visibility into revenue cycle trends",
      "Data-backed optimization roadmap",
      "Support for growth and expansion planning",
    ],
    process: ["Baseline performance review", "Gap analysis", "Optimization plan", "Monthly KPI tracking"],
    faqs: [
      {
        q: "What reports do you provide?",
        a: "We provide payer performance, denial trends, AR aging, and collection rate reporting.",
      },
      {
        q: "Are services customizable?",
        a: "Yes, we tailor value-added engagements by specialty, claim volume, and growth stage.",
      },
    ],
  },
  {
    title: "Provider Credentialing",
    href: "/services/credentialing",
    summary:
      "End-to-end credentialing and re-credentialing services to keep providers enrolled and billing-ready.",
    benefits: [
      "Faster enrollment timelines",
      "Reduced enrollment errors and rework",
      "Ongoing maintenance for renewals and updates",
    ],
    process: ["Document collection", "Application submission", "Payer follow-up", "Approval and tracking"],
    faqs: [
      {
        q: "Do you manage re-credentialing deadlines?",
        a: "Yes, we track deadlines and manage revalidation tasks to prevent payer interruptions.",
      },
      {
        q: "Can you support multi-state enrollments?",
        a: "Yes, we handle multi-payer and multi-state credentialing processes.",
      },
    ],
  },
  {
    title: "AR Recovery",
    href: "/services/ar-recovery",
    summary:
      "Strategic AR recovery for denied, dormant, and underpaid claims through structured appeal and correction cycles.",
    benefits: [
      "Recovered revenue from previously written-off claims",
      "Appeal workflows with payer-specific documentation",
      "Root-cause analysis to prevent repeat denials",
    ],
    process: ["Claim inventory review", "Appeal packet creation", "Payer escalation", "Recovery reporting"],
    faqs: [
      {
        q: "Do you recover old denied claims?",
        a: "Yes, we assess timely filing windows and recover claims where payer policy permits.",
      },
      {
        q: "How is AR recovery priced?",
        a: "Engagements are scoped by volume, complexity, and historical AR profile.",
      },
    ],
  },
];

export const specialties = [
  {
    title: "Chiropractic Billing Services",
    href: "/specialties/chiropractic-billing-services",
    summary: "Specialized billing support for chiropractic coding, payer rules, and documentation workflows.",
    challenges: [
      "Frequent coding modifiers and documentation variance",
      "Payer-specific rules for chiropractic visits",
      "Denials related to medical necessity and frequency limits",
    ],
    strategies: [
      "Accurate coding with modifier validation",
      "Visit-level documentation checks before submission",
      "Denial trend analysis and payer-specific corrective actions",
    ],
  },
  {
    title: "Hospital Billing Services",
    href: "/specialties/hospital-billing-services",
    summary: "Hospital billing operations designed for high-volume claims and complex payer contracts.",
    challenges: [
      "Complex charge capture across departments",
      "Higher denial risk with claim complexity",
      "Coordination across clinical, coding, and billing teams",
    ],
    strategies: [
      "Departmental workflow alignment for charge integrity",
      "Denial prevention edits before claim submission",
      "Contract-aware reimbursement review and follow-up",
    ],
  },
  {
    title: "Mental Health Billing Services",
    href: "/specialties/mental-health-billing-services",
    summary: "Behavioral health billing support with focus on compliance, authorizations, and payer policy accuracy.",
    challenges: [
      "Authorization and session-limit complexity",
      "Frequent policy updates by behavioral health payers",
      "Delayed reimbursements from documentation issues",
    ],
    strategies: [
      "Authorization tracking and proactive renewal management",
      "Specialty-specific coding and documentation checks",
      "Faster payer follow-up to shorten reimbursement cycles",
    ],
  },
];

export const homeStats = [
  { label: "Years Experience", value: "15+" },
  { label: "Claims Processed", value: "26K" },
  { label: "Clean Claim Rate", value: "98%" },
];

export const processSteps = [
  "Patient Registration",
  "Insurance Verification",
  "Medical Coding",
  "Claim Submission",
  "Payment Posting",
  "AR Follow-Up",
];

export const testimonials = [
  {
    quote:
      "Their team tightened our claims workflow and lowered denials within the first quarter. Collections are now far more predictable.",
    name: "Practice Administrator, Texas Family Clinic",
  },
  {
    quote:
      "Credentialing timelines improved significantly, and reporting finally gives us clear visibility into payer performance.",
    name: "Operations Director, Multi-Specialty Group in Florida",
  },
  {
    quote:
      "AR recovery support helped us recapture revenue we had nearly written off. Communication has been consistent and transparent.",
    name: "Managing Physician, California Behavioral Health Center",
  },
];

export const whyChooseUs = [
  "HIPAA compliant processes",
  "Certified medical coders",
  "Denial management specialists",
  "Transparent reporting",
  "Dedicated account managers",
];

export const faqsGeneral = [
  {
    q: "Do you provide medical billing services across all US states?",
    a: "Yes, we support healthcare providers across the United States with payer-specific billing and revenue cycle workflows.",
  },
  {
    q: "What makes your revenue cycle management approach different?",
    a: "We combine front-end denial prevention, coding quality checks, and disciplined AR follow-up with transparent monthly reporting.",
  },
  {
    q: "Can you work with our current EHR and practice management system?",
    a: "Yes, we adapt workflows to commonly used EHR and PM platforms to reduce operational disruption.",
  },
  {
    q: "Do you offer credentialing services with billing support?",
    a: "Yes, we offer integrated credentialing services and billing support for smoother payer onboarding and reimbursement continuity.",
  },
];

export const blogPosts = [
  {
    title: "How to Reduce Claim Denials in High-Volume Practices",
    slug: "reduce-claim-denials",
    category: "Denial Management",
    excerpt:
      "Practical steps to reduce first-pass denials using eligibility checks, coding QA, and payer-specific submission rules.",
    date: "March 1, 2026",
  },
  {
    title: "Credentialing Timelines: What Delays Enrollment and How to Avoid It",
    slug: "credentialing-timelines",
    category: "Credentialing",
    excerpt:
      "Common enrollment bottlenecks and process controls that speed up provider credentialing and re-credentialing.",
    date: "February 22, 2026",
  },
  {
    title: "AR Recovery Playbook for Independent Clinics",
    slug: "ar-recovery-playbook",
    category: "AR Recovery",
    excerpt:
      "A focused AR recovery framework to prioritize aged claims, improve appeal outcomes, and restore lost revenue.",
    date: "February 14, 2026",
  },
  {
    title: "Revenue Cycle KPIs Every Medical Practice Should Track Monthly",
    slug: "revenue-cycle-kpis",
    category: "Revenue Cycle Management",
    excerpt:
      "Key performance metrics that reveal billing efficiency, denial trends, and payer reimbursement performance.",
    date: "January 30, 2026",
  },
  {
    title: "Front Office Best Practices That Protect Clean Claim Rates",
    slug: "front-office-clean-claims",
    category: "Front Office",
    excerpt:
      "Why registration accuracy, verification workflows, and authorization discipline are critical to clean claim rates.",
    date: "January 19, 2026",
  },
];
