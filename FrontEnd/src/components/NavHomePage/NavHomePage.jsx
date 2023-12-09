import React from 'react'
import { Link } from 'react-router-dom'
import './NavHomePage.css'
import logoHomePage from '../../../public/img/logo.png'

const NavHomePage = () => {
    return (
        <>
            <nav className='Navbar-HomePage'>
                <Link className='logo-homepage' to='/' ><img style={{width: '250px', marginTop: '30px'}} src={logoHomePage} alt="" /></Link>
                <ul className="ulHomePage">
                    <li className="liHomePage">
                        <Link className='logo-homepage' to='/login'>Login</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default NavHomePage