"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";
import type { TableOfContentsItem } from "@/lib/markdown";

export default function TableOfContents({
  items,
  sticky = true,
}: {
  items: TableOfContentsItem[];
  sticky?: boolean;
}) {
  const [activeId, setActiveId] = useState<string | null>(items[0]?.id ?? null);

  useEffect(() => {
    const headings = items
      .map((item) => document.getElementById(item.id))
      .filter((element): element is HTMLElement => Boolean(element));

    if (headings.length === 0) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => left.boundingClientRect.top - right.boundingClientRect.top)[0];

        if (visibleEntry?.target.id) {
          setActiveId(visibleEntry.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
        threshold: [0, 1],
      }
    );

    headings.forEach((heading) => observer.observe(heading));

    return () => observer.disconnect();
  }, [items]);

  if (items.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        "rounded-[1.5rem] border border-primary/10 bg-white p-5 shadow-sm",
        sticky && "lg:sticky lg:top-24"
      )}
    >
      <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
        Table of Contents
      </h2>
      <nav className="mt-4 space-y-1">
        {items.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={cn(
              "block rounded-xl px-3 py-2 text-sm text-muted-text transition hover:bg-primary/5 hover:text-primary",
              item.level === 3 && "ml-4 text-xs",
              activeId === item.id && "bg-primary/10 font-medium text-primary"
            )}
          >
            {item.text}
          </a>
        ))}
      </nav>
    </div>
  );
}
