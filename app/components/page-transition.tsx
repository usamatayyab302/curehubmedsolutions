"use client";

import { usePathname, useSearchParams } from "next/navigation";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function PageTransition({ children }: Props) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const routeKey = `${pathname}?${searchParams.toString()}`;

  return (
    <div key={routeKey} className="page-transition-enter">
      {children}
    </div>
  );
}



