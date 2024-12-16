"use client";

import React from "react";
import { useRouter } from "next/navigation";

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  return (
    <div
      className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center bg-[rgba(0,0,0,0.1)] px-8"
      onClick={() => router.back()}
    >
      {children}
    </div>
  );
};

export default ModalOverlay;
