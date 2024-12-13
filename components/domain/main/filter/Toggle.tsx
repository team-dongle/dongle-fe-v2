"use client";

import React from "react";
import clsx from "clsx";

interface Props {
  name: string;
  isRecruiting: boolean | null;
  setIsRecruiting: (isRecruiting: boolean | null) => void;
}

const Toggle = ({ name, isRecruiting, setIsRecruiting }: Props) => {
  return (
    <div className="flex flex-row">
      <input className="hidden" name={name} type="checkbox" id={name} />
      <label
        htmlFor={name}
        onClick={() =>
          setIsRecruiting(isRecruiting == null ? true : !isRecruiting)
        }
        className={clsx(
          `relative h-8 w-16 rounded-3xl border shadow-inner after:absolute after:top-[50%] after:block after:h-6 after:w-6 after:translate-y-[-50%] after:rounded-2xl after:bg-white after:shadow after:content-[""]`,
          {
            [`bg-primary-500 after:right-1`]: isRecruiting,
            [`bg-zinc-200 after:left-1`]: !isRecruiting || null,
          },
        )}
      ></label>
    </div>
  );
};

export default Toggle;
