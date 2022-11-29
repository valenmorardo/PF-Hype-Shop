import React from "react";
import { Link } from "react-router-dom";
import Index from '../charts_google/Index'
import LightSpeed from 'react-reveal/LightSpeed';



export default function ContactUs() {
    return (
        <>
            <LightSpeed right>

                <Link to='/'>
                    <button
                        type="submit"
                        className="mt-6 ml-6 flex w-3 items-center justify-center rounded-md border border-transparent bg-[#f15a24]  py-2 px-9 text-base font-medium text-white hover:bg-orange-500 focus:outline-none  "
                    >
                        Volver
                    </button>
                </Link>
                <div className="">
                    <div className="md:grid md:grid-cols-3 md:gap-6 min-h-max">
                        <div className="md:col-span-1">
                            <div className="px-4 sm:px-0 mt-8">
                                <h3 className="text-2xl font-medium leading-6 text-gray-900">Contáctanos</h3>
                                <p className="mt-1 text-base text-gray-600">
                                    Mándanos un Mensaje con tu PQRS, tu nombre y email y te Contactaremos lo antes posible.                             </p>
                            </div>
                        </div>
                        <div className="mt-10 md:col-span-2 md:mt-24">
                            <form action="https://formsubmit.co/hypeshopcompany@gmail.com"
                                method="POST">
                                <div className="shadow sm:overflow-hidden sm:rounded-md">
                                    <div className="space-y-6 bg-white px-4 py-5 sm:p-6">
                                        {/* Nombre */}
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Nombre:
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="text"
                                                        name="Nombre"
                                                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Ej: Daniel Perez"
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        {/* Email */}
                                        <div className="grid grid-cols-3 gap-6">
                                            <div className="col-span-3 sm:col-span-2">
                                                <label className="block text-sm font-medium text-gray-700">
                                                    Email:
                                                </label>
                                                <div className="mt-1 flex rounded-md shadow-sm">
                                                    <input
                                                        type="email"
                                                        name="Email"
                                                        className="block w-full flex-1 rounded-none rounded-r-md border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                        placeholder="Ej: DanielPerez@xxx.com"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700">
                                                Mensaje
                                            </label>
                                            <div className="mt-1">
                                                <textarea
                                                    name="Mensaje"
                                                    rows="6"
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                    placeholder="Ej: Hola soy un comprador y he tenido problemas al recibir mis Zapatos, espero poder hablar con quien corresponda. 
                                                 "

                                                />
                                            </div>
                                            {/* <p className="mt-2 text-sm text-gray-500">
                                            Brief description for your profile. URLs are hyperlinked.
                                        </p> */}
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                                        <button
                                            type="submit"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                                        >
                                            Save
                                        </button>
                                        <input type="hidden" name="_captcha" value="false" />
                                        <input
                                            type="hidden"
                                            name="_next"
                                            // ESto se debe cambiar al momento del DEPLOY
                                            value="http://localhost:3000/"
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <Index />
            </LightSpeed>
        </>
    )
}
