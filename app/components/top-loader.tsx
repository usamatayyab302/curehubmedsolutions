"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";

export default function TopLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const hideTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const previousUrlRef = useRef("");

  const clearTimers = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    if (hideTimeoutRef.current) {
      clearTimeout(hideTimeoutRef.current);
      hideTimeoutRef.current = null;
    }
  }, []);

  const start = useCallback(() => {
    clearTimers();
    setVisible(true);
    setProgress(18);
    intervalRef.current = setInterval(() => {
      setProgress((prev) => (prev < 82 ? prev + Math.max(2, (82 - prev) * 0.08) : prev));
    }, 120);
  }, [clearTimers]);

  const done = useCallback(() => {
    clearTimers();
    setProgress(100);
    hideTimeoutRef.current = setTimeout(() => {
      setVisible(false);
      setProgress(0);
    }, 260);
  }, [clearTimers]);

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const link = target?.closest("a");
      const href = link?.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;
      if (link?.target === "_blank" || link?.hasAttribute("download")) return;

      const url = new URL(href, window.location.origin);
      const isInternal = url.origin === window.location.origin;
      const nextUrl = `${url.pathname}${url.search}`;
      const currentUrl = `${window.location.pathname}${window.location.search}`;

      if (isInternal && nextUrl !== currentUrl) start();
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [start]);

  useEffect(() => {
    const current = `${pathname}?${searchParams.toString()}`;
    if (previousUrlRef.current && previousUrlRef.current !== current) {
      const rafId = window.requestAnimationFrame(() => done());
      previousUrlRef.current = current;
      return () => window.cancelAnimationFrame(rafId);
    }
    previousUrlRef.current = current;
  }, [pathname, searchParams, done]);

  useEffect(() => {
    return () => clearTimers();
  }, [clearTimers]);

  return (
    <div className="pointer-events-none fixed left-0 top-0 z-[70] h-[3px] w-full">
      <div
        className="h-full bg-gradient-to-r from-primary via-primary-light to-teal shadow-[0_0_14px_rgba(37,99,235,0.55)] transition-[width,opacity] duration-300 ease-out"
        style={{
          width: `${progress}%`,
          opacity: visible ? 1 : 0,
        }}
      />
    </div>
  );
}



