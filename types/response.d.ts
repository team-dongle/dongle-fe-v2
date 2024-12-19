import { ClubReportType, ClubType } from "@/types/club";
import { BannerType } from "@/types/banner";
import { ReportType, ReportDetailType } from "./report";

export interface GeneralResponse {
  code: number;
  message?: string;
}

//Club
export interface ClubListResponse extends GeneralResponse {
  result: { count: number; rows: ClubType[] };
}
export interface ClubDetailResponse extends GeneralResponse {
  result: ClubType;
}
export interface ClubReportResponse extends GeneralResponse {
  result: { count: number; rows: ClubReportType[] };
}

//Banner
export interface BannerListResponse extends GeneralResponse {
  result: { count: number; rows: BannerType[] };
}

//Report
export interface ReportListResponse extends GeneralResponse {
  result: { count: number; rows: ReportType[] };
}
export interface ReportDetailResponse extends GeneralResponse {
  result: ReportDetailType;
}
