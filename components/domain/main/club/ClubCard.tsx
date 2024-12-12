import clsx from "clsx";
import React from "react";

interface Props {
  name: string;
  category: string;
  isRecruiting: boolean;
}
const ClubCard = ({ name, category, isRecruiting }: Props) => {
  return (
    <li className="flex h-24 cursor-pointer flex-row items-center justify-between rounded-xl border border-zinc-100 px-6">
      <div className="flex flex-col">
        <span className="text-xl font-bold text-zinc-700">{name}</span>
        <span className="text-sm text-zinc-400">{category}</span>
      </div>
      <span
        className={clsx(
          "flex h-7 w-16 items-center justify-center rounded-lg text-xs font-semibold",
          isRecruiting
            ? "bg-primary-400 text-white"
            : "bg-zinc-100 text-zinc-300",
        )}
      >
        {isRecruiting ? "모집 중" : "모집 마감"}
      </span>
    </li>
  );
};

export default ClubCard;
