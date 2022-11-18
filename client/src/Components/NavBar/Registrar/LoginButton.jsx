import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <button className="text-blue-600 hover:text-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  " onClick={() => loginWithRedirect()}>Iniciar sesión</button>
        </div>
    )
}

export default LoginButton
