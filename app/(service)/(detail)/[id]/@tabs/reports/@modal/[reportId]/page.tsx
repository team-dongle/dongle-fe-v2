import { getReportDetail } from "@/apis/report";
import Carousel from "@/components/common/Carousel";
import Modal from "@/components/common/modal/Modal";
import ModalOverlay from "@/components/common/modal/ModalOverlay";
import { formatDate } from "@/utils/format";

export default async function Page({
  params,
}: {
  params: Promise<{ reportId: string }>;
}) {
  const reportId = (await params).reportId;
  const { result } = await getReportDetail(reportId);
  const createdAt = formatDate(result.createdAt.toString());

  return (
    <ModalOverlay>
      <Modal title="활동 보고서" closeButton={true}>
        <div className="flex flex-col gap-6">
          {result.images && <Carousel Thumbnails={result.images} />}
          <div className="flex flex-col gap-1">
            <h1 className="text-2xl font-semibold text-zinc-700">
              {result.title}
            </h1>
            <span className="text-lg text-zinc-500">{createdAt}</span>
          </div>
          <p className="whitespace-pre-wrap text-lg text-zinc-700">
            {result.content}
          </p>
          <button />
        </div>
      </Modal>
    </ModalOverlay>
  );
}
