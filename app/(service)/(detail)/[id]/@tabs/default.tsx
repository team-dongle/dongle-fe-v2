import { getClubDetail } from "@/apis/club";
import Introduction from "@/components/domain/detail/introduction/Introduction";

export default async function Default({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const { result } = await getClubDetail(id);

  return <Introduction thumbnail={result.thumbnail} detail={result.detail} />;
}
