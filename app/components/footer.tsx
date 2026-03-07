import Link from "next/link";
import { Facebook, Linkedin, Mail, Phone, Twitter } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getSiteNavigation } from "@/lib/site-navigation";

const socialLinks = [
  { href: "https://www.linkedin.com", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.facebook.com", icon: Facebook, label: "Facebook" },
  { href: "https://x.com", icon: Twitter, label: "X" },
];

export default async function Footer() {
  const year = new Date().getFullYear();
  const navigation = await getSiteNavigation();
  const companyLinks = navigation.footerCompany.filter(
    (item) => !["Contact", "Contact Us", "Specialties", "Specialities"].includes(item.label)
  );

  return (
    <footer className="mt-16 border-t border-primary/15 bg-gradient-to-b from-primary-dark via-primary to-teal text-medical-text-white">
      <div className="h-1 w-full bg-gradient-to-r from-medical-light-blue via-medical-text-white/80 to-medical-light-blue" />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <div className="rounded-2xl border border-medical-text-white/25 bg-medical-text-white/10 p-5 backdrop-blur-sm sm:col-span-2 lg:col-span-1">
            <h3 className="font-heading text-xl font-bold text-medical-text-white">Cure Hub Med Solutions</h3>
            <p className="mt-3 text-sm text-medical-text-on-dark">
              End-to-end medical billing, credentialing, and revenue cycle support tailored for
              modern healthcare practices.
            </p>
            <Badge variant="secondary" className="mt-4 border-medical-text-white/35 bg-medical-text-white/15 text-medical-text-white">
              HIPAA-conscious workflows
            </Badge>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-medical-text-white">
              Services
            </h4>
            <ul className="mt-3 space-y-2">
              {navigation.footerServices.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-medical-text-on-dark transition hover:text-medical-text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-medical-text-white">
              Company
            </h4>
            <ul className="mt-3 space-y-2">
              {companyLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-medical-text-on-dark transition hover:text-medical-text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading text-sm font-semibold uppercase tracking-[0.1em] text-medical-text-white">
              Contact
            </h4>
            <ul className="mt-3 space-y-2 text-sm text-medical-text-on-dark">
              <li className="flex items-start justify-center gap-2 lg:justify-start">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-medical-text-white" />
                <span className="break-all">contact@curehubmedsolutions.com</span>
              </li>
              <li className="flex items-start justify-center gap-2 lg:justify-start">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-medical-text-white" />
                +1 (555) 210-8900
              </li>
              <li>Mon - Fri, 9:00 AM to 6:00 PM</li>
              <li>United States</li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 bg-medical-text-white/25" />

        <div className="flex flex-col items-center gap-4 text-center text-sm text-medical-text-on-dark lg:flex-row lg:justify-between">
          <p className="m-0 text-balance">(c) {year} Cure Hub Med Solutions. All rights reserved.</p>

          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            {navigation.legal.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-medical-text-white">
                {item.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center justify-center gap-2">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                aria-label={item.label}
                className="rounded-full border border-medical-text-white/30 bg-medical-text-white/10 p-2 text-medical-text-white transition hover:bg-medical-text-white/20"
              >
                <item.icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}



