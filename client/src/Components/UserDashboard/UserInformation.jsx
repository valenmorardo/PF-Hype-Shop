import React from "react";
import { useAuth0 } from '@auth0/auth0-react';

const UserInformation = () => {
    const { user, isAuthenticated , logout} = useAuth0();
    console.log(user)
    return(
        isAuthenticated && (
            <div>
                <div className="flex flex-col items-center text-left">
                <img className='rounded-t-full rounded-b-full w-28 my-10' src={user.picture} alt={user.name}/>
                <h2 className="font-semibold text-xl">Usuario</h2>
                <h2 className="mb-6 font-medium text-base mt-1">{user.name}</h2>
                <h2 className="font-semibold text-xl">Email</h2>
                <h2 className="mb-10 font-medium text-base  mt-1">{user.email}</h2>
                </div>
                <div className="flex justify-around">
                <a href='/orders'>
                <h2 className="text-white  bg-blue-500 hover:bg-blue-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2">Ir a tus Ordenes</h2>
                </a>
                <a href='/favorites'>
                <h2 className="text-white  bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2">Ir a tus favoritos ❤️</h2>
                </a>
                </div>
                <div>
            <button className="text-red-600 hover:text-red-700 font-medium text-sm text-center my-10  " onClick={() => logout()}>Cerrar sesión</button>
        </div>
            </div>
    )
    )
}

export default UserInformation;