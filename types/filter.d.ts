import CategoryType from "@/constants/category";

export interface FilterOptions {
  category: CategoryType[];
  isRecruiting: boolean | null;
}
