import SearchBar from './SearchBar';
import rickAndMortyLogo from '../../../public/img/pxfuel.png';
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className='NavBar'>
                <img src={rickAndMortyLogo} alt="" />
                <div className='searchbar-container'>
                    <SearchBar onSearch={props.onSearch} />
                </div>
                <div className="navbar-nav">
                    <button onClick={props.characterRamdom} type="submit" className="buttonInput">Ramdom</button>
                    <button className="buttonInput">
                        <NavLink style={({ isActive }) => isActive ? { color: 'black' } : { color: 'white' }}
                            to='/home'>Home</NavLink>
                    </button>
                    <button className="buttonInput">
                        <NavLink
                            style={({ isActive }) => isActive ? { color: 'black' } : { color: 'white' }}
                            to='/about'>About</NavLink>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default NavBar