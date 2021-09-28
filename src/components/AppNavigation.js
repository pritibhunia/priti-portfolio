import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './AppNavigation.css'

const AppNavigation = (props) => {
   const navbar = useRef();

   const toggleNavbar = () => {
       navbar.current.classList.remove('show');
   }

    return (
        <nav className="navbar navbar-expand-lg navbar-light py-0 bg-black">
            <div className="container">
                {/* <NavLink className="navbar-brand" to="/">Priti Bhunia</NavLink> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbar}>
                    {/* <div className="me-auto"></div> */}
                    <ul className="navbar-nav nav-fill">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active" exact onClick={toggleNavbar}>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active" onClick={toggleNavbar}>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/experience" activeClassName="active" onClick={toggleNavbar}>Experience</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/resume" activeClassName="active" onClick={toggleNavbar}>Resume</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog" activeClassName="active" onClick={toggleNavbar}>Blog</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="active" onClick={toggleNavbar}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default AppNavigation
