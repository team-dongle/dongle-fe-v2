"use client";

import React, { useEffect } from "react";
import CloseIcon from "@/assets/icons/close-icon.svg";
import { useRouter } from "next/navigation";

const Modal = ({
  title,
  children,
  closeButton,
}: {
  title?: string;
  children: React.ReactNode;
  closeButton?: boolean;
}) => {
  const router = useRouter();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="relative h-auto max-h-[600px] w-[min(600px,100%)] overflow-hidden rounded-lg bg-white p-6 shadow-lg"
    >
      {title && (
        <h1 className="pb-4 text-2xl font-semibold text-zinc-700">{title}</h1>
      )}
      <button
        onClick={() => router.back()}
        type="button"
        className="absolute right-4 top-4 h-4 w-4"
      >
        <CloseIcon />
      </button>
      <div className="scrollbar-hide max-h-[450px] overflow-y-auto">
        {children}
      </div>
      {closeButton && (
        <div className="flex w-full justify-end">
          <button
            onClick={() => router.back()}
            type="button"
            className="mt-4 h-11 w-36 self-end rounded-xl bg-zinc-100 p-2 text-sm font-bold text-zinc-400"
          >
            닫기
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
