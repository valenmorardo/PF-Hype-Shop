import React, { useState } from "react";
import swal from "sweetalert"

const AdminOrdersModal = ({ setOpenModal, id, estado }) => {
    // ESTADO
    const [estadoOrder, setEstadoOrder] = useState(estado)

    const handleCloseModal = () => {
        setOpenModal(false)
    }

    const handleChange = (e) => {
        setEstadoOrder(e.target.value)
    }

    const handleConfirm = (e, estado) => {
        swal({
            title: "Estas Seguro De Cambiar EL Estado?",
            text: "El Comprador Sera Notificado Del Cambio!",
            icon: "warning",
            buttons: true,
            dangerMode: false,
        })
            .then((willDelete) => {
                if (willDelete) {
                    // AQUI SE DEBE MANDAR AL BACK CON UN PUT
                    console.log("Confirmacion")
                    swal("Cambio Realizado", `El Nuevo Estado Es: ${estado} `, {
                        icon: "success",
                    });
                    setOpenModal(false)
                } else {
                    swal("Cambio no Realizado!");
                }
            });

    }
    return (

        <div className="z-20 bg-[#f8fafc8c] fixed top-0 bottom-0 right-0 left-0 rounded-2xl">
            <div className="flex items-center flex-col bg-white py-7 px-4 w-[850px] min-h-[3/4] mt-8 mx-auto rounded-xl border border-solid border-gray-300">
                <p className='font-bold tracking-tight sm:text-xl mt-0 text-gray-400 px-2'><b className="text-[#e00000] text-2xl">Precaucion</b> Todos los Cambios que Realices Aquí serán Notificados automáticamente al Usuario Por Email, Confirma El Estado Con la Empresa Transportadora Antes De Cualquier Cambio.</p>
                <div className="flex justify-between mt-4" >
                    <div className="flex">
                        <div className="max-w-md flex-col mx-8 ">
                            {console.log(estadoOrder)}
                            <button className=" font-bold tracking-tight text-[#f15a24]  sm:text-xl leading-none">Detalle Compra</button>
                            <div className="flex justify-center items-end gap-1 border-b-2 border-gray-300 border-solid  ">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-2xl mt-0">ID Pedido: </p>
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-3xl mt-1 "> {id}</p>
                            </div>
                            {/* <div className="flex justify-center items-end gap-1 ">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-lg mt-0">Stock Disponible: </p>
                                <p className="font-bold tracking-tight text-[#f15a24] sm:text-2xl mt-1" >Stock</p>
                            </div> */}
                            <div className="flex justify-center items-end gap-1">
                                <p className=" font-bold tracking-tight text-gray-900 sm:text-xl mt-0">Estado Actual:</p>
                                <p className="font-bold tracking-tight  text-indigo-700 sm:text-2xl mt-1"> {estado}</p>
                            </div>

                            {/* FORMULARIO */}
                            <div className="flex justify-center gap-3">
                                <form className="">
                                    <fieldset onChange={(e) => handleChange(e)}>
                                        <legend className="contents text-base font-medium text-gray-900">Indica El Nuevo Estado</legend>
                                        <div className=" mt-2 space-y-4">
                                            <div className="flex items-center">
                                                <input type="radio" id="Comprado" name="Estado" value="Comprado" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="Comprado" className="ml-3 block text-sm font-medium text-gray-700">Comprado</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="radio" id="Despachado" name="Estado" value="Despachado" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="Despachado" className="ml-3 block text-sm font-medium text-gray-700">Despachado</label>
                                            </div>
                                            <div className="flex items-center">
                                                <input type="radio" id="Entregado" name="Estado" value="Entregado" className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="Entregado" className="ml-3 block text-sm font-medium text-gray-700">Entregado</label>
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div >
                </div >
                {/* ESTADO FINAL */}
                <div className="mt-0">
                    <p className='font-bold tracking-tight sm:text-2xl mt-3 text-gray-900 '>Nuevo Estado: </p>
                    <p className='font-bold tracking-tight sm:text-2xl mt-3 text-indigo-700'>{estadoOrder}</p>
                </div>
                <div className="mt-3 flex gap-4">
                    <button className="mt-4 w-200px items-center justify-center rounded-md border border-transparent bg-red-700	 py-1 px-5 text-base font-medium text-white hover:bg-red-600 focus:outline-none"
                        onClick={() => handleCloseModal()}> Cancelar</button>
                    <button className="mt-4 w-200px items-center justify-center rounded-md border border-transparent bg-lime-500	 py-1 px-5 text-base font-medium text-white hover:bg-lime-400 focus:outline-none"
                        onClick={(e) => handleConfirm(e, estadoOrder)}
                    >Aceptar</button>
                </div>
            </div>
            {/* <button onClick={() => handleCloseModal()}>Cerrar</button> */}
        </div >

    )
}

export default AdminOrdersModal;