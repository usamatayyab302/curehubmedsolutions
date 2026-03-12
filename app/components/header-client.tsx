"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Building,
  Bone,
  BookOpenText,
  BriefcaseMedical,
  Building2,
  ClipboardList,
  HandCoins,
  HeartPulse,
  Home,
  Menu,
  PanelsTopLeft,
  Phone,
  RotateCcw,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { type HeaderNavItem } from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

type HeaderClientProps = {
  items: HeaderNavItem[];
};

type NavVisual = {
  icon: LucideIcon;
  description: string;
};

const topLevelVisuals: Record<string, NavVisual> = {
  "/": { icon: Home, description: "Home page" },
  "/about-us": { icon: UserRound, description: "About company" },
  "/services": { icon: BriefcaseMedical, description: "All services" },
  "/specialities": { icon: Stethoscope, description: "Specialty billing" },
  "/specialties": { icon: Stethoscope, description: "Specialty billing" },
  "/blog": { icon: BookOpenText, description: "Insights and updates" },
  "/contact-us": { icon: Phone, description: "Contact us" },
};

const pageVisuals: Record<string, NavVisual> = {
  "/services/medical-billing-services": {
    icon: ClipboardList,
    description: "Claims, coding, and reimbursements management.",
  },
  "/services/credentialing": {
    icon: ShieldCheck,
    description: "Provider enrollment and payer credentialing support.",
  },
  "/services/provider-credentialing": {
    icon: ShieldCheck,
    description: "Provider enrollment, credentialing, and contracting support.",
  },
  "/services/accounts-receivable-collection": {
    icon: HandCoins,
    description: "Focused AR follow-up to reduce aging balances.",
  },
  "/services/ar-recovery": {
    icon: RotateCcw,
    description: "Recovery of denied and underpaid claims.",
  },
  "/services/front-office-management": {
    icon: Users,
    description: "Front-desk workflow and patient intake optimization.",
  },
  "/services/new-practice-setup": {
    icon: Building2,
    description: "End-to-end setup support for new practices.",
  },
  "/services/value-added-services": {
    icon: Sparkles,
    description: "Additional support services for practice growth.",
  },
  "/services/denial-management": {
    icon: RotateCcw,
    description: "Denied claim review, correction, and recovery support.",
  },
  "/services/medicare-part-a-b-c-d-billing": {
    icon: BriefcaseMedical,
    description: "Medicare-related billing support across Part A, B, C, and D workflows.",
  },
  "/specialties/hospital-billing-services": {
    icon: Building,
    description: "Hospital billing workflows and reimbursement support.",
  },
  "/specialties/mental-health-billing-services": {
    icon: HeartPulse,
    description: "Behavioral health and mental health billing expertise.",
  },
  "/specialties/chiropractic-billing-services": {
    icon: Bone,
    description: "Chiropractic coding, claims, and payer coordination.",
  },
};

function getTopLevelVisual(href: string): NavVisual {
  return topLevelVisuals[href] ?? { icon: Building2, description: "Page link" };
}

function getChildVisual(href: string, parentLabel: string): NavVisual {
  return pageVisuals[href] ?? {
    icon: Building2,
    description: `Details in ${parentLabel}.`,
  };
}

