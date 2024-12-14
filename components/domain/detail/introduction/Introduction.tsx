import { ThumbnailType } from "@/types/file";
import Thumbnail from "@/components/domain/detail/introduction/Thumbnail";

export default function Introduction({
  thumbnail,
  detail,
}: {
  thumbnail: ThumbnailType[] | undefined;
  detail: string;
}) {
  return (
    <div className="flex flex-col gap-9">
      {thumbnail && <Thumbnail Thumbnails={thumbnail} />}
      <p className="w-full text-xl text-zinc-700">{detail}</p>
    </div>
  );
}
