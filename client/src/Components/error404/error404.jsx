import React from "react";

import { Link } from "react-router-dom";

export default function Error404() {

    return (
        <div className="flex w-full flex-col items-center justify-center h-screen gap-20 bg-white">
            <div>
                <p className="flex items-center justify-center text-6xl font-bold text-[rgb(141, 141, 141)] duration-200 ease-in tracking-normal hover:scale-[1.1] hover:tracking-[5px] hover:text-black">❌Error 404 Page Not Found!❌</p>
                <p className="flex items-center justify-center mt-3 text-6xl font-bold text-[rgb(141, 141, 141)] duration-300 ease-in tracking-normal hover:scale-[1.1] hover:tracking-wide hover:text-black">Aquí No Encontraras Zapatillas 👟👞👡</p>
            </div>
            <div>
                <Link className="no-underline w-44 h-44 text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-xl px-4 py-2 duration-200 ease-out hover:-scale-100" to="/">
                    <button>Volver Al Inicio</button>
                </Link>
            </div>
        </div >
    )
}