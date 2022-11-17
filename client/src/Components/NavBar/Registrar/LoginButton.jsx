import React from 'react'
import { useAuth0 } from '@auth0/auth0-react';


const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();

    return (
        <div>
            <button className="text-gray-900 bg-white border-gray-900 hover:bg-blue-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0  " onClick={() => loginWithRedirect()}>Log In</button>
        </div>
    )
}

export default LoginButton