import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getOrders } from "../../Redux/actions";
import AdminOrdersCard from "./AdminOrdersCard/AdminOrdersCard";
import { filterState, filterDate, getOrdersAdmin } from "../../Redux/actions";
import { useSelector, useDispatch, } from "react-redux";
import PageNoAdmin from "../PageNoAdmin/PageNoAdmin";
import Loading from "../Loading/Loading";


const AdminOrders = () => {
    // PARA TRAER ELEMENTOS
    const user = useSelector((state) => state.currentUser)
    const dispatch = useDispatch();
    const orders = useSelector((state) => state.ordersAdmins);


    useEffect(() => {
        dispatch(getOrdersAdmin());
    }, [dispatch]);

    const [isLoading, setIsLoading] = useState(true);
    const [filterEstado, setFilterEstado] = useState("Disable")


    // FILTROS
    const [filtroEst, setFiltroEst] = useState("")

    const handleFilterState = (e) => {
        dispatch(filterState(e.target.value))
    }

    const handleFilterAll = () => {
        dispatch(filterState("All"))
        document.getElementById("States").options.item("defaultValue").selected = true;
    }

    // const handleFilterDate = (e) => {
    //     dispatch(filterDate(e.target.value))
    // }

    return (
        <div>
            {isLoading ? (
                <Loading setIsLoading={setIsLoading} isLoading={isLoading} />
            ) :

                user && user.isAdmin === false ?
                    <div className=" bg-slate-50 ">
                        {console.log(orders)}
                        {console.log(filterEstado)}
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
                        {orders ? (
                            <div div className="flex flex-row justify-evenly h-max">
                                {/* FILTROS */}
                                <div className="mt-10 w-1/5 h-[440px] static rounded-xl border border-solid border=[#e6e8eb]">
                                    <p className="mt-5 font-bold tracking-tight text-gray-900 sm:text-4xl ">
                                        Estado De Ordenes
                                    </p>
                                    <p className="mt-3 font-bold tracking-tight text-gray-400 sm:text-lg ">
                                        Cambia el Estado De cada Orden: -Comprado, -Enviado, -Recibido Si Necesitas Puedes Filtrar Las Ordenes Por Su Estado.
                                    </p>
                                    <p className="mt-1 font-bold tracking-tight text-gray-900 sm:text-2xl ">
                                        Filtro:
                                    </p>
                                    <div>
                                        <div className="">
                                            <label for="estado" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar Por Estado:</label>
                                            <div>
                                                <select onChange={(e) => handleFilterState(e)} id="States" className="block w-3/4 p-2 mb-3 mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-800 ">
                                                    <option value="defaultValue" selected disabled >Estado</option>
                                                    <option value="Comprado">Comprado</option>
                                                    <option value="Despachado">Despachado</option>
                                                    <option value="Entregado">Entregado</option>
                                                </select>
                                            </div>
                                        </div>
                                        {/* <div>
                                            <label for="fecha" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Filtrar Por Fecha</label>
                                            <div className="">
                                                <select onChange={(e) => handleFilterDate(e)} id="fecha" className="block w-3/4 p-2 mb-3 mx-auto text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-800 ">
                                                    <option selected disabled >Fecha</option>
                                                    <option value="Ascendente">Ascendente</option>
                                                    <option value="Descendente">Descendente</option>
                                                </select>
                                            </div>
                                        </div> */}
                                        <div className="mt-6 text-white w-36 m-auto bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-1 py-2">
                                            <button onClick={() => handleFilterAll()}>Quitar Filtro</button>
                                        </div>
                                    </div>
                                </div>


                                <div className="flex flex-col flex-wrap content-center">
                                    {orders.length > 0 ?
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
                                        )) :
                                        <div className="flex flex-col flex-wrap content-center">
                                            <div className="flex flex-col  items-center bg-white py-7 px-4 w-[750px] h-96 rounded-xl relative ">
                                                <p className="mt-20 font-bold tracking-tight text-gray-900 sm:text-5xl leading-none">
                                                    No Hay Ordenes
                                                </p>
                                                <p className="font-bold tracking-tight text-gray-900 sm:text-4xl ">
                                                    Con Este Estado.
                                                </p>
                                            </div>
                                        </div>}
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
                    </div > : <PageNoAdmin />
            }
        </div >
    )
}

export default AdminOrders;