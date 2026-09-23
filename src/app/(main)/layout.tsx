// app/(main)/layout.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { MotionConfig } from "motion/react";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <MotionConfig reducedMotion="user">
      <Navbar />
      <main className="grow bg-background">{children}</main>
      <Footer />
      </MotionConfig>
    </>
  );
}
