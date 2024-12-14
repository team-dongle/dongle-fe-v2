import { ClubDetailResponse, ClubListResponse } from "@/types/response";
import { fetchData } from "./fetch";

export async function getClubList() {
  return await fetchData<ClubListResponse>("/clubs", {
    method: "GET",
    cache: "default",
  });
}

export async function getClubDetail(id: string) {
  return await fetchData<ClubDetailResponse>(`/clubs/${id}`, {
    method: "GET",
    cache: "default",
  });
}
