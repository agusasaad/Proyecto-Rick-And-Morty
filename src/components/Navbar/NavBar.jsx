import SearchBar from './SearchBar';
import rickAndMortyLogo from '../../../public/img/rick-and-morty-31006.png'
import './Navbar.css';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className='Navbar-nav'>
            {/* <Link to='/' ><img className='img-nav' src={rickAndMortyLogo} alt="" /></Link> */}
                <ul>
                    <li><Link className='NavLink' to='/home'>Home</Link></li>
                    <li><Link className='NavLink' to='/about'>About</Link></li>
                    <li><Link className='NavLink' to='/favorites' >Favorites</Link></li>
                </ul>
                <SearchBar onSearch={props.onSearch} />
            </nav>
            
        </>
    )
}

export default NavBar