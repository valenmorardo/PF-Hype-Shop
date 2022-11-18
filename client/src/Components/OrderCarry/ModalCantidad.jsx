import { useState } from "react";
import useLocalStorage from "../useLocalStorage/useLocalstorage";

const ModalCantidad = ({ id, title, image, cantidad, externalMaterial, price, setOpenModal, available_quantity, priceFinal, addCarryNewQuantity
}) => {

    let prueba = 1;


    // CANTIDAD DEL ESTADO
    const [cantidadModal, setCantidadModal] = useState(cantidad)

    // FUNCIONES PARA AUMENTAR CANTIDAD
    const handleMoreQuantity = () => {
        setCantidadModal(cantidadModal + 1)
    }

    // FUNCIONES PARA DECREMENTAR CANTIDAD
    const handleLessQuantity = () => {
        setCantidadModal(cantidadModal - 1)
    }

    // PRECIO FINAL UNIDAD
    const priceFinalModal = () => {
        let priceModal = priceFinal - (price * cantidad);
        return (price * cantidadModal) + priceModal
    }

    // GUARDAR EN CARRITO
    const addCarry = (id, cantidad) => {
        addCarryNewQuantity(id, cantidadModal)
        setOpenModal(false)
    }


    const [item, saveItem] = useLocalStorage("SNEAKERS", []);
    const handleExitModal = () => {
        setOpenModal(false)
    }
    return (
        <div className="z-20 bg-[#f8fafc8c] fixed top-0 bottom-0 right-0 left-0 rounded-2xl">
            {/* <p className='font-bold tracking-tight sm:text-5xl mt-6 text-gray-900 '>Cambiar Cantidad</p> */}
            {/* Modal */}
            <div className="flex items-center flex-col bg-white py-7 px-4 w-[850px] min-h-[3/4] mt-8 mx-auto rounded-xl border border-solid border-gray-300">
                <p className='font-bold tracking-tight sm:text-xl mt-0 text-gray-400 px-2'>Aquí podrás Editar la Cantidad de productos que Desees Comprar, Como también veras el Precio Final de todo Tu Carrito.</p>
                <div className="flex justify-between mt-6" >
                    <div className="flex">
                        <div className="overflow-hidden rounded-lg mx-9">
                            <img
                                src={image}
                                alt="imagem Producto"
                            // className="h-auto w-auto object-cover object-center group-hover:opacity-75"
                            />
                        </div>
                        <div className="max-w-md flex-col mx-8 ">

                            <h1 className=" font-bold tracking-tight text-gray-900 sm:text-xl leading-none">{title}</h1>
                            <div className="flex justify-center items-end gap-1 border-b-2 border-gray-300 border-solid  ">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-0">Precio Unidad: </p>
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-3xl mt-1 ">${price}</p>
                            </div>
                            <div className="flex justify-center items-end gap-1 ">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-0">Stock Disponible: </p>
                                <p className="font-bold tracking-tight text-[#f15a24] sm:text-2xl mt-1" >{available_quantity}</p>
                            </div>
                            <div className="flex justify-center items-end gap-1">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-xl mt-0">Cantidad:</p>
                                <p className="font-bold tracking-tight  text-indigo-700 sm:text-2xl mt-1"> {cantidadModal}</p>
                            </div>

                            {/* BOTONES */}
                            <div className="flex justify-center gap-3">
                                {cantidadModal <= 1 ?
                                    <button
                                        disabled={true}
                                        className="mt-4 w-200px flex items-end justify-center rounded-md border border-transparent bg-lime-300 h-8 w-8 text-3xl font-medium text-white "

                                    // onClick={() => handleLessQuantity()}
                                    >
                                        -
                                    </button> : <button
                                        className="mt-4 w-200px flex items-end justify-center rounded-md border border-transparent bg-lime-500 h-8 w-8 text-3xl font-medium text-white hover:bg-lime-400 focus:outline-none  "

                                        onClick={() => handleLessQuantity()}>
                                        -
                                    </button>}
                                {cantidadModal <= available_quantity - 1 ?
                                    <button
                                        className="mt-4 w-200px flex items-end justify-center rounded-md border border-transparent bg-lime-500 h-8 w-8 text-3xl font-medium text-white hover:bg-lime-400 focus:outline-none "

                                        onClick={() => handleMoreQuantity()}>
                                        +
                                    </button> : <button
                                        disabled={true}
                                        className="mt-4 w-200px flex items-end justify-center rounded-md border border-transparent bg-lime-300 h-8 w-8 text-3xl font-medium text-white  "

                                    // onClick={() => handleLessQuantity()}
                                    >
                                        +
                                    </button>}

                            </div>
                        </div>
                    </div >
                </div >
                {/* PRECIO FINAL */}
                <div className="mt-4">
                    <p className='font-bold tracking-tight sm:text-2xl mt-3 text-gray-900 '>Precio Final Total: </p>
                    <p className='font-bold tracking-tight sm:text-2xl mt-3 text-indigo-700'>${priceFinalModal()}</p>
                </div>
                <div className="mt-3 flex gap-4">
                    <button className="mt-4 w-200px items-center justify-center rounded-md border border-transparent bg-red-700	 py-1 px-5 text-base font-medium text-white hover:bg-red-600 focus:outline-none"
                        onClick={() => handleExitModal()}> Cancelar</button>
                    <button className="mt-4 w-200px items-center justify-center rounded-md border border-transparent bg-lime-500	 py-1 px-5 text-base font-medium text-white hover:bg-lime-400 focus:outline-none"
                        onClick={() => addCarry(id, cantidadModal)}>Aceptar</button>
                </div>
            </div>
        </div >
    )
}

export default ModalCantidad;