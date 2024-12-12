import { categoryList } from "@/constants/category";
import CheckIcon from "@/assets/icons/check-icon.svg";

import React from "react";
import clsx from "clsx";
import { filterOption } from "@/types/filter";

const CategorySelection = ({
  filterOption,
  setCategory,
}: {
  filterOption: filterOption;
  setCategory: (category: string) => void;
}) => {
  return categoryList.map((category) => {
    return (
      <div
        key={category}
        className="flex flex-row items-center justify-center gap-2"
      >
        <input type="checkbox" id={category} className="hidden" />
        <label
          htmlFor={category}
          onClick={() => setCategory(category)}
          className={clsx(
            "flex h-4 w-4 items-center justify-center rounded border border-zinc-200",
            filterOption.category?.includes(category) ? "bg-primary-400" : "",
          )}
        >
          {filterOption.category?.includes(category) ? <CheckIcon /> : null}
        </label>
        <span className="zinc-700">{category}</span>
      </div>
    );
  });
};

export default CategorySelection;
