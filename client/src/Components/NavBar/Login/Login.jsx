import React, { useState, useEffect } from 'react'

import GoogleLogin from 'react-google-login';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('')

// desde el front creo un formulario [mail,password]--->dispatch ----> reducer --->?

const handleSubmit = (event)=>{
    event.preventDefault()
console.log("LOGIN...");
}

    const responseGoogle = (response) => {
        console.log(response)
    }

    return (
        <div>
            <h1>inicia Sesión</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={username}
                    name={'Username'}
                    placeholder="ejemplo@gmail.com"
                    onChange={({ target }) => setUsername(target.value)}
                />

                <input
                    type="password"
                    value={password}
                    name={'Password'}
                    placeholder="password"
                    onChange={({ target }) => setPassword(target.value)}
                />
                <button >
                    Login
                </button>
            </form>
            <br></br>


            <GoogleLogin
                clientId="139703111387-c2b9cjbe7iivvup8jhion2r44j2p4dai.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                cookiePolicy={'single_host_origin'}
            />,
        </div>
    )
}

export default Login