import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar justify-content-center navbar-expand-lg bg-body-tertiary">
            <div className="justify-content-center">
                <Link to='/' className="navbar-brand" href="#">
                    <h1 className="logo">Rick and Morty Wiki</h1>
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
                </button>
                <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink to='/' className="nav-link active fs-5">Personagens</NavLink>
                        <NavLink to='/episodios' className="nav-link fs-5">Episodios</NavLink>
                        <NavLink to='/locais' className="nav-link fs-5">Locais</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar