import Page from "./info/page";

export default async function Default({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <Page params={params} />;
}
