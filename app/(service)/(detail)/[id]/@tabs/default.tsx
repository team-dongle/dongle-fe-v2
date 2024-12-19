import Page from "./introduction/page";

export default async function Default({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <Page params={params} />;
}
