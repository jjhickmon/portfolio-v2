import React from "react";
import '../style/Navbar.css';
import { NavLink } from "react-router-dom";

function Navbar() {

    return (
        <nav>
            <div className="left">
                <div className="home-icon"></div>
                <h6><NavLink className='link' to="/">Javon Hickmon</NavLink></h6>
            </div>
            <div className="right">
                <ul>
                    <li><NavLink end to="/"className={({ isActive }) => (isActive ? 'active' : 'link inactive')}>ABOUT ME</NavLink></li>
                    <li><NavLink to="/resume" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>RESUME</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>PROJECTS</NavLink></li>
                    <li><NavLink to="/contact" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>CONTACT</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;