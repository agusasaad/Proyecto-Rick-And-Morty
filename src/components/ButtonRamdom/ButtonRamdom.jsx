import { Link } from 'react-router-dom'
import './ButtonRamdom.css'

const ButtonRamdom = (props) => {
    return (
        <div className='ramdom'>
            <button className='button_ramdom' onClick={props.characterRamdom}>Character Ramdom</button>
            <button className='button_allCharacters' ><Link className='Link_character' to='/allCharacter'>All Characters</Link></button>
        </div>
    )
}

export default ButtonRamdom