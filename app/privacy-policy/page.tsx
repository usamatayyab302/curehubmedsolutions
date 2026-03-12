import type { Metadata } from "next";
import Link from "next/link";
import {
  Cookie,
  Database,
  FileText,
  Globe,
  Link2,
  LockKeyhole,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  UserCheck,
} from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.curehubmedsolutions.com";
const pageUrl = `${siteUrl}/privacy-policy`;
const effectiveDate = "March 12, 2026";

export const metadata: Metadata = {
  title: "Privacy Policy | Cure Hub Med Solutions",
  description:
    "Read the Privacy Policy of Cure Hub Med Solutions to understand how we collect, use, and protect personal and healthcare-related information in compliance with HIPAA and data protection standards.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Privacy Policy | Cure Hub Med Solutions",
    description:
      "Learn how Cure Hub Med Solutions collects, uses, and protects personal and healthcare-related information.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Cure Hub Med Solutions",
    description:
      "Understand how Cure Hub Med Solutions protects personal information, healthcare confidentiality, and website data.",
  },
};

function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="m-0 grid gap-2 pl-5">
      {items.map((item) => (
        <li key={item} className="text-sm leading-7 text-muted-text sm:text-base">
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function Page() {
  return (
    <div className="bg-background">
      <section className="border-b border-primary/10 bg-gradient-to-br from-medical-very-light-bg via-background to-medical-white px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <Badge className="rounded-full px-3 py-1">Effective Date: {effectiveDate}</Badge>
          <h1 className="mt-5 font-heading text-4xl font-bold tracking-tight text-heading sm:text-5xl lg:text-6xl">
            Privacy Policy
          </h1>
          <p className="mt-5 text-xl font-medium text-primary-dark">
            Protecting Your Information and Maintaining Healthcare Data Confidentiality
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-muted-text sm:text-base">
            Cure Hub Med Solutions respects the privacy of healthcare partners, clients, and
            website visitors and is committed to protecting personal and healthcare-related
            information through responsible data handling, confidentiality safeguards, and secure
            operational practices.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <CardTitle>HIPAA-Aware Privacy Standards</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                We operate in the healthcare industry and apply privacy and confidentiality
                practices designed to support healthcare data protection where applicable.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <LockKeyhole className="h-5 w-5" />
              </span>
              <CardTitle>Data Security Controls</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                Administrative and technical safeguards help protect business, website, and
                healthcare-related information handled by Cure Hub Med Solutions.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Globe className="h-5 w-5" />
              </span>
              <CardTitle>Privacy Rights Awareness</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                We recognize privacy rights principles, including GDPR awareness for international
                visitors where applicable, and provide a contact path for privacy requests.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6 lg:px-8 lg:pb-20">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.75fr_1.25fr]">
          <div className="space-y-4">
            <Card className="border-primary/15 bg-white">
              <CardHeader>
                <Badge variant="outline" className="w-fit border-primary/20 bg-white/80 text-primary">
                  Policy Overview
                </Badge>
                <CardTitle className="mt-2">How This Policy Works</CardTitle>
                <CardDescription className="leading-7">
                  This Privacy Policy explains how Cure Hub Med Solutions collects, uses, protects,
                  and discloses personal information and healthcare-related information connected to
                  its website and services.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <FileText className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    By using the website or services, users agree to the terms described in this
                    policy.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    We collect and use information only for legitimate business and operational
                    purposes.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    Users may contact us to request access, correction, deletion, or communication
                    preferences related to their data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15 bg-gradient-to-br from-white to-medical-very-light-bg/70">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Contact for Privacy Questions
                </Badge>
                <CardTitle className="mt-2">Cure Hub Med Solutions</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <Link href="mailto:info@curehubmedsolutions.com" className="text-sm text-primary hover:underline">
                    info@curehubmedsolutions.com
                  </Link>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm text-muted-text">+1 (XXX) XXX-XXXX</p>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm text-muted-text">[Office Address Here], United States</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div>
            <Accordion type="single" collapsible className="space-y-3" defaultValue="introduction">
              <AccordionItem value="introduction">
                <AccordionTrigger>Introduction</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions is committed to protecting the privacy of healthcare
                    providers, clients, and website visitors. This Privacy Policy explains how the
                    company collects, uses, and protects personal information and healthcare-related
                    information that may be provided through its website and service interactions.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                    By using the website or services, users agree to the terms outlined in this
                    Privacy Policy.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="information-collected">
                <AccordionTrigger>Information We Collect</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 lg:grid-cols-2">
                    <Card className="border-primary/10 bg-medical-very-light-bg/50 shadow-none">
                      <CardHeader>
                        <CardTitle className="text-lg">Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <p className="m-0 text-sm leading-7 text-muted-text">
                          Personal information may include:
                        </p>
                        <PolicyList
                          items={[
                            "Name",
                            "Email address",
                            "Phone number",
                            "Practice name",
                            "Business address",
                            "Professional information submitted through contact forms",
                          ]}
                        />
                        <p className="m-0 text-sm leading-7 text-muted-text">
                          This information may be collected when users contact the company, request
                          consultations, submit inquiries, or subscribe to communications.
                        </p>
                      </CardContent>
                    </Card>

                    <Card className="border-primary/10 bg-medical-very-light-bg/50 shadow-none">
                      <CardHeader>
                        <CardTitle className="text-lg">Non-Personal Information</CardTitle>
                      </CardHeader>
                      <CardContent className="grid gap-4">
                        <p className="m-0 text-sm leading-7 text-muted-text">
                          The website may automatically collect technical data such as:
                        </p>
                        <PolicyList
                          items={[
                            "IP address",
                            "Browser type",
                            "Operating system",
                            "Device type",
                            "Website usage behavior",
                            "Referring pages",
                          ]}
                        />
                        <p className="m-0 text-sm leading-7 text-muted-text">
                          This information helps improve website performance, usability, and overall
                          digital experience.
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="use-of-information">
                <AccordionTrigger>How We Use Your Information</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Collected information may be used for responding to inquiries, providing
                    information about services, improving website functionality, communicating
                    service updates, analyzing website performance, and supporting internal
                    operations. Cure Hub Med Solutions uses information only for legitimate business
                    purposes related to service delivery, website administration, and operational
                    support.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hipaa">
                <AccordionTrigger>HIPAA Compliance and Healthcare Data Protection</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions operates in the healthcare industry and follows strict
                    privacy standards, including compliance with HIPAA (Health Insurance Portability
                    and Accountability Act) where applicable. Healthcare data protection is a top
                    priority in the company&apos;s internal processes and operational controls.
                  </p>
                  <div className="mt-4 grid gap-2">
                    <PolicyList
                      items={[
                        "Protection of patient health information",
                        "Confidentiality of healthcare data",
                        "Secure access control systems",
                        "Secure communication protocols",
                      ]}
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="cookies">
                <AccordionTrigger>Cookies and Tracking Technologies</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-3">
                    <Cookie className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <div>
                      <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                        The website may use cookies and similar tracking technologies to improve
                        user experience. Cookies may be used to improve website functionality,
                        analyze website traffic, store user preferences, and enhance browsing
                        experience.
                      </p>
                      <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                        Users can disable cookies through their browser settings, though some
                        website features may not function as intended if cookies are blocked.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="third-party">
                <AccordionTrigger>Third-Party Disclosure</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions does not sell or rent personal information to third
                    parties. Information may be shared only in limited situations, such as working
                    with trusted service providers, complying with legal obligations, or protecting
                    company rights and security. Any third-party access is strictly controlled and
                    limited to appropriate business needs.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="security">
                <AccordionTrigger>Data Security</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions implements technical and administrative safeguards to
                    protect information. Security practices may include secure data storage, access
                    control protocols, encrypted communication, and internal data protection
                    procedures.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                    While security measures are applied in good faith, no online transmission or
                    storage system can guarantee complete security.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="external-links">
                <AccordionTrigger>External Links</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-3">
                    <Link2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                      This website may contain links to external websites. Cure Hub Med Solutions
                      is not responsible for the privacy practices, content, or security standards
                      of external websites, and users are encouraged to review those privacy
                      policies separately.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="children">
                <AccordionTrigger>Children&apos;s Privacy</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    The website and services are not intended for individuals under 18 years of
                    age. Cure Hub Med Solutions does not knowingly collect personal information from
                    minors. If such information is discovered, reasonable steps will be taken to
                    remove it from company systems.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="rights">
                <AccordionTrigger>Your Privacy Rights</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Users may have rights regarding their personal information, including the right
                    to request access to personal data, request corrections to inaccurate
                    information, request deletion of personal information, and withdraw consent for
                    communications where applicable.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions is also aware of GDPR privacy principles for
                    international visitors where applicable. Users may contact the company to
                    exercise applicable privacy rights.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="updates">
                <AccordionTrigger>Updates to This Privacy Policy</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions may update this Privacy Policy periodically to reflect
                    changes in business operations, legal requirements, or website practices. Any
                    updates will be published on this page with an updated effective date, and
                    users are encouraged to review the policy regularly.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="contact">
                <AccordionTrigger>Contact Information</AccordionTrigger>
                <AccordionContent>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-2xl border border-primary/10 bg-medical-very-light-bg/50 p-4">
                      <p className="m-0 text-sm font-semibold text-heading">Company</p>
                      <p className="mt-2 text-sm leading-7 text-muted-text">Cure Hub Med Solutions</p>
                    </div>
                    <div className="rounded-2xl border border-primary/10 bg-medical-very-light-bg/50 p-4">
                      <p className="m-0 text-sm font-semibold text-heading">Email</p>
                      <Link href="mailto:info@curehubmedsolutions.com" className="mt-2 block text-sm text-primary hover:underline">
                        info@curehubmedsolutions.com
                      </Link>
                    </div>
                    <div className="rounded-2xl border border-primary/10 bg-medical-very-light-bg/50 p-4">
                      <p className="m-0 text-sm font-semibold text-heading">Phone</p>
                      <p className="mt-2 text-sm leading-7 text-muted-text">+1 (XXX) XXX-XXXX</p>
                    </div>
                  </div>
                  <div className="mt-4 rounded-2xl border border-primary/10 bg-medical-very-light-bg/50 p-4">
                    <p className="m-0 text-sm font-semibold text-heading">Address</p>
                    <p className="mt-2 text-sm leading-7 text-muted-text">
                      [Office Address Here], United States
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
