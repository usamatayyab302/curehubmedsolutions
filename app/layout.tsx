import type { ReactNode } from "react";
import { Suspense } from "react";
import Footer from "./components/footer";
import BackToTop from "./components/back-to-top";
import Header from "./components/header";
import TopLoader from "./components/top-loader";
import Providers from "./providers";
import "./globals.css";

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
