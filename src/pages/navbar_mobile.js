import React from "react";
import "../style/Navbar.css";
import { NavLink } from "react-router-dom";
import { useEffect, useRef } from "react";

function NavbarMobile() {
    var openMenu = useRef(false);

    useEffect(function () {
        var hamburgerMenu = document.querySelector(".hamburger-menu");
        hamburgerMenu.removeEventListener("click", addMenu);
        hamburgerMenu.addEventListener("click", addMenu);
    }, []);

    function addMenu(event) {
        event.preventDefault();
        openMenu.current = !openMenu.current;
        if (openMenu.current) {
            document.querySelector(".menu-mobile").style.display = "flex";
        } else {
            document.querySelector(".menu-mobile").style.display = "none";
        }
        console.log(openMenu.current);
    }

    return (
        <nav>
            <div className='left'>
                <div className='home-icon'></div>
                <h6>
                    <NavLink className='link' to='/'>
                        JH
                    </NavLink>
                </h6>
            </div>
            <div className='right'>
                <div className='menu'>
                    <img
                        className='hamburger-menu'
                        width='25vh'
                        height='25vh'
                        src='https://img.icons8.com/ios/50/menu--v1.png'
                        alt='menu--v1'
                    />
                    <ul className='menu-mobile'>
                        <li>
                            <NavLink
                                end
                                to='/'
                                className={({ isActive }) =>
                                    isActive ? "active" : "link inactive"
                                }>
                                HOME
                            </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink
                                to='/experience'
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }>
                                EXPERIENCE
                            </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink
                                to='/projects'
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }>
                                PROJECTS
                            </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink
                                to='/leadership'
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }>
                                LEADERSHIP
                            </NavLink>
                        </li>
                        <hr></hr>
                        <li>
                            <NavLink
                                to='/aboutme'
                                className={({ isActive }) =>
                                    isActive ? "active" : "inactive"
                                }>
                                ABOUT ME
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavbarMobile;