export default function HeaderClient({ items }: HeaderClientProps) {
  const pathname = usePathname();

  function isActiveItem(item: HeaderNavItem) {
    if (item.children?.length) {
      return (
        item.children.some((child) => pathname === child.href) ||
        pathname === item.href ||
        (item.href === "/specialities" && pathname === "/specialties")
      );
    }

    if (item.href === "/blog") {
      return pathname === "/blog" || pathname.startsWith("/blog/");
    }

    return pathname === item.href;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-primary/20 bg-gradient-to-r from-medical-very-light-bg via-medical-white to-medical-soft-green shadow-[var(--shadow-navbar)]">
      <div className="mx-auto flex h-24 w-full max-w-7xl items-center gap-4 px-4 sm:h-22 sm:px-6 lg:h-20 lg:px-8">
        <Link
          href="/"
          className="relative block h-16 w-[220px] shrink-0 sm:h-14 sm:w-[230px] lg:h-14 lg:w-[250px]"
          aria-label="Cure Hub Med Solutions"
        >
          <Image
            src="/Cure Hub Med Solutions Logo.png"
            alt="Cure Hub Med Solutions"
            fill
            priority
            className="object-contain object-left"
            sizes="(min-width: 1024px) 250px, (min-width: 640px) 230px, 220px"
          />
        </Link>

        <div className="hidden flex-1 justify-center lg:flex">
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {items.map((item) => {
                const hasChildren = Boolean(item.children?.length);
                const active = isActiveItem(item);
                const topVisual = getTopLevelVisual(item.href);
                const TopIcon = topVisual.icon;

                if (hasChildren) {
                  return (
                    <NavigationMenuItem key={item.href}>
                      <NavigationMenuTrigger className={cn(active && "bg-primary/15 text-primary-dark")}>
                        <TopIcon className="mr-2 h-4 w-4" />
                        {item.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[560px] gap-2 sm:grid-cols-2">
                          {item.children?.map((child) => {
                            const childVisual = getChildVisual(child.href, item.label);
                            const ChildIcon = childVisual.icon;

                            return (
                              <li key={child.href}>
                                <NavigationMenuLink asChild>
                                  <Link
                                    href={child.href}
                                    className={cn(
                                      "rounded-xl border border-transparent transition-all",
                                      pathname === child.href &&
                                        "border-primary/25 bg-gradient-to-r from-primary/10 to-teal/10 text-primary-dark"
                                    )}
                                  >
                                    <div className="flex items-start gap-3">
                                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        <ChildIcon className="h-4 w-4" />
                                      </span>
                                      <span>
                                        <span className="block font-semibold">{child.label}</span>
                                        <span className="mt-1 block text-xs leading-relaxed text-muted-text">
                                          {childVisual.description}
                                        </span>
                                      </span>
                                    </div>
                                  </Link>
                                </NavigationMenuLink>
                              </li>
                            );
                          })}
                          {item.href === "/specialities" && (
                            <li className="sm:col-span-2">
                              <div className="rounded-xl border border-primary/20 bg-gradient-to-r from-primary/5 to-teal/10 p-4">
                                <div className="flex items-start gap-3">
                                  <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    <PanelsTopLeft className="h-4 w-4" />
                                  </span>
                                  <div className="flex-1">
                                    <span className="block font-semibold text-heading">
                                      View All Specialties
                                    </span>
                                    <span className="mt-1 block text-xs leading-relaxed text-muted-text">
                                      Browse all specialty billing categories in one place.
                                    </span>
                                    <Button asChild size="sm" className="mt-3">
                                      <Link href="/specialities">View All Specialties</Link>
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          )}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                }

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={item.href}
                        className={cn(
                          navigationMenuTriggerStyle,
                          pathname === item.href && "bg-primary/15 text-primary-dark"
                        )}
                      >
                        <TopIcon className="mr-2 h-4 w-4" />
                        {item.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="ml-auto hidden items-center gap-2 lg:flex">
          <Button asChild>
            <Link href="/contact-us">Book a Consultation</Link>
          </Button>
        </div>

        <div className="ml-auto lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent
              side="right"
              className="flex h-full w-[90%] max-w-xs flex-col overflow-hidden bg-medical-white"
            >
              <SheetHeader className="sr-only">
                <SheetTitle>Mobile Navigation Menu</SheetTitle>
                <SheetDescription>
                  Browse the main website navigation links and specialty pages.
                </SheetDescription>
              </SheetHeader>
              <div className="mb-6 flex items-center gap-2 pt-6">
                <Stethoscope className="h-4 w-4 text-primary" />
                <p className="m-0 font-heading text-base font-semibold text-heading">Menu</p>
              </div>

              <nav className="min-h-0 flex-1 space-y-1 overflow-y-auto pr-1">
                {items.map((item) => {
                  const hasChildren = Boolean(item.children?.length);
                  const topVisual = getTopLevelVisual(item.href);
                  const TopIcon = topVisual.icon;

                  if (!hasChildren) {
                    return (
                      <SheetClose key={item.href} asChild>
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-xl px-3 py-2 text-sm font-medium text-heading transition hover:bg-gradient-to-r hover:from-primary/10 hover:to-teal/10 hover:text-primary-dark",
                            pathname === item.href && "bg-gradient-to-r from-primary/10 to-teal/10 text-primary-dark"
                          )}
                        >
                          <span className="flex items-center gap-2">
                            <TopIcon className="h-4 w-4" />
                            {item.label}
                          </span>
                        </Link>
                      </SheetClose>
                    );
                  }

                  return (
                    <details
                      key={item.href}
                      className="group rounded-xl border border-primary/15 bg-gradient-to-r from-medical-very-light-bg/70 to-medical-soft-green/30 p-2"
                    >
                      <summary className="cursor-pointer list-none px-2 py-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-muted-text [&::-webkit-details-marker]:hidden">
                        <span className="flex items-center justify-between gap-2">
                          <span className="flex items-center gap-2">
                            <TopIcon className="h-4 w-4" />
                            {item.label}
                          </span>
                          <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200 group-open:rotate-180" />
                        </span>
                      </summary>
                      <div className="mt-1 max-h-72 space-y-1 overflow-y-auto pr-1">
                        {item.children?.map((child) => {
                          const childVisual = getChildVisual(child.href, item.label);
                          const ChildIcon = childVisual.icon;

                          return (
                            <SheetClose key={child.href} asChild>
                              <Link
                                href={child.href}
                                className={cn(
                                  "block rounded-lg px-2 py-2 text-sm text-heading transition hover:bg-gradient-to-r hover:from-primary/10 hover:to-teal/10 hover:text-primary-dark",
                                  pathname === child.href &&
                                    "bg-gradient-to-r from-primary/10 to-teal/10 text-primary-dark"
                                )}
                              >
                                <span className="flex items-start gap-2">
                                  <ChildIcon className="mt-0.5 h-4 w-4 shrink-0" />
                                  <span>
                                    <span className="block">{child.label}</span>
                                    <span className="block text-xs text-muted-text">
                                      {childVisual.description}
                                    </span>
                                  </span>
                                </span>
                              </Link>
                            </SheetClose>
                          );
                        })}
                        {item.href === "/specialities" && (
                          <div className="rounded-lg border border-primary/15 bg-white/70 p-3">
                            <div className="flex items-start gap-2">
                              <PanelsTopLeft className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                              <div className="flex-1">
                                <span className="block text-sm font-medium text-heading">
                                  View All Specialties
                                </span>
                                <span className="mt-1 block text-xs text-muted-text">
                                  See every specialty billing category.
                                </span>
                                <SheetClose asChild>
                                  <Button asChild size="sm" className="mt-3 w-full">
                                    <Link href="/specialities">View All Specialties</Link>
                                  </Button>
                                </SheetClose>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </details>
                  );
                })}
              </nav>

              <div className="mt-6">
                <SheetClose asChild>
                  <Button asChild className="w-full">
                    <Link href="/contact-us">Book a Consultation</Link>
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
