import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllReviews } from "../../Redux/actions";

import MakeReview from "../UserDashboard/MakeReview/MakeReview";


const DetailProductBuyCard = ({ title, image, brand, category, colors, gender, cantidad, price, externalMaterial, productId, cerrarModal }) => {

    const dispatch = useDispatch();

    const reviews = useSelector((state) => state.reviews)
    const usuarioActual = useSelector((state) => state.currentUser)

    useEffect(() => {
        dispatch(getAllReviews());
    }, []);

    const validacion = (el) => el.productId === productId && el.userId === usuarioActual.id;



    return (
        <>
            <div className="flex flex-col gap-3 w-[32rem] h-72 justify-center rounded-xl border border-solid border-gray-300 m-6">
                <p className="font-bold tracking-tight text-gray-900 text-xl leading-none">{title}</p>
                <section className="flex">
                    <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg mx-3">
                        <img
                            src={image}
                            alt="imagem Producto"
                        // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                        />
                    </div>
                    <div className="flex">
                        <section className="flex flex-col items-start mx-2">
                            <p className="font-medium text-lg tracking-tight text-gray-900 ">Marca: <b>{brand}</b></p>
                            <p className="font-medium text-lg tracking-tight text-gray-900">Categoria: <b>{category}</b></p>
                            <p className="font-medium text-lg tracking-tight text-gray-900">Genero: <b>{gender}</b></p>
                            {/* <p className="font-medium text-lg tracking-tight text-gray-900">Material Externo: <b>{externalMaterial}</b></p> */}
                        </section>
                        <section className="flex flex-col items-start mx-2">

                            <p className="font-medium text-lg tracking-tight text-gray-900">Color: <b>{colors}</b></p>
                            <p className="font-medium text-lg tracking-tight text-gray-900">Talla: <b className="text-indigo-600 text-2xl">{34}</b></p>
                            <p className="font-medium text-lg tracking-tight text-gray-900">Precio: <b className="text-indigo-600 text-2xl">${price}</b></p>
                            {/* <p>Categoria: <b>{category}</b></p>
                        <p>Genero: <b>{gender}</b></p> */}
                        </section>
                    </div>
                </section>

                <section>
                    <p className="font-bold text-2xl">Cantidad: <b className=" text-[#f15a24] ">{cantidad}</b></p>
                    <p className="font-semibold text-2xl">Precio Total: <b className="font-bold text-3xl text-indigo-600"> ${price * cantidad}</b></p>
                </section>

            </div>

            {usuarioActual && !reviews.some(validacion) ?
                <section className="mt-6">
                    <MakeReview productId={productId} cerrarModal={cerrarModal} />
                </section>
                :

                <></>

            }


        </>

    )
}

export default DetailProductBuyCard;