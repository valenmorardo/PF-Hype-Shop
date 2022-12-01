import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../Redux/actions";
import AdminOrdersCard from "./AdminOrdersCard/AdminOrdersCard";
import { filterState, filterDate, getOrdersAdmin } from "../../Redux/actions";
import { useSelector, useDispatch, } from "react-redux";
import PageNoAdmin from "../PageNoAdmin/PageNoAdmin";


const AdminOrders = () => {
    // PARA TRAER ELEMENTOS
    const user = useSelector((state) => state.currentUser)
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.ordersAdmins);


    useEffect(() => {
        dispatch(getOrdersAdmin());
    }, [dispatch]);


    // FILTROS
    const [filtroEst, setFiltroEst] = useState("Disable")

    const handleFilterState = (e) => {
        dispatch(filterState(e.target.value))
    }

    const handleFilterDate = (e) => {
        dispatch(filterDate(e.target.value))
    }

    // const dataFalse = [
    //     {
    //         id: "222-34-ffefef-re32323",
    //         image: "https://cdn-icons-png.flaticon.com/512/1160/1160040.png?w=740&t=st=1662562187~exp=1662562787~hmac=4e81ab45c142d4e1ba117cc74f05df4bfa43bd3ec69b23769d5443b1cb0f0529",
    //         nombre: "Fernado Camilo",
    //         email: "FernadoPrueba@gmail.com",
    //         direccion: "CalleFalsa 123",
    //         fecha_Compra: "11-nov-2022",
    //         estado: "Comprado",
    //         precioTotal: 32000,
    //         Compra: [{
    //             age_group: "Adultos",
    //             available_quantity: 11,
    //             brand: "BASTO",
    //             cantidad: 1,
    //             category: "Deportivo",
    //             colors: ['Gris/Negro'],
    //             condition: "new",
    //             createdAt: "2022-11-21T00:54:32.614Z",
    //             externalMaterial: "P U",
    //             gender: "Hombre",
    //             id: "1e41a2ac-3665-468e-9667-f430c0ee585d",
    //             pictures: ['http://http2.mlstatic.com/D_691560-MLA50739161018_072022-O.jpg', 'http://http2.mlstatic.com/D_895662-MLA50739100505_072022-O.jpg', 'http://http2.mlstatic.com/D_798391-MLA50739042964_072022-O.jpg', 'http://http2.mlstatic.com/D_791707-MLA50739115287_072022-O.jpg', 'http://http2.mlstatic.com/D_798817-MLA50739084645_072022-O.jpg', 'http://http2.mlstatic.com/D_788750-MLA44340446576_122020-O.jpg', 'http://http2.mlstatic.com/D_647539-MLA44340446654_122020-O.jpg', 'http://http2.mlstatic.com/D_616216-MLA44340444826_122020-O.jpg'],
    //             price: 4990,
    //             sizes: ['44', '36', '38', '39', '40', '41', '42', '43', '35', '37', '34'],
    //             thumbnail: "http://http2.mlstatic.com/D_691560-MLA50739161018_072022-I.jpg",
    //             title: "Zapatilla Hombre Urbana Cómoda Liviana Económica",
    //             updatedAt: "2022-11-21T00:54:32.614Z"
    //         }, {
    //             age_group: "Adultos",
    //             available_quantity: 6,
    //             brand: "van",
    //             cantidad: 1,
    //             category: "Urbano",
    //             colors: ['Negro'],
    //             condition: "new",
    //             createdAt: "2022-11-21T00:54:32.614Z",
    //             externalMaterial: "P U",
    //             gender: "Hombre",
    //             id: "40a9c782-3e3d-4e3d-a122-4a8ff01e3843",
    //             pictures: ['http://http2.mlstatic.com/D_777834-MLA48541930548_122021-O.jpg', 'http://http2.mlstatic.com/D_887966-MLA48541972435_122021-O.jpg', 'http://http2.mlstatic.com/D_980026-MLA48541913577_122021-O.jpg', 'http://http2.mlstatic.com/D_811388-MLA48541978394_122021-O.jpg', 'http://http2.mlstatic.com/D_681976-MLA48541983405_122021-O.jpg', 'http://http2.mlstatic.com/D_622616-MLA48542124126_122021-O.jpg', 'http://http2.mlstatic.com/D_884060-MLA48542103182_122021-O.jpg'],
    //             price: 7490,
    //             sizes: ['38', '37', '39', '40', '35', '36'],
    //             thumbnail: "http://http2.mlstatic.com/D_777834-MLA48541930548_122021-I.jpg",
    //             title: "Calzado Urbano Van Con Plataforma",
    //             updatedAt: "2022-11-21T00:54:32.614Z"
    //         }],
    //     }
    // ]

    return (
        <div>

            {user && user.isAdmin === false ?
                <div className=" bg-slate-50 ">
                    {console.log(orders)}
                    <Link to="/" className="absolute left-0 top-4">
                        <button
                            type="submit"
                            className="mt-2 ml-6 flex w-3 items-center justify-center rounded-md border border-transparent bg-[#f15a24]  py-2 px-9 text-base font-medium text-white hover:bg-orange-500 focus:outline-none  "
                        >
                            Volver
                        </button>
                    </Link>
                    <p className="mt-3 font-bold tracking-tight text-[#f15a24]  sm:text-4xl">
                        ADMINISTRAR ORDENES
                    </p>
                    {orders && orders.length >= 1 ? (
                        <div div className="flex flex-row justify-evenly h-max">
                            {/* FILTROS */}
                            <div className="mt-10 w-1/5 h-[440px] static rounded-xl border border-solid border=[#e6e8eb]">
                                <p className="mt-5 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                                    Estado De Ordenes
                                </p>
                                <p className="mt-3 font-bold tracking-tight text-gray-400 sm:text-lg ">
                                    Cambia el Estado De cada Orden: -Comprado, -Enviado, -Recibido Si Necesitas Tambien Tienes Disponibles Filtros.
                                </p>
                                <p className="mt-1 font-bold tracking-tight text-gray-900 sm:text-2xl ">
                                    Filtros:
                                </p>
                                <div>
                                    <div className="">
                                        <label for="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar Por Estado:</label>
                                        <div>
                                            <select onChange={(e) => handleFilterState(e)} id="estado" className="block w-3/4 p-2 mb-3 mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-800 ">
                                                <option value={filtroEst} selected disabled >Estado</option>
                                                <option value="Comprado">Comprado</option>
                                                <option value="Despachado">Despachado</option>
                                                <option value="Entregado">Entregado</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div>
                                        <label for="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar Por Fecha</label>
                                        <div className="">
                                            <select onChange={(e) => handleFilterDate(e)} id="fecha" className="block w-3/4 p-2 mb-3 mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-800 ">
                                                <option selected disabled >Fecha</option>
                                                <option value="Ascendente">Ascendente</option>
                                                <option value="Descendente">Descendente</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="mt-6 text-white w-36 m-auto bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2">
                                        <button>Quitar Filtros</button>
                                    </div>
                                </div>
                            </div>
                            {/* CARDS */}
                            <div className="flex flex-col flex-wrap content-center">
                                {orders &&
                                    orders.map((el) => (
                                        <AdminOrdersCard
                                            key={el.id}
                                            id={el.id}
                                            // image={el.image}
                                            nombre={el.user.name}
                                            email={el.user.email}
                                            fecha={el.updatedAt.slice(0, 10)}
                                            // direccion={el.direccion}
                                            estado={el.estado}
                                            products={el.carrito}
                                            precioTotal={el.precioTotal}

                                        />
                                    ))}
                            </div>

                        </div>
                    ) : (
                        <div>
                            <p className="mt-20 font-bold tracking-tight text-gray-900 sm:text-7xl">
                                No Hay Ordenes
                            </p>
                            <p className="font-bold tracking-tight text-gray-900 sm:text-4xl ">
                                Los Clientes No han Realizado Compras Aun.
                            </p>
                        </div>
                    )
                    }
                </div > : <PageNoAdmin />}
        </div>
    )
}

export default AdminOrders;