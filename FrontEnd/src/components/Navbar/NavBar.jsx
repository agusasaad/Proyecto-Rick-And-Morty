import SearchBar from './SearchBar';
import './Navbar.css';
import { Link } from 'react-router-dom'

const NavBar = (props) => {
    return (
        <>
            <nav className='Navbar-nav'>
            <Link className='logo' to='/' ><span>Rick & Morty </span>| <span style={{color: 'rgb(33, 236, 33)'}}> API</span></Link>
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