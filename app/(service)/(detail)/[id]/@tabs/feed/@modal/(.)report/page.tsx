import Modal from "@/components/common/modal/Modal";
import ModalOverlay from "@/components/common/modal/ModalOverlay";
import Report from "@/components/domain/detail/feed/@modal/report/Report";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  console.log(id);

  return (
    <ModalOverlay>
      <Modal title="활동 보고서" closeButton={true}>
        <Report />
      </Modal>
    </ModalOverlay>
  );
}
