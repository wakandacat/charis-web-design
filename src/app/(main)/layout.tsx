// app/(main)/layout.tsx
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="grow bg-background">{children}</main>
      <Footer />
    </>
  );
}
