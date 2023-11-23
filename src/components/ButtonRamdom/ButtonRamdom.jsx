import './ButtonRamdom.css'

const ButtonRamdom = (props) => {
    return (
        <div className='button_ramdom'>
            <button onClick={props.characterRamdom}>Character Ramdom</button>
        </div>
    )
}

export default ButtonRamdom