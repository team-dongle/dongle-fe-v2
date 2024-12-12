import CategoryType from "@/constants/category";

export interface filterOption {
  category: CategoryType[];
  isRecruiting: boolean | null;
}
