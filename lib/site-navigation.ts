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
  const services = allLinks.filter((link) => link.href.startsWith("/services/")).sort(sortByLabel);
  const nestedByParent = new Map<string, NavLink[]>();

  for (const link of allLinks) {
    const segments = link.href.split("/").filter(Boolean);
    if (segments.length !== 2) continue;

    const parent = `/${segments[0]}`;
    const current = nestedByParent.get(parent) ?? [];
    current.push(link);
    nestedByParent.set(parent, current);
  }

  for (const [parent, children] of nestedByParent) {
    nestedByParent.set(parent, children.sort(sortByLabel));
  }

  const topLevelPages = allLinks
    .filter((link) => {
      if (link.href === "/") return true;
      if (HIDDEN_ROUTES.has(link.href)) return false;
      if (link.href === "/contact-us" || link.href === "/contact") return false;
      if (link.href === "/specialities") return false;

      const depth = link.href.split("/").filter(Boolean).length;
      return depth === 1;
    })
    .sort((a, b) => {
      if (a.href === "/") return -1;
      if (b.href === "/") return 1;
      return sortByLabel(a, b);
    });

  const header: HeaderNavItem[] = topLevelPages.map((link) => {
    const children = nestedByParent.get(link.href);
    return children?.length ? { ...link, children } : link;
  });

  for (const [parent, children] of nestedByParent) {
    if (header.some((item) => item.href === parent)) continue;
    if (!children.length) continue;
    if (HIDDEN_ROUTES.has(parent) || parent === "/contact-us" || parent === "/contact") continue;
    if (parent === "/specialities") continue;

    header.push({
      href: parent,
      label: toLabelFromRoute(parent),
      children,
    });
  }
  header.sort((a, b) => {
    if (a.href === "/") return -1;
    if (b.href === "/") return 1;
    return sortByLabel(a, b);
  });

  const footerCompany = allLinks
    .filter((link) => {
      if (HIDDEN_ROUTES.has(link.href)) return false;
      if (link.href === "/") return false;
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
