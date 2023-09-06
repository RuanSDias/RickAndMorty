import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar-expand-lg mb-4">
            <div className="row">
                <div className='text-center mt-4 mb-2'>
                    <Link to='/' className="navbar-brand logo col-lg-8 col-12">
                        Rick and Morty Wiki
                    </Link>
                </div>
                <button 
                className="navbar-toggler"
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarNavAltMarkup" 
                aria-controls="navbarNavAltMarkup" 
                aria-expanded="false" 
                aria-label="Toggle navigation"
                >
                    <style jsx = 'true'>
                        {`
                            button[aria-expanded='false'] > .fechar {
                                display: none;
                            }
                            button[aria-expanded='true'] > .abrir {
                                display: none;
                            }
                        `}
                    </style>
                    <i className="fa-solid fa-bars fw-bold text-dark abrir"></i>
                    <i className="fa-solid fa-xmark fw-bold text-dark fechar"></i>
                </button>
                <div className="collapse navbar-collapse justify-content-evenly" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5 gap-5 mt-3 links">
                        <NavLink to='/' 
                            className="per nav-link {({isActive}) => (isActive ? 'active' : null)}">
                            Personagens
                        </NavLink>
                        <NavLink to='/episodios' className="ep nav-link">Episódios</NavLink>
                        <NavLink to='/locais' className="loc nav-link">Locais</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar