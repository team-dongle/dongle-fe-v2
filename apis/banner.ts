import { BannerListResponse } from "@/types/response";
import { fetchData } from "./fetch";

export async function getBannerList() {
  return await fetchData<BannerListResponse>("/banners", {
    method: "GET",
    cache: "default",
  });
}
