import React from "react";

const Footer = () => {
  return (
    <footer className="relative bottom-0 h-40 w-full bg-zinc-50">
      <div className="m-[0_auto] flex h-full max-w-[896px] flex-col items-start justify-center">
        <p className="text-sm font-semibold text-zinc-400">
          © by 동글. All Right Reserved.
        </p>
        <a
          href="mailto:team.dongle.biz@gmail.com"
          className="text-sm font-normal text-zinc-400"
        >
          Contact: team.dongle.biz@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
