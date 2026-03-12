import type { Metadata } from "next";
import Link from "next/link";
import {
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
const pageUrl = `${siteUrl}/terms-of-use`;
const effectiveDate = "March 12, 2026";

export const metadata: Metadata = {
  title: "Terms of Use | Cure Hub Med Solutions",
  description:
    "Read the Terms of Use for Cure Hub Med Solutions to understand the conditions governing access and use of our healthcare services website.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Terms of Use | Cure Hub Med Solutions",
    description:
      "Review the website terms and conditions that govern use of the Cure Hub Med Solutions website and services.",
    url: pageUrl,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Use | Cure Hub Med Solutions",
    description:
      "Understand the terms and conditions for accessing and using the Cure Hub Med Solutions website.",
  },
};

function TermsList({ items }: { items: string[] }) {
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
            Terms of Use
          </h1>
          <p className="mt-5 text-xl font-medium text-primary-dark">
            Website Terms and Conditions for Cure Hub Med Solutions
          </p>
          <p className="mx-auto mt-5 max-w-3xl text-sm leading-8 text-muted-text sm:text-base">
            These Terms of Use govern how visitors access and use the Cure Hub Med Solutions
            website and related services. By using this website, users agree to comply with the
            legal terms, conditions, and limitations described on this page.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <FileText className="h-5 w-5" />
              </span>
              <CardTitle>Website Use Rules</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                These terms apply to all visitors and users accessing the Cure Hub Med Solutions
                website and describe the lawful use of website content and services.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <CardTitle>Professional Disclaimer</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                Website content is provided for general informational purposes and does not replace
                medical, legal, or financial advice from qualified professionals.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-primary/15 bg-white">
            <CardHeader>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <LockKeyhole className="h-5 w-5" />
              </span>
              <CardTitle>Rights and Restrictions</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-7">
                Intellectual property, user conduct, liability limitations, and legal enforcement
                conditions are all governed by these Terms of Use.
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
                  Terms Summary
                </Badge>
                <CardTitle className="mt-2">How These Terms Apply</CardTitle>
                <CardDescription className="leading-7">
                  Cure Hub Med Solutions provides medical billing services, revenue cycle
                  management solutions, credentialing, and healthcare administrative support. These
                  Terms of Use apply to all visitors, users, and individuals accessing the website.
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-3">
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <UserCheck className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    By using this website, users agree to comply with these Terms of Use.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <Database className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    Website content is informational and subject to change without prior notice.
                  </p>
                </div>
                <div className="flex items-start gap-3 rounded-2xl border border-primary/10 bg-medical-very-light-bg/70 p-4">
                  <Globe className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <p className="m-0 text-sm leading-7 text-muted-text">
                    Continued use of the website after any updates means acceptance of revised
                    terms.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/15 bg-gradient-to-br from-white to-medical-very-light-bg/70">
              <CardHeader>
                <Badge variant="secondary" className="w-fit">
                  Contact for Legal Inquiries
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
                    Cure Hub Med Solutions provides medical billing services, revenue cycle
                    management solutions, credentialing, and healthcare administrative support.
                    These Terms of Use apply to all visitors, users, and individuals accessing this
                    website. By using the website, users agree to comply with these terms.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="acceptance">
                <AccordionTrigger>Acceptance of Terms</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    By accessing or using the website, users confirm that they have read,
                    understood, and agreed to these Terms of Use. Cure Hub Med Solutions reserves
                    the right to update or modify the terms at any time, and continued use of the
                    website after updates indicates acceptance of the revised terms.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="website-use">
                <AccordionTrigger>Use of Website</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    This website provides informational content about medical billing services,
                    revenue cycle management, credentialing, and healthcare support services. Users
                    must use the website only for lawful purposes and must not disrupt, damage, or
                    interfere with the website&apos;s functionality or availability.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="disclaimer">
                <AccordionTrigger>Medical and Professional Disclaimer</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    The information on this website is provided for general informational purposes
                    only and should not be interpreted as medical, legal, or financial advice.
                    Cure Hub Med Solutions provides administrative healthcare services and does not
                    provide medical diagnosis, treatment, or clinical decision-making support.
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                    Healthcare providers should rely on qualified medical professionals and other
                    licensed advisors for clinical, legal, and financial decisions.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="privacy">
                <AccordionTrigger>Privacy Policy</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Website usage is also governed by the Cure Hub Med Solutions Privacy Policy,
                    which explains how personal information is collected, used, and protected.
                  </p>
                  <Link href="/privacy-policy" className="mt-4 inline-block text-sm font-semibold text-primary hover:underline">
                    Review the Privacy Policy
                  </Link>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ip">
                <AccordionTrigger>Intellectual Property Rights</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    All website content, including text, graphics, images, logos, icons, and
                    design elements, belongs to Cure Hub Med Solutions unless otherwise stated.
                    Users may not copy, reproduce, distribute, modify, or republish website
                    materials without written permission. Unauthorized use may violate intellectual
                    property laws and other legal protections.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="conduct">
                <AccordionTrigger>User Conduct</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Users must not engage in activities that compromise website security or
                    interfere with website use. Prohibited actions include:
                  </p>
                  <div className="mt-4">
                    <TermsList
                      items={[
                        "Attempting unauthorized access",
                        "Uploading malicious code",
                        "Disrupting website functionality",
                        "Using the site for illegal purposes",
                        "Copying content without authorization",
                      ]}
                    />
                  </div>
                  <p className="mt-4 text-sm leading-7 text-muted-text sm:text-base">
                    Violations may result in restricted or terminated access to the website.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="third-party">
                <AccordionTrigger>Third-Party Links</AccordionTrigger>
                <AccordionContent>
                  <div className="flex items-start gap-3">
                    <Link2 className="mt-1 h-4 w-4 shrink-0 text-primary" />
                    <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                      The website may contain links to external websites. Cure Hub Med Solutions
                      does not control those external websites and is not responsible for
                      third-party content, terms, or privacy policies. Users should review
                      third-party website policies separately.
                    </p>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="liability">
                <AccordionTrigger>Limitation of Liability</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions strives to provide accurate and up-to-date information;
                    however, the company does not guarantee the completeness, accuracy, or
                    reliability of website content. The company is not liable for damages resulting
                    from the use of this website, and users access and use the website at their own
                    risk.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="warranties">
                <AccordionTrigger>Disclaimer of Warranties</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    This website is provided on an &quot;as-is&quot; and &quot;as-available&quot;
                    basis. Cure Hub Med Solutions does not guarantee uninterrupted or error-free
                    website operation and cannot guarantee that the website will always be free
                    from harmful technical components.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="indemnification">
                <AccordionTrigger>Indemnification</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Users agree to indemnify and hold harmless Cure Hub Med Solutions and its
                    employees, affiliates, and partners from claims, damages, liabilities, and
                    expenses resulting from misuse of the website or violation of these Terms of
                    Use.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="termination">
                <AccordionTrigger>Termination of Access</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions reserves the right to suspend or terminate access to the
                    website if users violate these Terms of Use or engage in conduct that threatens
                    the website, its users, or the company&apos;s rights.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="governing-law">
                <AccordionTrigger>Governing Law</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    These Terms of Use are governed by applicable laws in the jurisdiction where
                    Cure Hub Med Solutions operates. Disputes arising from website use will be
                    resolved through appropriate legal procedures and forums as permitted by
                    applicable law.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="changes">
                <AccordionTrigger>Changes to Terms of Use</AccordionTrigger>
                <AccordionContent>
                  <p className="m-0 text-sm leading-7 text-muted-text sm:text-base">
                    Cure Hub Med Solutions may update these Terms of Use periodically. Updates will
                    be posted on this page with an updated effective date, and users are encouraged
                    to review the Terms of Use regularly.
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
