import { useState } from 'react'
import validation from '../Validation/validation'
import './Form.css'

const Form = (props) => {

    const [error, SetError] = useState({})
    const [userData, SetUserData] = useState({
        email: '',
        password: ''
    })


    const handleChange = (event) => {
        SetUserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        //Validaciones de formulario
        SetError(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        props.login(userData)
    }

    //Verifica si todos los campos de los inputs estan llenos
    const todosCamposLlenos = Object.values(userData).every((valor) => valor !== '')

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >Email</label>
                <input className={error.email && 'warning'} onChange={handleChange} value={userData.email} name='email' placeholder="Email" type='text' />
                <p className='danger'>{error.email}</p>
                <label>Password</label>
                <input className={error.password && 'warning'} onChange={handleChange} value={userData.password} name='password' placeholder='Password' type="password" />
                <button type='submit' disabled={!todosCamposLlenos}>Submit</button>
                <p className='danger'>{error.password}</p>
            </form>
        </>
    )
}

export default Form