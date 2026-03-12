import "server-only";

import { readdir } from "node:fs/promises";
import path from "node:path";
import { cache } from "react";

const APP_DIR = path.join(process.cwd(), "app");

const HIDDEN_ROUTES = new Set(["/privacy-policy", "/terms-of-use"]);

export type NavLink = {
  label: string;
  href: string;
};

export type HeaderNavItem = NavLink & {
  children?: NavLink[];
};

export type SiteNavigation = {
  header: HeaderNavItem[];
  footerServices: NavLink[];
  footerCompany: NavLink[];
  legal: NavLink[];
};

const SERVICE_NAV_ITEMS: NavLink[] = [
  { href: "/services/new-practice-setup", label: "New Practice Setup" },
  { href: "/services/front-office-management", label: "Front Office Management" },
  { href: "/services/provider-credentialing", label: "Credentialing and Contracting" },
  { href: "/services/medical-billing-services", label: "Medical Billing Services" },
  { href: "/services/accounts-receivable-collection", label: "AR Collection" },
  { href: "/services/ar-recovery", label: "AR Recovery" },
  { href: "/services/denial-management", label: "Denial Management" },
  { href: "/services/medicare-part-a-b-c-d-billing", label: "Part A, B, C, D Services" },
  { href: "/services/value-added-services", label: "Value Added Services" },
];

async function readPageRoutes(dir: string, segments: string[] = []): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith("_")) continue;
      if (entry.name.startsWith("@")) continue;

      const nextSegments =
        entry.name.startsWith("(") && entry.name.endsWith(")")
          ? segments
          : [...segments, entry.name];

      const childRoutes = await readPageRoutes(path.join(dir, entry.name), nextSegments);
      routes.push(...childRoutes);
      continue;
    }

    if (!entry.isFile() || entry.name !== "page.tsx") continue;

    const cleanSegments = segments.filter(
      (segment) => !segment.startsWith("[") && !segment.startsWith("...")
    );
    const route = cleanSegments.length ? `/${cleanSegments.join("/")}` : "/";

    routes.push(route);
  }

  return routes;
}

function toLabelFromSegment(segment: string): string {
  const rawWords = segment.split("-");
  const words = rawWords.map((word) => {
    const lower = word.toLowerCase();
    if (lower === "faqs") return "FAQs";
    if (lower === "ar") return "AR";
    if (lower === "us") return "Us";
    return `${word.charAt(0).toUpperCase()}${word.slice(1)}`;
  });

  return words.join(" ");
}

function toLabelFromRoute(route: string): string {
  if (route === "/") return "Home";

  const lastSegment = route.split("/").filter(Boolean).at(-1) ?? "";
  return toLabelFromSegment(lastSegment);
}

function sortByLabel(a: NavLink, b: NavLink) {
  return a.label.localeCompare(b.label);
}

export const getSiteNavigation = cache(async (): Promise<SiteNavigation> => {
  const routes = [...new Set(await readPageRoutes(APP_DIR))].sort();

  const allLinks: NavLink[] = routes.map((href) => ({ href, label: toLabelFromRoute(href) }));
  const linkByHref = new Map(allLinks.map((link) => [link.href, link]));
  const services = SERVICE_NAV_ITEMS.filter((link) => linkByHref.has(link.href));

  const header: HeaderNavItem[] = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About" },
    {
      href: "/services",
      label: "Services",
      children: services,
    },
    {
      href: "/specialities",
      label: "Specialties",
      children: [
        {
          href: "/specialties/chiropractic-billing-services",
          label: "Chiropractic Billing Services",
        },
        {
          href: "/specialties/mental-health-billing-services",
          label: "Mental Health Billing Services",
        },
        { href: "/specialties/hospital-billing-services", label: "Hospital Billing Services" },
      ].filter((link) => linkByHref.has(link.href)),
    },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
  ].filter((item) => linkByHref.has(item.href) || item.href === "/");

  const footerCompany = allLinks
    .filter((link) => {
      if (HIDDEN_ROUTES.has(link.href)) return false;
      if (link.href === "/") return false;
      if (link.href === "/blogs") return false;
      if (link.href.startsWith("/services")) return false;
      const depth = link.href.split("/").filter(Boolean).length;
      return depth === 1;
    })
    .sort(sortByLabel);

  const legal = allLinks.filter((link) => HIDDEN_ROUTES.has(link.href)).sort(sortByLabel);

  return {
    header,
    footerServices: services,
    footerCompany,
    legal,
  };
});
