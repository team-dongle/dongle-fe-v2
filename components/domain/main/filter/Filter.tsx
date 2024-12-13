import React from "react";
import FilterIcon from "@/assets/icons/filter-icon.svg";
import { useModal } from "@/hooks/useModal";
import ModalOverlay from "@/components/common/modal/ModalOverlay";
import Modal from "@/components/common/modal/Modal";
import { FilterOptions } from "@/types/filter";
import Toggle from "./Toggle";
import CategorySelection from "./CategorySelection";

const Filter = ({
  filterOptions,
  setCategory,
  setIsRecruiting,
}: {
  filterOptions: FilterOptions;
  setCategory: (category: string | []) => void;
  setIsRecruiting: (isRecruiting: boolean | null) => void;
}) => {
  const { visible, modalRef, closeModal, openModal } = useModal();

  function reset() {
    setCategory([]);
    setIsRecruiting(null);
  }
  return (
    <>
      <button
        className="flex flex-row items-center gap-2 rounded-xl border border-primary-400 px-4 text-primary-400"
        onClick={openModal}
      >
        <FilterIcon />
        필터
      </button>

      {visible && (
        <ModalOverlay>
          <Modal title="검색 필터">
            <div
              className="flex h-full w-full flex-col gap-10 pt-5"
              ref={modalRef}
            >
              <section>
                <h1 className="text-xl font-semibold text-zinc-700">
                  카테고리
                </h1>
                <span className="mb-4 text-zinc-500">
                  중복으로 선택이 가능합니다.
                </span>
                <div className="mt-6 flex flex-row gap-7">
                  <CategorySelection
                    filterOptions={filterOptions}
                    setCategory={setCategory}
                  />
                </div>
                <h1 className="mb-2 mt-12 text-xl font-semibold text-zinc-700">
                  모집 여부
                </h1>
                <Toggle
                  name={"모집 여부"}
                  isRecruiting={filterOptions.isRecruiting}
                  setIsRecruiting={setIsRecruiting}
                />
              </section>
              <section className="flex flex-row justify-between">
                <button
                  onClick={reset}
                  className="px-3 text-sm font-bold text-zinc-400"
                >
                  초기화
                </button>
                <div className="flex flex-row gap-2">
                  <button
                    className="h-10 w-32 rounded-xl bg-zinc-100 text-zinc-400"
                    onClick={closeModal}
                  >
                    취소
                  </button>
                  <button
                    className="h-10 w-32 rounded-xl bg-primary-400 text-white"
                    onClick={closeModal}
                  >
                    필터 적용
                  </button>
                </div>
              </section>
            </div>
          </Modal>
        </ModalOverlay>
      )}
    </>
  );
};

export default Filter;
