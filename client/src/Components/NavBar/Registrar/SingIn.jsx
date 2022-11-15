import React,{useState} from 'react'

const SingIn = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleEmail = (e) => {
        e.preventDefault()
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }

    const handleSingIn = (e) => {
        e.preventDefault();
        alert(`correo: ${email}  clave: ${password}`)
    }
    return (
        <div>

            <h5>Iniciar Sesion</h5><br/>
            <form>
                <input
                    name='email'
                    label='Email Address'
                    placeholder='Email...'
                    onChange={handleEmail}
                /><br/><br/>
                <input
                    name='password'
                    label='Password'
                    type='password'
                    placeholder='Password...'
                    onChange={handlePassword}
                /><br/><br/>
                <button onClick={(e)=>handleSingIn(e)}>Sign In</button>
            </form>

        </div>
    )
}

export default SingIn