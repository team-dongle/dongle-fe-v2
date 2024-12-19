import Modal from "@/components/common/modal/Modal";
import ModalOverlay from "@/components/common/modal/ModalOverlay";
import Skeleton from "@/components/common/Skeleton";

export default function Loading() {
  return (
    <ModalOverlay>
      <Modal title="활동 보고서" closeButton={true}>
        <div className="flex flex-col gap-5">
          <Skeleton w="full" h={64} />
          <Skeleton w="full" h={12} />
          <Skeleton w="full" h={12} />
        </div>
      </Modal>
    </ModalOverlay>
  );
}
