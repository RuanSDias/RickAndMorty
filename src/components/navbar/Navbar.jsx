import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light navbar-light mb-4">
            <div className="container">
                <Link to='/' className="fs-3 ubuntu navbar-brand">
                    Rick and Morty Wiki
                </Link>
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
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
                    <div className="navbar-nav fs-5">
                        <NavLink to='/' className="nav-link {({isActive}) => (isActive ? 'active' : null)}">Personagens</NavLink>
                        <NavLink to='/episodios' className="nav-link">Episódios</NavLink>
                        <NavLink to='/locais' className="nav-link">Locais</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar