import './Form.css'

const Form = () => {
    return (
        <>
            <form>
                <label >Email</label>
                <input name='email' placeholder="Email" type='text' />
                <label>Password</label>
                <input name='password' placeholder='Password' type="password" />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Form