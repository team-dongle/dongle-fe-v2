import React from "react";
import CloseIcon from "@/assets/icons/close-icon.svg";

const Modal = ({
  title,
  children,
}: {
  title?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}
      className="relative h-auto max-h-[600px] w-[min(600px,100%)] overflow-y-auto rounded-lg bg-white p-6 shadow-lg"
    >
      {title && (
        <h1 className="pb-4 text-2xl font-semibold text-zinc-700">{title}</h1>
      )}
      <button type="button" className="absolute right-4 top-4 h-4 w-4">
        <CloseIcon />
      </button>
      {children}
    </div>
  );
};

export default Modal;
