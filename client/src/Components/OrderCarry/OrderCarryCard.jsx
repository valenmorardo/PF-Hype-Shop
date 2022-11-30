import React, { useState } from "react";
import ModalCantidad from "./ModalCantidad";

const OrderCarryCard = ({ id, title, brand, image, cantidad, size, externalMaterial, price, onDeleteCarry, saveItem, available_quantity, priceFinal, addCarryNewQuantity
}) => {

    const [openModal, setOpenModal] = useState(false)

    const talla =
    
        typeof size !== "string"
            ? Object.values(size)
                .find((attr) => attr.name === "Talle")
                .value.slice(0, 2)
            : size;


    // funcion que entre al array con el propio objeto con un modal que sera aparte
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    return (
        <div className="flex justify-between  bg-white py-7 px-4 w-[890px] h-48 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
            <div className="flex ">
                <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt="imagem Producto"
                    // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className=" flex w-[28rem] flex-col mx-8 items-center ">
                    <h1 className=" font-bold tracking-tight text-gray-900 sm:text-lg leading-none">{title}</h1>
                    <div className="flex justify-center items-center gap-1">
                        <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Talla: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{talla}</p>
                    </div>
                    <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-3">${price}</p>
                </div>
            </div >
            <div className="mr-10 mt-8">
                {/* <p>Modal: {brand}</p> */}
                <div className="flex justify-center items-end gap-1">
                    <p className="font-bold text-2xl">Cantidad: </p>
                    <p className=" font-bold tracking-tight text-indigo-600 sm:text-2xl mt-1">{cantidad}</p>
                </div>
                <button className="text-[#f15a24] font-semibold text-xl " onClick={() => handleOpenModal()}>Editar Cantidad</button>
                {/* {openModal &&
                    <div>
                        <p>Modalito</p>
                    </div>
                } */}
                {openModal &&
                    <ModalCantidad
                        id={id}
                        setOpenModal={setOpenModal}
                        title={title}
                        image={image}
                        cantidad={cantidad}
                        price={price}
                        available_quantity={available_quantity}
                        priceFinal={priceFinal}
                        addCarryNewQuantity={addCarryNewQuantity}


                    />}
                {/* <p className="">Detalles</p> */}
            </div>
            <button className="absolute right-2 top-2  flex w-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => onDeleteCarry(id)}>X</button>
            {/* <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p> */}
        </div >
    )
}

export default OrderCarryCard;