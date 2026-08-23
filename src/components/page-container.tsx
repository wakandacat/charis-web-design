export default function PageContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="bg-(--charis-light)">{children}</div>;
}
