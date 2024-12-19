import Tabs from "@/components/domain/detail/Tabs";

export default async function Layout({
  children,
  tabs,
  params,
}: {
  children: React.ReactNode;
  tabs: React.ReactNode;
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <>
      {children}
      <Tabs id={id} />
      {tabs}
    </>
  );
}
