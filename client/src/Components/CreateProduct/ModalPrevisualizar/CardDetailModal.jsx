import React, { useEffect } from "react";

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';
import { Link } from "react-router-dom";
// import Loading from "../Loading/Loading";

// CARRITO:



const CardDetailModal = ({ pictures, title, price, sizes, available_quantity, brand, gender, condition, age_group, externalMaterial, colors }) => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
        },
    };

    return (
        <>

            <div className="bg-white ">

                <div className="pt-6">

                    {/* Image gallery */}
                    <Carousel infinite={true} responsive={responsive}>

                        {pictures?.map((e) => (
                            <div>
                                <img src={e} alt="i" />
                            </div>
                        ))}

                    </Carousel>
                    {/* Product info */}
                    <div className="mx-auto max-w-2xl px-4 pt-10 pb-16 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pt-16 lg:pb-24">
                        <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
                            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">{title}</h1>
                        </div>
                        {/* {console.log(sneakerDetail)} */}
                        {/* Options */}
                        <div className="mt-4 lg:row-span-3 lg:mt-0">
                            <h2 className="sr-only">Product information</h2>
                            <p className="text-3xl tracking-tight text-gray-900">PRECIO: ${price}</p>

                            {/* Sizes */}
                            <div className="mt-10">
                                <div className="flex items-center justify-between">
                                    {/* {console.log(onAddCarry(sneakerDetail))} */}
                                    <h3 className="text-sm font-medium text-gray-900">TALLA</h3>
                                    {sizes.map(el =>
                                        <p className="text-sm font-medium text-indigo-600 hover:text-indigo-500"> {el}</p>
                                    )}
                                </div>
                                <h3 className="text-xl font-medium text-gray-900 mt-2">Stock Disponible: {available_quantity}</h3>


                            </div>
                            {/* AÑADIR CARRITO */}
                            <button
                                type="submit"
                                disabled={true}
                                // onClick={() => onAddCarry(sneakerDetail)}
                                className="mt-10 flex  w-full items-center justify-center rounded-md border border-transparent bg-lime-500	 py-3 px-8 text-base font-medium text-white hover:bg-lime-400 focus:outline-none  "
                            >
                                Añadir Carrito
                            </button>

                            <button
                                type="submit"
                                disabled={true}
                                // onClick={() => buy(sneakerDetail)}
                                className="mt-10 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 py-3 px-8 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            >
                                Comprar
                            </button>


                            {/* </form> */}
                        </div>

                        <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pt-6 lg:pb-16 lg:pr-8">
                            {/* Description and details */}
                            <div className="mt-10">
                                <h3 className="text-4xl font-semibold text-indigo-600">Detalles:</h3>

                                <div className="mt-4">
                                    <ul className="space-y-2 pl-4 text-sm list-none">

                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Marca: {brand}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Genero: {gender}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Condicion: {condition}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Edad: {age_group}</span>
                                        </li>
                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Material Externo: {externalMaterial}</span>
                                        </li>
                                        <br />
                                        <li className="text-gray-400">
                                            <span className="text-gray-900 text-xl font-medium">Color: {
                                                colors.map(e => <h3>{e.toUpperCase()}</h3>)
                                            }
                                            </span>
                                        </li>
                                        <br />
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CardDetailModal;

