import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import ScreenSizeProvider from "@/components/screen-size-provider";

const cormorantGaramond = Cormorant_Garamond({
  variable: "--font-cormorant-garamond",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Charis Web Design",
  description:
    "Ottawa-based website design and development services by Charis Web Design",
};

//root layout for entire application
//layouts must accept children as a prop and render them inside the layout
//root layout requires html and body tags
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScreenSizeProvider>
          <Navbar />
          {children}
          <Footer />
        </ScreenSizeProvider>
      </body>
    </html>
  );
}
