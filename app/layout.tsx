import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Suspense } from "react";
import Footer from "./components/footer";
import BackToTop from "./components/back-to-top";
import Header from "./components/header";
import TopLoader from "./components/top-loader";
import Providers from "./providers";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Cure Hub Med Solutions",
    template: "%s | Cure Hub Med Solutions",
  },
  description:
    "Medical billing, revenue cycle management, and healthcare operations insights from Cure Hub Med Solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col antialiased">
        <Providers>
          <Suspense fallback={null}>
            <TopLoader />
          </Suspense>
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}
