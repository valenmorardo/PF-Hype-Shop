import React from "react"

const ModalPrevisualizar = ({ setModalPrev }) => {
    return (
        <div className="z-20 bg-[#f8fafc8c] fixed top-0 bottom-0 right-0 left-0 rounded-2xl">
            <button onClick={() => setModalPrev(false)}>Cerrar</button>
            <p>
                Este es el Modal Grande
            </p>
        </div>
    )
}

export default ModalPrevisualizar