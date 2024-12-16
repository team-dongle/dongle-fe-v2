import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;

  return (
    <div className="grid grid-cols-3 place-items-center gap-y-6">
      <Link href={`/${id}/feed/report`}>
        <div className="h-64 w-64 rounded-2xl bg-zinc-300" />
      </Link>
    </div>
  );
}
