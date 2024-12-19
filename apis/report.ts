import { ReportDetailResponse, ReportListResponse } from "@/types/response";
import { fetchData } from "./fetch";

export async function getReportList() {
  return await fetchData<ReportListResponse>("/reports", {
    method: "GET",
    cache: "default",
  });
}
export async function getReportDetail(id: string) {
  return await fetchData<ReportDetailResponse>(`/reports/${id}`, {
    method: "GET",
    cache: "default",
  });
}
