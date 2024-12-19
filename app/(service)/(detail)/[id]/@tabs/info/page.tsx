import { getClubDetail } from "@/apis/club";
import Carousel from "@/components/common/Carousel";
import Skeleton from "@/components/common/Skeleton";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { result } = await getClubDetail(id);

  return (
    <div className="flex flex-col gap-9">
      <Skeleton w={"full"} h={"full"}>
        {result.thumbnail && <Carousel Thumbnails={result.thumbnail} />}
      </Skeleton>
      <p className="w-full whitespace-pre-wrap text-xl text-zinc-700">
        {result.detail}
      </p>
    </div>
  );
}
