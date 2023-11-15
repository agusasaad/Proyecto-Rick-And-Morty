import SearchBar from './SearchBar';
import rickAndMortyLogo from '../../../public/img/pxfuel.png';
import './Navbar.css';

const NavBar = (props) => {
    return (
        <>
            <nav className='NavBar'>
                    <img src={rickAndMortyLogo} alt="" />
                <div className='searchbar-container'>
                    <SearchBar onSearch={props.onSearch} />
                </div>
                <ul className="navbar-nav">
                    <li>
                        <button onClick={props.characterRamdom} type="submit" className="buttonInput">Ramdom</button>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavBar