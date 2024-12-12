import { ClubType } from "@/types/club";
import { BannerType } from "@/types/banner";

export interface GeneralResponse {
  code: number;
  message?: string;
}
export interface ClubListResponse extends GeneralResponse {
  result: { count: number; rows: ClubType[] };
}

export interface BannerListResponse extends GeneralResponse {
  result: { count: number; rows: BannerType[] };
}
