import React from "react";

const ModalOverlay = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="fixed left-0 top-0 z-[999] flex h-screen w-screen items-center justify-center overflow-y-hidden bg-[rgba(0,0,0,0.1)] px-8">
      {children}
    </div>
  );
};

export default ModalOverlay;
