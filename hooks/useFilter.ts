import { useState } from "react";
import { FilterOptions } from "@/types/filter";

export function useFilter() {
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    category: [],
    isRecruiting: null,
  });

  const setIsRecruiting = (isRecruiting: boolean | null) => {
    setFilterOptions((prev) => ({
      ...prev,
      isRecruiting: isRecruiting,
    }));
  };

  const setCategory = (category: string | []) => {
    if (category.length == 0) {
      setFilterOptions((prev) => ({ ...prev, category: [] }));
    } else {
      setFilterOptions((prev) =>
        prev.category.includes(category)
          ? { ...prev, category: prev.category.filter((e) => e != category) }
          : { ...prev, category: [...prev.category, category] },
      );
    }
  };

  return {
    filterOptions,
    setCategory,
    setIsRecruiting,
  };
}
