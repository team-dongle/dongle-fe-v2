import { getBannerList } from "@/apis/banner";
import { getClubList } from "@/apis/club";
import Banner from "@/components/domain/main/Banner";
import ClubList from "@/components/domain/main/ClubList";

export default async function Page() {
  const { result } = await getClubList();
  const bannerList = await getBannerList();
  return (
    <div className="flex flex-col gap-12">
      <Banner banners={bannerList.result.rows} />
      <ClubList count={result.count} clubs={result.rows} />
    </div>
  );
}
