import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'
import './AppNavigation.css'

const AppNavigation = (props) => {
    const navbar = useRef();

    const menuClickHandler = () => {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        window.scrollTo(0, 0);
        navbar.current.classList.remove('show');
    }

    return (
        <nav className="navbar navbar-expand-md py-0 bg-black">
            <div className="container">
                {/* <NavLink className="navbar-brand" to="/">Priti Bhunia</NavLink> */}
                <button className="navbar-toggler ms-auto bg-transparent" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="bi bi-list text-white fs-1"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav" ref={navbar}>
                    {/* <div className="me-auto"></div> */}
                    <ul className="navbar-nav nav-fill">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/" activeClassName="active" exact onClick={menuClickHandler}><span>Home</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/about" activeClassName="active" onClick={menuClickHandler}><span>About</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/resume" activeClassName="active" onClick={menuClickHandler}><span>Resume</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/blog" activeClassName="active" onClick={menuClickHandler}><span>Blogs / Projects</span></NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/contact" activeClassName="active" onClick={menuClickHandler}><span>Contact</span></NavLink>
                        </li>
                    </ul>
                </div>
            </div>

        </nav>
    )
}

export default AppNavigation
