import { ClubListResponse } from "@/types/response";
import { fetchData } from "./fetch";

export async function getClubList() {
  return await fetchData<ClubListResponse>("/clubs", {
    method: "GET",
    cache: "default",
  });
}
