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
        <div className='container'>
            <form className='form-class' onSubmit={handleSubmit}>
                <h2 className='title_form'>Login</h2>
                <input id='input_form' className={error.email && 'warning'} onChange={handleChange} value={userData.email} name='email' placeholder="email" type='text' />
                <p className='danger'>{error.email}</p>
                <input id='input_form' className={error.password && 'warning'} onChange={handleChange} value={userData.password} name='password' placeholder='Password' type="password" />
                <p className='danger'>{error.password}</p>
                <button id='input_button'type='submit' disabled={!todosCamposLlenos}>Submit</button>
                
            </form>
        </div>
    )
}

export default Form