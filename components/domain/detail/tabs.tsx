"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Tabs({ id }: { id: string }) {
  const segment = useSelectedLayoutSegment("tabs");

  return (
    <nav className="my-12 flex w-full flex-row">
      <Link
        className={clsx(
          "h-12 w-full border-b-4 text-center text-xl font-bold",
          segment == "info" || !segment
            ? "border-b-primary-400 text-primary-400"
            : "border-b-zinc-200 text-zinc-200",
        )}
        href={`/${id}/info`}
        replace
      >
        동아리 정보
      </Link>
      <Link
        className={clsx(
          "h-12 w-full border-b-4 text-center text-xl font-bold",
          segment == "reports"
            ? "border-b-primary-400 text-primary-400"
            : "border-b-zinc-200 text-zinc-200",
        )}
        href={`/${id}/reports`}
        replace
      >
        동아리 활동보고서
      </Link>
    </nav>
  );
}
