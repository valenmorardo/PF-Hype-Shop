import React, { useEffect, useState } from "react";
import UserOrderCard from "./UserOrderCard";
import { useSelector } from "react-redux";
import { getOrdersUsers } from '../../Redux/actions/index'
import { useDispatch } from "react-redux";
import MakeReview from './MakeReview/MakeReview';
import Error404 from "../error404/error404";
import Loading from "../Loading/Loading";


const UserOrder = () => {
    const dispatch = useDispatch()

    const usuario = useSelector((state) => state.currentUser);
    const orders = useSelector((state) => state.ordersUsers);
    const [isLoading, setIsLoading] = useState(true);
    console.log(orders)


    useEffect(() => {
        if (usuario) {
            dispatch(getOrdersUsers(usuario.id));
        }
    }, [usuario]);

    return (
        <div>
            {isLoading ? (
                <Loading setIsLoading={setIsLoading} isLoading={isLoading} />
            ) :

                usuario && usuario.isActive ?

                    <div>
                        <p className="mt-0 font-bold tracking-tight text-[#f15a24] sm:text-4xl ">
                            Estado De Tus Ordenes
                        </p>

                        {orders && orders.length > 0 ?
                            <div className="flex flex-col flex-wrap content-center">
                                {/* {console.log(fecha)} */}

                                {orders &&
                                    orders.map((el) => (
                                        <UserOrderCard
                                            key={el.id}
                                            id={el.id}
                                            // image={el.image}
                                            nombre={usuario.name}
                                            email={usuario.email}
                                            fecha={el.updatedAt.slice(0, 10)}
                                            estado={el.estado}
                                            products={el.carrito}
                                            precioTotal={el.precioTotal}

                                        />
                                    ))}
                            </div> : <div>
                                <p className="mt-20 font-bold tracking-tight text-gray-900 sm:text-7xl">
                                    No Hay Ordenes
                                </p>
                                <p className="font-bold tracking-tight text-gray-900 sm:text-4xl ">
                                    No has Realizado Ninguna Compra...
                                </p>
                            </div>}

                        <div>
                            <MakeReview />
                        </div>
                    </div> : <Error404 />}
        </div>
    )
}

export default UserOrder;
