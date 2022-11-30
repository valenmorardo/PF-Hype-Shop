import React, { useState } from "react";
// import AdminOrdersModal from "./AdminOrdersModal";
import DetailProductBuy from "../DetailProductBuy/DetailProductBuy";
import ticket from "../../Img/ticket.svg"

const UserOrderCard = ({ id, nombre, email, image, estado, fecha, direccion, products, precioTotal }) => {

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
            <div className="flex flex-col justify-around items-center bg-white py-7 px-4 w-[880px] h-64 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
                <section className="flex">
                    <div className="flex  justify-center ">
                        <div className="aspect-w-1 aspect-h-1  h-min w-[100px] overflow-hidden rounded-lg self-center">
                            <img
                                src={image}
                                alt="imagem Producto"
                            // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <div className=" flex w-[28rem] flex-col mx-4 items-center ">
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


                        </div>
                    </div >
                    <div className="mr-10 mt-8">
                        <div className="flex justify-center items-end gap-1">
                            <p className="font-bold text-2xl">Estado: </p>
                            <p className=" font-bold tracking-tight text-indigo-600 sm:text-2xl mt-1">{estado}</p>
                        </div>
                        <button onClick={() => handleOpenDetail()} className=" font-bold tracking-tight text-[#f15a24]  sm:text-xl leading-none">Detalle Compra</button>
                        {/* Detail Compra */}
                        <p className="text-white">Detalles</p>
                    </div>
                </section>
                <section className="w-full">
                    {/* <span><img className="text-lime-500" src={ticket} /></span> */}
                    <p>Modal</p>
                    <div className="w-full h-4 bg-slate-400 rounded-lg">
                        <div className="w-[50%] h-4 bg-orange-600 rounded-lg"></div>
                    </div>
                </section>

            </div >
        </div >
    )
}

export default UserOrderCard;