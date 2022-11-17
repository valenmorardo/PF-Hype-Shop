import React from "react";

const OrderCarryCard = ({ id, title, brand, image, condicion, externalMaterial, price, onDeleteCarry }) => {
    return (
        <div className="flex justify-between  bg-white py-7 px-4 w-[850px] h-48 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
            <div className="flex">
                <div className="overflow-hidden rounded-lg mx-9">
                    <img
                        src={image}
                        alt="imagem Producto"
                    // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                    />
                </div>
                <div className="max-w-md flex-col mx-8 ">
                    <h1 className=" font-bold tracking-tight text-gray-900 sm:text-lg leading-none">{title}</h1>
                    <p className=" font-bold tracking-tight text-gray-900 sm:text-base mt-3">${price}</p>
                </div>

            </div >
            <div>
                <p>Marca: {brand}</p>
                <p>Condicion: {condicion}</p>
                <p>Material Externo: {externalMaterial}</p>
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