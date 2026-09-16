//this is the 404 error page for all routes that do not exist.

import "./globals.css";
import { Cormorant_Garamond, Inter } from "next/font/google";
import type { Metadata } from "next";
import PageSection from "@/components/page-section";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "404 - Page Not Found",
  description: "The page you are looking for does not exist.",
};

export default function GlobalNotFound() {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <PageSection backgroundColour="light">
          <div className="flex min-h-[calc(100svh-var(--navbar-height)-8rem)] flex-col justify-center">
            <h1 className="text-2xl font-bold text-(--charis-green)">
              Error 404: Page Not Found
            </h1>
            <p className="text-lg text-(--charis-green)">
              This page does not exist.
            </p>
          </div>
        </PageSection>
      </body>
    </html>
  );
}
