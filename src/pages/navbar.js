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
                    <li><NavLink end to="/" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>HOME</NavLink></li>
                    {/* <li><NavLink to="/experience" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>RESEARCH</NavLink></li> */}
                    <li><NavLink to="/research" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>RESEARCH</NavLink></li>
                    <li><NavLink to="/projects" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>PROJECTS</NavLink></li>
                    <li><NavLink to="/leadership" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>LEADERSHIP</NavLink></li>
                    <li><NavLink to="/aboutme" className={({ isActive }) => (isActive ? 'active' : 'inactive')}>ABOUT ME</NavLink></li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
