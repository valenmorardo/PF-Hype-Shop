import React, { useState } from "react";
import AdminOrdersModal from "./AdminOrdersModal";
import DetailProductBuy from "../../DetailProductBuy/DetailProductBuy";

const AdminOrdersCard = ({ id, nombre, email, image, estado, fecha, direccion, products, precioTotal }) => {

    const [openModal, setOpenModal] = useState(false)

    // funcion que entre al array con el propio objeto con un modal que sera aparte
    const handleOpenModal = () => {
        setOpenModal(true)
    }

    // ESTADO PARA VER DETALLE:
    const [openDetail, setOpenDetail] = useState(false)

    const handleOpenDetail = () => {
        setOpenDetail(true)
    }

    const handleCloseDetail = () => {
        setOpenDetail(false)
    }

    return (
        <div>
            {
                openDetail &&
                <DetailProductBuy
                    onClose={handleCloseDetail}
                    products={products}
                    precioTotal={precioTotal}
                />
            }
            <div className="flex justify-around items-center bg-white py-7 px-4 w-[750px] h-56 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
                <div className="flex  justify-center ">
                    <div className="aspect-w-1 aspect-h-1  h-min w-[100px] overflow-hidden rounded-lg self-center">
                        <img
                            src={image}
                            alt="imagem Producto"
                        // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <div className=" flex w-[28rem] flex-col mx-[-30px] items-center ">
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
                        <button onClick={() => handleOpenDetail()} className=" font-bold tracking-tight text-[#f15a24]  sm:text-xl leading-none">Detalle Compra</button>
                        {/* <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-3">${price}</p> */}
                    </div>
                </div >
                <div className="mr-10 mt-8">
                    {/* <p>Modal: {brand}</p> */}
                    <div className="flex justify-center items-end gap-1">
                        <p className="font-bold text-2xl">Estado: </p>
                        <p className=" font-bold tracking-tight text-indigo-600 sm:text-2xl mt-1">{estado}</p>
                    </div>
                    <button className=" font-bold tracking-tight text-[#f15a24]  sm:text-xl leading-none" onClick={() => handleOpenModal()}>Cambiar Estado</button>
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

                    {/* Detail Compra */}
                    <p className="text-white">Detalles</p>
                </div>
                {/* <button className="absolute right-2 top-2  flex w-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => onDeleteCarry(id)}>X</button> */}
                {/* <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p>
            <p>{card}</p> */}
            </div >
        </div >
    )
}

export default AdminOrdersCard;