export default function PageSection({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-16 bg-blue-600">
      <div className="mx-auto w-full max-w-7xl">{children}</div>
    </section>
  );
}
