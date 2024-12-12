import { useState } from "react";
import { filterOption } from "@/types/filter";

export function useFilter() {
  const [filterOption, setFilterOption] = useState<filterOption>({
    category: [],
    isRecruiting: null,
  });

  const setIsRecruiting = (isRecruiting: boolean | null) => {
    setFilterOption((prev) => ({
      ...prev,
      isRecruiting: isRecruiting,
    }));
  };

  const setCategory = (category: string | []) => {
    if (category.length == 0) {
      setFilterOption((prev) => ({ ...prev, category: [] }));
    } else {
      setFilterOption((prev) =>
        prev.category.includes(category)
          ? { ...prev, category: prev.category.filter((e) => e != category) }
          : { ...prev, category: [...prev.category, category] },
      );
    }
  };

  return {
    filterOption,
    setFilterOption,
    setCategory,
    setIsRecruiting,
  };
}
