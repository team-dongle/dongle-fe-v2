import Page from "./page";

export default function Default({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return <Page params={params} />;
}
