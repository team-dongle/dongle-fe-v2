import { getClubReport } from "@/apis/club";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { result } = await getClubReport(id);
  const reports = result.rows;

  return (
    <div className="grid grid-cols-3 place-items-center gap-y-6">
      {reports.map((report) => {
        return (
          <Link key={report._id} href={`/${id}/reports/${report._id}`}>
            <div className="h-64 w-64 rounded-2xl bg-zinc-300">
              <img
                src={report.images[0].url}
                className="h-64 w-64 rounded-2xl"
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}
