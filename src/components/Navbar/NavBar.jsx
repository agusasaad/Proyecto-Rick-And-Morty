import SearchBar from './SearchBar';
import rickAndMortyLogo from '../../../public/img/rick-and-morty-31006.png'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className='Navbar-nav'>
            {/* <Link to='/' ><img className='img-nav' src={rickAndMortyLogo} alt="" /></Link> */}
                <ul>
                    <li><NavLink className='NavLink' to='/home'>Home</NavLink></li>
                    <li><NavLink className='NavLink' to='/about'>About</NavLink></li>
                    <li><NavLink className='NavLink' to='/favorites' >Favorites</NavLink></li>
                </ul>
                <SearchBar onSearch={props.onSearch} />
            </nav>
            
        </>
    )
}

export default NavBar