import { getClubDetail } from "@/apis/club";
import { formatDate } from "@/utils/format";
import Information from "@/components/domain/detail/introduction/information";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { result } = await getClubDetail(id);

  const informationList: string[] = [
    result.location,
    result.owner.name,
    formatDate(result.recruitPeriod),
    result.contact,
  ];
  return (
    <div className="flex flex-col gap-20">
      <Information
        logo={result.logo}
        name={result.name}
        category={result.category.name}
        applyUrl={result.applyUrl}
        informationList={informationList}
      />
    </div>
  );
}
