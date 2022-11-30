import React, { useState } from "react";
// import AdminOrdersModal from "./AdminOrdersModal";
import DetailProductBuy from "../DetailProductBuy/DetailProductBuy";
import ticket from "../../Img/ticket.svg"
import bolsaCheck from "../images/bolsa-check.png";
import entrega from "../images/camion.png";
import entregaCheck from "../images/camion-check.png";
import check from "../images/check.png";
import checkCheck from "../images/check-check.png";



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

    // const estadoInterno = "Comprado";
    // const estadoInterno = "Enviado";
    const estadoInterno = "Entregado";

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
            <div className="flex flex-col justify-around items-center bg-white py-7 px-4 w-[880px] h-80 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
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
                    {estado === "Comprado" ?
                        <div>
                            <div className="flex justify-between">
                                <img src={bolsaCheck} />
                                <img src={entrega} />
                                <img src={check} />
                            </div>
                            <div className="w-full h-4 bg-slate-400 rounded-lg">
                                <div className="w-[5%] h-4 bg-[#1FD516] rounded-lg"></div>
                            </div>
                        </div> : estado === "Despachado" ?
                            <div >
                                <div className="flex justify-between">
                                    <img src={bolsaCheck} />
                                    <img src={entregaCheck} />
                                    <img src={check} />
                                </div>
                                <div className="w-full h-4 bg-slate-400 rounded-lg">
                                    <div className="w-[55%] h-4 bg-[#1FD516] rounded-lg"></div>
                                </div>
                            </div> : estado === "Entregado" ?
                                <div >
                                    <div className="flex justify-between">
                                        <img src={bolsaCheck} />
                                        <img src={entregaCheck} />
                                        <img src={checkCheck} />
                                    </div>
                                    <div className="w-full h-4 bg-slate-400 rounded-lg">
                                        <div className="w-[100%] h-4 bg-[#1FD516] rounded-lg"></div>
                                    </div>
                                </div> : <p></p>}
                </section>

            </div >
        </div >
    )
}

export default UserOrderCard;