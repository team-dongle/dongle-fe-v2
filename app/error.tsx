"use client";
import ServiceLogo from "@/components/common/ServiceLogo";
import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <div className="m-[0_auto] flex h-svh w-auto flex-col items-center justify-center gap-4 p-6">
        <ServiceLogo type="full" />
        <h1 className="text-xl font-semibold text-gray-500">
          오류가 발생했습니다.
        </h1>
        {/* <button
          className="text-md text-gray-300 hover:text-sky-500 hover:underline"
          onClick={
            // Attempt to recover by trying to re-render the segment
            () => reset()
          }
        >
          다시 시도
        </button> */}
        <Link
          href="/"
          className="text-md text-gray-300 hover:text-sky-500 hover:underline"
        >
          메인 페이지로 돌아가기
        </Link>
      </div>
    </div>
  );
}
