import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LogoutButton = () => {

    const { logout } = useAuth0();

    return (
        <div>
            <button className="text-red-600 hover:text-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0   " onClick={() => logout()}>Cerrar sesion</button>
        </div>
    )
}

export default LogoutButton