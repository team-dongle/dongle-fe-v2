import React from "react";

const Skeleton = ({ w, h }: { w: number | string; h: number | string }) => {
  return (
    <div
      className={`animate-skeleton-gradient h-${h} w-${w} rounded-2xl bg-gradient-to-br from-zinc-200 via-white to-zinc-200 bg-[length:400%_400%]`}
    />
  );
};

export default Skeleton;
