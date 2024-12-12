import { ThumbnailType } from "@/types/file";

export interface ClubType {
  _id: number;
  name: string;
  location: string;
  contact: string;
  sns?: string;
  thumbnail?: ThumbnailType[];
  detail: string;
  isRecruiting: boolean;
  recruitPeriod: string | date;
  applyUrl: string;
  logo?: string;
  category: { name: string };
  owner: { name: string };
}
