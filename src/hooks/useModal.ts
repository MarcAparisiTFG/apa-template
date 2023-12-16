// hooks/useModal.ts
import { useState, useCallback } from "react";

const useModal = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const handleModal = useCallback(() => {
    setIsOpenModal(!isOpenModal);
  }, [isOpenModal]);

  return { isOpenModal, handleModal };
};

export default useModal;
