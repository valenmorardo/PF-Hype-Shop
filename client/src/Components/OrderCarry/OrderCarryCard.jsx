import React, { useState } from "react";
import ModalCantidad from "./ModalCantidad";

const OrderCarryCard = ({ id, title, brand, image, cantidad, size, externalMaterial, price, onDeleteCarry, saveItem, available_quantity, priceFinal, addCarryNewQuantity
}) => {

    const [openModal, setOpenModal] = useState(false)

    const talla =
    
        typeof size !== "string"
            ? Object.values(size)
                .find((attr) => attr.name === "Talle")
                .value.slice(0, 2)
            : size;


    // funcion que entre al array con el propio objeto con un modal que sera aparte
    const handleOpenModal = () => {
        setOpenModal(true)
    }
    return (
        // <div className="flex justify-between  bg-white py-7 px-4 w-[890px] h-48 mt-8 rounded-xl border border-solid border=[#e6e8eb] relative " >
        //     <div className="flex ">
        //         <div className="aspect-w-1 aspect-h-1  h-min w-[140px] overflow-hidden rounded-lg">
        //             <img
        //                 src={image}
        //                 alt="imagem Producto"
        //             // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
        //             />
        //         </div>
        //         <div className=" flex w-[28rem] flex-col mx-8 items-center ">
        //             <h1 className=" font-bold tracking-tight text-gray-900 sm:text-lg leading-none">{title}</h1>
        //             <div className="flex justify-center items-center gap-1">
        //                 <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-1">Talla: </p>
        //                 <p className=" font-bold tracking-tight text-indigo-600 sm:text-xl mt-1">{talla}</p>
        //             </div>
        //             <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-3">${price}</p>
        //         </div>
        //     </div >
        //     <div className="mr-10 mt-8">
        //         {/* <p>Modal: {brand}</p> */}
        //         <div className="flex justify-center items-end gap-1">
        //             <p className="font-bold text-2xl">Cantidad: </p>
        //             <p className=" font-bold tracking-tight text-indigo-600 sm:text-2xl mt-1">{cantidad}</p>
        //         </div>
        //         <button className="text-[#f15a24] font-semibold text-xl " onClick={() => handleOpenModal()}>Editar Cantidad</button>
        //         {/* {openModal &&
        //             <div>
        //                 <p>Modalito</p>
        //             </div>
        //         } */}
        //         {openModal &&
        //             <ModalCantidad
        //                 id={id}
        //                 setOpenModal={setOpenModal}
        //                 title={title}
        //                 image={image}
        //                 cantidad={cantidad}
        //                 price={price}
        //                 available_quantity={available_quantity}
        //                 priceFinal={priceFinal}
        //                 addCarryNewQuantity={addCarryNewQuantity}


        //             />}
        //         {/* <p className="">Detalles</p> */}
        //     </div>
        //     <button className="absolute right-2 top-2  flex w-1 items-center justify-center rounded-md border border-transparent bg-indigo-600 py-1 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" onClick={() => onDeleteCarry(id)}>X</button>
        //     {/* <p>{card}</p>
        //     <p>{card}</p>
        //     <p>{card}</p>
        //     <p>{card}</p> */}
        // </div >

<ul className="flex-wrap flex-col divide-y divide-gray-700">
<li className="flex flex-col py-6 sm:flex-row sm:justify-between border-b border-gray-500  my-3">
  <div className="flex w-full space-x-2 sm:space-x-4">
    <img className="flex-shrink-0 object-contain w-20 h-20  rounded outline-none sm:w-32 sm:h-32 " src={image} alt="product" />
    <div className="flex flex-col justify-between w-full pb-4">
      <div className="flex justify-between w-full pb-2 space-x-2">
        <div className="space-y-1">
          <h3 className="text-lg font-semibold leading-snug sm:pr-8">{title}</h3>
          <p className="text-sm font-semibold text-blue-600 text-left">Cantidad: {cantidad}</p>
          <p className="text-sm font-semibold text-blue-600 text-left">Talle: {talla}</p>
          
        </div>
        <div className="text-right">
          <p className="text-lg font-bold text-blue-600 mr-5">${price}</p>
        </div>
      </div>
      <div className="flex text-sm divide-x">
        <button  onClick={() => onDeleteCarry(id)} type="button" className="flex items-center px-2 py-1 pl-0 space-x-1">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-4 h-4 fill-current">
            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
            <rect width="32" height="200" x="168" y="216"></rect>
            <rect width="32" height="200" x="240" y="216"></rect>
            <rect width="32" height="200" x="312" y="216"></rect>
            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
          </svg>
          <span>Eliminar</span>
        </button>
        <button type="button"  className="flex items-center px-2 py-1 space-x-1" onClick={() => handleOpenModal()}>
		<span>Editar Cantidad</span>
		</button>
         {openModal &&
  <div>
      <p>Modalito</p>
  </div>
        }
        {openModal &&
     <ModalCantidad
         id={id}
         setOpenModal={setOpenModal}
         title={title}
         image={image}
         cantidad={cantidad}
         price={price}
         available_quantity={available_quantity}
         priceFinal={priceFinal}
         addCarryNewQuantity={addCarryNewQuantity}
     />}
      </div>
    </div>
  </div>
</li>
</ul>
    )
}

export default OrderCarryCard;