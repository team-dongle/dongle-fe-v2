import React from "react";
import ServiceLogo from "@/components/common/ServiceLogo";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 z-50 h-24 w-full border-b border-b-zinc-100 bg-white">
      <div className="m-[0_auto] flex h-full max-w-[896px] flex-row items-center justify-between">
        <ServiceLogo type="full" />
        <nav className="flex h-full w-auto flex-row items-center justify-start gap-3">
          <a
            className="flex h-16 w-28 items-center justify-center rounded-lg font-medium text-zinc-400 transition-all hover:bg-zinc-100"
            href="/notices"
          >
            공지사항
          </a>
          <a
            className="flex h-16 w-28 items-center justify-center rounded-lg font-medium text-zinc-400 transition-all hover:bg-zinc-100"
            href="/feed"
          >
            활동 피드
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
