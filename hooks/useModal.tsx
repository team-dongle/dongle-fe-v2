import { useEffect, useRef, useState } from "react";

export function useModal() {
  const [visible, setVisible] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      window.addEventListener("keydown", handleKeyDown);
    };
  }, [visible]);

  const openModal = () => {
    setVisible(true);
  };

  const closeModal = () => {
    setVisible(false);
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      setVisible(false);
    } else {
      e.stopPropagation();
    }
  };
  const handleOutsideClick = (e: Event) => {
    const current = modalRef.current;
    if (visible && current && !current.contains(e.target as Node))
      setVisible(false);
    else {
      e.stopPropagation();
    }
  };
  return {
    visible,
    modalRef,
    closeModal,
    openModal,
  };
}
