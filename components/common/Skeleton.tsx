import React from "react";

const Skeleton = ({
  w,
  h,
  children,
}: {
  w: number | string;
  h: number | string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={`animate-skeleton-gradient h-${h} w-${w} rounded-2xl bg-gradient-to-br from-zinc-200 via-white to-zinc-200 bg-[length:400%_400%]`}
    >
      {children}
    </div>
  );
};

export default Skeleton;
