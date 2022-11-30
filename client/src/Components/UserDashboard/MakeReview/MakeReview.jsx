import React from "react";
import Modal from "./Modal";
import FormularioReview from "./FormularioReview";

import { useModal } from "./useModal";

const MakeReview = () => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
        <button onClick={openModal}>HACER REVIEW</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <FormularioReview closeModal={closeModal}/>
        </Modal>
    </div>
  )
}

export default MakeReview;