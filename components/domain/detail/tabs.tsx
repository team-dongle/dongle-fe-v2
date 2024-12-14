"use client";

import clsx from "clsx";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

export default function Tabs({ id }: { id: string }) {
  const segment = useSelectedLayoutSegment("tabs");

  return (
    <nav className="flex w-full flex-row">
      <Link
        className={clsx(
          "mb-12 h-12 w-full border-b-4 text-center text-xl font-bold",
          segment == "introduction" || !segment
            ? "border-b-primary-400 text-primary-400"
            : "border-b-zinc-200 text-zinc-200",
        )}
        href={`/${id}/introduction`}
        replace
      >
        동아리 정보
      </Link>
      <Link
        className={clsx(
          "h-12 w-full border-b-4 text-center text-xl font-bold",
          segment == "feed"
            ? "border-b-primary-400 text-primary-400"
            : "border-b-zinc-200 text-zinc-200",
        )}
        href={`/${id}/feed`}
        replace
      >
        동아리 활동보고서
      </Link>
    </nav>
  );
}
