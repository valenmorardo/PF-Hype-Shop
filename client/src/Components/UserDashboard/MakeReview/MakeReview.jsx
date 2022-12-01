import React from "react";
import Modal from "./Modal";
import FormularioReview from "./FormularioReview";

import { useModal } from "./useModal";

const MakeReview = ({productId, cerrarModal}) => {
    const [isOpenModal, openModal, closeModal] = useModal(false);
  return (
    <div>
        <button className='text-orange-700 hover:text-white border border-orange-700 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2' onClick={openModal}>HACER REVIEW</button>
        <Modal isOpen={isOpenModal} closeModal={closeModal}>
          <FormularioReview closeModal={closeModal} productId={productId} cerrarModal={cerrarModal}/>
        </Modal>
    </div>
  )
}

export default MakeReview;