import React, { useState } from "react";
import AdminOrdersModal from "./AdminOrdersModal";

const AdminOrdersCard = ({ id, nombre, email, image, estado, fecha, direccion, products }) => {

    const [openModal, setOpenModal] = useState(false)

    // funcion que entre al array con el propio objeto con un modal que sera aparte
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    return (
        <div className="flex justify-between  bg-white py-7 px-4 w-[890px] h-56 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
            <div className="flex ">
                <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg">
                    <img
                        src={image}
                        alt="imagem Producto"
                    // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className=" flex w-[28rem] flex-col mx-8 items-center ">
                    <h1 className=" font-bold tracking-tight text-gray-900 sm:text-lg leading-none">ID Pedido: {id}</h1>
                    <div className="flex justify-center items-center gap-1">
                        <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Nombre: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{nombre}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Email: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{email}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Fecha Compra: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{fecha}</p>
                    </div>
                    <div className="flex justify-center items-center gap-1">
                        <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Direccion: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{direccion}</p>
                    </div>
                    {/* <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-3">${price}</p> */}
                </div>
            </div >
            <div className="mr-10 mt-8">
                {/* <p>Modal: {brand}</p> */}
                <div className="flex justify-center items-end gap-1">
                    <p className="font-bold text-2xl">Estado: </p>
                    <p className=" font-bold tracking-tight text-indigo-600 sm:text-2xl mt-1">{estado}</p>
                </div>
                <button className="text-[#f15a24] font-semibold text-xl " onClick={() => handleOpenModal()}>Cambiar Estado</button>
                {/* {openModal &&
                    <div>
                        <p>Modalito</p>
                    </div>
                } */}
                {openModal &&
                    <AdminOrdersModal
                        setOpenModal={setOpenModal}
                        id={id}
                        estado={estado}
                        products={products}
                    />
                    // <ModalCantidad
                    //     id={id}
                    //     setOpenModal={setOpenModal}
                    //     title={title}
                    //     image={image}
                    //     cantidad={cantidad}
                    //     price={price}
                    //     available_quantity={available_quantity}
                    //     priceFinal={priceFinal}
                    //     addCarryNewQuantity={addCarryNewQuantity}
                    // />

                }
                <p className="text-white">Detalles</p>
            </div>
            {/* <button className="absolute right-2 top-2  flex w-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => onDeleteCarry(id)}>X</button> */}
            {/* <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p> */}
        </div >
    )
}

export default AdminOrdersCard;